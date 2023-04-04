import { Color } from "../color/types";
import { TagIdError } from "./error";
import { updateLastEditedTime } from "./row";
import StateFactory from "./StateFactory";
import { TableState } from "./types";

export const addNewTag = (
	prevState: TableState,
	cellId: string,
	columnId: string,
	rowId: string,
	markdown: string,
	color: Color,
	canAddMultiple: boolean
) => {
	const { tags, rows } = prevState.model;

	const tagsCopy = [...tags];

	if (!canAddMultiple) {
		const tag = tagsCopy.find((t) => t.cellIds.find((c) => c === cellId));
		//If there was already a tag selected for this cell
		if (tag) {
			const arr = tag.cellIds.filter((c) => c !== cellId);
			tag.cellIds = arr;
		}
	}

	tagsCopy.push(StateFactory.createTag(columnId, cellId, markdown, color));
	return {
		...prevState,
		model: {
			...prevState.model,
			tags: tagsCopy,
			rows: updateLastEditedTime(rows, rowId),
		},
	};
};

export const removeCellFromTag = (
	prevState: TableState,
	cellId: string,
	rowId: string,
	tagId: string
) => {
	const { tags, rows } = prevState.model;

	const tagsCopy = [...tags];
	const tag = tagsCopy.find((t) => t.id === tagId);

	if (!tag) throw new TagIdError(tagId);

	const arr = tag.cellIds.filter((c) => c !== cellId);
	tag.cellIds = arr;

	return {
		...prevState,
		model: {
			...prevState.model,
			tags: tagsCopy,
		},
		rows: updateLastEditedTime(rows, rowId),
	};
};

export const addCellToTag = (
	prevState: TableState,
	cellId: string,
	rowId: string,
	tagId: string,
	canAddMultiple: boolean
): TableState => {
	const { tags, rows } = prevState.model;
	const tagsCopy = [...tags];

	if (!canAddMultiple) {
		const tag = tagsCopy.find((t) => t.cellIds.find((c) => c == cellId));
		if (tag) {
			//If we click on the same cell, then return
			if (tag.id === tagId) return prevState;
			const arr = tag.cellIds.filter((c) => c !== cellId);
			tag.cellIds = arr;
		}
	}

	const tag = tagsCopy.find((t) => t.id === tagId);
	if (!tag) throw new TagIdError(tagId);
	const index = tagsCopy.indexOf(tag);
	tagsCopy[index].cellIds.push(cellId);

	return {
		...prevState,
		model: {
			...prevState.model,
			tags: tagsCopy,
			rows: updateLastEditedTime(rows, rowId),
		},
	};
};

export const updateTagColor = (
	prevState: TableState,
	tagId: string,
	newColor: Color
): TableState => {
	const { tags } = prevState.model;
	const tagsCopy = [...tags];
	const index = tagsCopy.findIndex((t) => t.id === tagId);
	tagsCopy[index].color = newColor;
	return {
		...prevState,
		model: {
			...prevState.model,
			tags: tagsCopy,
		},
	};
};

export const deleteTag = (prevState: TableState, tagId: string): TableState => {
	const { tags } = prevState.model;
	return {
		...prevState,
		model: {
			...prevState.model,
			tags: tags.filter((tag) => tag.id !== tagId),
		},
	};
};
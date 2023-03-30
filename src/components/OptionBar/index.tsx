import { useMemo } from "react";

import { SortDir } from "src/services/sort/types";
import { TableModel } from "src/services/tableState/types";
import Icon from "../Icon";
import { IconType } from "src/services/icon/types";

import { findColorClass } from "src/services/color";
import { useAppSelector } from "src/services/redux/hooks";
import Stack from "../Stack";
import Button from "src/components/Button";

import "./styles.css";

interface SortBubbleProps {
	sortDir: SortDir;
	content: string;
	isDarkMode: boolean;
	onRemoveClick: () => void;
}

const SortBubble = ({
	isDarkMode,
	sortDir,
	content,
	onRemoveClick,
}: SortBubbleProps) => {
	const color = findColorClass(isDarkMode, "blue");
	let className = "NLT__sort-bubble " + color;
	return (
		<div className={className}>
			<Stack spacing="sm">
				{sortDir === SortDir.ASC ? (
					<Icon icon={IconType.ARROW_UPWARD} />
				) : (
					<Icon icon={IconType.ARROW_DOWNWARD} />
				)}
				<span>{content}</span>
				<Button
					icon={<Icon icon={IconType.CLOSE} />}
					onClick={onRemoveClick}
				/>
			</Stack>
		</div>
	);
};

interface SortButtonListProps {
	bubbles: { sortDir: SortDir; content: string; columnId: string }[];
	onRemoveClick: (columnId: string) => void;
}

const SortBubbleList = ({ bubbles, onRemoveClick }: SortButtonListProps) => {
	const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
	return (
		<Stack spacing="sm">
			{bubbles.map((bubble, i) => (
				<SortBubble
					isDarkMode={isDarkMode}
					key={i}
					sortDir={bubble.sortDir}
					content={bubble.content}
					onRemoveClick={() => onRemoveClick(bubble.columnId)}
				/>
			))}
		</Stack>
	);
};

interface Props {
	model: TableModel;
	onSortRemoveClick: (columnId: string) => void;
}
export default function OptionBar({ model, onSortRemoveClick }: Props) {
	const bubbles = useMemo(() => {
		return model.cells
			.filter((c) => c.isHeader)
			.filter((c) => {
				const columnId = c.columnId;
				const column = model.columns.find((c) => c.id == columnId);
				return column.sortDir !== SortDir.NONE;
			})
			.map((c) => {
				const columnId = c.columnId;
				const column = model.columns.find((c) => c.id == columnId);
				return {
					columnId: c.columnId,
					content: c.html,
					sortDir: column.sortDir,
				};
			});
	}, [model]);

	return (
		<div className="NLT__option-bar">
			<SortBubbleList
				bubbles={bubbles}
				onRemoveClick={onSortRemoveClick}
			/>
		</div>
	);
}

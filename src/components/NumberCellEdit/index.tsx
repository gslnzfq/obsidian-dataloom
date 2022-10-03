import React, { useEffect, useRef } from "react";
import { CellType } from "src/services/table/types";
import {
	filterNumberFromContent,
	isValidCellContent,
} from "src/services/table/utils";

import Menu from "../Menu";

import "./styles.css";

interface Props {
	menuId: string;
	isOpen: boolean;
	style: {
		top: string;
		left: string;
		width: string;
		height: string;
		maxWidth?: string;
		minWidth?: string;
	};
	content: string;
	onInputChange: (updatedContent: string) => void;
}

export default function NumberCellEdit({
	menuId,
	isOpen,
	style,
	content,
	onInputChange,
}: Props) {
	const inputRef = useRef<HTMLInputElement>(null);

	function focusInput() {
		//TODO fix
		if (inputRef.current) inputRef.current.focus();
	}

	useEffect(() => {
		focusInput();
	}, []);

	function handleInputChange(value: string) {
		value = value.replace("\n", "");
		return onInputChange(value);
	}

	if (!isValidCellContent(content, CellType.NUMBER))
		content = filterNumberFromContent(content);

	return (
		<Menu id={menuId} isOpen={isOpen} style={style}>
			<input
				className="NLT__number-cell-edit"
				type="number"
				ref={inputRef}
				autoFocus
				value={content}
				onChange={(e) => handleInputChange(e.target.value)}
			/>
		</Menu>
	);
}

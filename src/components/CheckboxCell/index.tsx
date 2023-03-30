import { isValidCellContent } from "src/services/tableState/utils";
import { CellType } from "src/services/tableState/types";

import "./styles.css";

interface Props {
	content: string;
	onCheckboxChange: (value: string) => void;
}

export default function CheckboxCell({ content, onCheckboxChange }: Props) {
	if (!isValidCellContent(content, CellType.CHECKBOX)) content = "[ ]";
	let isChecked = content.includes("x");

	function handleClick() {
		if (isChecked) {
			onCheckboxChange("[ ]");
		} else {
			onCheckboxChange("[x]");
		}
	}

	return (
		<div className="NLT__checkbox-cell">
			<input
				className="task-list-item-checkbox"
				type="checkbox"
				checked={isChecked}
				onChange={() => {}}
				onClick={handleClick}
			/>
		</div>
	);
}

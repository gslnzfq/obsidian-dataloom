import React from "react";

import { useCompare, useInputSelection } from "src/shared/hooks";
import { isValidNumberInput } from "src/shared/validators";
import { MenuCloseRequest } from "src/shared/menu/types";
import { numberInputStyle } from "src/react/table-app/shared-styles";

interface Props {
	menuCloseRequest: MenuCloseRequest | null;
	value: string;
	onChange: (value: string) => void;
	onMenuClose: () => void;
}

export default function NumberCellEdit({
	menuCloseRequest,
	value,
	onChange,
	onMenuClose,
}: Props) {
	const [localValue, setLocalValue] = React.useState(value);
	const inputRef = React.useRef<HTMLInputElement | null>(null);
	const { setPreviousSelectionStart } = useInputSelection(
		inputRef,
		localValue
	);

	const hasCloseRequestTimeChanged = useCompare(
		menuCloseRequest?.requestTime
	);

	React.useEffect(() => {
		if (hasCloseRequestTimeChanged && menuCloseRequest !== null) {
			if (localValue !== value) onChange(localValue);
			onMenuClose();
		}
	}, [
		value,
		localValue,
		hasCloseRequestTimeChanged,
		menuCloseRequest,
		onMenuClose,
		onChange,
	]);

	function handleChange(inputValue: string, setSelectionToLength = false) {
		if (!isValidNumberInput(inputValue)) return;

		//When we press the menu key, an extra character will be added
		//we need to update the selection to be after this character
		//Otherwise keep the selection where it was
		if (inputRef.current) {
			if (setSelectionToLength) {
				setPreviousSelectionStart(inputValue.length);
			} else if (inputRef.current.selectionStart) {
				setPreviousSelectionStart(inputRef.current.selectionStart);
			}
		}

		setLocalValue(inputValue);
	}

	return (
		<div className="NLT__number-cell-edit">
			<input
				autoFocus
				css={numberInputStyle}
				type="text" //We use an input of type text so that the selection is available
				ref={inputRef}
				inputMode="numeric"
				value={localValue}
				onChange={(e) => handleChange(e.target.value)}
				onBlur={(e) => {
					e.target.classList.add("NLT__blur--cell");
				}}
			/>
		</div>
	);
}

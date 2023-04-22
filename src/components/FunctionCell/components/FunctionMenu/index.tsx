import Menu from "src/components/Menu";
import MenuItem from "src/components/MenuItem";
import {
	CellType,
	FunctionType,
	GeneralFunction,
	NumberFunction,
} from "src/services/tableState/types";
import {
	getAriaLabelForGeneralFunction,
	getAriaLabelForNumberFunction,
	getDisplayNameForGeneralFunction,
	getDisplayNameForNumberFunction,
} from "src/services/tableState/utils";

interface Props {
	id: string;
	value: FunctionType;
	cellType: CellType;
	isOpen: boolean;
	top: number;
	left: number;
	onClick: (value: FunctionType) => void;
}
export default function FunctionMenu({
	id,
	value,
	cellType,
	isOpen,
	top,
	left,
	onClick,
}: Props) {
	return (
		<Menu id={id} isOpen={isOpen} top={top} left={left}>
			<div className="NLT__function-menu">
				{Object.values(GeneralFunction).map((type) => (
					<MenuItem
						key={type}
						name={getDisplayNameForGeneralFunction(type)}
						ariaLabel={getAriaLabelForGeneralFunction(type)}
						onClick={() => onClick(type)}
						isSelected={type === value}
					/>
				))}
				{(cellType === CellType.NUMBER ||
					cellType === CellType.CURRENCY) &&
					Object.values(NumberFunction).map((type) => (
						<MenuItem
							key={type}
							ariaLabel={getAriaLabelForNumberFunction(type)}
							name={getDisplayNameForNumberFunction(type)}
							onClick={() => onClick(type)}
							isSelected={type === value}
						/>
					))}
			</div>
		</Menu>
	);
}
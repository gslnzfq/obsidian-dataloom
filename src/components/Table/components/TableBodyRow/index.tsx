import { useTableState } from "src/services/tableState/useTableState";
import { RenderTableBodyRow } from "../../types";
import TableCell from "../TableCell";
import { sortByRowIndex } from "src/services/tableState/sort";
import { SortDir } from "src/services/tableState/types";

interface TableRowProps {
	row: RenderTableBodyRow;
}

export const TableBodyRow = ({ row }: TableRowProps) => {
	const [, setTableState] = useTableState();

	function handleDragStart(e: React.DragEvent) {
		const el = e.target as HTMLElement;
		const rowId = el.getAttr("data-row-id");
		if (!rowId) throw new Error("data-row-id is required for a row");
		e.dataTransfer.setData("text", rowId);
	}

	function handleDrop(e: React.DragEvent) {
		e.preventDefault();

		const draggedId = e.dataTransfer.getData("text");
		const targetId = (e.currentTarget as HTMLElement).getAttr(
			"data-row-id"
		);
		if (!targetId) throw new Error("data-row-id is required for a row");

		setTableState((prevState) => {
			const { rows, columns } = prevState.model;
			const rowsCopy = [...rows];

			const draggedElIndex = rows.findIndex(
				(row) => row.id === draggedId
			);
			const targetElIndex = rows.findIndex((row) => row.id == targetId);

			//1,2,3,4
			//4,2,1,3

			//Move the actual element
			let temp = rowsCopy[targetElIndex];
			rowsCopy[targetElIndex] = rowsCopy[draggedElIndex];
			rowsCopy[draggedElIndex] = temp;

			//Set the current index of all the values to their current positions
			//This will allow us to retain the order of sorted rows once we drag an item
			rowsCopy.forEach((row, index) => {
				row.index = index;
			});

			return {
				...prevState,
				model: {
					...prevState.model,
					rows: rowsCopy,
					columns: columns.map((column) => {
						//If we're sorting, reset the sort
						return {
							...column,
							sortDir: SortDir.NONE,
						};
					}),
				},
			};
		});
	}

	function handleDragOver(e: React.DragEvent) {
		//Alow drop
		e.preventDefault();
	}

	return (
		<tr
			id={row.id}
			data-row-id={row.id}
			className="NLT__tr"
			draggable
			onDrop={handleDrop}
			onDragStart={handleDragStart}
			onDragOver={handleDragOver}
			onMouseDown={(e) => {
				const el = e.target as HTMLElement;
				//If we're not dragging on the row menu button, prevent drag and drop
				if (!el.closest(`.NLT__row-menu-button`)) e.preventDefault();
			}}
		>
			{row.cells.map((cell) => (
				<TableCell key={cell.id} content={cell.content} />
			))}
		</tr>
	);
};

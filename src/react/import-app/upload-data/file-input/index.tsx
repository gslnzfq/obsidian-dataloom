import React from "react";
import Stack from "../../../shared/stack";
import Text from "../../../shared/text";

import { DataType } from "../../types";
import { getAcceptForDataType } from "../../utils";

import "./styles.css";
import Switch from "src/react/shared/switch";

interface Props {
	hasHeadersRow: boolean;
	fileName: string | null;
	dataType: DataType;
	onDataChange: (rawData: string, fileName: string) => void;
	onHeadersRowToggle: () => void;
}

export default function FileInput({
	hasHeadersRow,
	fileName,
	dataType,
	onDataChange,
	onHeadersRowToggle,
}: Props) {
	function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0] ?? null;
		if (!file) return;

		const reader = new FileReader();

		reader.onload = (e) => {
			const rawData = (e.target?.result as string) ?? "";
			onDataChange(rawData, file.name);
		};

		reader.readAsText(file);
	}
	const accept = getAcceptForDataType(dataType);
	return (
		<div className="dataloom-file-input">
			<Stack spacing="2xl">
				<Stack>
					<Text value={fileName ?? "没有选中的文件"} />
					<input
						type="file"
						accept={accept}
						onChange={handleUpload}
					/>
				</Stack>
				{accept === ".csv" && (
					<Stack spacing="sm">
						<label htmlFor="has-headers">
							第一行包含标题
						</label>
						<Switch
							id="has-headers"
							value={hasHeadersRow}
							onToggle={onHeadersRowToggle}
						/>
					</Stack>
				)}
			</Stack>
		</div>
	);
}

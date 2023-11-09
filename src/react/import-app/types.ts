export enum StepType {
	DATA_TYPE,
	DATA_SOURCE,
	UPLOAD_DATA,
	MATCH_COLUMNS,
}

export enum DataType {
	UNSELECTED = "请选择",
	CSV = "CSV",
	MARKDOWN = "Markdown",
}

export enum DataSource {
	UNSELECTED = "请选择",
	FILE = "文件",
	PASTE = "剪切板",
}

export interface ColumnMatch {
	//The index of the column in the imported data
	importColumnIndex: number;
	//The column id of the matching column in the existing state
	//A null value means that the column is new
	columnId: string;
}

export type ImportData = string[][];

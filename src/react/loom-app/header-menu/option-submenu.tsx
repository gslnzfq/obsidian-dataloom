import Submenu from "../../shared/submenu";

import {
	AspectRatio,
	CellType,
	CurrencyType,
	DateFormat,
	DateFormatSeparator,
	NumberFormat,
	PaddingSize,
} from "src/shared/loom-state/types/loom-state";
import Stack from "src/react/shared/stack";
import Padding from "src/react/shared/padding";
import MenuItem from "src/react/shared/menu-item";
import { SubmenuType } from "./types";
import {
	getDisplayNameForCurrencyType,
	getDisplayNameForDateFormat,
	getDisplayNameForDateFormatSeparator,
} from "src/shared/loom-state/type-display-names";

interface Props {
	title: string;
	hour12: boolean;
	currencyType: CurrencyType;
	numberFormat: NumberFormat;
	numberPrefix: string;
	numberSuffix: string;
	numberSeparator: string;
	dateFormatSeparator: DateFormatSeparator;
	type: CellType;
	dateFormat: DateFormat;
	verticalPadding: PaddingSize;
	horizontalPadding: PaddingSize;
	aspectRatio: AspectRatio;
	onBackClick: () => void;
	onSubmenuChange: (value: SubmenuType) => void;
}

export default function OptionSubmenu({
	type,
	hour12,
	currencyType,
	numberFormat,
	numberPrefix,
	numberSuffix,
	numberSeparator,
	aspectRatio,
	dateFormatSeparator,
	verticalPadding,
	horizontalPadding,
	title,
	dateFormat,
	onBackClick,
	onSubmenuChange,
}: Props) {
	const numberFormatDisplayName =
		numberFormat === NumberFormat.NUMBER
			? "Number"
			: getDisplayNameForCurrencyType(currencyType);

	return (
		<Submenu title={title} onBackClick={onBackClick}>
			<Padding pt="sm" pb="lg">
				<Stack spacing="sm">
					{type === CellType.EMBED && (
						<MenuItem
							name="宽高比"
							value={aspectRatio}
							onClick={() =>
								onSubmenuChange(SubmenuType.ASPECT_RATIO)
							}
						/>
					)}
					{type === CellType.EMBED && (
						<MenuItem
							name="水平内边距"
							value={horizontalPadding}
							onClick={() =>
								onSubmenuChange(SubmenuType.HORIZONTAL_PADDING)
							}
						/>
					)}
					{type === CellType.EMBED && (
						<MenuItem
							name="垂直内边距"
							value={verticalPadding}
							onClick={() =>
								onSubmenuChange(SubmenuType.VERTICAL_PADDING)
							}
						/>
					)}
					{type === CellType.NUMBER && (
						<MenuItem
							name="数字格式"
							value={numberFormatDisplayName}
							onClick={() =>
								onSubmenuChange(SubmenuType.CURRENCY)
							}
						/>
					)}
					{type === CellType.NUMBER &&
						numberFormat == NumberFormat.NUMBER && (
							<MenuItem
								name="前缀"
								value={numberPrefix}
								onClick={() =>
									onSubmenuChange(
										SubmenuType.TEXT_INPUT_NUMBER_PREFIX
									)
								}
							/>
						)}
					{type === CellType.NUMBER &&
						numberFormat == NumberFormat.NUMBER && (
							<MenuItem
								name="后缀"
								value={numberSuffix}
								onClick={() =>
									onSubmenuChange(
										SubmenuType.TEXT_INPUT_NUMBER_SUFFIX
									)
								}
							/>
						)}
					{type === CellType.NUMBER &&
						numberFormat == NumberFormat.NUMBER && (
							<MenuItem
								name="分隔符"
								value={numberSeparator}
								onClick={() =>
									onSubmenuChange(
										SubmenuType.TEXT_INPUT_NUMBER_SEPARATOR
									)
								}
							/>
						)}
					{(type === CellType.CREATION_TIME ||
						type === CellType.LAST_EDITED_TIME) && (
						<>
							<MenuItem
								name="日期格式"
								value={getDisplayNameForDateFormat(dateFormat)}
								onClick={() =>
									onSubmenuChange(SubmenuType.DATE_FORMAT)
								}
							/>
							<MenuItem
								name="日期分隔符"
								value={getDisplayNameForDateFormatSeparator(
									dateFormatSeparator
								)}
								onClick={() =>
									onSubmenuChange(
										SubmenuType.DATE_FORMAT_SEPARATOR
									)
								}
							/>
							<MenuItem
								name="时间格式"
								value={hour12 ? "12小时制" : "24小时制"}
								onClick={() =>
									onSubmenuChange(SubmenuType.TIME_FORMAT)
								}
							/>
						</>
					)}
				</Stack>
			</Padding>
		</Submenu>
	);
}

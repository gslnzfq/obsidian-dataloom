import React from "react";

import Stack from "../shared/stack";
import Text from "../shared/text";
import Padding from "../shared/padding";
import Switch from "../shared/switch";
import Select from "../shared/select";

import {
	DateFormat,
	DateFormatSeparator,
} from "src/shared/loom-state/types/loom-state";
import { getDisplayNameForDateFormat } from "src/shared/loom-state/type-display-names";
import { dateTimeToDateString } from "src/shared/date/date-time-conversion";

interface Props {
	hasDateColumnMatch: boolean;
	dateFormat: DateFormat | null;
	dateFormatSeparator: DateFormatSeparator | null;
	includeTime: boolean;
	onDateFormatChange: (value: DateFormat | null) => void;
	onDateFormatSeparatorChange: (value: DateFormatSeparator | null) => void;
	onIncludeTimeToggle: (value: boolean) => void;
}

export default function FinalizeImport({
	hasDateColumnMatch,
	dateFormat,
	dateFormatSeparator,
	includeTime,
	onDateFormatChange,
	onDateFormatSeparatorChange,
	onIncludeTimeToggle,
}: Props) {
	const dateFormatId = React.useId();
	const dateFormatSeparatorId = React.useId();
	const includeTimeId = React.useId();

	if (!hasDateColumnMatch) return <Text value="Everything looks good!" />;

	let expectedDateFormat = "Unknown";
	if (dateFormat && dateFormatSeparator) {
		const EXAMPLE_DATE_TIME = "2020-12-31T23:00:00";
		expectedDateFormat = dateTimeToDateString(
			EXAMPLE_DATE_TIME,
			dateFormat,
			dateFormatSeparator,
			{
				includeTime,
			}
		);
	}
	return (
		<div>
			{hasDateColumnMatch && (
				<>
					<Stack spacing="xl">
						<Stack spacing="sm">
							<Text
								size="md"
								variant="semibold"
								value="Date format"
							/>
							<Padding pr="md">
								<Text
									shouldWrap
									value="You have matched one of your import columns to an existing date column. Please specify the date format of the import column."
								/>
							</Padding>
						</Stack>
						<Stack spacing="sm">
							<label htmlFor={dateFormatId}>日期格式</label>
							<Select
								id={dateFormatId}
								value={dateFormat ?? ""}
								onChange={(value) =>
									onDateFormatChange(
										(value as DateFormat) || null
									)
								}
							>
								<option value="">请选择</option>
								{Object.values(DateFormat).map((format) => (
									<option key={format} value={format}>
										{getDisplayNameForDateFormat(format)}
									</option>
								))}
							</Select>
						</Stack>
						<Stack spacing="sm">
							<label htmlFor={dateFormatSeparatorId}>
								日期分隔符
							</label>
							<Select
								id={dateFormatSeparatorId}
								value={dateFormatSeparator ?? ""}
								onChange={(value) =>
									onDateFormatSeparatorChange(
										(value as DateFormatSeparator) || null
									)
								}
							>
								<option value="">请选择</option>
								{Object.values(DateFormatSeparator).map(
									(format) => (
										<option key={format} value={format}>
											{format}
										</option>
									)
								)}
							</Select>
						</Stack>
						<Stack spacing="sm">
							<label htmlFor={includeTimeId}>包含时间</label>
							<Switch
								id={includeTimeId}
								value={includeTime}
								onToggle={onIncludeTimeToggle}
							/>
						</Stack>
						<Stack spacing="sm">
							<label>预期日期格式</label>
							<Text
								variant="semibold"
								size="sm"
								value={expectedDateFormat}
							/>
						</Stack>
						<Padding pr="md">
							<Text
								shouldWrap
								value="If a value in your column does not match this format, its table cell after import will be empty."
							/>
						</Padding>
					</Stack>
				</>
			)}
		</div>
	);
}

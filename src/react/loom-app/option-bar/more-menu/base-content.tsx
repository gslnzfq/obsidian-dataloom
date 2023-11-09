import Padding from "src/react/shared/padding";
import MenuItem from "src/react/shared/menu-item";
import ExportModal from "src/obsidian/modal/export-modal";
import { useAppMount } from "../../app-mount-provider";
import { isSmallScreenSize } from "src/shared/render/utils";
import ImportModal from "src/obsidian/modal/import-modal";
import { useLoomState } from "../../loom-state-provider";

interface Props {
	onClose: () => void;
	onSettingsClick: () => void;
	onToggleColumnClick: () => void;
	onFilterClick: () => void;
	onSourcesClick: () => void;
}

export default function BaseContent({
	onToggleColumnClick,
	onFilterClick,
	onSettingsClick,
	onSourcesClick,
	onClose,
}: Props) {
	const { app, loomFile } = useAppMount();
	const { loomState } = useLoomState();

	const isSmallScreen = isSmallScreenSize();
	return (
		<Padding p="sm">
			{isSmallScreen && (
				<MenuItem
					lucideId="filter"
					name="数据源"
					onClick={onSourcesClick}
				/>
			)}
			{isSmallScreen && (
				<MenuItem
					lucideId="filter"
					name="筛选"
					onClick={onFilterClick}
				/>
			)}
			<MenuItem
				lucideId="eye-off"
				name="切换列"
				onClick={onToggleColumnClick}
			/>
			<MenuItem
				lucideId="import"
				name="导入"
				onClick={() => {
					onClose();
					new ImportModal(app, loomFile, loomState).open();
				}}
			/>
			<MenuItem
				lucideId="download"
				name="导出"
				onClick={() => {
					onClose();
					new ExportModal(app, loomFile, loomState).open();
				}}
			/>
			<MenuItem
				lucideId="wrench"
				name="设置"
				onClick={onSettingsClick}
			/>
		</Padding>
	);
}

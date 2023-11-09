import MenuItem from "src/react/shared/menu-item";
import Submenu from "../../shared/submenu";

interface Props {
	title: string;
	value: boolean;
	onValueClick: (value: boolean) => void;
	onBackClick: () => void;
}

export default function TimeFormatSubmenu({
	title,
	value,
	onValueClick,
	onBackClick,
}: Props) {
	return (
		<Submenu title={title} onBackClick={onBackClick}>
			<MenuItem
				name="12小时制"
				onClick={() => onValueClick(true)}
				isSelected={value === true}
			/>
			<MenuItem
				name="24小时制"
				onClick={() => onValueClick(false)}
				isSelected={value === false}
			/>
		</Submenu>
	);
}

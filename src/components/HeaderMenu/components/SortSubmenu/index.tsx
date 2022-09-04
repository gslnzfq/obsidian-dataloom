import React from "react";
import { SortDir } from "src/services/sort/types";

import { SORT_MENU_ITEM } from "../../constants";

import MenuItem from "../MenuItem";
import Submenu from "../Submenu";

interface Props {
	title: string;
	headerSortDir: SortDir;
	onSortClick: (sortDir: SortDir) => void;
	onBackClick: () => void;
}

export default function SortSubmenu({
	title,
	headerSortDir,
	onSortClick,
	onBackClick,
}: Props) {
	return (
		<Submenu title={title} onBackClick={onBackClick}>
			<ul className="NLT__header-menu-ul">
				{Object.values(SORT_MENU_ITEM).map((item) => (
					<MenuItem
						key={item.name}
						icon={item.icon && item.icon}
						content={`${item.content}`}
						onClick={() => onSortClick(item.name)}
						selected={headerSortDir === item.name}
					/>
				))}
			</ul>
		</Submenu>
	);
}

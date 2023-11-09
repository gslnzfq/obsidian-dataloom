import Button from "src/react/shared/button";
import Icon from "src/react/shared/icon";
import Stack from "src/react/shared/stack";
import Input from "src/react/shared/input";

import { useLoomState } from "src/react/loom-app/loom-state-provider";

export default function SearchBar() {
	const { searchText, setSearchText, isSearchBarVisible, toggleSearchBar } =
		useLoomState();

	return (
		<div className="dataloom-search-bar">
			<Stack spacing="lg" isHorizontal>
				{isSearchBarVisible && (
					<Input
						placeholder="输入关键字搜索..."
						value={searchText}
						onChange={(value) => setSearchText(value)}
					/>
				)}
				<Button
					icon={<Icon lucideId="search" />}
					ariaLabel="搜索"
					onClick={() => toggleSearchBar()}
				/>
			</Stack>
		</div>
	);
}

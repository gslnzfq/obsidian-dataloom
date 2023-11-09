import Bubble from "src/react/shared/bubble";

interface Props {
	numActive: number;
}

export default function ActiveFilterBubble({ numActive }: Props) {
	if (numActive === 0) return <></>;

	const value = `${numActive}个筛选条件`;
	return (
		<div className="dataloom-active-filter-bubble">
			<Bubble value={value} />
		</div>
	);
}

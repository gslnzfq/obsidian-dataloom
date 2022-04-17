import React from "react";

import parse from "html-react-parser";
import {
	hasLink,
	hasSquareBrackets,
	stripSquareBrackets,
	toFileLink,
} from "src/app/services/utils";
interface Props {
	content: string;
}

export default function TextCell({ content }: Props) {
	if (hasSquareBrackets(content)) {
		content = stripSquareBrackets(content);
		content = toFileLink(content);
	} else if (hasLink(content)) {
	}
	return <p className="NLT__p">{parse(content)}</p>;
}

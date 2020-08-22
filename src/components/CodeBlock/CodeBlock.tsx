import React, { useMemo, forwardRef, MutableRefObject } from "react";

import "./CodeBlock.scss";

import { CodeBlockProps } from "./CodeBlockProps";

import highlightjs from "highlight.js";

import { useClassNames } from "../../hooks";

const CodeBlock = forwardRef(
	(props: CodeBlockProps, ref: MutableRefObject<HTMLPreElement>) => {
		const classNames = useClassNames("CodeBlock", props.className);

		const languageClassName = useMemo(() => {
			if (typeof props.language === "string") {
				return props.language;
			}

			return "plaintext";
		}, [props.language]);

		const content = useMemo(
			function CodeBlockHighlightedContent() {
				if (typeof props.content === "string") {
					return highlightjs.highlight(languageClassName, props.content.trim()).value;
				}

				return "";
			},
			[props.content, languageClassName]
		);

		const getLines = useMemo(
			() =>
				function CodeBlockLines() {
					const length = props.content!.trim().split("\n").length;

					return (
						<div className="CodeBlockLines">
							{Array.from({ length }).map((_: any, index: number) => {
								return <span key={index}>{index + 1}</span>;
							})}
						</div>
					);
				},
			[props.content]
		);

		return (
			<pre
				ref={ref}
				id={props.id}
				data-testid={props.testid}
				className={classNames}
				style={props.style}
			>
				{props.showLines && typeof props.content === "string"
					? getLines()
					: undefined}
				<code
					className={languageClassName}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</pre>
		);
	}
);

CodeBlock.defaultProps = {
	language: "plaintext",
};

CodeBlock.displayName = "CodeBlock";

export default CodeBlock;

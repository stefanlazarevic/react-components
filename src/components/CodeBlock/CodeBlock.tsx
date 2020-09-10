import React, { useMemo, forwardRef, MutableRefObject, useCallback } from "react";

import "./CodeBlock.scss";

import { CodeBlockProps } from "./CodeBlockProps";

import highlightjs from "highlight.js";

import { concatenate } from "../../utils";
import { IconButton } from "../IconButton";
import { ClipboardIcon } from "../Icon";

const CodeBlock = forwardRef(
	(props: CodeBlockProps, ref: MutableRefObject<HTMLDivElement>) => {
		const classNames = concatenate("CodeBlock", props.className);

		const languageClassName = useMemo(() => {
			if (typeof props.language === "string") {
				return props.language;
			}

			return "plaintext";
		}, [props.language]);

		const content = useMemo(
			function CodeBlockHighlightedContent() {
				if (typeof props.content === "string") {
					if (highlightjs.getLanguage(languageClassName)) {
						return highlightjs.highlight(languageClassName, props.content.trim()).value;
					}

					return props.content.trim();
				}

				return "";
			},
			[props.content, languageClassName]
		);

		const copyToClipboard = useCallback(async () => {
			if (!navigator.clipboard) {
				return;
			}

			 try {
				const text = props.content!.trim();
				await navigator.clipboard.writeText(text);
			} catch (error) {
				console.error("Copy to clipboard error:", error);
			}
		}, [props.content]);

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
			<div 
				ref={ref}
				id={props.id}
				data-testid={props.testid}
				className={classNames}
				style={props.style}
			>
				<pre>
					{props.showLines && typeof props.content === "string"
						? getLines()
						: undefined}
					<code
						className={languageClassName}
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				</pre>
				<div className="CodeBlockFooter">
					<IconButton onClick={copyToClipboard} title="Copy to clipboard">
						<ClipboardIcon size={18} />
					</IconButton>
				</div>
			</div>
		);
	}
);

CodeBlock.defaultProps = {
	language: "plaintext",
};

CodeBlock.displayName = "CodeBlock";

export default CodeBlock;

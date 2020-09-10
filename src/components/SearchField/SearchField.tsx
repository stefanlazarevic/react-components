import React, { forwardRef, MutableRefObject } from "react";

import "./SearchField.scss";

import { IconButton } from "../IconButton";
import { SearchIcon } from "../Icon";
import { concatenate } from "../../utils";

const SearchField = forwardRef(
	(props: any, ref: MutableRefObject<HTMLDivElement>) => {
		const className = concatenate("SearchField", props.className);

		return (
			<div
				ref={ref}
				data-testid={props.testid}
				className={className}
				style={props.style}
				data-invalid={props.invalid}
			>
				<input
					id={props.id}
					name={props.name}
					placeholder={props.placeholder}
					type={props.type}
					aria-invalid={props.invalid}
					value={props.value}
				/>
				<IconButton label="Perform search">
					<SearchIcon size={22} />
				</IconButton>
			</div>
		);
	}
);

SearchField.defaultProps = {
	type: "search"
}

SearchField.displayName = "SearchField";

export default SearchField;
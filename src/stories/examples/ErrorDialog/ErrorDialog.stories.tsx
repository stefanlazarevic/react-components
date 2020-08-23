import React from "react";

import "./ErrorDialog.scss";

import {
	Dialog,
	Heading,
	CodeBlock,
	DialogHeader,
	Paragraph,
} from "../../../components";

const errorMessage = `
Error: Internal Server Error
    at K (http://dev.domain.com/js/app/Component:1:6849467)
    at Module.<anonymous> (http://dev.domain.com/js/app/Component:1:6871519)
    at http://dev.domain.com/js/app/Component:1:6866262
    at Object.next (http://dev.domain.com/js/app/Component:1:6866367)
    at a (http://dev.domain.com/js/app/Component:1:6865107)
`;

export default {
    title: 'Example/ErrorDialog'
}

export const Example = () => {
    return (
        <Dialog className="ErrorDialog">
            <DialogHeader content="Application crash" />
            <Heading level={5} content="Internal server error" className="error-text" />
            <Paragraph content="For further assistance, please contact your Project Manager." />
            <CodeBlock content={errorMessage} />
        </Dialog>
    )
}
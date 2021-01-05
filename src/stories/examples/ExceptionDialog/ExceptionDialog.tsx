import React, { useMemo, memo } from "react";

import "./ExceptionDialog.scss";

import { Dialog, DialogHeader, Heading, Paragraph } from "../../../components";

import CodeBlockAccordion from './CodeBlockAccordion/CodeBlockAccordion';

export default function ExceptionDialog() {
  const errorMessage = `
    Error: Internal Server Error
        at K (http://dev.domain.com/js/app/Component:1:6849467)
        at Module.<anonymous> (http://dev.domain.com/js/app/Component:1:6871519)
        at http://dev.domain.com/js/app/Component:1:6866262
        at Object.next (http://dev.domain.com/js/app/Component:1:6866367)
        at a (http://dev.domain.com/js/app/Component:1:6865107)
    `;

  const LocalHeading = useMemo(() => memo((props: any) => <Heading {...props} />), []);

  const LocalDialogHeader = useMemo(() => memo((props: any) => <DialogHeader {...props} />), []);

  const LocalParagraph = useMemo(() => memo((props: any) => <Paragraph {...props} />), []);
    
	return (
		<Dialog className="ExceptionDialog">
			<LocalDialogHeader content="Application crash" />
			<LocalHeading
				level={5}
				content="Internal server error"
				className="error-text"
			/>
			<LocalParagraph content="For further assistance, please contact your Project Manager." />
			<CodeBlockAccordion errorMessage={errorMessage} />
		</Dialog>
	);
}
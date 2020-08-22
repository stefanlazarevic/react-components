import React from "react";
import { CodeBlock } from "./index";

export default {
	title: "CodeBlock",
	component: CodeBlock,
};

const content = `
  import {CodeBlock} from '@stefanlazarevic/react-components';
`;

export const Default = (args: any) => <CodeBlock {...args} />;
Default.args = { content };

export const Numerated = (args: any) => <CodeBlock {...args} />;
Numerated.args = { showLines: true, content };

export const Highlighted = (args: any) => <CodeBlock {...args} />;
Highlighted.args = { showLines: true, content, language: "js" };

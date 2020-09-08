import React from "react";

import "./Navbar.scss";

import {
	Menu,
	MenuItem,
	SubMenu,
	ChevronDownIcon,
	ChevronRightIcon,
} from "../../../components";


function Dropdown(props: any) {
	return (
		<div style={{display: 'flex', width: '100%', alignItems: 'center'}}>
			<span style={{flex: 1}}>{props.text}</span>
			<ChevronDownIcon size={19} />
		</div>
	)
}

function DropRight(props: any) {
	return (
		<div style={{display: 'flex', width: '100%', alignItems: 'center'}}>
			<span style={{flex: 1}}>{props.text}</span>
			<ChevronRightIcon size={19} />
		</div>
	)
}

export default function Navbar() {
	return (
		<nav className="Navbar">
			<Menu orientation="horizontal">
				<MenuItem>Dashboard</MenuItem>
				<SubMenu content={<Dropdown text="Options" />}>
					<SubMenu content={<DropRight text="File" />}>
						<MenuItem>Import File</MenuItem>
						<SubMenu content={<DropRight text="Export" />}>
							<MenuItem>DFXP</MenuItem>
							<MenuItem>PDF</MenuItem>
							<MenuItem>PDF</MenuItem>
						</SubMenu>
					</SubMenu>
					<SubMenu content={<DropRight text="Edit" />}></SubMenu>
					<SubMenu content={<DropRight text="Tools" />}></SubMenu>
					<SubMenu content={<DropRight text="Convert" />}></SubMenu>
					<SubMenu content={<DropRight text="Settings" />}></SubMenu>
					<SubMenu content={<DropRight text="Editor flags" />}></SubMenu>
					<MenuItem onClick={() => alert('Hot keys')}>Hot keys</MenuItem>
				</SubMenu>
				<MenuItem onClick={() => alert('Notes')}>Notes</MenuItem>
				<MenuItem onClick={() => alert('Guidelines')}>Guidelines</MenuItem>
				<MenuItem disabled={true}>Save</MenuItem>
				<MenuItem disabled={true}>Deliver</MenuItem>
			</Menu>
		</nav>
	);
}
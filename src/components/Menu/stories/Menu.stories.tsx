import React from 'react';

import Menu from '../Menu';
import { MenuList, MenuItem, SubMenu } from '../components';
import { CopyIcon } from '../../Icon';

export default {
   title: 'Menu',
   component: Menu
}

export const Default = (args: any) => (
   <Menu {...args}>
      <MenuList>
         <MenuItem>Copy</MenuItem>
         <MenuItem>Cut</MenuItem>
         <MenuItem>Paste</MenuItem>
      </MenuList>
   </Menu>
);

export const WithIcons = (args: any) => (
   <Menu {...args}>
      <MenuList>
         <MenuItem><CopyIcon size={18} />&nbsp;Copy</MenuItem>
         <MenuItem>Cut</MenuItem>
         <MenuItem>Paste</MenuItem>
      </MenuList>
   </Menu>
);

export const Horizontal = (args: any) => (
   <Menu {...args} orientation="horizontal" role="menubar">
      <MenuList>
         <MenuItem>Dashboard</MenuItem>
         <MenuItem>Activity</MenuItem>
         <MenuItem>Settings</MenuItem>
      </MenuList>
   </Menu>
);

export const WithSubMenu = (args: any) => (
   <Menu {...args} orientation="horizontal">
      <MenuList>
         <MenuItem>Back</MenuItem>
         <MenuItem>Forward</MenuItem>
         <MenuItem>Refresh</MenuItem>
         <SubMenu>
            <MenuItem>Deluxe</MenuItem>
            <MenuItem>Programming</MenuItem>
            <SubMenu>
               <MenuItem>Javascript</MenuItem>
               <MenuItem>HTML</MenuItem>
               <MenuItem>CSS</MenuItem>
            </SubMenu>
         </SubMenu>
      </MenuList>
   </Menu>
);
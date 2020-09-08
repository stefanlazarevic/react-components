import React from "react";
import { Tooltip } from ".";

export default {
	title: "Tooltip",
	component: Tooltip,
};

export const Positions = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td></td>
          <td>
            <Tooltip content="Test" placement="top-left">
              <span>
                Top-Left
              </span>
            </Tooltip>
          </td>
          <td>
            <Tooltip content="Test" placement="top">
              <span>
                Top
              </span>
            </Tooltip>
          </td>
          <td>
            <Tooltip content="Test" placement="top-right">
              <span>
                Top-Right
              </span>
            </Tooltip>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Tooltip content="Test" placement="left-top">
              <span>Left-Top</span>
            </Tooltip>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Tooltip content="Test" placement="right-top">
              <span>Right-Top</span>
            </Tooltip>
          </td>
        </tr>
        <tr>
          <td>
            <Tooltip content="Test" placement="left">
              <span>Left</span>
            </Tooltip>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Tooltip content="Test" placement="right">
              <span>Right</span>
            </Tooltip>
          </td>
        </tr>
        <tr>
          <td>
            <Tooltip content="Test" placement="left-bottom">
              <span>Left-Bottom</span>
            </Tooltip>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Tooltip content="Test" placement="right-bottom">
              <span>Right-Bottom</span>
            </Tooltip>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <Tooltip content="Test" placement="bottom-left">
              <span>Bottom-Left</span>
            </Tooltip>
          </td>
          <td>
            <Tooltip content="Test" placement="bottom">
              <span>Bottom</span>
            </Tooltip>
          </td>
          <td>
            <Tooltip content="Test" placement="bottom-right">
              <span>Bottom-Right</span>
            </Tooltip>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
}
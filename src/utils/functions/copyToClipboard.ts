import { isMobile } from "../assertions";

/**
 * 
 * @param content 
 */
export function copyToClipboard(content: string = ""): boolean {
   const input = document.createElement('textarea');
   input.setAttribute('value', content);
   input.contentEditable = "true";
   input.readOnly = true;
   document.body.appendChild(input);

   if (isMobile()) {
      const range = document.createRange();
      range.selectNodeContents(input);
      const selection = getSelection();
      if (selection) {
         selection.removeAllRanges();
         selection.addRange(range);
      }
      input.setSelectionRange(0, content.length);
   } else {
      input.select();
   }

   const result = document.execCommand('copy');
   document.body.removeChild(input);
   return result;
}
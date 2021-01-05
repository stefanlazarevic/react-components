# Tabs

Support list:

- [X] Ability to make tabs in horizontal or vertical layout.

By using `orientation` property on `Tabs` component you
can specify whether underlying elements should be 
considered horizontaly or vertically. This property also 
affects keyboard navigation in such manner that arrow 
down behaves in vertical orientation same like arrow 
right in horiztonal.

- [X] Support keyboard navigation.

You can navigate to next or previous tab using arrow keys.

You can navigate to the first or last tab using `HOME` and `END` keyboard keys.

- [X] Support Tab removal.

By providing `onClose` callback you can handle removal of the tab which can be triggered either using `ESC` key or by clicking on close button which appears once callback is specified.

- [X] Support tab activation on focus.

In case you don't want to just move focus with keyboard navigation but instead you want to make focused tab active you can change default behavior of component by passing `activation="automatic"` property to `Tabs` component.
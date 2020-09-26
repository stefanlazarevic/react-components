# Code Rules

- Callback returns always have event as last argument.
- By default validate form fields on blur.
- Every component must have `className` property so it can be used with `styled-components` library.
- Every component must support style property for inline customization if necessary.
- In case child component has no other purpose except calling callback on action, hide it if callback is not provided.
- In controlled children environent don't use `forwardRef` unless needed.
- Don't attach callback to the element if it is undefined.
- Every component must provide `data-testid` which can be used in `react-testing-library` or automated tests.
- When dealing with arrays or iterators whether sync or async, use provided helper function from `src/utils/function` folder. _NOTE: if only one operation is performed, consider using regular language provided functions._
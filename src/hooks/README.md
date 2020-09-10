# Hooks

Every exported function from this folder uses React Hook API which is available since React 16.8 version.
In case utility function uses some functionality provided by HOOK API, it should be placed in this folder and prefixed with "use"
in order to follow convention.

### Available hooks:

| name | description | 
|---|---|
| `useDescendant` | Hook which attaches provided `ref` to the list of descendants and returns its position/index in the list. |
| `useDescendants` | Hook which creates state and helper functions to work with created state. Used as a storage for all descendant nodes. |
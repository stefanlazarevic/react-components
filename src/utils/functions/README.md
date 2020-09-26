### Table of Contents

- [Available functions](#available-functions)
    - [Composing functions](#composing-functions)
        - [compose](#compose)
        - [pipe](#pipe)
    - [Existing array functions](#existing-array-functions)

## Available functions

### Composing functions

#### `compose`

Compose functions together and return a new function 
which combines all other functions.

[Table of contents](#table-of-contents)

```js
import {compose} from './utils';

const program = compose(fn1, fn2, fn3);

program(); // => fn1(fn2(fn3())); 
```

#### `pipe`

[Table of contents](#table-of-contents)

Compose functions together and return a new function 
which combines all other functions.

The difference between `pipe` and `compose` is the
order of execution of the functions.

```js
import {pipe} from './utils';

const program = pipe(fn1, fn2, fn3);

program(); // => fn3(fn2(fn1())); 
```

### Existing array functions

#### `concat`

Concat multiple iterators or arrays into a 
single iterator.

```js
import { pipe, concat, toArray } from './utils';

const program = pipe(
  concat([0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10]),
  toArray()
);

program();
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```
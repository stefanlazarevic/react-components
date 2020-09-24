### Table of Contents

- [Available functions](#available-functions)
    - [Composing functions](#composing-functions)
        - [compose](#compose)
        - [pipe](#pipe)

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
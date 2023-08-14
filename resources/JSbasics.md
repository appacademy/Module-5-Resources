## Javescript POJO Review


These Learning Objectives are a supplement to App Academy Open and reinforce important concepts taught in Module 5.

### How to destructure values from objects and arrays

- `const { key } = object`
- `const [ index1, index2 ] = array`

Purpose:

- Destructuring is used everywhere in React and other modern libraries/frameworks


<br>
<hr>

### How to use ternaries

- `<condition> ? <truthy return> : <falsey return>`

Purpose:

- To return different values depending on the outcome of the conditional expression



<br>
<hr>

### How to use logical operators outside of boolean context

- logical AND `<boolean> && <value to return>`
- logical OR `<return if truthy> || <default value>`
- nullish coalescing `<null or undefined returns other side> ?? <value to return>`

Purpose

- Used for short-circuiting and conditional rendering of JSX.



<br>
<hr>

### How to create new keys in objects:

Variable as key:

- `obj[variable] = value`

String as a key:

- `obj["string"] = value`
- `obj.string = value`

<br>


<br>
<hr>

### How to remove keys from objects:

- `delete object[key]`



<br>
<hr>

### Know the difference between value types vs reference types in memory

Value Types:

- Variables are stored containing a literal value

Reference Types:

- Variables are stored as only a hexadecimal reference to the original object in memory that holds the value



<br>
<hr>

### How to shallow copy vs deep copy an object

Shallow copy:

- `{...obj}`
- `[...array]`

Deep copy:

- `JSON.stringify()` then `JSON.parse()`
- `structuredClone()`


What are the differences between a shallow copy and a deep copy of an object?

<br>
<hr>

### AJAX

Blocking (scope only)

`async` / `await`

```js
async function blockThisScope() {
  const response = await fetch("...", options);
  const data = await response.json();
  return data
}

blockThisScope() // -> async functions return a Promise
```

Non-blocking

`then().catch()`

```js
fetch("...", options)
  .then((res) => res.json()) // -> parse the Response promise and return it
  .then((data) => {
    // process the data
  })
  .catch((error) => {
    // process the error object
  })
```

<br>
<hr>

These concepts are used throughout Mod 5 with the expectation that you already know how to implement them. **Study them**.
You **must** be fluent in the above concepts to succeed in this mod. Some are familiar to you, others not. No matter your current familiarity with the above concepts, take some time to look study them through Google, MDN or AppAcademy Open. Proficiency with these basics is absolutely vital to not only this Mod, but also your career.

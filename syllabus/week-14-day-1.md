## Intro to React

### - What are some downsides of Vanilla Dom Manipulation(VDM)
- VDM is Imperative Programming
- VDM requires you to write more code
- More code leads to more bugs
- VDM code is executed in the browser which limits its capabilities because of
  browser security policies

### - How is React different from VDM?
- React is a declarative programming library
- React functions do all of the VDM for you
- Much of the code is internallized requiring you to write less
- Less code leads to faster production

### - The differences between React and create-react-app
- React
  - The lib holds the core functions you need to manipulate the dom declaratively
  - does not have all the functionality enterprise-level websites have
  - is modified through extension libraries
  - not a framework (complete package to do everything you need)
- create-react-app
  - it scaffolds the project
  - hot reload dev server running on port 3000. WebSocket connection to dev server.
  - instant updates in browser
  - sets up a dev environment for React

## Javescript POJO Review
<a name="#readme-top"></a>



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

- They return the first truthy value in the expression.
- They are used for short-circuiting and conditional rendering.



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
- This technique is the easiest way to deep copy, but it only works on JSON serializable data and literal values. For complex objects and references, you'll need a custom function that is possibly recursive. Best to use Lodash library.

What are the differences between a shallow copy and a deep copy of an object?

<br>



<br>
<hr>

These concepts are used throughout Mod 5 with the expectation that you already know how to implement them. **Study them**.
You **must** be fluent in the above concepts to succeed in this mod. Some are familiar to you, others not. No matter your current familiarity with the above concepts, take some time to look study them through Google, MDN or AppAcademy Open. Proficiency with these basics is absolutely vital to not only this Mod, but also your career.

<style>
    .present {
        text-align: left;
    }
</style>

---

###### tags: `Week 14` `W14D1`

---

# State & Side Effects Day!
## and forms too...


---

## Today's Topics

- useState hook
- useEffect hook
- how the above work together
- forms (cause they will use both too)


---

## useState & useEffect

- two of the most common hooks
- these are just 2 more tools in our React toolbag 
- these 2 hooks get used together very often, so it is important we understand how they work seperately and together


---

## useState

- allows for component state, a variable that will persist through renders, and a function to set the value of that variable
- built in to react
- you are going to use this one a lot
- only way to trigger a component rerender is to provide the state setter function with a new reference in memory


```jsx
import { useState } from "react"

function SomeComponent () {
    const [ state, setState ] = useState("initial value") 
}
```


---

## The only way to trigger a component rerender is to provide the state setter function with a new reference in memory


---

# The only way to trigger a component rerender is to provide the state setter function with a new reference in memory


---


## Lets look at the useState HW practice...



---


## useEffect

- handles "side effects" or things that may need to be done after the first render
- what are some of these "side effects"? 
- dependancy array lets us control what and when
- you will use this one a lot too...

```jsx
import { useEffect } from "react"

useEffect( () => {
    
}, [])
```

---

## useEffect Dependancy Array

- empty array means it will only trigger once
- we add state and or props to the array that we want the useEffect to listen for changes to
- be careful what you put in there, infinite rerenders are an "unhappy" potential consequence


---


## Lets look at that first useEffect Practices on dependancy arrays



---


## The only way to trigger a component rerender is to provide the state setter function with a new reference in memory


---

# The only way to trigger a component rerender is to provide the state setter function with a new reference in memory


---


## Lets take some class time to work on the useEffect HW
## 30 min to work on the following:
 
 - useEffect Practice (30 min) (colors & status codes)
  

---


## React Component Lifecycle

## It's draw time! ✏️


---

## React Component Lifecycle

1. Component mounts
2. evaluate all code (useState, useParams, most hooks, props, plain JS, and the return)
3. useEffect hooks run (what could go wrong here?)

### ( warning, after this part a lot of different things could occur...)
4. a. based on the useEffect, we may have triggered a rerender, that goes back to a, the evaluate phase
 b. based on the useEffect we might navigate away from the component, and then it can unmount (and preform any clean up functions )
 c. other stuff!


---



## Lets play with some code!
## Here we go


---


## The only way to trigger a component rerender is to provide the state setter function with a new reference in memory


---

# The only way to trigger a component rerender is to provide the state setter function with a new reference in memory


---

## Forms!

- one of the reason we are learning useState and useEffect is to assist us with creating forms
- useState will allow us to have controlled inputs
- useEffect will let us run front end validations on our data


---


## Form structure

- a lot is similar to our structure as it was with plain HTML
```jsx
<form onSubmut={ handlesubmit }>
    <div>
        <label htmlFor="title">Title:</label>
        <input 
            id="title" 
            type="text" 
            value={ title } 
            onChange={ (e) => setTitle(e.target.value) }
            placeholder="title"
        />
    </div>
</form>
```


---


## Controlled Inputs

- we will want to use state for each input, so it can persist through re-renders
- need one for each input

```jsx
const [title, setTitle] = useState("")   
```

---


## Submitting

- abstact this to a helper, there will be several lines of code
- need to prevent the default form procedure!

```jsx    
const handleSubmit = (e) => {
    e.preventDefault()
    const newPost = {
            title,
            image,
            author,
    }
    console.log(newPost)// or save it to the DB
    setTitle('') // and all other controlled inputs
    navigate("/posts")
```


---

## Form Practice! 

- 45 min to work on the Form Practice

## Up Next...
- We will come back, talk about any questions
- We will talk about adding in error validation
- Validations practice
- Long Practices


---


## The only way to trigger a component rerender is to provide the state setter function with a new reference in memory


---

# The only way to trigger a component rerender is to provide the state setter function with a new reference in memory


---



## Form Validation / FE Error Handling

- Always better to catch an error in the front end beore we have to start an async process to our server
- will use our useEffect tool to handle our errors




---


## useEffect for our validators

```jsx
useEffect(() => {
    const errors = {};
    if (!title.length) errors['title']='Please enter a title for your post!';
    if (!image.length) errors['image']='Please provide a, image for your post!';
    setValidationErrors(errors);
  }, [title, image])
```

---


## Rest of today...

- Do the form validations practice
- Jump in to the long practices!
- Explore Hooks first
- Turkey Display second
- Basic React Forms
- Its alot, we don't expect you to get through it all



---
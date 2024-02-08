# Practice: Context Wrapper - Dynamic Provider

In the previous practice, you created your context and consumed it in the
`Detail` component. Now you will make the context's value dynamic, which will
give you a better sense of the true power of context!

Towards this end, in this practice, you will create a context provider to set
the value of a context. You will then configure a component to read that value
from the context whenever the value changes.

## Setup

Clone the starter repo, which you can access through the `Download Project`
button at the bottom of this page.

`cd` into the practice's root directory and run `npm install`. To start your
app, run `npm run dev`.

## Refactor the `Context.Provider`

The previous practice had you wrap your `HoroscopeContext.Provider` around the
`App` component in __src/main.jsx__. While this works, it's not common practice.
More often, developers will instead wrap the application in a provider component
that they have created. That's what you will do now.

In your __HoroscopeContext.jsx__ file, create a new component called
`HoroscopeProvider` that takes in `props` as its parameter. For your return
statement, use your `HoroscopeContext` provider component and wrap it around
`props.children`. Once you've finished, export your new provider component as a
default.

```jsx
// src/context/HoroscopeContext.jsx

const HoroscopeProvider = props => {
  return (
    <HoroscopeContext.Provider>
      {props.children}
    </HoroscopeContext.Provider>
  );
};
```

Next, navigate to __src/main.jsx__. This is where you will use your
`HoroscopeProvider` component, so import the component at the top of your file.

Wrap your `App` component with the `HoroscopeProvider` you just imported instead
of with `HoroscopeContext.Provider`:

```jsx
// src/main.jsx

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HoroscopeProvider>
      <App />
    </HoroscopeProvider>
  </React.StrictMode>
);
```

If all went well, your browser should still look the same. However, if you look
at your component tree, you should be able to see your `HoroscopeProvider` in
your browser's DevTools with `Context.Provider` nested inside and `App` inside
`Context.Provider`.

This is what you should see:

```text
Root
  \
  HoroscopeProvider
    \
    Context.Provider
      \
      App
```

## Update the context value

If you look at the console tab in your browser's DevTools, you'll see another
warning message from React about a missing `value` prop. You most definitely did
not pass one into your `HoroscopeContext` provider this time, so let's do that
with some state!

Back in the `HoroscopeProvider` component
(__src/context/HoroscopeContext.jsx__), create a state variable `currentSign`
and have the default value be any horoscope sign you want. Make sure it starts
with a capital letter; this will be important later. If you don't know which
sign to use, `"Leo"` is a good one, and it's only 3 characters long. (Did you
remember to import `useState`?)

Once you have created your `currentSign` state, pass `currentSign` and
`setCurrentSign` as the value in your `HoroscopeContext.Provider`. It should
look something like this:

```jsx
// src/context/HoroscopeContext.jsx

<HoroscopeContext.Provider value={{ currentSign, setCurrentSign }}>
```

Take another look at the React DevTools. If you click on the `Context.Provider`
component, you should see the `value` set to `currentSign` and `setCurrentSign`
in the `props` section.

## Use context in the `Detail` component

You have created your context and wrapped your provider around your entire app.
The final step you need to take is to _consume_ your context and display the
`currentSign`'s details.

In __src/components/Detail.jsx__, you should have already imported `useContext`
and `HoroscopeContext`. Inside your `Detail` component, now destructure
`currentSign`, which comes from invoking `useContext` and passing in your
`HoroscopeContext` as an argument.

```jsx
// src/components/Detail.jsx

const { currentSign } = useContext(HoroscopeContext);
```

Keep in mind, when you use the `useContext` hook and pass the context in, the
value you get back will be the object you passed in as your `value` prop to the
context provider. In this case, the object will look like this (which is why you
can destructure):

```js
{
  currentSign: "Leo",
  setCurrentSign: function (f)
}
```

In truth, you need more than just the name of the sign; you want to display
details about the sign, such as its element and traits. This expanded data is
located in __src/data/horoscopes.js__. Take a second to familiarize yourself
with how the data is set up, including how it's being exported.

While you could import all this data into __Detail.jsx__ and then use
`currentSign` to grab the portion you need, a cleaner solution would simply
include the relevant data in the context. That way, all the updating horoscope
information will be included in one place--i.e., the horoscope context--for any
subscribed component to access. This is the solution you will implement below.

At the top of your __context/HoroscopeContext.jsx__ file, import the data from
__data/horoscopes.js__ as `horoscopesObj`. Next, inside the `HoroscopeProvider`
component, create a new variable called `sign` and set it equal to the sign's
object by keying into `horoscopesObj` using your `currentSign` state. Take a
look at your `horoscopesObj` data again to help you see what you need.

Below is the object you're trying to access if your `currentSign` is `"Leo"`.

```json
{
  "name": "Leo",
  "date": "Jul 23 - Aug 22",
  "element": "Fire",
  "traits": "Proud, Bold, Ambitious",
  "backgroundImg": "https://www.horoscope.com/images-US/signs/profile-leo.png",
  "match": "Libra"
}
```

Your `sign` variable should look like this:

```jsx
// src/context/HoroscopeContext.jsx

const sign = horoscopesObj[currentSign];
```

Once you have successfully grabbed the object, set the `value` on the `Provider`
to include `sign` instead of `currentSign`:

```jsx
// src/context/HoroscopeContext.jsx

<HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
```

Back in your `Detail` component (__components/Detail.jsx__), destructure `sign`
from the `HoroscopeContext` instead of `currentSign`. Now you should have
everything you need! Update your `<img>` `src`, `<h2>`, and `<h4>` elements with
the appropriate information from your `sign` object.

If all was done correctly, the `Detail` component should display all of your
`currentSign`'s information in the browser.

Head back to your __HoroscopeContext.jsx__ and update your default state to
another sign! Does your `Detail` component also update?

**HOORAY!**

You have successfully created a dynamic value in your context provider and
consumed that context to display your `currentSign`'s information.

## What you have learned

**Congratulations!** In this practice you have learned how to

1. Create a provider component that holds your `Context.Provider`
2. Wrap your entire `App` with that provider component
3. Set state variables as your provider component's `value` prop so that you can
   change the value dynamically
4. Consume the context in another component
5. Update (manually) your provider's default value and have that change
   reflected in another component

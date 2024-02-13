# Phase 3: `Weather`

In Phase 3, you will refactor the `Weather` component from a class component
into a function component. The `Weather` component is rendered inside of the
`App` component but is not passed any props. Instead, it fetches data from a
weather data API endpoint after the component is first rendered. It then renders
the data it gets from the API.

In order to get the API to accept your HTTP requests, you'll need an API key.
API keys should be stored in a __.env__ file, so create a __.env__ file in your
root directory and paste the following into that file:

```sh
VITE_WEATHER_API=b65b43cc09af164f099fe5a807d56972
# VITE_WEATHER_API=8119be3ea48a73ad298d0b280a0d98ad
# VITE_WEATHER_API=e14bad32abd13d701515672995a36e6a
# VITE_WEATHER_API=2a7d6ce7cdd33961673705d6f754d472
# VITE_WEATHER_API=0009c9f9b5283b47fe0b716582e300e0
```

Make sure the __.env__ file is included in your __.gitignore__. (You don't want
to expose your keys by pushing them to Github!) If you encounter a fetch limit,
comment out the first API key in the __.env__ file and comment in the second API
key. Repeat the process if you encounter an error again: comment out the second
key and comment in the third, and so on.

Use the API key in the `Weather` component by changing the relevant line in that
component from

```js
const apiKey = `???`
```

to

```js
const apiKey = import.meta.env.VITE_WEATHER_API
```

As in the previous phase, convert any component props and state in the
`Weather` class component to props and state in a function component.

Convert the class's instance methods other than the lifecycle method
`componentDidMount` into regular functions in the function component.

`componentDidMount` will run after the component's first render. Convert
this into a `useEffect` with an empty dependency array in the Function
Component. `navigator.geolocation.getCurrentPosition` is a method that will
invoke the callback function passed in as its first argument with the user's
coordinates. In this case, `pollWeather` is the function that gets passed the
coordinates. You can define the `pollWeather` function inside the `useEffect`
since it will only be used in the `useEffect`.

**Note:** The tests should run correctly regardless of your configuration. If
you have trouble connecting to the Weather API in your browser, however, make
sure that you have Location Services turned on and that your browser has
permission to access them. Otherwise, the widget will not be able to access your
current coordinates.

**Tip:** One of the tests checks that the widget handles a failed fetch
appropriately. If you want to test this case in the browser, just set the
`apiKey` to `null`.

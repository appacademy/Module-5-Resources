# Phase 3: ClimateContext

In this phase, you'll learn how to create context, a context Provider, and
a React custom wrapper hook that will return the value of the newly created
context.

- In the __src/context/ClimateContext.jsx__ file, create a context called
  `ClimateContext`, a provider called `ClimateProvider` for that context, and a
  custom React hook that returns the value of `ClimateContext`.
- In the provider, create a component state variable that defines the
  temperature of the greenhouse.
- The temperature should be set to `50` (Number) by default.
- The value of the context Provider should be set to an object with a key to
  read the temperature and a key to set the temperature.

Refer to the __src/context/ThemeContext.jsx__ file if you need a reminder on how
to do any of the above.

**By the way, did you remember to wrap the application with `ClimateProvider` in
order to make it available to nested components?**

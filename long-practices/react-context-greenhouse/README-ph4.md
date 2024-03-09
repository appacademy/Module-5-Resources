# Phase 4: Thermometer

In this phase, you will connect the `Thermometer` component
(__src/components/Thermometer/Thermometer.jsx__) to the `ClimateContext`. The
thermometer should show and change the `thermometer` value in the
`ClimateContext`.

There is a React component called [`ReactSlider`] being mounted which renders a
slider in the browser. When the slider value changes, the temperature value in
the context should also change.

In this component, the temperature value should be displayed on the "Actual
Temperature".

- Fill in the two props, `value` and `onAfterChange`, which are passed into
  `ReactSlider`.
- `value` should be set to the temperature value in the `ClimateContext`.
- In the `onAfterChange` function, `val` should be set as the new temperature
  value in the context.

**Test this out in the browser!**

[`ReactSlider`]: https://www.npmjs.com/package/react-slider

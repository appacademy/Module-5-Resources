# Phase 5: Hygrometer

In this phase, you will add more properties on the `ClimateContext` value, and
use those new properties in the `Hygrometer` component
(__src/components/Hygrometer/Hygrometer.jsx__).

- Create a new component state variable in the `ClimateContext` Provider that
  reads and sets the humidity of the greenhouse. Set the default humidity to
  `40` (Number).
- The `Hygrometer` component should show and change the humidity value in the
  `ClimateContext`.
- Similar to the `Thermometer` component, fill in the two props passed into
  `ReactSlider`--i.e., `value` and `onAfterChange`--in order to read and change
  the humidity value of the `ClimateContext`.

**Test this out in the browser!**

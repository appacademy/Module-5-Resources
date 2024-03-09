# Turkey Display, Phase 3: Adjusting Picture And Message Size

The last use case in this project for `useEffect` is to calculate the value of a
state variable based on a prop.

If you look carefully, you'll notice that `size` is one of the props on the
`PictureDisplay` component. As you look closer, you'll see that the size
appears only in the `console.log` (and corresponding `useEffect` dependencies).

Upon further digging, you'll find 4 classes in the CSS (__src/index.css__) with
appropriate widths for 4 different sizes (`small`, `medium`, `large`, `xlarge`).
That means it should be possible to write some code to calculate those values
from the "s", "m", "l" and "xl" values used by the `size` prop.

## Calculating image size

* Open __src/components/PictureDisplay.jsx__.
* In the `useEffect` that depends on the `size` prop, add several lines of code
to calculate the class name to use for each size.

> **Hint:** The `switch...case` pattern is useful in this situation, but it is
> not the only possibility.

If you can, write some code and test it using `console.log` before looking at
the solution below.

```javascript
  useEffect(() => {
    console.log('PictureDisplay size', size);
    let cname = '';
    switch (size) {
      case 'm':
        cname = 'medium';
        break;
      case 'l':
        cname = 'large';
        break;
      case 'xl':
        cname = 'xlarge';
        break;
      default:
        cname = 'small';
        break;
    }
    console.log(cname);
  }, [size]);
```

Now add a state variable and use it in the appropriate place.

* Add `useState` to the import from `react` at the top of the file.

```javascript
import { useEffect, useState } from 'react';
```

* Declare a state variable for the class name to use for the size. Place it at
  the start of the class definition (after `function PictureDisplay...` and
  before all the `useEffect`s; see below).

```javascript
function PictureDisplay ({ size, featherCount, featherColors }) {
  const [sizeClass, setSizeClass] = useState('');
  
  // useEffect(() => {
  // The rest is omitted because it hasn't changed (yet)
```

* Finally, replace your call to the `console.log` at the end of the new
`useEffect`'s function with a call to the setter for the new state variable.

```js
  // console.log(cname);
  setSizeClass(cname);
```

* Modify the `className` for the `<div>` to replace `medium` with your new
state variable. Here is one way to accomplish this.

```javascript
<div className={`image-area ${sizeClass}`}>
```

* Test in the browser and debug until the picture area changes size when
clicking the size buttons (as long as it's a different size; remember "small" is
the default).

In case you get stuck, here's what the component function should look like in
__src/components/PictureDisplay.jsx__.

```javascript
function PictureDisplay ({ size, featherCount, featherColors }) {
  const [sizeClass, setSizeClass] = useState('');

  // useEffect(() => {
  //   console.log('PictureDisplay', size, featherCount, featherColors);
  // }, [size, featherCount, featherColors]);

  useEffect(() => {
    console.log('PictureDisplay size', size);
    let cname = '';
    switch (size) {
      case 'm':
        cname = 'medium';
        break;
      case 'l':
        cname = 'large';
        break;
      case 'xl':
        cname = 'xlarge';
        break;
      default:
        cname = 'small';
        break;
    }
    setSizeClass(cname);
  }, [size]);

  useEffect(() => {
    console.log('PictureDisplay feather count', featherCount);
  }, [featherCount]);

  useEffect(() => {
    console.log('PictureDisplay feather colors', featherColors);
  }, [featherColors]);

  // TODO: Wrap in useEffect
  const colors = [];
  if (!featherColors || featherColors.length === 0) featherColors = [''];
  for (let i=0; i<featherCount; i++) {
    colors.push(featherColors[i % featherColors.length]);
  }

  return (
    <div className={`image-area ${sizeClass}`}>
      {colors.map((c, i) =>
        <img src={feathers[i]} className={`image-feather ${c}`} alt="" />
      )}

      <img src={turkey} className="image-turkey" alt="turkey" />
    </div>
  );
}
```

## Calculating message area size

Now repeat the size calculation and state change inside the previous `useEffect`
in the `Message` component (that is, __src/components/Message.jsx__).

> **Hint:** Copy and paste will speed up this work!

(The only difference is the `<div>` tag: it uses `message` as its base CSS
class name instead of `image-area`.)

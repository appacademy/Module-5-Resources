//!!START SILENT
import { useState, useEffect } from 'react';
//!!END
//!!ADD
// import { useState } from 'react';
//!!END_ADD
import Message from './components/Message';
import PictureDisplay from './components/PictureDisplay';

function App() {
  const [size, setSize] = useState('s');
  const [featherCount, setFeatherCount] = useState(0);
  const [featherColors, setFeatherColors] = useState([]);
  const [isRed, setIsRed] = useState(false);
  const [isOrange, setIsOrange] = useState(false);
  const [isBrown, setIsBrown] = useState(false);
  const [isLightBrown, setIsLightBrown] = useState(false);
  const [isYellow, setIsYellow] = useState(false);

  //!!START SILENT
  useEffect(() => {
    // console.log('Color Change :: red?', isRed);
    // console.log('Color Change :: orange?', isOrange);
    // console.log('Color Change :: brown?', isBrown);
    // console.log('Color Change :: light brown?', isLightBrown);
    // console.log('Color Change :: yellow?', isYellow);

    const colors = [];
    if (isRed) colors.push('red');
    if (isOrange) colors.push('orange');
    if (isBrown) colors.push('brown');
    if (isLightBrown) colors.push('light-brown');
    if (isYellow) colors.push('yellow');
    setFeatherColors(colors);
  }, [isRed, isOrange, isBrown, isLightBrown, isYellow]);
  //!!END
  return (
    <>
      <h1>Turkey Creator</h1>
      <h3 className="button-controls">Set the features of your turkey</h3>

      {/* User controls */}
      <div className="button-controls">
        Size:
        <button onClick={() => setSize('s')}>Small</button>
        <button onClick={() => setSize('m')}>Medium</button>
        <button onClick={() => setSize('l')}>Large</button>
        <button onClick={() => setSize('xl')}>X-Large</button>
      </div>
      <div className="button-controls">
        Feather Count:
        <input
          type="number"
          onChange={(e) => setFeatherCount(e.currentTarget.value)}
          defaultValue={0}
          min={0}
          max={10}
        />
      </div>
      <div className="button-controls">
        Feather Color(s):
        <label><input
          type="checkbox"
          onChange={(e) => setIsRed(e.currentTarget.checked)}
        />Red</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsOrange(e.currentTarget.checked)}
        />Orange</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsBrown(e.currentTarget.checked)}
        />Brown</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsLightBrown(e.currentTarget.checked)}
        />Light Brown</label>
        <label><input
          type="checkbox"
          onChange={(e) => setIsYellow(e.currentTarget.checked)}
        />Golden Yellow</label>
      </div>

      {/* Generated display based on user selections above */}
      <h3 className="button-controls">Enjoy your turkey</h3>
      <PictureDisplay
        size={size}
        featherCount={featherCount}
        featherColors={featherColors}
      />
      {/*!!START SILENT */}
      <Message size={size} featherCount={featherCount} />
      {/*!!END */}
      {/*!!ADD */}
      {/* <Message size={size} /> */}
      {/*!!END_ADD */}
    </>
  );
}

export default App;


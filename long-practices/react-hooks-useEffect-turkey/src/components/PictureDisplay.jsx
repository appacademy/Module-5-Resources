//!!START SILENT
import { useEffect, useState } from 'react';
//!!END
import turkey from '../images/turkey.png';
import feather1 from '../images/feather1.svg';
import feather2 from '../images/feather2.svg';
import feather3 from '../images/feather3.svg';
import feather4 from '../images/feather4.svg';
import feather5 from '../images/feather5.svg';
import feather6 from '../images/feather6.svg';
import feather7 from '../images/feather7.svg';
import feather8 from '../images/feather8.svg';
import feather9 from '../images/feather9.svg';
import featherA from '../images/featherA.svg';

const feathers = [
  feather1,
  feather2,
  feather3,
  feather4,
  feather5,
  feather6,
  feather7,
  feather8,
  feather9,
  featherA,
];

function PictureDisplay ({ size, featherCount, featherColors }) {
  //!!START SILENT
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
  //!!END
  //!!ADD
  // console.log('PictureDisplay', size, featherCount, featherColors);
  //!!END_ADD

  // TODO: Wrap in useEffect
  const colors = [];
  if (!featherColors || featherColors.length === 0) featherColors = [''];
  for (let i=0; i<featherCount; i++) {
    colors.push(featherColors[i % featherColors.length]);
  }

  return (
    //!!START SILENT
    <div className={`image-area ${sizeClass}`}>
    {/*!!END */}
    {/*!!ADD */}
    {/* <div className={`image-area medium`}> */}
    {/*!!END_ADD */}
      {colors.map((c, i) =>
        <img
          key={feathers[i]}
          src={feathers[i]}
          className={`image-feather ${c}`}
          alt=""
        />
      )}

      <img src={turkey} className="image-turkey" alt="turkey" />
    </div>
  );
}

export default PictureDisplay;

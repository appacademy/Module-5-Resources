//!!START SILENT
import { useEffect, useState } from 'react';

function Message({ size, featherCount }) {
//!!END
//!!ADD
// function Message({ size }) {
  // console.log('Message', size);
//!!END_ADD
  //!!START SILENT
  const [sizeClass, setSizeClass] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() =>{
    if (featherCount <= 0)
      setMessage('Oh my! Your bird is naked!');
    else if (featherCount >= 10) {
      setMessage('Full turkey!');
    } else {
      setMessage('Coming along...');
    }
  }, [featherCount]);

  useEffect(() => {
    console.log('Message', size);
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
  //!!END

  return (
    //!!START SILENT
    <div className={`message ${sizeClass}`}>
      {message}
    </div>
    //!!END
    //!!ADD
    // <div className="message medium">
      // (Oh my! Your bird is naked!)
    // </div>
    //!!END_ADD
  );
}

export default Message;

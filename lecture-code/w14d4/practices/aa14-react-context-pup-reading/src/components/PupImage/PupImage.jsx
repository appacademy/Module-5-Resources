// import { useContext } from 'react';
import { usePuppyType } from '../../context/PupContext';


const PupImage = () => {
  const { puppyType } = usePuppyType
  return (
    <img src={ puppyType } alt="pup" />
  );
};

export default PupImage;

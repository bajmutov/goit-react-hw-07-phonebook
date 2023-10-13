import { RotatingLines } from 'react-loader-spinner';

const Spinner = ({ size }) => {
  return (
    <div>
      <RotatingLines
        strokeColor="white"
        strokeWidth="5"
        animationDuration="0.75"
        width={size}
        visible={true}
        position="absolute"
      />
      ;
    </div>
  );
};

export default Spinner;

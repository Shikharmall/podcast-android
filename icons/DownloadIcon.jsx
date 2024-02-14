import Svg, {Path} from 'react-native-svg';

export default DownloadIcon = ({ size, color }) => (
    <Svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      //xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M12 2a1 1 0 011 1v10.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L11 13.586V3a1 1 0 011-1zM5 17a1 1 0 011 1v2h12v-2a1 1 0 112 0v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a1 1 0 011-1z"
        fill={color}
      />
    </Svg>
  );
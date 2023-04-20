import { Box } from '@mui/material';
import ContentLoader from 'react-content-loader';

const Loader = () => {
  return (
    <Box display="flex" justifyContent="center">
      <ContentLoader
        viewBox="0 0 400 160"
        height={200}
        width={400}
        backgroundColor="transparent"
      >
        <circle cx="150" cy="86" r="8" />
        <circle cx="194" cy="86" r="8" />
        <circle cx="238" cy="86" r="8" />
      </ContentLoader>
    </Box>
  );
};

export default Loader;

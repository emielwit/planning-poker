import { Box, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { NEW_GAME } from './routes';

const Navigation = () => {
  return (
    <Box
      sx={{
        borderBottom: '1px solid white',
        height: '4rem',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        justifyContent: 'flex-end',
      }}
    >
      <Button component={Link} to={NEW_GAME}>
        Start new game
      </Button>
    </Box>
  );
};

export default Navigation;

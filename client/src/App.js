import { Box, Typography } from '@mui/material';

import './App.css';
import PostForm from './components/post-form';

function App() {
  return (
    <Box
      sx={{
        width: '50rem',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '2rem' }}>
        Create a post
      </Typography>
      <PostForm />
    </Box>
  );
}

export default App;

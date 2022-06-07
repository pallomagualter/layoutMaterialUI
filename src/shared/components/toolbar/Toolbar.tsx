import { Box, Button, Paper, TextField } from '@mui/material';

export const Toolbar: React.FC = () => {
  return (
    <Box component={Paper}>
      <TextField />

      <Button>Novo</Button>
    </Box>
  );
};
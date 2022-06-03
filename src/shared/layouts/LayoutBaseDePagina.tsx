import { Box } from '@mui/system';
import { Button } from '@mui/material';

import { useAppThemeContext, useDrawerContext } from '../contexts';


export const LayoutBaseDePagina: React.FC = ({ children }) => {

  const { toggleTheme, themeName } = useAppThemeContext();
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box>
      <Button variant='contained' color='primary' onClick={toggleTheme} >{themeName}</Button>
      <Button variant='contained' color='primary' onClick={toggleDrawerOpen} >Exibir Menu</Button>
      {children}
    </Box>
  );
};
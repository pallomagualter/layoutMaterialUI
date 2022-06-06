import { Box } from '@mui/system';
import { Button, Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';

import { useAppThemeContext, useDrawerContext } from '../contexts';

interface ILayoutBaseDePaginaProps {
  title: string;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children, title }) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const theme = useTheme();

  const { toggleTheme, themeName } = useAppThemeContext();
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height='100vh' display='flex' flexDirection='column' gap={1} >
      <Box padding={1} display='flex' alignItems='center' height={theme.spacing(12)} gap={1} >
        {smDown && (
          <IconButton color='primary' onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography variant='h5'>
          {title}
        </Typography>
      </Box>

      <Box>
        <Button variant='contained' color='primary' onClick={toggleTheme} >{themeName}</Button>
      </Box>

      <Box>
        Barra de ferramentas
      </Box>

      <Box>
        {children}
      </Box>

    </Box>
  );
};
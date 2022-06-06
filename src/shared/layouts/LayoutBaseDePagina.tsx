import { ReactNode } from 'react';
import { Box } from '@mui/system';
import { Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';

import { useDrawerContext } from '../contexts';

interface ILayoutBaseDePaginaProps {
  title: string;
  toolbar: ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children, title, toolbar }) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const theme = useTheme();

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height='100vh' display='flex' flexDirection='column' gap={1} >
      <Box padding={1} display='flex' alignItems='center' gap={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} >
        {smDown && (
          <IconButton color='primary' onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
          overflow='hidden'
          whiteSpace='nowrap'
          textOverflow='ellipsis'
        >
          {title}
        </Typography>
      </Box>

      {toolbar && (
        <Box>
          {toolbar}
        </Box>
      )}

      <Box flex={1} overflow='auto' >
        {children}
      </Box>

    </Box>
  );
};
import { Drawer, useTheme } from '@mui/material';
import { Box } from '@mui/system';

export const MenuLateral: React.FC = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Drawer variant='permanent' >
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
          {children}
        </Box>
      </Drawer>
    </>
  );
};
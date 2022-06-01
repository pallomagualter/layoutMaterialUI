import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useDrawerContext } from '../../contexts';

interface IListItemLinkProps {
  to: string;
  icon: string;
  label: string;
  onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const MenuLateral: React.FC = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen} >
        <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column' >

          <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src='https://avatars.githubusercontent.com/u/33058536?v=4'
            />
          </Box>

          <Divider />

          <Box flex={1} >
            <List component='nav'>
              <ListItemLink
                icon='home'
                to='/pagina-inicial'
                label='Página inicial'
                onClick={smDown ? toggleDrawerOpen : undefined}
              />
            </List>
          </Box>

        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)} >
        {children}
      </Box>
    </>
  );
};
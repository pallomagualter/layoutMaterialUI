import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { useDrawerContext, useAppThemeContext } from '../../contexts';

interface IListItemLinkProps {
  to: string;
  icon: string;
  label: string;
  onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const SideMenu: React.FC = ({ children }) => {
  const { toggleTheme, themeName, themeIconName } = useAppThemeContext();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();

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

          <Box flex={1} >
            <List component='nav'  >
              {drawerOptions.map(drawerOption => (
                <>
                  <Divider variant='inset' component='li' />
                  <ListItemLink
                    key={drawerOption.path}
                    icon={drawerOption.icon}
                    to={drawerOption.path}
                    label={drawerOption.label}
                    onClick={smDown ? toggleDrawerOpen : undefined}
                  />
                </>
              ))}
              <Divider />
            </List>
          </Box>

          <Box>
            <List component='nav'>
              <Divider />
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <Icon>{themeIconName}</Icon>
                </ListItemIcon>
                <ListItemText primary={themeName} />
              </ListItemButton>
              <Divider />
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
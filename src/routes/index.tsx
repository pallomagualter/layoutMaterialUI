import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useAppThemeContext, useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleTheme, themeName } = useAppThemeContext();
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Página Inicial',
      },
      {
        icon: 'person',
        path: '/profile',
        label: 'Profile',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path='/pagina-inicial' element={
        <>
          <Button variant='contained' color='primary' onClick={toggleTheme} >{themeName}</Button>
          <Button variant='contained' color='primary' onClick={toggleDrawerOpen} >Exibir Menu</Button>
        </>
      } />
      <Route path='/profile' element={<Button variant='contained' color='primary' onClick={toggleTheme} >{themeName}</Button>} />

      <Route path='*' element={<Navigate to='/pagina-inicial' />} />
    </Routes>
  );
};
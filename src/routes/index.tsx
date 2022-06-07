import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages';

import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Página Inicial',
      },
      {
        icon: 'person',
        path: '/pagina-um',
        label: 'Página 1',
      },
      {
        icon: 'star',
        path: '/pagina-dois',
        label: 'Página 2',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path='/pagina-inicial' element={<Dashboard />} />

      <Route path='*' element={<Navigate to='/pagina-inicial' />} />
    </Routes>
  );
};
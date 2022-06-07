import { Toolbar } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

export const Dashboard: React.FC = () => {

  return (
    <LayoutBaseDePagina
      title='Página Inicial'
      toolbar={(
        <Toolbar />
      )}
    >
      Testando
      <footer>teste</footer>
    </LayoutBaseDePagina>
  );
};


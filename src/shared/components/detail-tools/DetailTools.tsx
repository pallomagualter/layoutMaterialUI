import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';

interface IDetailToolsProps {
  textOfTheSearch?: string;
  showInputSearch?: boolean;
  toggleTextSearch?: (newText: string) => void;
  textNewButton?: string;
  showNewButton?: boolean;
  onClickNewButton?: () => void;
}

export const DetailTools: React.FC<IDetailToolsProps> = ({
  textOfTheSearch = '',
  showInputSearch = false,
  toggleTextSearch,
  textNewButton = 'Novo',
  showNewButton = true,
  onClickNewButton
}) => {
  const theme = useTheme();

  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display='flex'
      gap={1}
      alignItems='center'
      component={Paper}
    >

      {showInputSearch && (
        <TextField
          size='small'
          value={textOfTheSearch}
          onChange={(e) => toggleTextSearch?.(e.target.value)}
          placeholder='Pesquisar...'
        />
      )}

      <Box flex={1} display='flex' justifyContent='end'>
        {showNewButton && (
          <Button
            color='primary'
            disableElevation
            variant='contained'
            onClick={onClickNewButton}
            endIcon={<Icon>add</Icon>}
          >
            {textNewButton}
          </Button>
        )}
      </Box>
    </Box>
  );
};
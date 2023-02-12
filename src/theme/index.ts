import { createTheme } from '@mui/material';
import { MuiButton, MuiTextFields } from './components';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'hsl(183, 100%, 15%)',
      light: 'hsl(172, 67%, 45%)',
    },
    background: {
      default: 'hsl(185, 41%, 84%)',
    },
  },
  components: {
    MuiButton: MuiButton,
    MuiTextField: MuiTextFields,
  },
});

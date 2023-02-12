import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

export const MuiTextFields: Components<Theme>['MuiTextField'] = {
  defaultProps: {
    fullWidth: true,
  },
  styleOverrides: {
    root: {
      background: 'hsl(189, 41%, 97%)',
      '& fieldset': { border: 'none' },
      borderRadius: 2,
    },
  },
};

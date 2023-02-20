import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

export const MuiFormHelperText: Components<Theme>['MuiFormHelperText'] = {
  styleOverrides: {
    root: {
      background: 'white',
      marginLeft: 0,
      width: '100%',
    },
  },
};

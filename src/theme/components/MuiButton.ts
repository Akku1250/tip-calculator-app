import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    variant: 'contained',
  },
  styleOverrides: {
    root: {
      height: 60,
      fontSize: 25,
    },
  },
};

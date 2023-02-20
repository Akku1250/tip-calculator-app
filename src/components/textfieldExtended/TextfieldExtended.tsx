import { SxProps, TextField, Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles({
  input: {
    '& input[type=number]': {
      '-moz-appearance': 'textfield',
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
});

interface IProps {
  sx?: SxProps<Theme>;
  placeholder?: string;
  icon?: React.ReactNode;
  defaultValue: string;
  error?: boolean;
  helperText?: string;
  onChange: (input: string) => void;
}

function TextfieldExtended({ sx, placeholder, icon, defaultValue, error, helperText, onChange }: IProps) {
  const classes = useStyles();
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleTextFieldOnChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = e.target.value;
    onChange(parseInt(value) <= 0 ? '' : value);
    setValue(parseInt(value) <= 0 ? '' : value);
  };

  return (
    <TextField
      className={classes.input}
      error={error}
      helperText={helperText}
      sx={sx}
      value={value}
      placeholder={placeholder}
      type={'number'}
      InputProps={{
        startAdornment: icon,
        inputProps: {
          style: { textAlign: 'right', fontWeight: 'bold', color: 'hsl(183, 100%, 15%)', fontSize: 21 },
        },
      }}
      onChange={handleTextFieldOnChange}
    />
  );
}

export default TextfieldExtended;

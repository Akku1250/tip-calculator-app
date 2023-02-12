import { Stack, Typography } from '@mui/material';
import React from 'react';
import TextfieldExtended from '../textfieldExtended/TextfieldExtended';

interface IProps {
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  value?: string;
  onChange: (input: string) => void;
}

function LabelTextfield({ label, placeholder, value, icon, onChange }: IProps) {
  return (
    <Stack>
      <Typography
        fontWeight={'bold'}
        sx={{ color: 'hsl(186, 14%, 43%)', mb: 0.5 }}
      >
        {label}
      </Typography>
      <TextfieldExtended
        defaultValue={value || ''}
        placeholder={placeholder}
        icon={icon}
        onChange={onChange}
      />
    </Stack>
  );
}

export default LabelTextfield;

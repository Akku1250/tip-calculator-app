import React from 'react';
import { Grid, Typography } from '@mui/material';

interface IProps {
  title: string;
  subText: string;
  amount: string;
}

const Receipt = ({ title, subText, amount }: IProps) => (
  <Grid
    item
    container
  >
    <Grid
      item
      xs={6}
    >
      <Typography sx={{ color: 'hsl(0, 0%, 100%)', fontSize: { xs: 26, sm: 28, lg: 32 }, fontWeight: 700 }}>
        {title}
      </Typography>
      <Typography sx={{ color: 'hsl(185, 41%, 84%)', fontSize: 'small', fontWeight: 700 }}>{subText}</Typography>
    </Grid>
    <Grid
      item
      xs={6}
    >
      <Typography
        sx={{ color: 'hsl(172, 67%, 45%)', fontSize: { xs: 26, sm: 28, lg: 32 }, textAlign: 'end', fontWeight: 700 }}
      >
        ${amount}
      </Typography>
    </Grid>
  </Grid>
);

export default Receipt;

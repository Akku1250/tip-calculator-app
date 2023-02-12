import { Button, Grid } from '@mui/material';
import React from 'react';
import Receipt from '../receipt/Receipt';

interface IProps {
  bill: string;
  numberOfPpl: string;
  customTip: string;
  selectedTip: string;
  reset: () => void;
}

function Cost({ bill, numberOfPpl, customTip, selectedTip, reset }: IProps) {
  const enteredBill = parseFloat(bill);
  const choosenTip = customTip !== '' ? parseFloat(customTip) : parseFloat(selectedTip);
  const enteredNumberOfPpl = parseInt(numberOfPpl);

  let tipAmount = 0.0;
  let total = 0.0;

  if (numberOfPpl) {
    tipAmount = enteredBill * (choosenTip / 100);
    const addTipAmount = enteredBill + tipAmount;
    total = addTipAmount / enteredNumberOfPpl;
  }

  if (isNaN(tipAmount) && isNaN(total)) {
    tipAmount = 0.0;
    total = 0.0;
  }

  return (
    <Grid
      item
      xs={6}
      sx={({ palette }) => ({ backgroundColor: palette.primary.main, p: 2, borderRadius: 3 })}
      position={'relative'}
    >
      <Receipt
        title="Tip"
        subText="Total"
        amount={parseFloat(tipAmount.toString()).toFixed(2)}
      />
      <Receipt
        title="Total"
        subText="/ person"
        amount={parseFloat(total.toString()).toFixed(2)}
      />

      <Grid
        item
        xs={12}
        pt={{ xs: 2 }}
        position={{ lg: 'absolute' }}
        bottom={{ lg: 30 }}
        sx={{ width: { lg: 470 } }}
      >
        <Button
          sx={({ palette }) => ({
            width: '-webkit-fill-available',
            fontWeight: 700,
            background: palette.primary.light,
            color: palette.primary.main,
            ':hover': {
              bgcolor: palette.primary.light,
              color: palette.primary.main,
            },
          })}
          onClick={() => reset()}
        >
          RESET
        </Button>
      </Grid>
    </Grid>
  );
}

export default Cost;

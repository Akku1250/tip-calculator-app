import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import LabelTextfield from '../../../../components/labelTextfield/LabelTextfield';
import TextfieldExtended from '../../../../components/textfieldExtended/TextfieldExtended';
import { ITips } from '../../interfaces/ITips';

interface IProps {
  bill: string;
  numberOfPpl: string;
  customTip: string;
  tips: ITips[];
  activeTip: number;
  errorBill: boolean;
  errorNumberOfPpl: boolean;
  setBill: (input: string) => void;
  setNumberOfPpl: (input: string) => void;
  setCustomTip: (input: string, id: number) => void;
  setSelectedTip: (input: string, id: number) => void;
}

function Calculations({
  bill,
  numberOfPpl,
  tips,
  customTip,
  activeTip,
  errorBill,
  errorNumberOfPpl,
  setBill,
  setNumberOfPpl,
  setCustomTip,
  setSelectedTip,
}: IProps) {
  return (
    <Grid
      item
      xs={6}
      sx={{ p: 3 }}
    >
      <LabelTextfield
        label="Bill"
        value={bill}
        error={errorBill}
        helperText={errorBill ? 'Bill should be less than $11000' : ''}
        placeholder="0"
        icon={<AttachMoneyIcon sx={{ color: 'hsl(189, 30%, 67%)' }} />}
        onChange={setBill}
      />
      <Grid
        container
        spacing={1}
        mb={3}
        mt={3}
      >
        <>
          <Grid
            item
            container
          >
            <Typography
              fontWeight={'bold'}
              sx={{ color: 'hsl(186, 14%, 43%)', mb: 0.5 }}
            >
              {'Select Tip %'}
            </Typography>
          </Grid>
          {tips.map((tip) => {
            return (
              <Grid
                key={tip.id}
                item
                lg={4}
                md={4}
                xs={6}
              >
                <Button
                  sx={({ palette }) => ({
                    width: '100%',
                    background: tip.id === activeTip ? palette.primary.light : palette.primary.main,
                    color: tip.id === activeTip ? palette.primary.main : 'white',
                    fontWeight: 700,
                    ':hover': {
                      bgcolor: palette.primary.light,
                      color: palette.primary.main,
                    },
                  })}
                  onClick={() => setSelectedTip(tip.value, tip.id)}
                >
                  {tip.label}
                </Button>
              </Grid>
            );
          })}
          <Grid
            item
            lg={4}
            md={4}
            xs={6}
          >
            <TextfieldExtended
              sx={({ palette }) => ({
                border: activeTip === 6 ? `2px solid ${palette.primary.light}` : '',
                borderRadius: activeTip === 6 ? 2 : undefined,
                height: activeTip === 6 ? 62 : undefined,
              })}
              placeholder={'Custom'}
              defaultValue={customTip || ''}
              onChange={(input) => setCustomTip(input, 6)}
            />
          </Grid>
        </>
      </Grid>
      <LabelTextfield
        error={errorNumberOfPpl}
        helperText={errorNumberOfPpl ? 'Number of People should be less than 20' : ''}
        label="Number of People"
        value={numberOfPpl}
        placeholder="0"
        icon={<PersonIcon sx={{ color: 'hsl(189, 30%, 67%)' }} />}
        onChange={setNumberOfPpl}
      />
    </Grid>
  );
}

export default Calculations;

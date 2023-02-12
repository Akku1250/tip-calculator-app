import { Button, Grid } from '@mui/material';
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
                    width: '-webkit-fill-available',
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

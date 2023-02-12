import React from 'react';
import { baseState } from './helper/tipCalculatorHelper';
import { ITips } from './interfaces/ITips';
import { Grid, Paper } from '@mui/material';
import Calculations from './components/calculations/Calculations';
import Cost from './components/cost/Cost';

type IState = {
  bill: string;
  numberOfPpl: string;
  activeTip: number;
  tips: ITips[];
  selectedTip: string;
  customTip: string;
  tipAmount: string;
  total: string;
};

interface IProps {}
class TipCalculator extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = baseState;
  }

  render() {
    const { bill, numberOfPpl, activeTip, customTip, tips, selectedTip } = this.state;
    return (
      <Grid
        component={Paper}
        container
        sx={{
          maxWidth: { sm: 600, md: 700, lg: 1050 },
          m: 'auto',
          p: 3,
          borderRadius: 3,
        }}
        direction={{ xs: 'column', lg: 'row' }}
        elevation={0}
      >
        <Calculations
          bill={bill}
          numberOfPpl={numberOfPpl}
          tips={tips}
          customTip={customTip}
          activeTip={activeTip}
          setBill={this.handleBill}
          setNumberOfPpl={this.handleNumberOfPpl}
          setCustomTip={this.handleCustomTip}
          setSelectedTip={this.handleSelectedTip}
        />
        <Cost
          bill={bill}
          numberOfPpl={numberOfPpl}
          customTip={customTip}
          selectedTip={selectedTip}
          reset={this.handleReset}
        />
      </Grid>
    );
  }

  private handleReset = () => {
    this.setState(baseState);
  };

  private handleBill = (input: string) => {
    let { bill } = this.state;

    if (parseFloat(input) > 11000 || parseFloat(input) <= 0) {
      bill = '';
    } else {
      bill = input;
    }

    this.setState((prevState) => ({ ...prevState, bill }));
  };

  private handleNumberOfPpl = (input: string) => {
    let { numberOfPpl } = this.state;

    if (parseInt(input) > 20 || parseInt(input) <= 0) {
      numberOfPpl = '';
    } else {
      numberOfPpl = input;
    }

    this.setState((prevState) => ({ ...prevState, numberOfPpl }));
  };

  private handleCustomTip = (input: string, activeTip: number) => {
    let { customTip } = this.state;

    if (parseFloat(input) > 101 || parseFloat(input) <= 0) {
      customTip = '';
    } else {
      customTip = input;
    }

    this.setState((prevState) => ({ ...prevState, customTip, selectedTip: '', activeTip }));
  };

  private handleSelectedTip = (input: string, activeTip: number) => {
    this.setState((prevState) => ({ ...prevState, selectedTip: input, customTip: '', activeTip }));
  };
}

export default TipCalculator;

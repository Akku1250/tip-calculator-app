import { ITips } from '../interfaces/ITips';

export interface SplitterState {
  bill: string;
  numberOfPpl: string;
  activeTip: number;
  tips: ITips[];
  selectedTip: string;
  customTip: string;
  tipAmount: string;
  total: string;
}

export const baseState: SplitterState = {
  bill: '',
  numberOfPpl: '',
  activeTip: -1,
  tips: [
    { id: 1, label: '5', value: '5' },
    { id: 2, label: '10', value: '10' },
    { id: 3, label: '15', value: '15' },
    { id: 4, label: '25', value: '25' },
    { id: 5, label: '50', value: '50' },
  ],
  selectedTip: '',
  customTip: '',
  tipAmount: (0.0).toFixed(2),
  total: (0.0).toFixed(2),
};

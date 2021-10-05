import React from "react";
import Section from "../section/section_component";
import SeletedTip from "../selected-tip/selected-tip_component";
import Receipt from "../receipt/receipt_component";
import CustomButton from "../custom-button/custom-button_component";
import FormInput from "../form-input/form-input_component";
import dollar from '../../images/icon-dollar.svg';
import person from '../../images/icon-person.svg';

import './tip-calculator_style.scss';

class TipCalculator extends React.Component{
    constructor(props){
        super(props);

        this.baseState = {
            bill: '',
            numberOfPpl: 1,
            tips: [
                    {id: 1, type:"button", name:"5", value:5, active: false},
                    {id: 2, type:"button", name:"10", value:10, active: false},
                    {id: 3, type:"button", name:"15", value:15, active: false},
                    {id: 4, type:"button", name:"25", value:25, active: false},
                    {id: 5, type:"button", name:"50", value:50, active: false},
                    {id: 6, type:"input", name:"customTip", placeholder: "Custom", active: false},
                  ],
            selectedTip: 0,
            customTip: '',
            tipAmount: (0.00).toFixed(2),
            total: (0.00).toFixed(2)
        }

        this.state = this.baseState;
    }

    handleInputChange = (target) => {
        const {value, name} = target;
        this.setState({ [name]: value })
    }

    updateReceipt = () =>{
        if(parseFloat(this.state.bill) !== 0){
            this.setState((state) => {
               let bill = parseFloat(state.bill);
               let selectedTip = parseFloat(state.selectedTip);
               let numberOfPpl = parseInt(state.numberOfPpl);
               let total = 0;
               let tipAmount = 0;

               tipAmount = bill * (selectedTip / 100);
               total = (bill + tipAmount) / numberOfPpl;

               if (!isNaN(tipAmount) && !isNaN(total)){
                   return {tipAmount: tipAmount.toFixed(2), total: total.toFixed(2) };
               }
            });
        }
    }

    changeTipSelection = (target) =>{

        this.setState((state) => {
            let tips = state.tips ;

            tips.forEach(tip => {
                if(tip.active === true && tip.name !== target.name){
                    tip.active = false;

                }
                if(tip.name === target.name && tip.active !== true){
                    tip.active = true;
                }
            })
            return {tips: tips};
         });
    }

    updateSelectedTip = (target) =>{
         this.setState((state) => {
             const {value, name} = target;

            if(name === "customTip"){
                return {selectedTip: state.customTip};
            }else{
                return {selectedTip: value, customTip: ''};
            }
         });
    }

    handleBill = (e) =>{
        if(parseFloat(e.target.value) > 11000 || parseFloat(e.target.value) === 0){
            
            if(this.state.bill){
                e.target.value = this.state.bill;
            }else{
                 e.target.value = '';
            }
        }

        if(!Number.isInteger(Number(e.target.value))){

            e.target.value = parseFloat(parseFloat(e.target.value).toFixed(2));
        }

        this.handleInputChange(e.target);
        this.updateReceipt();
    }

    handleNumberOfPpl = (e) =>{
        if(parseInt(e.target.value) > 20 || parseInt(e.target.value) === 0){

            if(this.state.numberOfPpl){
                e.target.value = this.state.numberOfPpl;  

            }else{
                 e.target.value = 1;
            }
        }

        if(!Number.isInteger(Number(e.target.value))){

            e.target.value = parseInt(e.target.value);
        }

        this.handleInputChange(e.target);
        this.updateReceipt();
    }

    handleCustomTip = (e) => {
        if(parseFloat(e.target.value) > 101 || parseFloat(e.target.value) === 0){
            e.target.value = '';
        }

        if(!Number.isInteger(Number(e.target.value))){

            if(parseInt(e.target.value) === 100){
                 e.target.value = 100;

            }else{
                 e.target.value = parseFloat(parseFloat(e.target.value).toFixed(2));
            }
           
        }

        this.handleInputChange(e.target);
        this.changeTipSelection(e.target);
        this.updateSelectedTip(e.target);
        this.updateReceipt();
    }

    handleTipSelection = (e) => {
         this.changeTipSelection(e.target);
         this.updateSelectedTip(e.target);
         this.updateReceipt();
    }

    handleReset = (e) => {
        this.setState(this.baseState);
        this.changeTipSelection(e.target);
    }

    render(){
        const tips  = [...this.state.tips];
        return(
            <div className='tip-calc-container'>
                <Section>
                    <FormInput 
                        label="Bill"
                        name="bill" 
                        value={this.state.bill} 
                        type="number"
                        placeholder="0.00"
                        imageURL={dollar}
                        handleChange = {this.handleBill} 
                        alt="dollar icon"
                    />

                    <SeletedTip 
                        label="Select Tip %" 
                        tips={tips} 
                        handleTipSelection={this.handleTipSelection} 
                        handleCustomTip={this.handleCustomTip}
                        customTip ={this.state.customTip}
                    />

                    <FormInput 
                        label="Number of People" 
                        name="numberOfPpl"
                        value={this.state.numberOfPpl} 
                        type="number" 
                        placeholder="0"
                        imageURL={person} 
                        handleChange = {this.handleNumberOfPpl}
                        alt="person icon"
                    />
                </Section>
                <Section addClass="result">
                    <Receipt 
                        title="Tip"
                        subText="Total" 
                        amount={this.state.tipAmount}
                    />
                    <Receipt 
                        title="Total"
                        subText="/ person" 
                        amount={this.state.total}
                    />
                    <CustomButton  
                        onClick={this.handleReset}
                        addClass = "reset-button" 
                    >
                    RESET
                    </CustomButton>
                </Section>
            </div>
        )
    }
}

export default TipCalculator;
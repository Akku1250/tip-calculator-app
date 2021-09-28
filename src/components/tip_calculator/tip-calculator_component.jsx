import React from "react";
import Section from "../section/section_component";
import FormInput from "../form-input/form-input_component";
import dollar from '../../images/icon-dollar.svg';
import person from '../../images/icon-person.svg';

import './tip-calculator_style.scss';

class TipCalculator extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            bill: '',
            numberOfPpl: '',
            selectedTip: 0,
            customTip: 0,
            tipAmount: 0.00,
            total: 0.00
        }
    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className='tip-calc-container'>
                <Section>
                    <FormInput 
                        label="Bill"
                        name="bill" 
                        value={this.state.bill} 
                        type="number"
                        placeholder="0"
                        imageURL={dollar}
                        handleChange = {this.handleChange} 
                        alt="dollar icon"
                    />
                    <FormInput 
                        label="Number of People" 
                        name="numberOfPpl"
                        value={this.state.numberOfPpl} 
                        type="number" 
                        placeholder="0"
                        imageURL={person} 
                        handleChange = {this.handleChange}
                        alt="person icon"/>
                </Section>
                 <Section addClass="result">
                    {/* <h1>Results</h1> */}
                </Section>
            </div>
        )
    }
}

export default TipCalculator;
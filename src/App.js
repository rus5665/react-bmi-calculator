import React from 'react'
import PT from "prop-types"

let calculateBMI = (height, weight) => {
  return (weight / (height / 100) ** 2 )
}

let tellBMI = (bmi) => {
  return bmi <= 18.5 ? "Underweight" :
         bmi <= 24.9 ? "Normal" :
         bmi <= 29.9 ? "Overweight" :
                        "Obese"
}


function Slider({title, min, max,value, unit, onChange}) {
  return <div>
    {title}
    {" "}
    {min}
    {" "}
    <input min={min} max={max} type="range" onChange={e => onChange(e.target.value)} />
    {" "}
    {max}
    <p>{value} {unit}</p>
    </div>
}

Slider.propeTypes = {
  title: PT.string.isRequired,
  min: PT.number.isRequired,
  max: PT.number.isRequired,
  value: PT.number.isRequired,
  unit: PT.string.isRequired,
  onChange: PT.func.isRequired,
}

export default class App extends React.Component {

  state = {
    height: 175,
    weight: 70
  }

  setHeight = (height) => {
    this.setState({height})
  }

  setWeight = (weight) => {
    this.setState({weight})
  }

  render() {

    let {height, weight} = this.state
    let bmi = calculateBMI (height, weight)
    console.log(tellBMI(bmi))
    return (
      <div>
        <Slider onChange={this.setHeight} title="Height" min={60} max={245} value={height} unit="cm"/>
        <Slider onChange={this.setWeight} title="Weight" min={30} max={200} value={weight} unit="kg"/>
        <p>BMI: <b>{bmi.toFixed(1)}</b> </p>
      </div>
    );
  }
}

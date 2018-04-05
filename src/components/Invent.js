import React from 'react';
import AddSampleForm from './AddSampleForm';



class Invent extends React.Component {
  constructor() {
    super();

    this.editSamples= this.editSamples.bind(this);
    this.handleChange= this.handleChange.bind(this);
  }

  handleChange(e, key) {

    const sample = this.props.samples[key];
    const updatedSample = {...sample, 
    [e.target.name]: e.target.value
     }
   
    this.props.updateSample(key, updatedSample); 
  }
 
 editSamples(key) {

   const details = this.props.samples[key];
   return (
     <div className="sample-edit" key={key}>
               
          <input type="number" value={details.size} 
          onChange={(e) => this.handleChange(e, key)} name="size"/>
          <input  type="text" placeholder="color" value={details.color} name="color"
          onChange={(e) => this.handleChange(e, key)}/>
          <select value={details.font} name="font"
          onChange={(e) => this.handleChange(e, key)}>

            <option value="Arial">Arial</option>
            <option value="Roboto">Roboto</option>

          </select>  
          <textarea type="text" placeholder="text" value={details.text} name="text"
          onChange={(e) => this.handleChange(e, key)}></textarea>
         
           
          <input  type="number" placeholder="font size" value={details.size2} name="size2"
          onChange={(e) => this.handleChange(e, key)}/>
          <input type="text" placeholder="color"  value={details.color2} name="color2"
          onChange={(e) => this.handleChange(e, key)}/>
          <select value={details.font2} name="font2"
          onChange={(e) => this.handleChange(e, key)}>

            <option value="Arial">Arial</option>
            <option value="Roboto">Roboto</option>

          </select>  
          <textarea type="text" placeholder="text" name="text2" value={details.text2}
          onChange={(e) => this.handleChange(e, key)}></textarea>
         
         <input type="text" placeholder="background color" name="background" value={details.background} 
         onChange={(e) => this.handleChange(e, key)} />




       </div>

   )
 }
  render() {
   return (

    <div>
     <p>Invent</p>
     {Object.keys(this.props.samples).map(this.editSamples)}
      <AddSampleForm addSample={this.props.addSample} />
      <button className="form-button" onClick={this.loadSamples}>+Load Samples</button>
    </div>
    );
  }
}

export default Invent;

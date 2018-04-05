import React from 'react';
import {GetListOfFonts} from '../utilities/FontObserver.js';





class AddSampleForm extends React.Component {

  constructor() {
    super();
    this.createSample = this.createSample.bind(this);
  }
  
  

  createSample(event) {
  
    event.preventDefault();

   
    const sample = {
      
      size: this.size.value,
      color: this.color.value,
      font: this.font.value,
      text: this.text.value,
      size2: this.size2.value,
      color2: this.color2.value,
      font2: this.font2.value,
      text2: this.text2.value,

      background: this.background.value,
    }
    this.props.addSample(sample);
    this.sampleForm.reset();
  }

  render() {
    

   return (

    <div>
    <form className="sample-edit-invent" ref={(input) => this.sampleForm= input} onSubmit={(e) => this.createSample(e)}>
          
         
          <input ref={(input) => this.size = input} name="size" type="number" placeholder="font size" />
          <input ref={(input) => this.color = input} name="color" type="text" placeholder="color" />
          <select ref={(input) => this.font = input} name="font">

          
              {GetListOfFonts()}
         

          </select>  
          <textarea ref={(input) => this.text = input} name="text" type="text" placeholder="text"></textarea>
         
           
          <input ref={(input) => this.size2 = input} name="size2" type="number" placeholder="font size" />
          <input ref={(input) => this.color2 = input} name="color2" type="text" placeholder="color" />
          <select ref={(input) => this.font2 = input} name="font2">

             {GetListOfFonts()}

          </select>  
          <textarea ref={(input) => this.text2 = input} name="text2" type="text" placeholder="text"></textarea>
         
         <input  ref={(input) => this.background = input} type="text" name="background" placeholder="background color" />
         <button className="form-button" type="submit"> +ADD SAMPLE</button>
      </form>
    </div>
    );
  }
}

export default AddSampleForm;

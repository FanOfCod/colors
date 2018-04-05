import React from 'react';
import Invent from './Invent.js';
import Samples from './Samples.js';
import Saved from './Saved.js';
import Base from '../Base.js';
import LogInBotton from'./LogInBotton.js';
import {CheckFonts} from '../utilities/FontObserver.js';


class Appli extends React.Component {
 constructor () {
   super ();
   this.addSample = this.addSample.bind(this);
   this.updateSample = this.updateSample.bind(this);
   this.saveSample = this.saveSample.bind(this);
   this.deleteSample = this.deleteSample.bind(this);
   this.deleteSavedSample = this.deleteSavedSample.bind(this);
   this.editSavedSample = this.editSavedSample.bind(this);

   this.state = {
     samples: {},
     saved: {}
   };
 }

 async componentWillMount() {
   this.ref = Base.syncState('samples', {
     context: this,
     state:'samples'
   });

   await CheckFonts();
 }

 componentWillUnmount () {
   Base.removeBinding(this.ref);

 }

 addSample(sample) {

   const samples = {...this.state.samples}
   const timestamp = Date.now();
   const key = `sample-${timestamp}`;
   sample.key = key;
   samples[key] = sample;
   this.setState({samples});
  
 }

 updateSample(key, updatedSample) {

  const samples = {...this.state.samples}
  samples[key] = updatedSample;
  this.setState({samples});
  
 

}

 saveSample(sampleToSave) {

  const saved = { ...this.state.saved}
  const key = sampleToSave['key'];
  saved[key] = sampleToSave;
  this.setState({saved});

}

editSavedSample(sampleToEdit) {

  const samples = {...this.state.samples}
  //const timestamp = Date.now();
  //const key = `sample-${timestamp}`;
  const key = sampleToEdit['key'];
  samples[key] = sampleToEdit;
  this.setState({samples});


}

deleteSample(sampleToDelete) {

  const samples = { ...this.state.samples}
  const key = sampleToDelete['key'];
  samples[key] = null;
  this.setState({samples});

}

deleteSavedSample(sampleToDelete) {

  const saved = { ...this.state.saved}
  const key = sampleToDelete['key'];
  delete saved[key];
  this.setState({saved});

}


 
  render() {
    return (
     <div className="wrapper"> 
       <LogInBotton /> 
        <div className="combine-colors">
        
          <Saved saved={this.state.saved} samples={this.state.saved} deleteSavedSample={this.deleteSavedSample} editSavedSample={this.editSavedSample}/>
          <Samples samples={this.state.samples} saveSample={this.saveSample} deleteSample={this.deleteSample}/>
          <Invent updateSample={this.updateSample} addSample={this.addSample} samples={this.state.samples}/>
        </div>
    </div>    
    );
  }
}

export default Appli;

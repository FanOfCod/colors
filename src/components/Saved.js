import React from 'react';
import SavedSample from './SavedSample';



class Saved extends React.Component {
  render() {
    const saved = this.props.saved;

    if (!(saved == null)) {
      return (

        <div className="samples">
        <p>Saved</p>
        <ul className="list-of-samples">
                {
                    Object
                    .keys(saved)
                    .map(key =>
                    <SavedSample key={key} samples={this.props.samples} details={saved[key]} deleteSavedSample={this.props.deleteSavedSample} editSavedSample={this.props.editSavedSample}/>)
                }
                
              </ul>

        </div>
      );
    }      
  }
}

export default Saved;
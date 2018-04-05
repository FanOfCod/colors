import React from 'react';
import Sample from './Sample.js'


class Samples extends React.Component {
  render() {

  const samples = this.props.samples;
   return (
    
    <div className="samples">
        <p>Samples</p>
        <ul className="list-of-samples">
            {
              Object
              .keys(samples)
              .map(key =>
               <Sample key={key} details={samples[key]} saveSample={this.props.saveSample} deleteSample={this.props.deleteSample}/>)
            }
          </ul>
    </div>
    );
  }
}

export default Samples;

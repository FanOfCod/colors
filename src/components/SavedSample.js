import React from 'react';



const IconDelete = React.createClass({
  render () {
    return (
      <svg  xmlns="http://www.w3.org/2000/svg"  x="0" y="0"
	 width="25px" height="25px" viewBox="0 0 44.238 44.238" style={{enableBackground: 'new 0 0 44.236 44.236'}}
	 space="preserve">

			<path d="M15.533,29.455c-0.192,0-0.384-0.073-0.53-0.22c-0.293-0.293-0.293-0.769,0-1.062l13.171-13.171
				c0.293-0.293,0.768-0.293,1.061,0s0.293,0.768,0,1.061L16.063,29.235C15.917,29.382,15.725,29.455,15.533,29.455z"/>
		

			<path d="M28.704,29.455c-0.192,0-0.384-0.073-0.53-0.22L15.002,16.064c-0.293-0.293-0.293-0.768,0-1.061s0.768-0.293,1.061,0
				l13.171,13.171c0.293,0.293,0.293,0.769,0,1.062C29.088,29.382,28.896,29.455,28.704,29.455z"/>
		
		<path d="M22.119,44.237C9.922,44.237,0,34.315,0,22.12C0,9.924,9.922,0.001,22.119,0.001S44.238,9.923,44.238,22.12
			S34.314,44.237,22.119,44.237z M22.119,1.501C10.75,1.501,1.5,10.751,1.5,22.12s9.25,20.619,20.619,20.619
			s20.619-9.25,20.619-20.619S33.488,1.501,22.119,1.501z"/>

    </svg>

    )
  }
  });


const IconEdit = React.createClass({
    render () {
      return (
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0"
width="25px" height="25px" viewBox="0 0 275.836 275.836" style={{enableBackground:'new 0 0 275.836 275.836'}} space="preserve">

	<path d="M191.344,20.922l-95.155,95.155c-0.756,0.756-1.297,1.699-1.565,2.734l-8.167,31.454c-0.534,2.059,0.061,4.246,1.565,5.751
		c1.14,1.139,2.671,1.757,4.242,1.757c0.503,0,1.009-0.063,1.508-0.192l31.454-8.168c1.035-0.269,1.979-0.81,2.734-1.565
		l95.153-95.153c0.002-0.002,0.004-0.003,0.005-0.004s0.003-0.004,0.004-0.005l19.156-19.156c2.344-2.343,2.344-6.142,0.001-8.484
		L218.994,1.758C217.868,0.632,216.343,0,214.751,0c-1.591,0-3.117,0.632-4.242,1.758l-19.155,19.155
		c-0.002,0.002-0.004,0.003-0.005,0.004S191.346,20.921,191.344,20.922z M120.631,138.208l-19.993,5.192l5.191-19.993l89.762-89.762
		l14.801,14.802L120.631,138.208z M214.751,14.485l14.801,14.802l-10.675,10.675L204.076,25.16L214.751,14.485z"/>
	<path d="M238.037,65.022c-3.313,0-6,2.687-6,6v192.813H43.799V34.417h111.063c3.313,0,6-2.687,6-6s-2.687-6-6-6H37.799
		c-3.313,0-6,2.687-6,6v241.419c0,3.313,2.687,6,6,6h200.238c3.313,0,6-2.687,6-6V71.022
		C244.037,67.709,241.351,65.022,238.037,65.022z"/>

</svg>

)
}
});

class SavedSample extends React.Component {

constructor (props) {
super();
//const key = this.props.details[key];   isSampleEdited: this.props.samples[key]
this.state = {isMouseInside: false, };
this.mouseEnter = this.mouseEnter.bind(this);
this.mouseLeave = this.mouseLeave.bind(this);
}

mouseEnter = () => {
  this.setState({ isMouseInside: true });
}
mouseLeave = () => {
  this.setState({ isMouseInside: false });
}



  render() {
    const details = this.props.details;
    
    const sampleBoxStyle = {
      width: '100%',
      height: '12rem',
      padding: '0',
      marginTop: '2rem',
      backgroundColor: `${details.background}`,
      position:'relative',
      overflow: 'hidden',
      borderRadius: '4px',
    
    };

    const box = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      height: '26%',
      width: '90%',
      margin: '-13% 0 0 -45%',
     
    };
    const sampleLineAStyle = {
      color: details.color2,
      fontFamily: details.font2,
      textAlign: 'center',
      lineHeight: '50px',
      padding: '0',
      margin: '0',
      fontSize: `${details.size2}px`,
  

    };
    const sampleLineBstyle = {
      color: details.color,
      fontFamily: details.font,
      lineHeight: '50px',
      textAlign: 'center',
      padding: '0',
      margin: '0',
      fontSize: `${details.size}px`,
    
      
    
    };
   return (

    <li className="samples">
        <div style={sampleBoxStyle} className="sample-box" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
             {
               this.state.isMouseInside ? 

                <div>
                <button className="hover-botton" onClick={() => this.props.editSavedSample(details)}>{<IconEdit />}</button>
                  <button className="hover-botton"onClick={() => this.props.deleteSavedSample(details)}>{<IconDelete />}</button>
                </div> 
                
                :null
              }
            <div style={box}>
                <h1 style={sampleLineBstyle}>
                  {details.text}
                </h1>
                <h1 style={sampleLineAStyle}>
                  {details.text2}
                </h1>
            </div>  
        </div>
        
    </li>
    );
  }
}

export default SavedSample;

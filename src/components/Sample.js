import React from 'react';

const IconApprove = React.createClass({
render () {
  return (
    <svg  xmlns="http://www.w3.org/1999/xlink" x="0" y="0"
	 width="20px" height="20px" viewBox="0 0 44.236 44.236" style={{enableBackground: 'new 0 0 44.236 44.236'}}
	 space="preserve">
		<path d="M22.118,44.236C9.922,44.236,0,34.314,0,22.119C0,9.923,9.922,0,22.118,0s22.118,9.922,22.118,22.119
			S34.314,44.236,22.118,44.236z M22.118,1.5C10.75,1.5,1.5,10.75,1.5,22.119s9.25,20.619,20.618,20.619s20.618-9.25,20.618-20.619
			S33.486,1.5,22.118,1.5z"/>
		<path d="M18.674,27.842c-0.192,0-0.384-0.072-0.53-0.219l-4.333-4.327c-0.293-0.293-0.293-0.768-0.001-1.061
			c0.293-0.294,0.769-0.293,1.061-0.001l3.803,3.798l10.693-10.693c0.293-0.293,0.768-0.293,1.061,0s0.293,0.768,0,1.061
			L19.204,27.623C19.058,27.77,18.866,27.842,18.674,27.842z"/>

</svg>
  )
}
});

export const IconDelete = React.createClass({
  render () {
    return (
      <svg  xmlns="http://www.w3.org/2000/svg"  x="0" y="0"
	 width="20px" height="20px" viewBox="0 0 44.238 44.238" style={{enableBackground: 'new 0 0 44.236 44.236'}}
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



class Sample extends React.Component {

constructor (props) {
super();
this.state = {isMouseInside: false};
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
      backgroundColor: `${details.background}`,
      position:'relative',
      overflow: 'hidden',
      borderRadius: '4px',
      marginTop: '2rem',
    
     
    
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
            
             {this.state.isMouseInside ? 

                <div>
                  <button className="hover-botton" onClick={() => this.props.saveSample(details)}>{<IconApprove />}</button>
                  <button className="hover-botton"onClick={() => this.props.deleteSample(details)}>{<IconDelete />}</button>
                </div> 
                
                : null}

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

export default Sample;

import React from 'react';

import Camera from '../main/Camera.jsx'

class CameraWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.camera = null
    this.capture = this.capture.bind(this)
  }

  capture() {
    this.camera.snapshot()
      .then(data => {
        /* data: string (base-64-jqeg)
        Process your data here*/
        console.log(data)
      })
      .catch(console.error)
  }

  render() {
    return (
      <div>
  		<Camera 
  			classNames={'cam'}
				ref={camera => this.camera = camera}
				width={800} 
				height={500} />
  		<button onClick={this.capture}>captured</button>
  	</div>
    )
  }
}

CameraWrapper.displayName = 'CameraWrapper'

export default CameraWrapper

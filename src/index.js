import React from 'react';

let hover = '';
class ReactCycleImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentImage: props.children[0] || ''
    }
    this.cycleImage = this.cycleImage.bind(this);
    this.clearImageCycle = this.clearImageCycle.bind(this);
  }

  //Changes images on hover
  cycleImage() {
    console.log(this.props);
    const { children } = this.props;
    let imageIndex = 1;
    hover = setInterval(() => {
        if(!children[imageIndex]) {
            imageIndex = 0;
        }
        this.setSelectedImage(children[imageIndex]);
        imageIndex++;
    }, 1200)
  }

  //Stops changing image
  clearImageCycle() {
      clearTimeout(hover);
  }

  setSelectedImage(image) {
    this.setState({
        currentImage: image
    });
  }

  render() {
    const { children } = this.props;
    const { currentImage } = this.state;

    return (
      <div onMouseOver={this.cycleImage} onMouseOut={this.clearImageCycle} style={this.props.style}>
        {currentImage}
      </div>
    );
  }
}
export default ReactCycleImage;
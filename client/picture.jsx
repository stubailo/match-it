// Picture component - represents a single picture
Picture = React.createClass({
  propTypes: {
    // This component gets the picture to display through a React prop.
    // We can use propTypes to indicate it is required
    name: React.PropTypes.string.isRequired,
    imageUrl: React.PropTypes.string.isRequired,
    location: React.PropTypes.object.isRequired,
    isBig: React.PropTypes.bool.isRequired,
  },

  render() {
    let bigClass = "";
    if (this.props.isBig) {
      bigClass = "picture-big";
    }

    const pictureStyle = {
      left: this.props.location.x + "%",
      top: this.props.location.y + "%"
    };

    return (
      <div className={'picture ' + bigClass} style={pictureStyle}>
        {this.props.name}
      </div>
    )
  }
});
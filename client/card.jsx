// Card component - represents a single todo item
Card = React.createClass({
  propTypes: {
    // This component gets the card to display through a React prop.
    // We can use propTypes to indicate it is required
    card: React.PropTypes.object.isRequired,
    isBottom: React.PropTypes.bool,
  },
  render() {
    const className = 'card ' + (this.props.isBottom ? 'card-bottom' : '');
    return (
      <div className={className}>
        {this.renderPictures(this.props.card.pictures)}
      </div>
    );
  },

  generateLocations() {
    const locations = [
      {x: 20, y: 20},  // big one
      {x: -10, y: 30},
      {x: -30, y: 10},
      {x: -30, y: -10},
      {x: -10, y: -30},
      {x: 10, y: -30},
      {x: 30, y: -10},
      {x: -5, y: -5},  // center one
    ];

    return locations.map((location) => {
      return {x: location.x + 50, y: location.y + 50}
    });
  },

  renderPictures(pictures) {
    const locations = this.generateLocations();

    return pictures.map((picture, index) => {

      const location = locations[index];

      return <Picture
        name={picture}
        imageUrl={picture}
        location={location}
        isBig={index === 0}
      />
    });

  },

});
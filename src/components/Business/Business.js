import React from 'react';
import './Business.css';

class Business extends React.Component {
  render() {
    // Use the prop passed in to the component instead of the hardcoded object
    const { business } = this.props;

    return (
      <div className="Business">
        <div className="image-container">
          <img src={business.imageSrc} alt=''/> {/* Use the imageSrc property of the business object */}
        </div>
        <h2>{business.name}</h2> {/* Use the name property of the business object */}
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p> {/* Use the address property of the business object */}
            <p>{business.city}</p> {/* Use the city property of the business object */}
            <p>{`${business.state} ${business.zipCode}`}</p> {/* Use the state and zipCode properties of the business object */}
          </div>
          <div className="Business-reviews">
            <h3>{business.category.toUpperCase()}</h3> {/* Use the category property of the business object */}
            <h3 className="rating">{`${business.rating} stars`}</h3> {/* Use the rating property of the business object */}
            <p>{`${business.reviewCount} reviews`}</p> {/* Use the reviewCount property of the business object */}
          </div>
        </div>
      </div>
    );
  }
}

export default Business;

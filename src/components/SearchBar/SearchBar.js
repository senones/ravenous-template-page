import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    // Bind the handleSearch method to the current instance of the component
    this.handleSearch = this.handleSearch.bind(this);

    // Initialize the state with term, location, and sortBy properties
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    // Define the sortByOptions object for rendering sort options
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }

  // Returns the appropriate CSS class for the sort option based on the current sortBy value
  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  // Handles search when the "Let's Go" button is clicked
  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }

  // Updates the sortBy value in the component's state
  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }

  // Updates the term value in the component's state
  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  // Updates the location value in the component's state
  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  // Renders the sort options list items
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li key={sortByOptionValue}
            className={this.getSortByClass(sortByOptionValue)}
            onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
          {sortByOption}
        </li>
      );
    });
  }

  // Renders the SearchBar component
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            value={this.state.term}
            onChange={this.handleTermChange.bind(this)}
          />
          <input
            placeholder="Where?"
            value={this.state.location}
            onChange={this.handleLocationChange.bind(this)}
          />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;

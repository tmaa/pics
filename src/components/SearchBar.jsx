import React from "react";

class SearchBar extends React.Component{
  state = {term: ""};

  onInputChange = (event) => {
    this.setState({term: event.target.value});
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render(){
    return(
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form" autoComplete="off" autoCapitalize="off">
          <div className="field">
            <label>Image Search</label>
            <input type="text" value={this.state.term} onChange={this.onInputChange}/>
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export {SearchBar};
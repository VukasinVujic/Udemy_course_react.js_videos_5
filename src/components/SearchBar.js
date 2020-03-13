import React from 'react'

class SearchBar extends React.Component {

    state = {term: ''};

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault(); // don't refresh on enter

        this.props.onFormSubmit(this.state.term);                            // but call a function(callback) from parent 

    }

    // AIzaSyA4S9FMLdzay0OLYD99uwtdWjAw9CohDNY
    //AIzaSyA4S9FMLdzay0OLYD99uwtdWjAw9CohDNY
     render(){
        return (
            <div className="search-bar ui segment">
               <form  onSubmit={this.onFormSubmit}className="ui form">
                        <div className="field">
                            <label>User Input</label>
                            <input 
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                             />
                        </div>
                   </form> 
            </div>
        )
     }
}

export default SearchBar
import React from 'react'
import SearchBar from './SearchBar'


class App extends React.Component {
    render(){
        return (
            // ui container to push search bar a little bit from left and right margin of the screen
            <div className="ui container"> 
                <SearchBar />
            </div>
        )
    }
}

export default App
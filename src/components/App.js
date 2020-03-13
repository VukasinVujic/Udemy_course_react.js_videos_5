import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList'

class App extends React.Component {

    state = {
        videos: []
    }

    onTermSubmit = async (term) => {
        const response =  await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items
        })

    };
    
    render(){
        return (
            // ui container to push search bar a little bit from left and right margin of the screen
            <div className="ui container"> 
                <SearchBar onFormSubmit = {this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

export default App
import axios from 'axios'

const KEY = "AIzaSyA4S9FMLdzay0OLYD99uwtdWjAw9CohDNY"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
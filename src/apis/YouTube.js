import axios from 'axios';

const KEY = 'AIzaSyBNSkuY8gmDN9Wm-xpwyYOGsPCNAXKculE';

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});
import searchYouTube from '../lib/searchYouTube.js'
import VideoList from './VideoList.js';
import YOUTUBE_API_KEY from '../config/youtube.js'

var Search = () => {
  searchYouTube({query: 'cats', key: YOUTUBE_API_KEY, max: 5}, function(data) {
    VideoList(data.items)
  })
  
  return (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
)};
console.log('i am at search.js')

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
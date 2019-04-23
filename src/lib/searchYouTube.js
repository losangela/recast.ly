import YOUTUBE_API_KEY from '../config/youtube.js'

var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query || 'cats',
      maxResults: options.max || 5,
      key: YOUTUBE_API_KEY,
      type: 'video',
      part: 'snippet'
    },
    contentType: 'application/json',
    success: function() {
      console.log(this)
    },
    error: function () {  
      console.log(options)        
    }
  });
};

export default searchYouTube;

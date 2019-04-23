
const searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      type: 'video',
      part: 'snippet'
    },
    contentType: 'application/json',
    success: function(data) {
      callback(data);
    },
    error: function () {  
      console.log('fail')
    }
  });
};

console.log('here is the search result variable from searchyoutube.js')
// console.log(searchResult)

export default searchYouTube
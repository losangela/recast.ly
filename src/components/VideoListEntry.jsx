import VideoPlayer from './VideoPlayer.js';
import App from './App.js';


var VideoListEntry = (props) => {
  console.log('i am at videolistentry')
  console.log(props)
  return (
  <div className="video-list-entry media" onClick={videoClick(props.video)}>
    <div className="media-left media-middle">
    {/* <img className="media-object" src="https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/01-cat-training-IMG_3727.adapt.1900.1.jpg" alt="" /> */}
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      {/* <div className="video-list-entry-title">title</div>
      <div className="video-list-entry-detail">description</div> */}
      <div className="video-list-entry-title">{props.video.snippet.title}</div>
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div> 
  </div>
)};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;

import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import searchYouTube from '../lib/searchYouTube.js';
import exampleVideoData from '../data/exampleVideoData.js'
import YOUTUBE_API_KEY from '../config/youtube.js'

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><Search /></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><VideoPlayer /></div>
//       </div>
//       <div className="col-md-5">
//         <div><VideoList props = {exampleVideoData}/></div>
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      currentlyPlaying: exampleVideoData[0],
      items: exampleVideoData
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.videoClick = this.videoClick.bind(this);
  }

  videoClick() {
    
    console.log('you clicked me!')
  }



  componentDidMount() {
  //   searchYouTube({query: 'cats', key: YOUTUBE_API_KEY, max: 5}, function(data) {
  //     console.log(this)
  //     // this.setState({
  //     //   items: data.items
  //     // })
  //     console.log('inside componentdidmout')
  //     console.log(data.items)
  //     // VideoList(data.items)
  //   })
  console.log(this)
    this.isLoaded = true;
    // console.log(this)
  }


  render() {
    // const { error, isLoaded, items } = this.state;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } 
    // else if (!isLoaded) {
    //   return <div>whats the problem</div>;
    // } else {
    return (
      // <div>
      //   Hello from App!!!
      // </div>
      <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><Search /></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><VideoPlayer video = {this.state.items[0]} /></div>
        </div>
        <div className="col-md-5">
          <div><VideoList videos = {this.state.items}/></div>
        </div>
      </div>
    </div>
      )
    }
  }
// }
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;



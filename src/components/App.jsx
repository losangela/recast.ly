import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
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
      items: exampleVideoData,
      searchText: null
    };
    // console.log("constructor !!!!")
    this.videoClick = this.videoClick.bind(this);
    this.clickedSearch = this.clickedSearch.bind(this);
    this.userInput = this.userInput.bind(this);
  }

  videoClick(video) {
    this.setState({currentlyPlaying:video})

    // console.log('you clicked me in videolistentry!')
    // console.log(video)
  }

  clickedSearch() {
    if (this.state.searchText) {
      searchYouTube({query: this.state.searchText, key: YOUTUBE_API_KEY, max: 5}, (data) => {
        this.setState({items: data.items})
        this.setState({currentlyPlaying: data.items[0]})
      })
    }
    this.setState({})
    
    // console.log('you clicked me inside search!')
  }

  userInput(e) {
    // console.log(e.target.value)
    this.setState({searchText : e.target.value})
  }

  componentDidMount() {
    // console.log("comp did mount!")
    searchYouTube({query: 'cats', key: YOUTUBE_API_KEY, max: 5}, (data) => {
      this.setState({items: data.items})
    })

    // this.isLoaded = true;
    // console.log(this)
  }


  render() {
    // console.log("render!")
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
          <div><Search click = {this.clickedSearch} searchText={this.userInput} /></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><VideoPlayer video = {this.state.currentlyPlaying} /></div>
        </div>
        <div className="col-md-5">
          <div><VideoList click = {this.videoClick} videos = {this.state.items}/></div>
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



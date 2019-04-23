import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';

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
//         <div><VideoList /></div>
//       </div>
//     </div>
//   </div>
// );

// class App extends React.Component {
//   constructor(props) {
//     super(props)
    
//   }


//   render() {
//     return (
//     <div>
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
//         <div>{VideoList.bind}</div>
//       </div>
//     </div>
//   </div>
//     )
//   }
// }



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    this.number = 0;
  }

  componentDidMount() {
    
  }

  render() {
    console.log(this.state)
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search num = {this.number}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer prop = {this}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList prop = {this}/></div>
          </div>
        </div>
      </div>

        // <ul>
        //   {items.map(item => (
        //     <li key={item.name}>
        //       {item.name} {item.price}
        //     </li>
        //   ))}
        // </ul>
      );
    }
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;



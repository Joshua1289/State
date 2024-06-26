import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate software developer',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Software Engineer',
      },
      shows: false,
      mountedTime: new Date(),
      timeInterval: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timeInterval: Math.floor((new Date() - this.state.mountedTime) / 1000) });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  }

  render() {
    const { person, shows, timeInterval } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.profession}</p>
          </div>
        )}
        <div>Time since mounted: {timeInterval} seconds</div>
      </div>
    );
  }
}

export default App;

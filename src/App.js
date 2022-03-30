import React from 'react';
import Loader from 'react-spinners/PacmanLoader';
import './App.css';
import Db from './db/index'
import Spinners from './components/Loaders'
import PruebaLoading from './components/PruebaLoading';
import Cards from './components/Cards'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      datos: []
    }
  }
  componentDidMount() {
    let url = "https://pruebagcd.herokuapp.com/hoteles";
    fetch(url).then((res) => res.json()).then(res => {
      this.setState({ datos: res })
    }
    )
  }

  render() {
    if (this.state.datos.length !== 0) {
      return <Spinners />
    } else {
      return (<div className="row">
        {this.state.datos.map((h, index) => {
          return (
            <Cards h={h} index={index} />
          )
        })}

      </div>
      );
    }
  }
}

export default App;

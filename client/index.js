import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import CreateMovies from './components/CreateMovie.jsx';

class CreateMovies extends Component {
render(){
  return (
    <div stye="text-align:centre;">
      <h3>Hello NairobiJs</h3>
    </div>
  );
}
}

ReactDOM.render(<CreateMovies/> , document.getElementById('root'));

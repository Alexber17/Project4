import React, { Component } from 'react';


class Playlist extends Component {

    	
    state = {
        notices: []
    }

    componentDidMount() {
        this.getNotices()
    }


    getNotices = () =>{
        fetch('http://localhost:3000/songs')
            .then(response => response.json())
            .then(json => console.log(json))
        .catch(error => console.error(error))
    }

    render () {
      return (
        <h1>Playlist</h1>
      )
    }
  }

  export default Playlist;
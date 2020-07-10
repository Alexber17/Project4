import React, { Component} from 'react';

import PlaylistSong from './PlaylistSong.js'





class Playlist extends Component {
 	
    state = {
        playlist: [],
        show:true
    }
    
    
    componentDidMount() {
        this.getPlaylist()
    }
    getPlaylist = () =>{
        fetch('http://localhost:3000/playlists')
            .then(response => response.json())
            .then(json => this.setState({playlist: json}))
            .then(playlist => console.log(this.state.playlist))
        .catch(error => console.error(error))
    }


    render () {
      return (

        <div>
           <h1>Playlist</h1>
          <ul>
          {this.state.playlist.length > 0 && this.state.playlist.map((list, index) => {
              return (
              <div>
              <button onClick={() => this.setState({ shown: !this.state.shown })} >{list.name}</button>
              {this.state.shown ? <PlaylistSong item={list}/> : ''}  
               </div>
              )
          })}
               
               
               

        </ul>
        </div>
       
      )
    }
  }

  export default Playlist;
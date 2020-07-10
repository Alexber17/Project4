import React, { Component} from 'react';

import PlaylistSong from './PlaylistSong.js'





class Playlist extends Component {
 	
    state = {
        playlist: [],
        nameplay:'',
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
    handleChange=(event)=>{
      this.setState({[event.target.id]:event.target.value})
  }
    handleSubmit= event =>{
      event.preventDefault();
      fetch('http://localhost:3000/playlists',{
          body: JSON.stringify({
          name:this.state.nameplay}),
          method:"POST",
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            }
      }).then(response=> response.json())
      .then(newTodo=>{
        this.setState({
          playlist:[newTodo, ...this.state.playlist],
            name:''
            
        })
    })
    }






    render () {
      return (

        <div>
          <div>
            <h1>  Create Playlist </h1>
            <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <lable htmlFor='name' className='col-sm-1 col-form-label' >Description:</lable>
                        <div class="col-sm-11">
                            <input type='text'  required value={this.state.nameplay} className='form-control' id='nameplay' onChange={this.handleChange}/>
                        </div>
                    </div> 
                    <button type="submit" class="btn btn-primary"> Create </button>
            </form>

          </div>

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
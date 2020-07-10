import React, { Component} from 'react';

import PlaylistSong from './PlaylistSong.js'





class Playlist extends Component {
 	
    state = {
        playlist: [],
        nameplay:'',

        artist_name:'',
        title:'',
        url:'',
        songPlay:'',
        songId:'',
        

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
            name:this.state.nameplay
          }),
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

    handleSubmitSong= event =>{
      event.preventDefault();
      fetch('http://localhost:3000/songs',{
          body: JSON.stringify({
          artist_name :this.state.artist_name,
          title:this.state.title,
          url:this.state.url,
          playlist_id:this.state.songPlay
         }),
          method:"POST",
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            }
      }).then(response=> response.json())
        .then(json=> this.setState({songId:json.id}))
        .then(
          fetch('http://localhost:3000/ledgers',{
            body: JSON.stringify({
            song_id: this.state.songId,
            playlist_id:this.state.songPlay
           }),
            method:"POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              }
        })
        )
      .then(newTodo=>{
        this.setState({
          // playlist:[newTodo, ...this.state.playlist],
          artist_name:'',
          title:'',
          url:'',
          songId:'',
          playlist_id:''


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
          <div>
            <h1>  Add Song </h1>
            <form onSubmit={this.handleSubmitSong}>
                    <div className="form-group row">
                        <lable htmlFor='name' className='col-sm-1 col-form-label' >artist_name:</lable>
                        <div class="col-sm-11">
                            <input type='text'  required value={this.state.artist_name} className='form-control' id='artist_name' onChange={this.handleChange}/>
                        </div>

                        <lable htmlFor='name' className='col-sm-1 col-form-label' >title:</lable>
                        <div class="col-sm-11">
                            <input type='text'  required value={this.state.title} className='form-control' id='title' onChange={this.handleChange}/>
                        </div>
                        <lable htmlFor='name' className='col-sm-1 col-form-label' >url:</lable>
                        <div class="col-sm-11">
                            <input type='text'  required value={this.state.url} className='form-control' id='url' onChange={this.handleChange}/>
                        </div>

                        <lable htmlFor='name' className='col-sm-1 col-form-label' >Playlist:</lable>
                        <div class="col-sm-11">
                       
                            {/* <input    required  className='form-control'  onChange={this.handleChange}/> */}
                            <input type='text'  required value={this.state.songPlay} className='form-control' id='songPlay' />
                            <select type='text' id='songPlay' name="pets" onChange={this.handleChange}>
                                <option value="">--Please choose an option--</option>
                                {this.state.playlist.length > 0 && this.state.playlist.map((list, index) => {
                                        return (
                                        <>
                                      <option value={list.id}>{list.name}</option>
                                      </>
                                        )
                                    })}
    
                            </select>
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
              {/* <button onClick={() => thiisshow } >{list.name}</button> */}
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
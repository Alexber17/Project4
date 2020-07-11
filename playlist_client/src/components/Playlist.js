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
            // .then(playlist => console.log(this.state.playlist))
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

    handleSubmitSong = event =>{
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
        // .then(json=> console.log(json.id))
        .then(()=>{
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
      })
      .then(newTodo=>{
				let currentIndex;
				const currentPlaylist = this.state.playlist.filter((list,index) => {
				if (list.id == this.state.songPlay){
         currentIndex = index
          return true
         } else {
          return false
        }
        })
        console.log(currentPlaylist)
        console.log(currentIndex)
				currentPlaylist[0].songs.push({artist_name :this.state.artist_name,
                    title:this.state.title,
                    url:this.state.url})
				const playlist1 = this.state.playlist.slice(0,currentIndex)
        const playlist2 = this.state.playlist.slice(currentIndex)
				playlist2[0] = currentPlaylist[0]
        this.setState({
          playlist:[...playlist1, ...playlist2],
          artist_name:'',
          title:'',
          url:'',
          songId:'',
        })
    })
    }

    

    handleClick = event => {
   
      this.setState({ shown: !this.state.shown })
      
    }
    




    render () {
      return (

        <div>
          <div>
            <h1>  Create Playlist </h1>
            <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        
                        <div className="col-sm-11">
                            <input type='text'  required value={this.state.nameplay} className='form-control' id='nameplay' onChange={this.handleChange}/>
                        </div>
                    </div> 
                    <button type="submit" className="btn btn-primary"> Create </button>
            </form>
          </div>
          <div>
            <h1>  Add Song </h1>
            <form onSubmit={this.handleSubmitSong}>
                    <div className="form-group row">
                        <label htmlFor='name' className='col-sm-1 col-form-label' >Artist:</label>
                        <div className="col-sm-11">
                            <input type='text'  required value={this.state.artist_name} className='form-control' id='artist_name' onChange={this.handleChange}/>
                        </div>

                        <label htmlFor='name' className='col-sm-1 col-form-label' >Title:</label>
                        <div className="col-sm-11">
                            <input type='text'  required value={this.state.title} className='form-control' id='title' onChange={this.handleChange}/>
                        </div>
                        <label htmlFor='name' required className='col-sm-1 col-form-label' >Url:</label>
                        <div className="col-sm-11">
                            <input type='text'   value={this.state.url} className='form-control' id='url' onChange={this.handleChange}/>
                        </div>

                        <label htmlFor='name' className='col-sm-1 col-form-label' >Playlist:</label>
                        <div className="col-sm-11">
                       
                            {/* <input    required  className='form-control'  onChange={this.handleChange}/> */}
                            {/* <input type='text'  required className='form-control' id='songPlay' /> */}
                            <select type='text' id='songPlay'  value={this.state.songPlay}  onChange={this.handleChange}>
                                <option >--Please choose an option--</option>
                                {this.state.playlist.length > 0 && this.state.playlist.map((list, index) => {

                                        return (  <option key={list.id} value={list.id}>{list.name}</option>  ) })}
    
                            </select>
                        </div>

                    </div> 
                    <button type="submit" className="btn btn-primary"> Create </button>
            </form>
          </div>


 

           <h1>Playlist</h1>
          <ul>
          {this.state.playlist.length > 0 && this.state.playlist.map((list, index) => {
              return (
              <div key={Math.random()*1000} >
              <button onClick={(event)=> this.handleClick() } >{list.name}</button>
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
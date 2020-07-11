import React, { Component } from 'react';



class PlaylistSong extends Component{
    state = {

        show:true
    }
    render(){
        return(
           <div>
                <h1>{this.props.item.name}</h1>

                {this.props.item.songs.length > 0 && this.props.item.songs.map((song, index) => { 
                  
                    return(
                        <div key={Math.random()*1000} className='join'>
                        <h3>Title:{song.title}</h3>
                        <h4>Artist:{song.artist_name}</h4>
                        </div>
                    )
                 })}
           </div>
           
           
        )
    }
}

export default PlaylistSong;
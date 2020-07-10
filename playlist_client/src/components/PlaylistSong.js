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
                        <div>
                        <p>Artist:{song.artist_name}</p>
                        <p>Title:{song.title}</p>
                        </div>
                    )
                 })}
           </div>
           
           
        )
    }
}

export default PlaylistSong;
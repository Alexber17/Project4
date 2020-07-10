import React, { Component } from 'react';



class PlaylistSong extends Component{
    render(){
        return(
           <div>
                <h1>{this.props.item.id}</h1>
           </div>
           
           
        )
    }
}

export default PlaylistSong;
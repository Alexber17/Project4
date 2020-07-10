rails new playlist_api --api --skip-git -d postgresql 


rails db:create


rails generate scaffold Playlist name id:integer 

rails generate scaffold Songs title artist_name url

rails g scaffold ledger playlist:references song:references 
cd songs_app_api

rails s

--------------------------------------------------------------------
npx create-react-app playlist_client

cd playlist_client

rm -rf .git

mkdir src/components

touch src/components/Playlist.js

npm start
---------------------------------------------------------------------

# Add a song in playlist
ap Ledger.create(playlist_id:1,song_id:3)

# Show the elemet of the playlist 1
ap Playlist.find(1).songs
---------------------------------------------------------------------
# Show playlist of that elemen belong to  

ap Song.find(4).playlists
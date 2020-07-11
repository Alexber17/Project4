# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Song.create([

    {
        "title": "One",
        "artist_name": "U2"
    },
    {
        "title": "Billie Jean",
        "artist_name": "Michael Jackson"
    },
    {
        "title": "Like A Rolling Stone",
        "artist_name": "Bob Dylan"
    },
    {
        "title": "Don't Stop Believin'",
        "artist_name": "Journey"
    },
    {
        "title": "You Shook Me All Night Long",
        "artist_name": "AC/DC"
    },
    {
        "title": "Love Shack",
        "artist_name": "B-52's"
    },
    {
        "title": "Thriller",
        "artist_name": "Michael Jackson	"
    },
    {
        "title": "I Wanna Dance With Somebody (Who Loves Me)",
        "artist_name": "Whitney Houston"
    },
    {
        "title": "Girls Just Want To Have Fun",
        "artist_name": "Cyndi Lauper"
    },
    {
        "title": "Summer Of 69",
        "artist_name": "Bryan Adams"
    },


])


Playlist.create([
    {
        "name": "The Top 5"
    },
    {
        "name": "The Top 10 80's"
    }
])

Ledger.create([
    {
        "playlist_id":2,
        "song_id":1
    },
    {
        "playlist_id":2,
        "song_id":2
    },
    {
        "playlist_id":2,
        "song_id":3
    },
    {
        "playlist_id":2,
        "song_id":4
    },
    {
        "playlist_id":1,
        "song_id":5
    },
    {
        "playlist_id":1,
        "song_id":6
    },
    {
        "playlist_id":1,
        "song_id":7
    },
    {
        "playlist_id":1,
        "song_id":8
    },

   
])

puts "Seeded database"
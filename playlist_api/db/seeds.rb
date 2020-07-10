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


])


Playlist.create([

    {
        "name": "The Top 50"
    },

    {
        "name": "The Top 10 80's"
    }



])

puts "Seeded database"
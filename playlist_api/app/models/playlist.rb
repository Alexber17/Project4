class Playlist < ApplicationRecord
    has_many :ledgers
    has_many :songs, through: :ledgers
end

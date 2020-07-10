class Song < ApplicationRecord
    has_many :ledgers
    has_many :playlists, through: :ledgers
end

var playlist = {
  artist1: "song1",
  artist2: "song2",
  artist3: "song3"
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

  updatePlaylist(Slowdive, "Phil Ochs", "My Bloody Valentine")

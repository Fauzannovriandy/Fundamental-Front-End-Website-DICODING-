class DataSource {
  static searchSong(keyword) {
    return new Promise((resolve, reject) => {

      fetch(`https://shazam.p.rapidapi.com/charts/track?locale=id-ID&pageSize=20`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b6de45aee7mshdc19f3c0f57a2ebp1b2cd3jsnb3cac1d92dc1',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    }).then(response => response.json()).then((data) => {
      const filteredSongs = data.tracks.filter(song => song.title.toUpperCase().includes(keyword.toUpperCase()));
      if (filteredSongs.length) {
        resolve(filteredSongs);
      } else {
        reject(`${keyword} is not found`);
      }
    })
    });
  }
}

export default DataSource;

import '../component/song-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const SongListElement = document.querySelector('song-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchSong(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    SongListElement.songs = results;
  };

  const fallbackResult = message => {
    SongListElement.renderError(message);
  };


  window.addEventListener('DOMContentLoaded', onButtonSearchClicked);
  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;

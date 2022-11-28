class SongItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set song(song) {
    this._song = song;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          overflow: hidden;
          background-color: #141E61;
          color: white;    
        }
        .song-cover-art {
          width: 100%;
          max-height: 500px;
          object-position: center;
        }
        .song-info {
          padding: 24px;
        }
        .song-info > h2 {
          font-weight: lighter;
        }
        .song-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      
      <img class="song-cover-art" src="${this._song.images.coverart}" alt="Fan Art">
      <div class="song-info">
        <h2>${this._song.title} - ${this._song.subtitle}</h2>
        <audio controls>
          <source src="${this._song.hub.actions[1].uri}" type="audio/x-m4a" class="audio-preview">
        Your browser does not support the audio element.
        </audio>
        <h3>Get it on digital platform!</h3>
        <p>Shazam:<br> <a href="${this._song.url}">${this._song.url}</a></p>
        <p>Apple Music:<br> <a href="${this._song.hub.options[0].actions[0].uri}">${this._song.hub.options[0].actions[0].uri}</a></p>
        <p>Snapchat:<br> <a href="${this._song.share.snapchat}">${this._song.share.snapchat}</a></p>
      </div>
    `;
  }
}

customElements.define('song-item', SongItem);

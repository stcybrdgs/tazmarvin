import './RadioPlayer.scss'

const RadioPlayer = () => {
  return (
    <div className='wrapper'>
      <h1>Radio Player</h1>
      <div className='player-section'>
        <div className='player-container'>
          {/* <!-- Image --> */}
          <div className='img-container'>
            <img src='' alt='Album Art' />
          </div>
          {/* <!-- Dashboard --> */}
          <h2 id='album' title='Title'>
            Select an album or playlist
          </h2>
          <h3 id='song' title='Artist'>
            Select a song
          </h3>
          <div className='dashboard'>
            <audio src='' controls></audio>
            {/* <!-- Progress --> */}
            <div className='progress-container' id='progress-container'>
              <div className='progress' id='progress'></div>
              <div className='duration-wrapper'>
                <span id='current-time'></span>
                <span id='duration'></span>
              </div>
            </div>
            {/* <!-- Controls --> */}
            <div className='player-controls'>
              <i className='fa-solid fa-shuffle' title='Shuffle'></i>
              <i className='fas fa-backward' id='prev' title='Previous'></i>
              <i className='fas fa-play main-button' id='play' title='Play'></i>
              <i className='fas fa-forward' id='next' title='Next'></i>
              <i className='fa-solid fa-repeat' title='Repeat'></i>
            </div>
          </div>
        </div>
        <div className='song-list'>
          {/*           
          <div className="song-entry">
            <div className="song">
              <span className="song-control">
                <i className="fas fa-play" title="Play"></i>
              </span>
              <span className="song-name">Song one</span>
            </div>
            <span className="song-details">
              <span className="song-length">5:38</span>
              <span className="song-menu">
                <i className="fa-solid fa-ellipsis"></i>
              </span>
            </span>
          </div> 
           */}
        </div>
      </div>
    </div>
  )
}

export default RadioPlayer


function App () {
  return (
    <div className='container'>

      <div className='box'>
        <div className='box-body'>
          <div className='box-avatar'>
            <img src='https://unavatar.io/twitter/midudev' alt='midudev' />
          </div>
          <div className='box-compose'>
            <form>
              <textarea
                placeholder='¿Qué está pasando?'
                className='box-textbox'
                onKeyUp={() => {}}
                onClick={() => {}}
              />
            </form>

          </div>
        </div>
        <div className='box-footer'>
          <button type='submit' className='tweet-button'>
            Twittear
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

function App () {
  return (
    <main className='container'>

      <section className='box'>
        <div className='box-body'>

          <aside className='box-avatar'>
            <img src='https://unavatar.io/twitter/midudev' alt='midudev' />
          </aside>

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

        <footer className='box-footer'>
          <button type='submit' className='tweet-button'>
            Twittear
          </button>
        </footer>

      </section>
    </main>
  )
}

export default App

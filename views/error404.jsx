const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src='/images/doggo.jpg' alt='Fruit shake' />
                <div>
                    Photo by <a href='https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Charles Deluvio</a> on <a href='https://unsplash.com/photos/K4mSJ7kc0As'>Unsplash</a>
                </div>
            </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404

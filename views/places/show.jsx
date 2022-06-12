const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className='row'>
              <div className='col-sm-6'>
                <img src={data.place.pic} alt={data.place.name} />
              </div>
            </div>
            
            <h2>Description</h2>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">
                           Delete
                  </button>
            </form>   
          </main>
        </Def>
    )
}

module.exports = show

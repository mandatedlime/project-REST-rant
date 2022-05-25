const React = require('react')
const Def = require('../default')

function index (data) {
   let placesFormatted = data.places.map ( (place) => {
       return (
           <div>
               <h2>{place.name}</h2>
               <img src={place.pic} alt={place.name}></img>
           </div>
       )
   })
    return (
        <Def>
            <main>
                <h1>HOMEPAGE</h1>
                <p>This is my HOMEPAGE. There are many like it, but this one is mine.</p>
                {placesFormatted}
            </main>
            
        </Def>
    )
}

module.exports = index

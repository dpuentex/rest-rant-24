const React = require ('react')
const Def = require('./layouts/Default')



function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                  <img src="http://placekitten.com/250/250" alt="Chia Fruit Shake" />
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home

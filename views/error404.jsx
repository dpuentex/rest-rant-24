const React = require('react')
const Def = require('./Default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: Page Not Found</h1>
                <p>Opps, sorry we cant find this page!!!!</p>
            </main>
        </Def>
    )
}

module.exports = error404
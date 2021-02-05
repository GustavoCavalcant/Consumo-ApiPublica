const fetch = require('node-fetch')

module.exports = async function buscaDog(dog){
    const response = await fetch(`https://dog.ceo/api/breed/${dog}/images/random`)
    const json = await response.json()

    return json
}
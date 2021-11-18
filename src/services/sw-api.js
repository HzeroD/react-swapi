const baseUrl = 'https://swapi.dev'

export function getAllStarships() {
    return fetch(`${baseUrl}/api/starships`)
    .then(res => res.json())
}

export function getStarshipDetails(shipURL) {
    return fetch(`${shipURL}`)
    .then(res => res.json())
}
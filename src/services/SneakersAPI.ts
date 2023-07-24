import RequestSneakersType from "../types/RequestSneakersType"

async function getSneakers(url: string): Promise<RequestSneakersType> {
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }
    return await fetch(url, options)
    .then(response => response.json())
    .then(result => result)
}

export { getSneakers }
import RequestSneakersType from "../types/RequestSneakersType"

async function getSneakers(): Promise<RequestSneakersType> {
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }
    return await fetch('http://127.0.0.1:8000/api/v1/sneakers/', options)
    .then(response => response.json())
    .then(result => result)
}

export { getSneakers }
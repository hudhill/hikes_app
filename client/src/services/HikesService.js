const baseURL = 'http://localhost:5000/api/hikes/'

export const getHikes = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postHike = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteHike = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}
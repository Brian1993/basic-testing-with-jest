const swapi = 'https://swapi.co/api/people'

const getPeople = async (fetch) => {
  const getRequest = await fetch(swapi)
  const data = await getRequest.json()
  return {
    count: data.count,
    result: data.results
  }
}

const getPeoplePromise = fetch => {
  return fetch(swapi)
    .then(res => res.json())
    .then(data => {
      return {
      count: data.count,
      result: data.results
  }})
}

module.exports = {
  swapi,
  getPeople,
  getPeoplePromise
}
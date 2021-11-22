const url = `http://localhost:4000/api/v1`

class PlaceModel {
    static all = () => {
        return fetch(`${url}/places`).then(res => res.json())
      }

    static show = (id) => {
        return fetch(`${url}/places/${id}`).then(res => res.json())
    }

    static create = (placeData) => {
        return fetch(`${url}/places`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(placeData)
        })
          .then(res => res.json())
      }
    }

export default PlaceModel

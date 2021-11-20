const url = `http://localhost:4000/api/v1`

class GameModel {
    static all = () => {
        // the fetch API will not parse JSON in the response automatically so we handle it in the first .then()
        return fetch(`${url}/games`).then(res => res.json())
      }

    static show = (id) => {
        return fetch(`${url}/games/${id}`).then(res => res.json())
    }

    static create = (gameData) => {
        return fetch(`${url}/games`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(gameData)
        })
          .then(res => res.json())
      }
    }

export default GameModel

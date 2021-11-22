const url = `http://localhost:4000/api/v1`

class SpeedtestModel {
    static all = () => {
        return fetch(`${url}/speedtests`).then(res => res.json())
      }

    static show = (id) => {
        return fetch(`${url}/speedtests/${id}`).then(res => res.json())
    }

    static create = (speedtestData) => {
        return fetch(`${url}/speedtests`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(speedtestData)
        })
          .then(res => res.json())
      }
    }

export default SpeedtestModel

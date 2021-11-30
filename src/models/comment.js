const url = `http://localhost:4000/api/v1`

class CommentModel {
    static all = (place) => {
        return fetch(`${url}/comments`, {
            headers: {
                "placeId": place.placeId
            },
        })
            .then(res => res.json())
    }

    static show = (id) => {
        return fetch(`${url}/comments/${id}`).then(res => res.json())
    }

    static create = (commentData) => {
        return fetch(`${url}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentData)
        })
            .then(res => res.json())
    }
}

export default CommentModel

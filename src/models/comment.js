const url = `https://backbone-welsh.herokuapp.com/api/v1`

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

    static update = (commentData, props) => {
        return fetch(`${url}/comments/${props}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentData)
        })
            .then(res => res.json())
    }

    static delete = (commentData) => {
        return fetch(`${url}/comments/${commentData}`, {
            method: "DELETE",}
        )
    }
}

export default CommentModel

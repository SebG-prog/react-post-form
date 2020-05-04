import React from 'react'
import axios from 'axios'

class FormMovie extends React.Component {

    state = {
        title: "",
        poster: "",
        comment: ""
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm = (e) => {
        e.preventDefault()
        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        axios.post(url, this.state)
            .then(res => res.data)
            .then(res => {
                alert(`Favorite movie added with ID ${res.id}!`)
            })
            .catch(e => {
                console.error(e);
                alert(`Something went wrong: ${e.message}`)
            })
    }

    render() {
        return (
            <div className="FormMovie">
                <h1>What's your favorite movie</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Information</legend>
                        <div className="form-data">
                            <label htmlFor="title">Movie title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                onChange={this.onChange}
                                value={this.state.title}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="poster">Movie poster's URL</label>
                            <input
                                type="text"
                                id="poster"
                                name="poster"
                                onChange={this.onChange}
                                value={this.state.poster}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="comment">Your comment on the movie</label>
                            <input
                                type="textarea"
                                id="comment"
                                name="comment"
                                onChange={this.onChange}
                                value={this.state.comment}
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Send" />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default FormMovie
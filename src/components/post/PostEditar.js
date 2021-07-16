import React from 'react'
import posts from '../../data/posts_data'
import { Link } from 'react-router-dom'

class PostEditar extends React.Component {
    constructor(props) {
        super(props);

        props.match.params.id = parseInt(props.match.params.id)

        this.post = posts.find(function (post) {
            return post.id === props.match.params.id;
        });

        this.post.url = '/posts/' + this.post.id;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="mt-5">
                            <h1>Post</h1>

                            <hr />

                            <div className="form-group">
                                <input type="text" name="title" defaultValue={ this.post.title } className="form-control" />
                            </div>

                            <br />

                            <div className="form-group">
                                <textarea rows="3" name="content" className="form-control" defaultValue={ this.post.content }></textarea>
                            </div>

                            <br />

                            <div className="text-center">
                                <Link to={ this.post.url } className="btn btn-outline-success">Salvar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostEditar;
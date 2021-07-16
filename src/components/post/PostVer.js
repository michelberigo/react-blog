import React from 'react'
import posts from '../../data/posts_data'
import { Link } from 'react-router-dom'

class PostVer extends React.Component {
    constructor(props) {
        super(props);

        props.match.params.id = parseInt(props.match.params.id)

        this.post = posts.find(function (post) {
            return post.id === props.match.params.id;
        });

        this.post.urlEditar = '/posts/' + this.post.id + '/edit';
    }

    postExcluir() {
        window.confirm('Você deseja realmente excluir esse post?');
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="mt-5">
                            <h1>Post</h1>

                            <hr />

                            <h3>{ this.post.title }</h3>

                            <p>{ this.post.content }</p>

                            <div>
                                <Link to={ this.post.urlEditar } className="btn btn-outline-primary" style={{ "marginRight": "5px" }}>Editar</Link>
                                <button type="button" className="btn btn-outline-danger" onClick={ this.postExcluir }>Excluir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostVer;
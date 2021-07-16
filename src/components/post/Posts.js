import React from 'react'
import posts from '../../data/posts_data'
import { Link } from 'react-router-dom'

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.posts = posts;

        this.posts.forEach(function (post) {
            post.url = '/posts/' + post.id; 
        });
    }

    renderPost(post) {
        return (
            <div className="mb-5" key={ post.id }>
                <h1>{ post.title }</h1>
                <Link to={ post.url }>Link para abrir</Link>
                <p>{ post.content }</p>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="mt-5">
                            <h1>Todas as Postagens</h1>

                            <Link to='posts/create' className="btn btn-outline-success">Novo Post</Link>

                            <hr />

                            { this.posts.map(this.renderPost) }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts;
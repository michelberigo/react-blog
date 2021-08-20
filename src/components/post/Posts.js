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
            <div className="card mb-3" key={ post.id }>
                <div className="card-body">
                    <h5 className="card-title">{ post.title }</h5>

                    <p className="card-text">{ post.content }</p>
                    
                    <Link to={ post.url }>Ver Post</Link>
                </div>
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
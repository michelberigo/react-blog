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

        this.state = {
            id: this.post.id,
            title: this.post.title,
            content: this.post.content
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();

        console.log('ID: ' + this.state.id);
        console.log('Title: ' + this.state.title);
        console.log('Content: ' + this.state.content);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="mt-5">
                            <h1>Editar Post</h1>

                            <hr />

                            <form action="" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="text" name="title" defaultValue={ this.post.title } className="form-control" onChange={this.handleChange} />
                                </div>

                                <br />

                                <div className="form-group">
                                    <textarea rows="3" name="content" className="form-control" defaultValue={ this.post.content } onChange={this.handleChange}></textarea>
                                </div>

                                <br />

                                <div className="text-center">
                                    <Link to={ this.post.url } className="btn btn-outline-success">Salvar</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostEditar;
import React from 'react'

class PostCriar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: '',
            content: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();

        console.log('Title: ' + this.state.title);
        console.log('Content: ' + this.state.content);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="mt-5">
                            <h1>Criar Post</h1>

                            <hr />

                            <form action="" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="text" name="title" className="form-control" placeholder="Title" required onChange={this.handleChange} />
                                </div>

                                <br />

                                <div className="form-group">
                                    <textarea rows="3" name="content" className="form-control" placeholder="Content" required onChange={this.handleChange}></textarea>
                                </div>

                                <br />

                                <div className="text-center">
                                    <button type="submit" className="btn btn-outline-success">Salvar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCriar;
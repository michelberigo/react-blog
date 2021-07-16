import React from 'react'
import { Link } from 'react-router-dom'

class PostCriar extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="mt-5">
                            <h1>Post</h1>

                            <hr />

                            <div className="form-group">
                                <input type="text" name="title" className="form-control" />
                            </div>

                            <br />

                            <div className="form-group">
                                <textarea rows="3" name="content" className="form-control" ></textarea>
                            </div>

                            <br />

                            <div className="text-center">
                                <Link to='/' className="btn btn-outline-success">Salvar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCriar;
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class Question extends Component {
    render() {
        return (
            <div>
                <div className="d-flex shadow p-3 mb-1 mt-4 bg-white rounded">
                    <h4 className="p-2 flex-grow-1 text-primary">Where is this bootcamp taking place?</h4>
                    <Button>Add Comment</Button>
                </div>
            </div>
        )
    }
}

export default Question;
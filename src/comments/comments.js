import React , { Component} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../components/header'
import Question from './question'
import CommentListList from './comment_list'

class Comment extends Component{
    render(){
        return(
            <div>
                <Header />
                <Row>
                    <Col sm={3}></Col>

                    <Col sm={6} className="middle-panel">
                        <Question />
                        <CommentListList />
                    </Col>

                    <Col sm={3}></Col>
                </Row>
            </div>
        )
    }
}

export default Comment;
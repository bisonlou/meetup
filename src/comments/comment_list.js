import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'

class CommentList extends Component {
    render() {
        return (
            <Container >
                <div className="shadow p-3 mb-1 mt-4 bg-white rounded">
                    <div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <hr />
                    <div className="d-flex">
                        <div>
                            modified 15 March 2019
                        </div>                        
                        <div className="ml-auto text-primary">
                            james mudidi
                        </div>
                    </div>
                </div>
                
                <div className="shadow p-3 mb-1 mt-4 bg-white rounded">
                    <div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    <hr />
                    <div className="d-flex">
                        <div>
                            modified 17 February 2019
                        </div>                        
                        <div className="ml-auto text-primary">
                            Zack Atama
                        </div>
                    </div>
                </div>

                <div className="shadow p-3 mb-1 mt-4 bg-white rounded">
                    <div>
                        <p>
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form,
                            by injected humour, or randomised words which don't look 
                            even slightly believable.
                        </p>
                    </div>
                    <hr />
                    <div className="d-flex">
                        <div>
                            modified 03 January 2019
                        </div>                        
                        <div className="ml-auto text-primary">
                            Arthur Kalule
                        </div>
                    </div>
                </div>

            </Container >

        )
    }
}

export default CommentList
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


class MeetupSummaryPanel extends Component {
    render() {
        return (
            <Row className="shadow p-3 mb-1 mt-2 bg-white rounded gradient">
                <Col xs={8} className="pl-5" >
                    <Row className="mb-4 mt-4">
                        <h4 className=" ml-3 welcome">Hello Bison</h4>
                    </Row>
                    <Row className="mb-4">
                        <Col sm={2}>
                                <div className="circle red">3</div>
                        </Col>
                        <Col sm={4}>
                            <h4>Upcoming meetings</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Form inline>
                            <FormControl type="text" placeholder="Search Meetings" className="mr-sm-2" />
                            <Button variant="outline-primary">Search</Button>
                        </Form>
                    </Row>
                </Col>

                <Col sm={4}>
                </Col>
            </Row>
        )
    }
}

export default MeetupSummaryPanel;
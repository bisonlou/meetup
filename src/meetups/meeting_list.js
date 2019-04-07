import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'


class MeetingList extends Component {
    render() {
        return (
            <div>
                <Row className="shadow p-3 mb-1 mt-4 bg-white rounded " >
                    <Col xs={2}>
                        <div className="radial-gradient-1"></div>
                    </Col>

                    <Col xl={10}>
                        <div className="d-flex">
                            <div className="mr-auto text-primary font-weight-bold">Bootcamp 17 Meeting</div>
                            <div>17th March 2020</div>
                        </div>
                        <div className="d-flex">
                            <div>Meeting to plan and budget for upcoming bootcamp 17</div>
                        </div>
                        <div className="d-flex">
                            <div className="p-2">7 Members</div>
                            <div className="p-2">17 Questions</div>
                            <div className="ml-auto pt-2 pr-1"><Badge pill variant="danger">Bootcamp</Badge></div>
                            <div className="pt-2 pr-1"><Badge pill variant="success">Planning</Badge></div>
                            <div className="pt-2 pr-1"><Badge pill variant="warning">Budget</Badge></div>
                        </div>
                    </Col>
                </Row>

                <Row className="shadow p-3 mb-1 mt-4 bg-white rounded " >
                    <Col xs={2}>
                        <div className="radial-gradient-2"></div>
                    </Col>

                    <Col xl={10}>
                        <div className="d-flex">
                            <div className="mr-auto text-primary font-weight-bold">Sprint Planning Meeting</div>
                            <div>4th June 2020</div>
                        </div>
                        <div className="d-flex">
                            <div>Team dojo sprint planning meeting</div>
                        </div>
                        <div className="d-flex">
                            <div className="p-2">6 Members</div>
                            <div className="p-2">7 Questions</div>
                            <div className="ml-auto pt-2 pr-1"><Badge pill variant="primary">Sprint</Badge></div>
                            <div className="pt-2 pr-1"><Badge pill variant="success">Planning</Badge></div>
                        </div>
                    </Col>
                </Row>

                <Row className="shadow p-3 mb-1 mt-4 bg-white rounded " >
                    <Col xs={2}>
                        <div className="radial-gradient-3"></div>
                    </Col>

                    <Col xl={10}>
                        <div className="d-flex">
                            <div className="mr-auto text-primary font-weight-bold">D1 Ring Ceremony Planning</div>
                            <div>24th June 2020</div>
                        </div>
                        <div className="d-flex">
                            <div>Cohort 17 D1 graduation planning meeting</div>
                        </div>
                        <div className="d-flex">
                            <div className="p-2">12 Members</div>
                            <div className="p-2">15 Questions</div>
                            <div className="ml-auto pt-2 pr-1"><Badge pill variant="info">Ring</Badge></div>
                            <div className="pt-2 pr-1"><Badge pill variant="success">Planning</Badge></div>
                        </div>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default MeetingList;
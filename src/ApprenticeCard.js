import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem, CardLink } from 'reactstrap'
import { ReactComponent as Check } from './icons/AvailabilityCheckIcon.svg'
import { ReactComponent as Cross } from './icons/AvailabilityCrossIcon.svg'


export default function ApprenticeCard({ blue }) {
    console.log('blue: ', blue)
    return (
        <Card
            className={`${blue ? 'blue' : ''}`}
        >

            <CardBody>
                <CardSubtitle>
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="rounded-circle m-3" style={{ width: 70 }}
                        alt="Avatar" />
                    <h1 className="d-inline-block">Richard Saunders</h1>
                    {/* <p className="d-inline-block ml-4 pl-5">Analytics</p> */}
                </CardSubtitle>
                <CardText>
                    This is some text within a card body.his is some text within a card body.his is some text within a card body.his is some text within a card body.
                </CardText>
                <h4>
                    Availability
                </h4>
                <CardText className="d-flex justify-content-between">
                    {/* <div className="row"> */}
                    <div className="availability">
                        <Check /><br />Mon
                    </div>
                    <div className="availability">
                        <Check /><br />Tue
                    </div>
                    <div className="availability">
                        <Check /><br />Wed
                    </div>
                    <div className="availability">
                        <Cross /><br />Thu
                    </div>
                    <div className="availability">
                        <Check /><br />Fri
                    </div>
                    <div className="availability">
                        <Check /><br />Sat
                    </div>
                    <div className="availability">
                        <Check /><br />Sun
                    </div>
                    {/* </div> */}
                </CardText>
            </CardBody>
        </Card>
    )
}

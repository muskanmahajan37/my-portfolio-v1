import React, { useState, useEffect } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import './projectbuilt.css'
import githubLogo from '../../images/github-white.png'

export default function ProjectBuilt() {
    const [showResults, setShowResults] = useState(false)
    const clickHandler = () => setShowResults(true)
        
    return (
        <Container style={{padding: "0 0 200px"}}>
            <h2 className="text-center" style={{ color: "#79A8AF" }}>Project I've Built</h2>
            <div className="card-list">
                <Card style={{ width: '18rem', cursor: 'nesw-resize' }}>
                    <Card.Body>
                        <Card.Title>Client's Portfolio</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="dark"><a href=""><img src={githubLogo} alt="" /></a></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', cursor: 'nesw-resize' }}>
                    <Card.Body>
                        <Card.Title>Todo List</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="dark"><a href=""><img src={githubLogo} alt="" /></a></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', cursor: 'nesw-resize' }}>
                    <Card.Body>
                        <Card.Title>Expand Card</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="dark"><a href=""><img src={githubLogo} alt="" /></a></Button>
                    </Card.Body>
                </Card>
            </div>
            <h1 className={`see-more ${showResults ? "show-more-inactive" : ""}`} onClick={clickHandler}>See more...</h1>
            <div className={`card-list  ${!showResults ? "show-more-inactive" : ""}`}>
                <Card style={{ width: '18rem', cursor: 'nesw-resize' }}>
                    <Card.Body>
                        <Card.Title>Client's Portfolio</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="dark"><a href=""><img src={githubLogo} alt="" /></a></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', cursor: 'nesw-resize' }}>
                    <Card.Body>
                        <Card.Title>Todo List</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="dark"><a href=""><img src={githubLogo} alt="" /></a></Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', cursor: 'nesw-resize' }}>
                    <Card.Body>
                        <Card.Title>Expand Card</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="dark"><a href=""><img src={githubLogo} alt="" /></a></Button>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

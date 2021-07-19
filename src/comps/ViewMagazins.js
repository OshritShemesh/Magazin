import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { actions } from '../redux/action'


function ViewMagazins(props) {
    const { getAllMagazins, magazins } = props;
    // const [magazins, setMagazins] = useState([])

    useEffect(() => {
        getAllMagazins()
    }, [])

    return (
        <>
            <h1>ViewMagazins</h1>
            {magazins.map((magazin) => (

                <Card style={{ display: "inline-block", width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{magazin.title}</Card.Title>
                        <Card.Text>
                            {magazin.content}
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>


            ))}



        </>
    )
}


export default connect(
    (state) => {
        return {
            magazins: state.magazin.magazins
        }
    },
    (dispatch) => {
        return {
            getAllMagazins: () => {
                debugger
                dispatch(actions.getAllMagazins())
            }
        }
    }
)(ViewMagazins)

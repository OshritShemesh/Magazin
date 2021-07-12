import React, { useState, userEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom';

export default withRouter(function Home(props) {
    const { history } = props

    function getHistory() {
        history.push('/history')
    }

    function getPictures() {
        history.push('/pictures')

    }
    return (
        <>
            <button type="button" onClick={() => { getHistory() }} className="btn btn-primary">My History</button>
            <button type="button" onClick={() => { getPictures() }} className="btn btn-primary">All Pictures</button>
        </>
    )
})
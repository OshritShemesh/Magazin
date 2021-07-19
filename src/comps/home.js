import React, { useState, userEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom';

export default withRouter(function Home(props) {
    const { history } = props


    return (
        <>
        <h1>What do yuw want to do today?</h1>
            <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src="magazinimge.png" alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">My Magzin</h5>

                </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src="magazinimge.png" alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">My Magzin</h5>
                </div>
            </div>
        </>
    )
})
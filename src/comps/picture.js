import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import './text.scss'
import $ from 'jquery';
import {connect} from 'react-redux'

function mapStateToProps(state){
    return{
        user:state.user.user
    }
}
const mapDispatchToProps=(dispatch)=>{

}
export default connect(mapStateToProps,mapDispatchToProps)( withRouter(function Picture(props) {

    const [pictures, setPictures] = useState([]);
    const {history,user}=props
    const [choosenPic, setChoosenPic] = useState({
    })

    useEffect(async function () {
        console.log("start");

        $('[data-text]').on('keyup', function () {
            $(this).attr('data-text', $(this).text());
        });
        const data = await fetch('/getPictures')
        const body = await data.json();
        body.map(element => (
            element.id < 200 ? setPictures(pictures => [...pictures, element]) : "")
        )
    }, [])

    async function savePic(pic) {
        console.log(pic);
        await setChoosenPic({
            ...choosenPic,
            albumId: pic.albumId,
            id: pic._id,
            thumbnailUrl: pic.thumbnailUrl,
            title: pic.title,
            url: pic.url,
            userId: "60919ef73c9c036c5ca4239a"

        }
        )
        await console.log(choosenPic);
    }
    // async function delPic(pic) {
    //     console.log(pic);
    //     await setDeletePic({
    //         ...deletePic,
    //         albumId: pic.albumId,
    //         id: pic._id,
    //         thumbnailUrl: pic.thumbnailUrl,
    //         title: pic.title,
    //         url: pic.url,
    //         userId: "60919ef73c9c036c5ca4239a"

    //     }
    //     )
    // }
    async function savePictureToUser() {
        console.log("savePictureToUser");

        const data = await fetch('/addPic', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                choosenPic
            })

        })
    }

    // async function delPictureFromHistory() {
    //     console.log("delPictureFromHistory/" + deletePic.id);
    //     const data = await fetch('delPictureFromHistory/' + deletePic.id, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             userId: deletePic.userId
    //         })
    //     })
    //     const body = await data.json();
    //     setHistory(body.pic.pictures)

    // }

    // async function getHistory() {
    //     console.log("getHistoty");
    //     const data = await fetch('/getHistory/60919ef73c9c036c5ca4239a')
    //     const body = await data.json();
    //     console.log(body.pic.pictures);
    //     body.pic.pictures.map(element => (
    //         setHistory(history => [...history, element]))
    //     )
    //     console.log(history);

    // }
    function getHistory() {
        history.push('/history')
    }


    return (
        <>

            <div>
                {/* <div id="background"> */}
                <div class="text-effect bg-dark">
                    {/* <!-- Select the text in the preview and type in your own --> */}
                    <h1 className="neon " data-text="All Pictures" contenteditable>All Pictures</h1>

                    <div class="gradient"></div>
                    <div class="spotlight"></div>
                </div>
            </div>
            <h1>{user.firstName} {user.lastName}</h1>
            <button type="button" onClick={() => { getHistory() }} className="btn btn-primary m-3 d-block">My History</button>

            {/* </div>  */}
            {/* <button type="button" onClick={() => { getHistory() }} className="btn btn-primary">My History</button> */}

            {
                pictures.map((pic, i) => {
                    // chechFlag()
                    // debugger
                    return (
                        <>
                            <img key={pic.id} onClick={() => { savePic(pic) }}
                                data-toggle="modal" data-target="#exampleModalCenter"
                                src={pic.thumbnailUrl + '?text=' + pic.title}
                                alt="new"
                                className="img-thumbnail"
                            />
                            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <img
                                                src={choosenPic.thumbnailUrl + '?text=' + choosenPic.title}
                                                alt="new"
                                            />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" onClick={()=>savePictureToUser} data-dismiss="modal" className="btn btn-primary">Save Picture</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
                )
            }
        </>
    )
}))
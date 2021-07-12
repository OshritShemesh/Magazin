import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import UploadImage from './uplaodimage'
import './text.scss'
import $ from 'jquery';

export default withRouter(function History(props) {

    const [history, setHistory] = useState([])
    const [deletePic, setDeletePic] = useState({})
    const [choosenPic, setChoosenPic] = useState({
    })

    useEffect(async function () {
        $('[data-text]').on('keyup', function () {
            $(this).attr('data-text', $(this).text());
        });
        console.log("getHistoty");
        const data = await fetch('/getHistory/60919ef73c9c036c5ca4239a')
        const body = await data.json();
        console.log(body.pic.pictures);
        body.pic.pictures.map(element => (
            setHistory(history => [...history, element]))
        )
        console.log(history);
        // const data = await fetch('/getPictures')
        // const body = await data.json();
        // body.map(element => (
        //     element.id < 20 ? setPictures(pictures => [...pictures, element]) : "")
        // )
    }, [])

    // async function savePic(pic) {
    //     console.log(pic);
    //     await setChoosenPic({
    //         ...choosenPic,
    //         albumId: pic.albumId,
    //         id: pic._id,
    //         thumbnailUrl: pic.thumbnailUrl,
    //         title: pic.title,
    //         url: pic.url,
    //         userId: "60919ef73c9c036c5ca4239a"

    //     }
    //     )
    //     await console.log(choosenPic);

    //     // setFalg(flag => !flag)
    //     // console.log(flag);
    // }
    async function delPic(pic) {
        console.log(pic);
        await setDeletePic({
            ...deletePic,
            albumId: pic.albumId,
            id: pic._id,
            thumbnailUrl: pic.thumbnailUrl,
            title: pic.title,
            url: pic.url,
            userId: "60919ef73c9c036c5ca4239a"

        }
        )
        console.log(pic);

    }
    // async function savePictureToUser() {
    //     console.log("savePictureToUser");

    //     const data = await fetch('/addPic', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             choosenPic
    //         })

    //     })
    // }

    async function delPictureFromHistory() {
        console.log("delPictureFromHistory/" + deletePic.id);
        const data = await fetch('delPictureFromHistory/' + deletePic.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: deletePic.userId
            })
        })
        const body = await data.json();
        setHistory(body.pic.pictures)

    }

    async function getHistory() {
        console.log("getHistoty");
        const data = await fetch('/getHistory/60919ef73c9c036c5ca4239a')
        const body = await data.json();
        console.log(body.pic.pictures);
        body.pic.pictures.map(element => (
            setHistory(history => [...history, element]))
        )
        console.log(history);

    }


    return (
        <>
            <div>
                {/* <div id="background"> */}
                <div class="text-effect bg-dark">
                    {/* <!-- Select the text in the preview and type in your own --> */}
                    <h1 className="neon " data-text="My Pictures" contenteditable>My Pictures</h1>

                    <div class="gradient"></div>
                    <div class="spotlight"></div>
                </div>
            </div>
            {/* <button type="button" onClick={() => { getHistory() }} className="btn btn-primary">My History</button> */}
            {/* 
            {
                pictures.map((pic, i) => {
                    // chechFlag()
                    // debugger
                    return (
                        <>
                            <img key={pic.id} onClick={() => { savePic(pic) }}
                                data-toggle="modal" data-target="#exampleModalCenter"
                                src={pic.thumbnailUrl + '?text=' + pic.title}
                                alt="new" className="m-4"
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
                                            <button type="button" onClick={savePictureToUser} data-dismiss="modal" className="btn btn-primary">Save Picture</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
                )
            } */}
            <div className="mt-4">
                <UploadImage getHistory={getHistory}></UploadImage>
            </div>
            <div  >
                {/* -----History----- */}
                {
                    history ? history.map((pic, i) =>
                        (
                            <>
                                <img
                                    src={pic.url ? pic.thumbnailUrl + '?text=' + pic.title : '/' + pic.title}
                                    onClick={() => { delPic(pic) }}
                                    data-toggle="modal" data-target="#exampleModalCenter1"
                                    alt="new" className="m-4 img-thumbnail img-fluid w-25 h-25 "
                                />
                                {/* img-thumbnail img-fluid w-25 h-25 */}
                                <div className="modal fade" id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <img
                                                    // src={deletePic.thumbnailUrl + '?text=' + deletePic.title}
                                                    src={deletePic.url ? deletePic.thumbnailUrl + '?text=' + deletePic.title : '/' + deletePic.title}
                                                    alt="new" className="m-4 img-thumbnail img-fluid w-25 h-25 "
                                                />
                                            </div>
                                            <div className="modal-footer">
                                                {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Update</button> */}
                                                <button type="button" className="btn btn-danger" data-dismiss="modal" >Close</button>
                                                <button type="button" onClick={() => { delPictureFromHistory() }} data-dismiss="modal" className="btn btn-primary">delete Picture</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    ) : ""}
            </div>
        </>
    )
})
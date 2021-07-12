import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';

export default  withRouter( class UploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }

    }

    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
        console.log(this.state.selectedFile);

    }

    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:8080/upload/60919ef73c9c036c5ca4239a", data, {
            headers:{"Content-Type" : "application/json"}
            // receive two    parameter endpoint url ,form data
        });
        
    }
    render() {
        return (
            <>
                <input type="file" class="btn-btn w-25 m-2" name="file" onChange={this.onChangeHandler} accept='image/*' />
                <button type="button" class="btn btn-success btn-block w-25 m-2" onClick={this.onClickHandler}>Upload</button>
            </>
        )
    }

})
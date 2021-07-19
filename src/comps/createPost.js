import React, { useState } from 'react';
import { connect } from 'react-redux';
import { action } from '../redux/action';

function CreatePost(props) {

    const [post, setPost] = useState({
        image: "",
        title: "",
        discription: "",
        views: 0,
        publishDate: new Date(Date.now()),
        magazinId: ""//
    })

    function addPost() {
        console.log(post);
        props.createPost(post);
    }

    return (
        <>
            {/* doesn't get the image src right */}
            <input type="file" onChange={e => setPost({ ...post, image: e.target.result })}></input>
            <input name='title' type="text" onChange={e => setPost({ ...post, title: e.target.value })}></input>
            <textarea name="discription" cols="50" rows="10" onChange={e => setPost({ ...post, discription: e.target.value })}></textarea>
            <button onClick={addPost}>Add Post</button>
        </>
    )
}


export default connect(
    (state) => {
        return {
            // user: state.user.user
        }
    },
    (dispatch) => {
        return {
            createPost: (post) => {
                dispatch(action.createPost(post))
            }
        }
    }
)(CreatePost)
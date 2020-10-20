import React from 'react';
import {NavLink} from 'react-router-dom';
const newPost = (props) => {
    return (
        <div className="newPost">
            <table><tbody>
            <tr className="newPost">
                <td><label htmlFor="userId">User ID: </label></td>
                <td><textarea id = "userId" type = "text" value={props.userId} onChange={props.changeUserId}/></td>
            </tr>
            <tr className="newPost">
                <td><label htmlFor="title">Title: </label></td>
                <td><textarea id = "title" type = "text" value={props.title} onChange={props.changeTitle}/></td>
            </tr>
            <tr className="newPost">
                <td><label htmlFor="body">Body: </label></td>
                <td><textarea id ="body" type = "text" value={props.body} onChange={props.changeBody} /></td>
            </tr>
            </tbody></table>
            <button id="submit" onClick={props.newPost}><NavLink to="/app/" exact>Submit</NavLink></button>
        </div>
        
    )
}
export default newPost
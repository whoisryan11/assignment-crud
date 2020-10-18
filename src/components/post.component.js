import React from 'react';

const post = (props) => {
    return (
         <tr>
            <td>{props.post.id} </td>
            <td><input className="userId" type="text" value={props.post.userId} onChange={props.changeUserId}/></td>
            <td><textarea type="text" value={props.post.title} onChange={props.changeTitle}/></td>
            <td className="body"><textarea type="text" value={props.post.body} onChange={props.changeBody}/></td>
            <td><button className="update" onClick={props.update}>Update</button></td>
            <td><button className="delete" onClick={props.delete}>Delete</button></td>
        </tr>
    )
}
export default post
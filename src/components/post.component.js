import React from 'react';

const post = (props) => {
    if (props.editing === true) {
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
    } else {
        return (
            <tr>
               <td>{props.post.id} </td>
               <td onClick={props.editClick}>{props.post.userId}</td>
               <td onClick={props.editClick}>{props.post.title}</td>
               <td className="body" onClick={props.editClick}>{props.post.body}</td>
               <td><button className="update" onClick={props.update}>Update</button></td>
               <td><button className="delete" onClick={props.delete}>Delete</button></td>
           </tr>
        )
    }
    
}
export default post
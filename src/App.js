import React, { Component } from 'react';
import './App.css';
import ApiService from './services/api.service';
import Post from './components/post.component';
import NewPost from './components/newPost.component';

class App extends Component {
  state = {
    posts: [],
    showWhich: '',
    newUserId: '',
    newTitle: '',
    newBody: ''
  }
  
  constructor(props) {
    super(props);
    ApiService.getAllPosts().then(res => {
      const posts = res.data;
      const aI = posts.length + 1;
      this.setState({posts: posts, autoIncrement: aI});
      console.log(this.state);
    });
  }

  updatePost(index){
    const post = {...this.state.posts[index]};
    const id = post.id;
    ApiService.updatePost(id, post).then(res => {
      alert("User Updated !")
      console.log(res);
    });
  }

  deletePost(index) {
    const post = {...this.state.posts[index]};
    const id = post.id;
    const posts = [...this.state.posts];
    posts.splice(index, 1);
    this.setState({posts: posts})
    ApiService.deletePost(id).then(res=>{
      console.log(res);
    });
  }

  newPost(){
    let id = this.state.autoIncrement;
    const post = {
      userId: this.state.newUserId,
      id: id,
      title: this.state.newTitle,
      body: this.state.newBody
    };
    id += 1;
    const posts = [...this.state.posts];
    posts.push(post);
    this.setState({
      posts: posts,
      autoIncrement: id,
      newUserId: '',
      newTitle: '',
      newBody: '',
    })
    ApiService.createPost(post).then(res=>{
      console.log(res);
      this.showPosts();
      alert("User Created !!!")
    })

  }

  showPosts() {
    this.setState({showWhich: 'posts'});
  }

  hidePosts() {
    this.setState({showWhich: ''});
  }

  createPosts(){
    this.setState({showWhich: 'create'});
  }


  bindUserId = (event, index) => {
    const post = {...this.state.posts[index]};
    post.userId = event.target.value;
    const posts = [...this.state.posts];
    posts[index] = post; 
    this.setState({posts: posts});
  }
  

  bindTitle = (event, index) => {
    const post = {...this.state.posts[index]};
    post.title = event.target.value;
    const posts = [...this.state.posts];
    posts[index] = post;
    this.setState({posts: posts});
  }

  bindBody = (event, index) => {
    const post = {...this.state.posts[index]};
    post.body = event.target.value;
    const posts = [...this.state.posts];
    posts[index] = post;
    this.setState({posts: posts});
  }
  
  bindNewUserId = (event) => {
    const newUserId = event.target.value;
    this.setState({newUserId: newUserId});
  }

  bindNewTitle = (event) => {
    const newTitle = event.target.value;
    this.setState({newTitle: newTitle});
  }

  bindNewBody = (event) => {
    const newBody = event.target.value;
    this.setState({newBody: newBody});
  }
  

  render(){
    let posts = null;

    switch (this.state.showWhich) {
      case '':
        posts = null;
        return (
          <div className="header">
            <button onClick={()=>this.showPosts()}>Show Posts</button>
            <button onClick={()=>this.createPosts()}>Create Post</button>
          </div>
        );
      case 'posts':
        posts = ((<div className="posts">
          <table>
          <thead>
            <tr className="tableHeader">
              <td>ID</td>
              <td>User ID</td>
              <td>Title</td>
              <td className="body">Body</td>
              <td>Update</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post,index) =>
              <Post 
                key={post.id} 
                post={post} 
                changeUserId = {(event)=>this.bindUserId(event, index)}
                changeTitle={(event)=>this.bindTitle(event, index)}
                changeBody={(event)=>this.bindBody(event, index)}
                update={()=>this.updatePost(index)}
                delete={()=>this.deletePost(index)}/>
            )}
          </tbody></table></div>));
        return (
          <div>
            <div className="header">
              <button onClick={()=>this.hidePosts()}>Hide Posts</button>
              <button onClick={()=>this.createPosts()}>Create Post</button>
            </div>
            {posts}
          </div>);
      case 'create':
        posts = null;
        return (
          <div>
            <div className="header">
              <button onClick={()=>this.showPosts()}>Show Posts</button>
              <button onClick={()=>this.hidePosts()}>Go Back</button>
            </div>
            <NewPost 
              userId={this.state.newUserId}
              title={this.state.newTitle}
              body={this.state.newBody}
              changeUserId={(event)=>this.bindNewUserId(event)}
              changeTitle={(event)=>this.bindNewTitle(event)}
              changeBody={(event)=>this.bindNewBody(event)}
              newPost={()=>this.newPost()}/>
          </div>
        )
      default:
      } 
  }
  
}

export default App;

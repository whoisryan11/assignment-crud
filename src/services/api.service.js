import http from "../http-common";

class ApiService {
    getAllPosts() {
        return http.get('/posts');
    }
    getPost(id){
        return http.get(`/posts/${id}`);
    }
    updatePost(id, post){
        return http.put(`/posts/${id}`, post); 
    }
    deletePost(id) {
        return http.delete(`/posts/${id}`);
    }
    createPost(post){
        return http.post('/posts', post);
    }
}
export default new ApiService();
import {API} from '../../backend'
import defaultPic from '../../images/default.jpg'



export const getCategories = () => {
    return fetch(`${API}/categories`, {
      method: "GET"
    })
      .then(response => {
       
        return response.json();
      })
      .catch(err => console.log(err));
  };

  export const addpost=(user_id,token,post)=>{
    return fetch(`${API}/post/add/${user_id}`,{
      method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: post
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
  } 
  export const updatepost=(user_id,post_id,token,post)=>{
    return fetch(`${API}/post/update/${post_id}/${user_id}`,{
      method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: post
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
  }
  
  export const getuserPosts=(user_id,token)=>{
    return fetch(`${API}/post/user/all/${user_id}`,{
      method:"GET",
      headers:{
        Accept:"application/json",
        Authorization:`Bearer ${token}`
      }
    })
    .then(response =>{
      return response.json();
    })
    .catch(err=>console.log(err))
  }

  export const getPostPhoto=(id)=>{
  const photo = `${API}/post/photo/${id}` || defaultPic
  return photo;
  }

  export const getuniqueCategory = (id)=>{
    return fetch(`${API}/category/${id}`)
    .then((response) => {
     return response.json()
    })
   
  }

  export const getPostById=(id)=>{
    return fetch(`${API}/post/${id}`)
    .then((response)=>response.json())
  }

  export const deletepost =(user_id,post_id,token)=>{
    return fetch(`${API}/post/delete/${post_id}/${user_id}`,{
      method:"DELETE",
      headers:{
        Accept:"application/json",
        Authorization:`Bearer ${token}`
      }
    })
    .then(response =>{
      return response.json();
    })
    .catch(err=>console.log(err))
  }

  export const isParticipated = (user_id,post_id,token)=>{
    return fetch(`${API}/post/participants/status/${user_id}/${post_id}`,{
      method:"GET",
      headers:{
        Accept:"application/json",
        Authorization:`Bearer ${token}`
      }
    })
    .then(response =>{
      return response.json();
    })
    .catch(err=>console.log(err))
  } 
   export const joinEvent = (user_id,post_id,token)=>{
    return fetch(`${API}/post/join/${post_id}/${user_id}`,{
      method:"PUT",
      headers:{
        Accept:"application/json",
        Authorization:`Bearer ${token}`
      }
    })
    .then(response =>{
      return response.json();
    })
    .catch(err=>console.log(err))
  }
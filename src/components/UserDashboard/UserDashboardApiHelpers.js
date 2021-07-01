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

  export const  getuniqueCategory =(id)=>{
    return  fetch(`${API}/category/${id}`,{
      method:'GET'
    })
    .then(res =>{
      return res.json()
    })
    .catch(err =>console.log(err))
  }
  
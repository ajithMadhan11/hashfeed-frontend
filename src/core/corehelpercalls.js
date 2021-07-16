import { API } from "../backend"

export const getAllEvent =()=>{
    return fetch(`${API}/posts`,{
        method:'GET'})
        .then((response)=>{
            return response.json();
        })
        .catch(err=>console.log(err))
}
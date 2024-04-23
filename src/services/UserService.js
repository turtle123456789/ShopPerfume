import axios from "./Customize"


const fetchAllUser = (countPage)=>{
    return axios.get(`/api/users?page=${countPage}`)
}
export {fetchAllUser}

import axios from 'axios';
const USER_API_BASE_URL = "http://localhost:7070/v1";

class UserService{
    getAllUsers(){
        return axios.get(USER_API_BASE_URL+ "/list");
    }
   createUser(user){
     return axios.post(USER_API_BASE_URL + "/create",user);
   }
   deleteUser(userID){
    return axios.delete(USER_API_BASE_URL + '/delete' + userID);
}
}
export default new UserService()
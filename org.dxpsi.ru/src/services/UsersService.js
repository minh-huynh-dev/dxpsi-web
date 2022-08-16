import axios from 'axios';
const USERS_API_BASE_URL = "http://localhost:7070/v1";


class UsersService {
    getAllUsers() {
        return axios.get(USERS_API_BASE_URL + "/list");
    }
    createUser(user) {
        return axios.post(USERS_API_BASE_URL + "/create", user);
    }
    deleteCustomer(userID) {
        return axios.delete(USERS_API_BASE_URL + "/delete/" + userID).then((response) => {
            console.log(response);
        });
    }
    updateUser(user,userID){
        return axios.put(USERS_API_BASE_URL + "/update/" + userID, user).then((response) =>{
            console.log(response);
        }).catch(error =>{
            console.log(error);
        })
    }
}
export default new UsersService()

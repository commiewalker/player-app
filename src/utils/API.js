import axios from 'axios';

export default {
    getAllPlayers:function(){
        //hit api and send back data
        return axios.get("http://localhost:8080/all")
    }
}
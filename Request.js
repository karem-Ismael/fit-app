import axios from 'axios'
const instance = axios.create({
    baseURL:'https://fit.codeitpro.com/api/v1/sa/auth',
    headers:{
        referrerPolicy: 'no-referrer-when-downgrade',
        'Access-Control-Allow-Origin' : '*',
        'X-Requested-With': 'XMLHttpRequest',

        'content-type': 'application/json'
    }
})
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


  
export default instance;
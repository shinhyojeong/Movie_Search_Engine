const axios = require('axios')
require('dotenv').config()

const {API_ENDPOINT, API_KEY} = process.env

exports.handler = async function (event){
    const options = JSON.parse(event.body)
     const res = await axios.get(`${API_ENDPOINT}`,{
         params:{
             ...options,
             apiKey:`${API_KEY}`
         }
     })
    console.log(options)
    return{
        statusCode: 200,
        body:JSON.stringify(res.data)
    }
}


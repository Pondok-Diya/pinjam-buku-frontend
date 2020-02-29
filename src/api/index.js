import axios from "axios"

//import axios from 'axios'
const url = "http://localhost:5000/"
const getData = () => {
    return axios.get(url+'buku',{headers:{'authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODI4OTQ1MDUsIm5iZiI6MTU4Mjg5NDUwNSwianRpIjoiMjk1OGUyZTQtZjI2OS00YWM3LThiMzUtMzNjN2MzNmZhNDVhIiwiZXhwIjoxNTgyOTE2MTA1LCJpZGVudGl0eSI6InNheWEiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.SigXktY3meibU8GRglWKA4vz1CoNTFkgLYJuYc1oSm8`}})
}
export default getData
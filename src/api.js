import axios from "axios";

let url = "http://localhost:8080";

export async function getData(){

    return await axios.get(url+"/users");

}

export async function postData(data){
    return await axios.post(url+"/adduser",data,{
        headers:{
            "Content-Type":"application/json"
        }
    });
}

export async function putData(data){
    return await axios.put(url+"/updateuser",data,{
        headers:{
            "Content-Type":"application/json"
        }
    })
}

export async function getHospitalData(){
    return await axios.get(url+"/hospitals");
}

export async function getDropDownData(){
    return await axios.get(url+"/dropdown");
}
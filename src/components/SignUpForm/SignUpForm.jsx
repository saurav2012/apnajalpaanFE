import React,{useState,useEffect}from 'react';
import axios from 'axios';
const SignUpForm = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    loadUsersData();
   
  }, []);
  const loadUsersData=async () =>{
    return axios.get('http://localhost:8080/getImage/640369aca6464b1a48fe23da')
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
    }; 
    console.log(data);
    const base64String = btoa(String.fromCharCode(...new Uint8Array(data)));
    var base64Image = `data:image/png;base64,${data}`;
    return(
      <img src={base64Image}/>
        )
  }

export default SignUpForm
import { Button, Heading, HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from  "axios"

const HomePage = () => {
    const navigate=useNavigate()
    const postdata=()=>{
        axios.post("https://back-production-6fdf.up.railway.app/user/fetchdata").then((res)=>console.log(res.data))
    }
    
    const deletedata=()=>{
        axios.delete("https://back-production-6fdf.up.railway.app/user/deletedata").then((res)=>console.log("delete"))
    }

    const getdata=()=>{
        navigate("/userdetail")
        
    }
  return (
    <div>
    
<Heading>HomePage</Heading>
        
    <HStack ml={"444px"}>
       
        <Button onClick={postdata}>Fetch details</Button>
        <Button onClick={deletedata}>Delete details</Button>
        <Button onClick={getdata}>User details</Button>
    </HStack>
    
    
    </div>
  )
}

export default HomePage
import React,{useContext, useEffect, useState} from 'react'
import {AuthContext} from '../Context/AuthContext'
import { database } from '../firebase'
import UploadFile from './UploadFile'
import Posts from './Posts'
function Feed() {
    const {user,logout}=useContext(AuthContext)
    const [userData,setUserData]=useState('')
    // console.log("userData-> ",userData)
    useEffect(()=>{
      const unsub=database.users.doc(user.uid).onSnapshot((snapshot)=>{
        setUserData(snapshot.data())
        // console.log("snapshot ",snapshot.data())
      })
      return ()=>{unsub()}
    },[user])
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}><h1>Hello</h1>
    <button onClick={logout}>Log Out</button>
    <UploadFile user={userData}/>
    <Posts userData={userData}/>
    </div>
  )
}

export default Feed
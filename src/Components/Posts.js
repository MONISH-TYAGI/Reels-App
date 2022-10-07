import  CircularProgress  from '@mui/material/CircularProgress'
import React, { useEffect, useState } from 'react'
import { database } from '../firebase'
// import Image from './Image'
import Video from './Video'


function Posts({userData}) {
    const [posts,setPosts]=useState(null)
    
    useEffect(()=>{
        let parr=[]
        const unsub=database.posts.orderBy('createdAt','desc').onSnapshot((querySnapshot)=>{
            parr=[]
            querySnapshot.forEach((doc)=>{
                let data={...doc.data(),postId:doc.id}
                parr.push(data)
            })
            setPosts(parr)
            // console.log("parr",parr);  
        })
        return unsub
    },[])
    // console.log("allpost s",posts)
  return (
    <div>
        {
            (posts==null||userData==null)?<CircularProgress/>:
            <div className='video-container'>
                {
                 
                posts.map((post,index)=>{
                    // console.log("posts",post.pUrl); 
                    <React.Fragment key={index}>
                        <div className='videos'>
                        {/* {console.log("posts ->",post.pUrl)} */}
                     <Video src={post.pUrl}/>  
                     {console.log("posts ->",post.pUrl)}

                        </div>
                    </React.Fragment>
                })
            }
             
                </div>
        }
    </div>
  )
}

export default Posts
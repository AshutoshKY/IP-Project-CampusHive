import React, { useState, useEffect } from 'react'
import "./post.css"
import { Box, Heading, Skeleton, SkeletonCircle } from '@chakra-ui/react';
import PostCard from "./component/PostCard";
// import Left from '../LeftParts/left';
// import Right from '../RightParts/right';
// const Base_Url = process.env.Base_Url;


async function getPosts() {
    const response = await fetch(`https://medium-mern-clone.onrender.com/getAllPosts`).catch((err) => {
        console.log(err);
    });

    const data = await response.json();
    console.log(data);

    return data;
}

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [isLoadingPosts, setIsLoadingPosts] = useState(false);

    useEffect(() => {
        setIsLoadingPosts(true);
        getPosts().then((response) => {
           // response = response.slice(5,58);
            setPosts(response);
            setIsLoadingPosts(false);
        });    
    }, []);
    return (
        <>
       {/* <div style={{marginTop:"-3vh"}} className="margin"> <Left/></div> */}
       {/* <div style={{marginTop:"-3vh"}} className="margin">  <Right/></div> */}
        <div className='post'>
            <div>
                <Heading as='h5' mt={0} cursor="pointer" size='l'>Get Campus Insights wiht our Trusted Hivers</Heading>
                <br />
                <hr style={{ color: "black", size: "10", marginTop: "5px" }} />
            </div>
            <div>
                {
                    isLoadingPosts ? <>
                    <Box mt={2} style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                        <Box mt={5} style={{display:"flex", flexDirection:"row", gap:"20px"}}>
                        <SkeletonCircle size="10"  />
                        <Skeleton height="20px" margin='auto' ml={0} mr={0} width='150px' />
                        <Skeleton height="20px" margin="auto" ml={0} width='100px' />
                        </Box>
                        <Skeleton height="30px" mt={1} mb={1} />
                        <Skeleton height="18px" />
                        <Skeleton height="18px" />
                        <Skeleton height="18px" />
                        <Box style={{display:"flex", flexDirection:"row", gap:"20px"}}>
                            <Skeleton height="15px" width={100} />
                            <Skeleton height="15px" width={150}/>
                        </Box>
                    </Box>
                    <Box mt={2} style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                        <Box mt={5} style={{display:"flex", flexDirection:"row", gap:"20px"}}>
                        <SkeletonCircle size="10"  />
                        <Skeleton height="20px" margin='auto' ml={0} mr={0} width='150px' />
                        <Skeleton height="20px" margin="auto" ml={0} width='100px' />
                        </Box>
                        <Skeleton height="30px" mt={1} mb={1} />
                        <Skeleton height="18px" />
                        <Skeleton height="18px" />
                        <Skeleton height="18px" />
                        <Box style={{display:"flex", flexDirection:"row", gap:"20px"}}>
                            <Skeleton height="15px" width={100} />
                            <Skeleton height="15px" width={150}/>
                        </Box>
                    </Box>
                    <Box mt={2} style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                        <Box mt={5} style={{display:"flex", flexDirection:"row", gap:"20px"}}>
                        <SkeletonCircle size="10"  />
                        <Skeleton height="20px" margin='auto' ml={0} mr={0} width='150px' />
                        <Skeleton height="20px" margin="auto" ml={0} width='100px' />
                        </Box>
                        <Skeleton height="30px" mt={1} mb={1} />
                        <Skeleton height="18px" />
                        <Skeleton height="18px" />
                        <Skeleton height="18px" />
                        <Box style={{display:"flex", flexDirection:"row", gap:"20px"}}>
                            <Skeleton height="15px" width={100} />
                            <Skeleton height="15px" width={150}/>
                        </Box>
                    </Box>
                    </> : <>
                    {
                        posts.map(post => {
                            return <PostCard key={post._id} post={post} />
                        })
                    }
                    </>
                }
            </div>
            <div style={{ position: 'relative', right: '0vw', fontSize:"20px" }} className="discover">
          <div style={{ position: 'sticky', top: '110px' }}>

            <div style={{ width: '100%', gap: '20px', textAlign:"center" }} className="info">
              <h2 style={{fontSize:"20px", color:"black"}}>Created By Group-7, G-11, Campus-Hive</h2>
            </div>
          </div>
        </div>

        </div>
       
        </>
    )
}

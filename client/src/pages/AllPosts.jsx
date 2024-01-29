import Header from "../components/Header";
import { useEffect,useState } from "react";
import { Typography, Box, InputBase,Card,CardContent,styled } from "@mui/material";
import { getAllPosts } from "../services/api";

const SearchWrapper = styled(Box)({
    marginTop : 75,
    display : 'flex',
    justifyContent : 'center',
    '& > div' : {
        width:500,
        height:45,
        border: '1px solid #767676',
        borderRadius : 10,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 10
    }
})

const PostWrapper = styled(Box)({
    display : 'flex',
    justifyContent: 'center',
    flexWrap : 'wrap',
    '& > div' : {
        border: '1px solid #442d0',
        borderRadius : 10,
        margin: 10,
        width: '30%',
        height: 300
    }
})

const AllPosts = () => {

    const [posts,setPosts] = useState([]);
    const [text,setText] = useState("");

    useEffect(() => {
       const getData = async() => {
          const response =  await getAllPosts(); 
          setPosts(response.data);
       } 
       getData();
    },[])
    return (
        <>
        <Header/>
            <SearchWrapper>
                <InputBase placeholder = "Search by Job Title" onChange = {(e) => setText(e.target.value)}/>
            </SearchWrapper>
            <PostWrapper>
                {
                    posts.filter(post => post.profile.toLowerCase().includes(text.toLowerCase())).map(post => (
                        <Card>
                            <CardContent>
                                <Typography variant = "h5">{post.profile}</Typography>
                                <Typography>{post.type}</Typography>
                                <Typography>{post.salary}</Typography>
                                <Typography style={{color : "#6f6f6f",margin : '10px 0px'}}>
                                    {post.description.length > 50 ? post.description.substring(0,50) + "..." : post.description}
                                </Typography>
                                <Typography><b>Experience</b> : {post.experience}</Typography>
                                <Typography><b>Techstack</b> : {post.technology + " "}</Typography>
                                <Typography style={{color : '#6f6f6f'}}>posted on {new Date(post.createdAt).toLocaleDateString() }</Typography>
                            </CardContent>
                        </Card>
                    ))
                }
            </PostWrapper>
        </>
    )
}

export default AllPosts; 

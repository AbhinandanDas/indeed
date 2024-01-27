import Header from "../components/Header.jsx";
import { Box,Typography, styled, TextField,Button } from "@mui/material";
import Dropdown from "../components/Dropdown.jsx";
import { useState } from "react";
import { savePost } from "../services/api.js";
import { useNavigate } from "react-router-dom";
import { routePath } from "../routes/route.js";

const Component = styled(Box)({
    padding: '80px 200px',
    backgroundColor : '#f5f5f5'
})

const Container = styled(Box)({
    display : 'flex',
    backgroundColor : '#ffffff',
    borderRadius : 20,
    justifyContent : 'space-between',
    alignItems: 'center',
    padding: '0 70px',
    '& > p' : {
        fontSize: 35,
        fontWeight: 700,
        opacity : '.6'
    }
})

const FormContainer = styled(Box)({
    display : 'flex',
    flexDirection: 'column',
    marginTop: 50,
    padding: 20,
    background: '#ffffff',
    borderRadius: 20,
    '& > *' : {
        marginTop: '20px !important'
    },
    '& > button' : {
        margin: '0px 600px',
        width: 200
    }
})

const defaultObj = {
    profile:"",
    type: "",
    description:"",
    experience:"",
    technology: [],
    salary : ""
}

const options = {
    type : ["Remote" , "Onsite"],
    experience : ["0-2 Years", "3-5 Years", "5-8 Years", "8 and more years"],
    technology : ["Java", "Javascript", "Angular", "React", "Node.js", 
                "Docker", "AWS","HTML","CSS","C","C++","Python", "C#", "Ruby", "R"],
    salary : ["Rs 0 - 300000", "Rs 300000 - 500000", "Rs 500000 - 800000", "Rs 800000 - 1300000","Rs 1300000 and more"]            
}

const CreatePost = () => {
    const [data,setData] = useState(defaultObj);
    const navigate = useNavigate();
    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82";

    const handleChange = (e) => {
       setData({...data, [e.target.name] : e.target.value})
    }

    const saveJob = async () => {
        await savePost(data);
        navigate(routePath.posts);
    }
    return(
        <>
            <Header/>
            <Component>
                <Container>
                    <Typography>Create a job post</Typography>
                    <img src={image} alt="create"/>
                </Container>
                <FormContainer>
                    <TextField placeholder = "Job Title" name = "profile" onChange={handleChange}/>
                    <Dropdown    
                    label = "Job Type"
                    id = "job-type-label" 
                    value = {data.type}
                    onChange = {handleChange}
                    name="type"
                    options={options.type}
                    />
                    <TextField placeholder = "Job Description" name = "description" onChange = {handleChange}/>
                    <Dropdown label = "Experience" name = "experience" id = "job-experience-label" value = {data.experience} handleChange={handleChange} options = {options.experience}/>
                    <Dropdown label = "Technology" name = "technology" id = "job-technology-label" value = {data.technology} handleChange={handleChange} options = {options.technology} multiple/>
                    <Dropdown label = "Salary" name = "salary" id = "job-salary-label" value = {data.salary} handleChange={handleChange} options = {options.salary}/>
                    <Button variant = "contained" color = "success" onClick = {() => saveJob()}>Save Job</Button>
                </FormContainer>
            </Component>
        </>
    )
}

export default CreatePost;

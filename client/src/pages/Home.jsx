import Header from "../components/Header";
import { Box,Typography,Button,styled} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { routePath } from "../routes/route";

const BoxComponent = styled(Box)({
    display : 'flex',
    height : '100vh',
    alignItems : 'center',
    margin : '-110px 400px',
    '& > div' : {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '& > p' : {
            paddingTop: 80,
            fontSize : 56,
            lineHeight: 1.25,
            letterSpacing: -1,
        },
        '& > button' : {
            marginTop: 50,
            width: 220,
            height : 60,
            background : 'rgb(37,87,167)',
            textTransform : 'none',
            fontSize: 16,
            fontWeight: 700,
        }
    }
})


const Home = () => {
    const navigate = useNavigate();
    const homePageImage = "https://images.ctfassets.net/pdf29us7flmy/5r34jiS1YfJuoRzqp3XH6y/6fba6547e16cd0ad08ae28dad306015d/Screen_Shot_2023-01-11_at_9.21.31_AM.png?w=720&q=100&fm=avif";
    return (
        <div>
            <Header/>
            <BoxComponent>
                <Box>
                    <Typography>Let's hire your next<br/> great candidate. <em>Fast.</em></Typography>
                    <Button variant="contained" onClick = {() => navigate(routePath.create)}>Post a free job*</Button>
                </Box>
                <Box>
                    <img src={homePageImage} style={{ width:600 }} alt="Home"/>
                </Box>
            </BoxComponent>
        </div>
    )
}

export default Home;
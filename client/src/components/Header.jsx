import { AppBar, Toolbar, styled} from '@mui/material'
import { Link } from 'react-router-dom';
import { routePath } from '../routes/route';

const StyledAppBar = styled(AppBar) ({
    background: '#2d2d2d',
    height : 64,
    '& > div > *' : {
        textDecoration: 'none',
        color: 'inherit',
        marginRight: 20
    }
})

const Header = () => {
    const indeedLogo = "https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png";
    return(
        <StyledAppBar>
            <Toolbar>
                <Link to = {routePath.home}>
                <img src = {indeedLogo} style={{height:60, width:100, marginBottom : 8}} alt="Logo"/>
                </Link>    
                <Link to = {routePath.create}>Post a Job</Link>
                <Link to = {routePath.posts}>Find Jobs</Link>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;
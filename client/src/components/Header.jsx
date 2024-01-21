import { AppBar, Toolbar, styled} from '@mui/material'

const StyledAppBar = styled(AppBar) ({
    background: '#2d2d2d',
    height : 64,
})

const Header = () => {
    const indeedLogo = "https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png";
    return(
        <StyledAppBar>
            <Toolbar>
                <img src = {indeedLogo} style={{height:60, width:100, marginBottom : 8}} alt="Logo"/>
                Post a Job
                Find Jobs
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;
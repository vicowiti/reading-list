import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Bookmark } from '@mui/icons-material';
import Logo from "../assets/ello.svg"



const NavBar = () => {


    return (
        <Box px={3} boxShadow={2} py={1} component={`nav`} display="flex" justifyContent="space-between" alignItems="center" >
            <img style={{ height: '3rem', width: '3rem' }} src={Logo} alt='logo' />
            <Button color='secondary' variant="contained" startIcon={<Bookmark />}>
                Your Bookmarks
            </Button>

        </Box>
    )
}

export default NavBar
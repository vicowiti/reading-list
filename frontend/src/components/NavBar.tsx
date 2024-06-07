import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Logo from "../assets/ello.svg"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';



const NavBar = () => {


    const navigate = useNavigate();


    return (
        <Box px={3}  py={1} component={`nav`} display="flex" justifyContent="space-between" alignItems="center" >
            <img style={{ height: '3rem', width: '3rem' }} src={Logo} alt='logo' onClick={() => navigate('/')} />
            <Button onClick={() => navigate('/favorites')} color='secondary' variant="contained" startIcon={<FavoriteIcon color="error" />}>
                Your Reading List
            </Button>

        </Box>
    )
}

export default NavBar
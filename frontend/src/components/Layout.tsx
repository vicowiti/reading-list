import { Box } from "@mui/material"
import NavBar from "./NavBar"

interface Props {
    children: React.ReactNode
}

const Layout = (props: Props) => {
    return (
        <Box component={`main`} >
            <NavBar />
            {props.children}
        </Box>
    )
}

export default Layout
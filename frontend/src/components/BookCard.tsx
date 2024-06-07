import { Grid, Typography } from "@mui/material"
import { Book } from "../types"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";

interface Props {
    book: Book
}

const BookCard = ({ book }: Props) => {
    const [favorited, setFavorited] = useState(false)
    return (
        <Grid item xs={12} md={4} lg={3} boxShadow={1} position={`relative`}>
            <div onClick={() => setFavorited(!favorited)} style={{ backgroundColor: "#fff", padding: "3px", position: `absolute`, top: 10, right: 10, borderRadius: "2px" }}>
                <FavoriteIcon color={favorited ? "error" : "primary"} />
            </div>
            <img src={book.coverPhotoURL} width={`100%`} alt={book.title} />
            <Typography fontSize={16} fontWeight={"700"}>{book.title}</Typography>
            <Typography pb={2}>{book.author}</Typography>
        </Grid>
    )
}

export default BookCard
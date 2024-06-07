import { Grid, Typography } from "@mui/material"
import { Book } from "../types"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";
import { handleReadingList } from "../services/readingList";

interface Props {
    book: Book
}

const BookCard = ({ book }: Props) => {
    const readingList = localStorage.getItem("readingList")
    const readingArr = readingList ? JSON.parse(readingList) : []
    const isReading = readingArr.some((item: Book) => item.title === book.title)
    const [favorited, setFavorited] = useState(isReading)

    const handleMyList = () => {
        setFavorited(!favorited)
        handleReadingList(book)
    }

    return (
        <Grid item xs={12} md={4} lg={3} boxShadow={1} position={`relative`}>
            <div onClick={handleMyList} style={{ backgroundColor: "#fff", padding: "3px", position: `absolute`, top: 10, right: 10, borderRadius: "2px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <FavoriteIcon color={favorited ? "error" : "primary"} />
            </div>
            <img src={book.coverPhotoURL} width={`100%`} alt={book.title} />
            <Typography px={2} fontSize={16} fontWeight={"700"}>{book.title}</Typography>
            <Typography px={2} pb={2}>{book.author}</Typography>
        </Grid>
    )
}

export default BookCard
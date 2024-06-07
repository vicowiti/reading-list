import { Grid } from "@mui/material";
import { Book } from "../types"
import BookCard from "./BookCard";


interface Props {
    books: Book[]
}

const BookListing = (props: Props) => {

  


    return (
        <Grid gap={2} justifyContent={"center"} container style={{ width: '100%', margin: 0 }}>
            {props.books.map((book, index) => <BookCard key={index} book={book} />)}
        </Grid>
    )
}

export default BookListing
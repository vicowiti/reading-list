import { Grid } from "@mui/material";
import { Book } from "../types"
import BookCard from "./BookCard";


interface Props {
    books: Book[]
}

const BookListing = (props: Props) => {

    console.log("from listing", props.books);


    return (
        <Grid columns={{
            l
        }}>
            {props.books.map((book, index) => <BookCard key={index} book={book} />)}
        </Grid>
    )
}

export default BookListing
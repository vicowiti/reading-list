import { Book } from "../types"


interface Props {
    book: Book
}

const BookCard = ({ book }: Props) => {

    return (
        <article >
            <img style={{width:"100%"}} src={book.coverPhotoURL} alt="book image" />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
        </article>
    )
}

export default BookCard
import { Stack, Typography } from "@mui/material"
import SearchBar from "../components/SearchBar"
import { useEffect, useState } from "react"
import { fetchBooks } from "../services/graphql"
import { Book } from "../types"
import BookListing from "../components/BookListing"
import { toast } from "sonner"


const Home = () => {
    const [books, setBooks] = useState<Book[]>([])
    useEffect(() => {
        async function fetchData() {
            try {
                const results = await fetchBooks()
                console.log(results);
                setBooks(results)
            } catch (err) {
                toast.error("Could not fetch books!")
            }


        }

        fetchData()
    })
    return (
        <Stack>
            <SearchBar />

            <Stack>
                {books?.length > 0 ? <BookListing books={books} /> : <Typography textAlign={`center`}>No books here yet!</Typography>}
            </Stack>


        </Stack>
    )
}

export default Home
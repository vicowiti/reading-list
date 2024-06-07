import { Stack, Typography } from "@mui/material"
import SearchBar from "../components/SearchBar"
import { useEffect, useState } from "react"
import { fetchBooks } from "../services/graphql"
import { Book } from "../types"
import BookListing from "../components/BookListing"
import { toast } from "sonner"


const Home = () => {
    const [books, setBooks] = useState<Book[]>([])
    const [search, setSearch] = useState("")
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

    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
    return (
        <Stack gap={3}>
            <Stack display={`flex`} justifyContent={"center"} alignItems={"center"}>
                <SearchBar search={search} setSearch={setSearch} />
            </Stack>


            <Stack style={{ width: "100%" }}>
                {filteredBooks?.length > 0 ? <BookListing books={filteredBooks} /> : <Typography mt={5} color={"#777"} fontWeight={"700"} textAlign={`center`}>No books here yet! Refine Search</Typography>}
            </Stack>


        </Stack>
    )
}

export default Home
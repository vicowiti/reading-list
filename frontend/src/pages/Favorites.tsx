import { Stack, Typography } from "@mui/material"
import SearchBar from "../components/SearchBar"
import BookListing from "../components/BookListing"
import { useState } from "react"
import { Book } from "../types"


const Favorites = () => {
    const savedString = localStorage.getItem("readingList")
    const books: Book[] = savedString ? JSON.parse(savedString) : []
    const [search, setSearch] = useState("")
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

export default Favorites
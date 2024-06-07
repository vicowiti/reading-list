import { Search } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'


const SearchBar = () => {
    return (
        <TextField
            id="search-bar"

            placeholder='Search Books'
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                ),
            }}
            variant="standard"
        />
    )
}

export default SearchBar
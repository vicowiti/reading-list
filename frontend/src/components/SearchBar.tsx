import { Search } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'

interface Props {
    setSearch: React.Dispatch<React.SetStateAction<string>>
    search: string
}
const SearchBar = (props: Props) => {
    return (
        <TextField
            id="search-bar"
            type='search'
            value={props.search}
            onChange={e => props.setSearch(e.target.value)}
            placeholder='Search Books'
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                ),
            }}
            variant="outlined"
            style={{ marginTop: "20px", width: "300px" }}
        />
    )
}

export default SearchBar
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import './SearchField.css';

const SearchField = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return;

        navigate(`/search?q=${search}`);
        setSearch('');
    }


    return (
        <div className='search-container'>
            <h3>Search our catalog for your favorite Title</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search a title" onChange={(e) => setSearch(e.target.value)}
                    value={search} />
                <button type="submit"><BiSearch /></button>
            </form>
        </div>
    )
}

export default SearchField
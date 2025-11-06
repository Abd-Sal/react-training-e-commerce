import { useEffect, useRef, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink, useNavigate } from 'react-router';
import { APIConfig } from '../API/APIConfig';
import { CallAPIService } from '../Services/CallAPIService';

const SearchNavbar = () => {
    const searchForm = useRef();
    const [allCategories, setAllCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const [search, setSearch] = useState('')
    const navigate = useNavigate();

    const fetchAllCategories = ()=>{
        let url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.CATEGORIRES}`
        CallAPIService.getFetch({
            'url': `${url}`
        })
        .then((data)=>{
            setAllCategories(data)
        })
        .catch((e) =>{
            console.log(e.message);
        })
        .finally(()=>{})
    }

    useEffect(()=>fetchAllCategories, [])
    
    const handleSelect = (category) => {
        setSelectedCategory(category);
    };

    const doSearch = ()=>{
        let _url = '/products';
        if(search)
            _url += `?search=${search}`
        if(selectedCategory)
            if(search)
                _url += `&category=${selectedCategory}`
            else
                _url += `?category=${selectedCategory}`
        navigate(`${_url}`)
    }

    return (
    <div className='search-form '>
        <form action=""
            className='d-flex flex-grow-1 alig-items-center justify-content-center'
            ref={searchForm}
            onSubmit={(e)=>{
                e.preventDefault();
                doSearch();
            }}
            >
            <input 
                type="text"
                placeholder='Search'
                className='ps-2 pe-2 search-navbar flex-grow-1'
                onInput={(e)=>{
                    if(e.key !== 'Enter')
                        setSearch(e.target.value)
                    else if(search.length > 3 && e.key === 'Enter')
                        searchForm.current.submit();
                }}/>
            <Dropdown>
                <Dropdown.Toggle variant="white" id="dropdown-basic" className='ps-3 pe-3'>
                    {selectedCategory? selectedCategory : 'All Categories'}
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    <Dropdown.Item onClick={()=>handleSelect('')}>
                        All Categories
                    </Dropdown.Item>
                    {

                        Array.isArray(allCategories) && allCategories.length ?
                            allCategories.map((item) => (
                            <Dropdown.Item key={item} onClick={() => handleSelect(item)}>
                                {item}
                            </Dropdown.Item>
                            ))
                        :
                            <Dropdown.Item onClick={fetchAllCategories}>
                                Get Categories
                            </Dropdown.Item>
                    }
                </Dropdown.Menu>
            </Dropdown>
            <button className='btn btn-primary ps-3 pe-3'>Search</button>
        </form>
    </div>
  )
}

export default SearchNavbar
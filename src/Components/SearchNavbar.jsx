import React, { useEffect, useRef, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink, useNavigate } from 'react-router';

const SearchNavbar = () => {
    const searchForm = useRef();
    const [allCategories, setAllCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const [search, setSearch] = useState('')
    const [url, setUrl] = useState('');
    const navigate = useNavigate();

    const fetchAllCategories = ()=>{
        fetch(`https://dummyjson.com/products/category-list`)
        .then((response)=>{
            if(response.ok)
                return response.json();
            throw new Error('Faild Get Categories')
        })
        .then((data)=>{
            setAllCategories(data)
        })
        .catch((e) =>{
            // console.log(e.message)
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
            _url += `&category=${selectedCategory}`
        // setUrl(_url);
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
                console.log('Searching...')
            }}
            >
            <input 
                type="text"
                placeholder='Search'
                className='ps-2 pe-2 search-navbar flex-grow-1'
                // onKeyUp={(e)=>{
                //     if(e.key === 'Enter' && search.length > 3)
                //         searchForm.current.submit();
                // }}
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
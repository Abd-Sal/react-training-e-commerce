import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { CallAPIService } from '../Services/CallAPIService';
import { APIConfig } from '../API/APIConfig';
import { useSearchParams } from "react-router";

const Paginatoin = ({setAllProducts, setLoading, setErrorMsg, sortingFields=[]}) => {

    const [limit, setLimit] = useState(12)
    const [skip, setSkip] = useState(0)
    const [sortBy, setSortBy] = useState('title')
    const [order, setOrder] = useState('desc')

    const [totalProducts, setTotalProducts] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(()=>{
        setSkip(0)
    }, [searchParams])

    useEffect(() => {
        const calculatedTotalPages = Math.ceil(totalProducts / limit);
        setTotalPages(calculatedTotalPages);
        
        const calculatedCurrentPage = Math.floor(skip / limit) + 1;
        setCurrentPage(calculatedCurrentPage);
    }, [totalProducts, limit, skip, searchParams]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        let options = {
            'limit': limit,
            'skip': skip,
            'order': order,
            'sortBy': sortBy,
        }
        let category = params.get(`category`)
        let search = params.get('search');
        search ? options['searchQuery'] = search : '';
        let url = `${APIConfig.BASE_URL}${category ? APIConfig.ENDPOINTS.PRODUCTS_BY_CATEGORIRES(category) :  search ? APIConfig.ENDPOINTS.SEARCH_PRODUCT : APIConfig.ENDPOINTS.PRODUCTS}`
        if(!params.getAll.length)
            url = `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.PRODUCTS}`
        options['url'] = `${url}`
        console.log(url);
        
        setErrorMsg('');
        setLoading(true);
        CallAPIService.getFetch(options)
        .then((data) => {
            setAllProducts(data.products)
            setTotalProducts(data.total)
        })
        .catch((e) => {
            setErrorMsg(e.message);
        })
        .finally(() => { 
            setLoading(false);
        })
    }, [limit, sortBy, order, skip, searchParams])

  return (
    <Row className="p-0">
    {
        sortingFields.length ?
        <>
            <Col className="ps-0">
                <select
                    name="sortBy"
                    id="sortBy"
                    className="form-select"
                    onChange={(e)=>{
                        setSortBy(e.target.value)
                    }}
                >
                    {
                        sortingFields.map((item, index)=>(
                            <option key={index} value={item}>{item}</option>
                        ))
                    }
                </select>
            </Col>
            <Col className="p-0">
                <select
                    name="order"
                    id="order"
                    defaultValue="desc"
                    className="form-select"
                    onChange={(e)=>{
                        setOrder(e.target.value)
                    }}
                >
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
            </Col>
        </>
        :
        ''
    }
        <Col lg={sortingFields.length ? '' : 6} className={sortingFields.length ? 'pe-0' : "ps-0"}>
            <select
                name="limit"
                id="limit"
                defaultValue="12"
                className="form-select"
                onChange={(e)=>{
                    setSkip(0)
                    setLimit(parseInt(e.target.value))
                }}
            >
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="36">36</option>
                <option value="48">48</option>
            </select>
        </Col>
        <Col lg={12} className="p-0">
            <div className="w-100 d-flex justify-content-between align-items-center pt-2 pb-2">
                <button 
                    className="btn btn-dark ps-5 pe-5"
                    disabled={currentPage <= 1}
                    onClick={()=>{
                        if(skip >= limit)
                        setSkip(skip-limit)
                    }}
                >prev</button>
                <p className="mb-0">{currentPage} of {totalPages}</p>
                <button 
                    className="btn btn-dark ps-5 pe-5"
                    disabled={currentPage >= totalPages}
                    onClick={()=>{
                        setSkip(skip+limit)
                    }}
                >next</button>
            </div>
        </Col>
    </Row>
  )
}

export default Paginatoin
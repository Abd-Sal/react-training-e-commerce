import { useEffect, useState } from 'react'
import { Alert, Spinner } from 'react-bootstrap'
import { NavLink } from 'react-router'
import { CallAPIService } from '../Services/CallAPIService';
import { APIConfig } from '../API/APIConfig';

const CateHeroSection = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false);
    const [faildMsg, setFaildMsg] = useState('');
    useEffect(()=>{
        setFaildMsg('');
        setLoading(true);
        CallAPIService.getFetch({
          'limit': 9,
          'skip': 0,
          'url': `${APIConfig.BASE_URL}${APIConfig.ENDPOINTS.CATEGORIRES}`
        })
        .then((data)=>{
          setCategories(data.slice(0, 10))
        })
        .catch((error)=>{
          setFaildMsg(error.message);
        })
        .finally(()=>{ setLoading(false); })
    }, [])

  return (
    <>
        <div className="position-relative h-100 top-categories rounded-2 d-flex flex-column justify-content-start align-items-start gap-1">
            {
              Array.isArray(categories) && categories.map((item)=>(
                <NavLink 
                    to={`/products?category=${item}`} 
                    key={item} 
                    className="w-100 btn d-flex justify-content-start align-items-center">
                    {item}
                </NavLink>
              ))
            }
            {
              loading &&
              <Spinner animation="border" role="status" className='position-absolute spinner-product-loading'>
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            }
            {
              faildMsg &&
              <Alert key={'faild-msg'} variant={'danger'} className='w-75 position-absolute top-50 start-50 translate-middle'>
                  {faildMsg}
              </Alert>
            }
        </div>
    </>
  )
}

export default CateHeroSection
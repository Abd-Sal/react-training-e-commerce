import { useState } from "react"
import { Col } from "react-bootstrap"

const ListCountries = () => {
    const[countries, setCountries] = useState([
        {
            'name':  'United Arab Emirats',
            'flag' : <span className="fi fi-ae  size"></span>,
            'shopName' : 'Shopname.com.ae'
        },
        {
            'name':  'Australia',
            'flag' : <span className="fi fi-au size"></span>,
            'shopName' : 'Shopname.com.ae'
        },
        {
            'name':  'United State America',
            'flag' : <span className="fi fi-us size"></span>,
            'shopName' : 'Shopname.com.ae'
        },
        {
            'name':  'Russia',
            'flag' : <span className="fi fi-ru size"></span>,
            'shopName' : 'Shopname.com.ra'
        },
        {
            'name':  'Italy',
            'flag' : <span className="fi fi-it size"></span>,
            'shopName' : 'Shopname.com.it'
        },
        {
            'name':  'Denmark',
            'flag' : <span className="fi fi-dk size"></span>,
            'shopName' : 'Shopname.com.dk'
        },
        {
            'name':  'France',
            'flag' : <span className="fi fi-fr size"></span>,
            'shopName' : 'Shopname.com.fr'
        },
        {
            'name':  'China',
            'flag' : <span className="fi fi-cn size"></span>,
            'shopName' : 'Shopname.com.ch'
        },
        {
            'name':  'British',
            'flag' : <span className="fi fi-io size"></span>,
            'shopName' : 'Shopname.com.br'
        },
        {
            'name':  'Syria',
            'flag' : <span className="fi fi-sy size"></span>,
            'shopName' : 'Shopname.com.sy'
        },
    ])
  return (
    <>
    {
        countries.map((item, index)=>(
            <Col key={index} className="mb-3 p-0">
                <div key={index} className="w-100 d-flex justify-content-start align-items-center gap-3">
                    <div className="flag">
                        {item.flag}
                    </div>
                    <div className="flag-name d-flex flex-column justify-content-center align-items-start gap-2">
                        <h4 className="mb-0">{item.name}</h4>
                        <p className="mb-0">{item.shopName}</p>
                    </div>
                </div>
            </Col>
        ))
    }
    </>
  )
}

export default ListCountries
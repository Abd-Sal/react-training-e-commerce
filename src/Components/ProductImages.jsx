import { useEffect, useState, useRef } from "react"
import { Alert, Col, Row } from "react-bootstrap"
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import useFancybox from '../Components/fancybox/useFancybox';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
// Optional: If you want the carousel functionality
import { Carousel } from "@fancyapps/ui";
import "@fancyapps/ui/dist/carousel/carousel.css";

const ProductImages = ({images}) => {
    const [fancyboxRef] = useFancybox({})
    const [loading, setLoading] = useState(true);
    const [activeImage, setActiveImage] = useState('')

    useEffect(()=>{
        if(images){
            setLoading(false)
        }
    }, [images])
    const galleryRef = useRef(null);
    useEffect(() => {
        const gallery = galleryRef.current;
        Fancybox.bind(gallery, "[data-fancybox]", {
            infinite: false,
        });
        return () => {
            Fancybox.unbind(gallery);
            Fancybox.close();
        };
    }, []);

    if(!loading){
        if(!images){
            return(
                <>
                    <Alert key={'faild-msg'} variant={'warning'} className='w-100 position-absolute top-50 start-50 translate-middle'>
                        Could not load images
                    </Alert>
                </>
            )
        }
        return (
            <>
                <Row >
                    <Col lg={12}>
                        <div className="w-100 h-100 p-2">
                            <div ref={galleryRef} className="d-flex flex-wrap justify-content-start gap-1">
                                <div className="w-100 h-100 rounded-1 border border-gray mb-1">
                                    <a href={`${activeImage ? activeImage : images[0]}`} data-fancybox="gallery">
                                        <img src={`${activeImage ? activeImage : images[0]}`} alt={'active image'} />
                                    </a>
                                </div>
                                {
                                    images.length &&
                                    images.map((item, index)=>(
                                        <div key={index} className={`prod-image-detail w-24 rounded-1 border border-gray mb-1`}>
                                            <input
                                                id={`image-${index}`}
                                                className="hidden-checkbox"
                                                type="radio"
                                                name="act-img"
                                                value={item}
                                                onChange={(e)=>{
                                                    if(e.target.checked)
                                                        setActiveImage(e.target.value)
                                                }}
                                            />
                                            <label htmlFor={`image-${index}`} className="button-style-label bg-white">
                                                <img src={`${item}`} alt={`image`} />
                                            </label>
                                            {
                                                index ?
                                                <div className="d-none">
                                                    <a href={`${item}`} data-fancybox="gallery">
                                                        <img src={`${item}`} alt={'image'} />
                                                    </a>
                                                </div> 
                                                :''                                           
                                            }
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
    return(<></>);
}

export default ProductImages
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

    useEffect(()=>{
        if(images){
            setLoading(false)
        }
    }, [loading])

    const galleryRef = useRef(null);

    useEffect(() => {
        const gallery = galleryRef.current;

        // Initialize Fancybox
        Fancybox.bind(gallery, "[data-fancybox]", {
        // Your custom options
            infinite: false,
        });

        // Cleanup
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
                <Row>
                    <Col lg={12}>
                        <div className="w-100 h-100">
                            <div ref={galleryRef}>
                                <a href={`${images[0]}`} data-fancybox="gallery">
                                    <img src={`${images[0]}`} alt="Image 1" />
                                </a>
                                {/* <a href="/image2.jpg" data-fancybox="gallery">
                                    <img src="/thumb2.jpg" alt="Image 2" />
                                </a>
                                <a href="/image3.jpg" data-fancybox="gallery">
                                    <img src="/thumb3.jpg" alt="Image 3" />
                                </a> */}
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
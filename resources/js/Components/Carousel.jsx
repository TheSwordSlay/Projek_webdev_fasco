import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Carousel = (images) => {
    const fasel = false;
    return (
        <div>
            <OwlCarousel className='owl-theme' loop margin={10} items="1" autoplay="true" autoplayTimeout="3000" dots={fasel}>
                <div className='item'>
                    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"  />
                </div>
                <div className='item'>
                    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"  />
                </div>
                <div className='item'>
                    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"  />
                </div>
                <div className='item'>
                    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" />
                </div>
            </OwlCarousel>;        
            {/* <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle"></a> 
                <a href="#slide2" className="btn btn-circle"></a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle"></a> 
                <a href="#slide3" className="btn btn-circle"></a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle"></a> 
                <a href="#slide4" className="btn btn-circle"></a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle"></a> 
                <a href="#slide1" className="btn btn-circle"></a>
                </div>
            </div>
            </div>         */}

        </div>
    )
}

export default Carousel
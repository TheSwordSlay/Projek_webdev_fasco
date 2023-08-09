import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Carousel = (resep) => {
    const a = resep.resep.length
    const fasel = false;
    return (
        <div className='h-100'>
            <OwlCarousel className='owl-theme' loop margin={10} items="1" autoplay="true" autoplayTimeout="3000" dots={fasel}>
                <div className='item h-80'>
                    <img src={"/storage/"+resep.resep[a-1].gambar} className='max-h-full h-full relative'/>
                    <div className='absolute text-white top-45 right-0 bottom-0 left-0 bg-gradient-to-t from-slate-800 to-transparent'>
                        <div className='mx-8 my-8'>
                            <p className='font-bold text-3xl my-2'>Resep {resep.resep[a-1].title}</p>
                            <div className='flex'>
                                <div className="badge badge-outline">{resep.resep[a-1].tipe}</div> 
                                <div className="badge badge-outline mx-2">{resep.resep[a-1].daerah}</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='item h-80 relative'>
                    <img src={"/storage/"+resep.resep[a-2].gambar} className='max-h-full h-full relative'/>
                    <div className='absolute text-white top-45 right-0 bottom-0 left-0 bg-gradient-to-t from-slate-800 to-transparent'>
                        <div className='mx-8 my-8'>
                            <p className='font-bold text-3xl my-2'>Resep {resep.resep[a-2].title}</p>
                            <div className='flex'>
                                <div className="badge badge-outline">{resep.resep[a-2].tipe}</div> 
                                <div className="badge badge-outline mx-2">{resep.resep[a-2].daerah}</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='item h-80 relative'>
                    <img src={"/storage/"+resep.resep[a-3].gambar} className='max-h-full h-full relative'/>
                    <div className='absolute text-white top-45 right-0 bottom-0 left-0 bg-gradient-to-t from-slate-800 to-transparent'>
                        <div className='mx-8 my-8'>
                            <p className='font-bold text-3xl my-2'>Resep {resep.resep[a-3].title}</p>
                            <div className='flex'>
                                <div className="badge badge-outline">{resep.resep[a-3].tipe}</div> 
                                <div className="badge badge-outline mx-2">{resep.resep[a-3].daerah}</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='item h-80 relative'>
                    <img src={"/storage/"+resep.resep[a-4].gambar} className='max-h-full h-full relative'/>
                    <div className='absolute text-white top-45 right-0 bottom-0 left-0 bg-gradient-to-t from-slate-800 to-transparent'>
                        <div className='mx-8 my-8'>
                            <p className='font-bold text-3xl my-2'>Resep {resep.resep[a-4].title}</p>
                            <div className='flex'>
                                <div className="badge badge-outline">{resep.resep[a-4].tipe}</div> 
                                <div className="badge badge-outline mx-2">{resep.resep[a-4].daerah}</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </OwlCarousel>        
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
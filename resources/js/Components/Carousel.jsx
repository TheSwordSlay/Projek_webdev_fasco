import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from '@inertiajs/react';

const Carousel = (resep) => {
    const a = resep.resep.length
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    const b = getRandomInt(a)

    let c = getRandomInt(a)
    while (b == c) {
        c = getRandomInt(a)
    }

    let d = getRandomInt(a)
    while (d == c || d == b) {
        d = getRandomInt(a)
    }

    let e = getRandomInt(a)
    while (e == b || e == c || e == d) {
        e = getRandomInt(a)
    }


    
    return (
        <div className='h-100'>
            <OwlCarousel className='owl-theme' loop margin={10} items="1" autoplay={true} autoplayTimeout="2500" dots={false} autoplayHoverPause={true}>
                <div className='item h-80 overflow-hidden'>
                    <Link href={"/resep/"+resep.resep[b].id}><img src={"/storage/"+resep.resep[b].gambar} className='max-w-full w-full relative'/></Link>
                    <div className='absolute text-white top-45 right-0 bottom-0 left-0 bg-gradient-to-t from-slate-800 to-transparent'>
                        <div className='mx-8 my-8'>
                            <p className='font-bold text-3xl my-2'>Resep {resep.resep[b].title}</p>
                            <div className='flex'>
                                <div className="badge badge-outline">{resep.resep[b].tipe}</div> 
                                <div className="badge badge-outline mx-2">{resep.resep[b].daerah}</div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className='item h-80 relative overflow-hidden'>
                    <Link href={"/resep/"+resep.resep[c].id}><img src={"/storage/"+resep.resep[c].gambar} className='max-w-full w-full relative'/></Link>
                    <div className='absolute text-white top-45 right-0 bottom-0 left-0 bg-gradient-to-t from-slate-800 to-transparent'>
                        <div className='mx-8 my-8'>
                            <p className='font-bold text-3xl my-2'>Resep {resep.resep[c].title}</p>
                            <div className='flex'>
                                <div className="badge badge-outline">{resep.resep[c].tipe}</div> 
                                <div className="badge badge-outline mx-2">{resep.resep[c].daerah}</div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className='item h-80 relative overflow-hidden'>
                    <Link href={"/resep/"+resep.resep[d].id}><img src={"/storage/"+resep.resep[d].gambar} className='max-w-full w-full relative'/></Link>
                    <div className='absolute text-white top-45 right-0 bottom-0 left-0 bg-gradient-to-t from-slate-800 to-transparent'>
                        <div className='mx-8 my-8'>
                            <p className='font-bold text-3xl my-2'>Resep {resep.resep[d].title}</p>
                            <div className='flex'>
                                <div className="badge badge-outline">{resep.resep[d].tipe}</div> 
                                <div className="badge badge-outline mx-2">{resep.resep[d].daerah}</div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className='item h-80 relative overflow-hidden'>
                    <Link href={"/resep/"+resep.resep[e].id}><img src={"/storage/"+resep.resep[e].gambar} className='max-w-full w-full relative'/></Link>
                    <div className='absolute text-white top-45 right-0 bottom-0 left-0 bg-gradient-to-t from-slate-800 to-transparent'>
                        <div className='mx-8 my-8'>
                            <p className='font-bold text-3xl my-2'>Resep {resep.resep[e].title}</p>
                            <div className='flex'>
                                <div className="badge badge-outline">{resep.resep[e].tipe}</div> 
                                <div className="badge badge-outline mx-2">{resep.resep[e].daerah}</div>
                            </div>
                            
                        </div>
                    </div>
                </div>   

            </OwlCarousel>     
        </div>
            // <div className='item h-80 overflow-hidden flex bg-base-200 rounded-lg'>
            //     <div className='flex-initial w-100'>
            //         <Link href={"/resep/"+resep.resep[e].id}><img src={"/storage/"+resep.resep[e].gambar} className='h-full'/></Link>
            //     </div>
            //     <div className='mx-5 my-auto w-80'>
            //         <div className='flex'>
            //                 <div className="badge badge-outline">{resep.resep[e].tipe}</div> 
            //                 <div className="badge badge-outline mx-2">{resep.resep[e].daerah}</div>
            //             </div>
            //         <p className='font-bold text-2xl my-2'>Resep {resep.resep[e].title}</p>
            //         <p className='font-semibold mb-3 text-sm'>By {resep.resep[e].author.name}</p>
            //         <p>{resep.resep[e].deskripsi.substring(0,100)}...</p>
            //         <div className='flex my-5'>
            //             <Link href={"/resep/"+resep.resep[e].id}><button className="btn btn-accent">Lihat Resep</button></Link>
            //         </div>
            //     </div>
            // </div>
    )
}

export default Carousel
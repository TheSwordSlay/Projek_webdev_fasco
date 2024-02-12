import Navbar from "@/Components/Navbar";
import { Head, Link } from "@inertiajs/react";
import Carousel from "@/Components/Carousel";
import ShowCaseResep from "@/Components/ShowcaseResep";
import Footer from "@/Components/Footer";
import { BiSolidBowlRice, BiUser, BiSolidFoodMenu, BiLogoInstagram, BiLogoGithub, BiLogoLinkedinSquare} from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Homepage(props) {
    console.log(props)
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div className="bg-neutral-content">   
            <Head title="Homepage"/>
            <div className="relative z-[20]" data-aos="fade-up">
                <Navbar user={props.auth.user}/>
            </div>
            
            <div className="grid grid-cols-3 gap-4 my-12 mx-12 relative z-[0]">
                <div className="col-span-2">
                    <div data-aos="fade-right">
                        <Carousel resep={props.resep}/>
                    </div>
                    <div className="text-center font-bold text-3xl mb-4 px-8 mt-8">
                        Resep Terbaru
                        <div className="flex justify-center mt-2"><object data="../img/divider.svg" type="" width="" ></object>   </div>
                                    
                    </div>
                    <ShowCaseResep resep={props.resep} user={props.auth.user}/>
                    <Link href={route('all.resep')}><p className="text-center text-accent-focus">Search All Resep</p></Link>                   
                </div>
       
                <div className="grid-rows-4">
                    <div className="text-center font-bold text-3xl mb-4 px-8" data-aos="fade-left">
                        About
                        <hr className="h-1 mx-auto mx-4 mt-3 bg-base-300" />
                    </div>
                    <div className="row-span-3 mx-4 text-justify px-8" data-aos="fade-left">
                        <p>Kuliner Fest adalah website kumpulan resep kuliner dari berbagai daerah di Indonesia, dimana anda dapat menemukan berbagai macam resep sesuai dengan kebutuhan kuliner anda.</p>
                        <br />
                        <p>Anda juga dapat berbagi resep di website ini, cukup dengan membuat akun di website ini, maka anda dapat berbagi resep dengan seluruh pengunjung website Kuliner Fest.</p>
                    </div>
                    <div className="px-8 mt-10" data-aos="fade-right">
                        <p className="bg-base-200 text-left font-semibold px-3 py-3">Website Stats</p>
                        <div className="bg-base-100 px-3 py-3 flex">
                            <BiSolidBowlRice size="1.45em"/> <p className="mx-3">Total resep : {props.resep.length}</p>
                        </div>
                        <div className="bg-base-100 px-3 py-3 flex">
                            <BiUser size="1.45em"/> <p className="mx-3">Jumlah user : {props.jumlahUser-1}</p>
                        </div>
                        <div className="bg-base-100 px-3 py-3 flex">
                            <BiSolidFoodMenu size="1.45em"/> <p className="mx-3">Resep Dessert : {props.jumlahDessert}</p>
                        </div>
                        <div className="bg-base-100 px-3 py-3 flex">
                            <BiSolidFoodMenu size="1.45em"/> <p className="mx-3">Resep Makanan Berat : {props.jumlahMakananBerat}</p>
                        </div>
                        <div className="bg-base-100 px-3 py-3 flex">
                            <BiSolidFoodMenu size="1.45em"/> <p className="mx-3">Resep Cemilan : {props.jumlahCemilan}</p>
                        </div>
                    </div>

                    <div className="px-8 mt-10" data-aos="fade-right"> 
                        <p className="bg-base-200 text-left font-semibold px-3 py-3">Follow Us</p>
                        <div className="bg-base-100 px-3 py-3 flex">
                            <div className="w-20">
                                <img className="rounded-full" src="../img/fiqri.jpg" />
                            </div> 
                            <div className="ml-5">
                                <div className="flex">
                                    <BiLogoInstagram size="1.5em"></BiLogoInstagram><p className="text-sm ml-1">@fiqri_syah_dani</p>
                                </div>
                                <div className="flex">
                                    <BiLogoLinkedinSquare size="1.5em" /><p className="text-sm ml-1">Rizalul Fiqri</p>
                                </div>
                                <div className="flex">
                                    <BiLogoGithub size="1.5em" /><p className="text-sm ml-1">TheSwordSlay</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-base-100 px-3 py-3 flex">
                            <div className="w-20">
                                <img className="rounded-full" src="../img/rini.png" />
                            </div> 
                            <div className="ml-5">
                                <div className="flex">
                                    <BiLogoInstagram size="1.5em"></BiLogoInstagram><p className="text-sm ml-1">@riniwlnsr</p>
                                </div>
                                <div className="flex">
                                    <BiLogoLinkedinSquare size="1.5em" /><p className="text-sm ml-1">Rini Wulan Sari</p>
                                </div>
                                <div className="flex">
                                    <BiLogoGithub size="1.5em" /><p className="text-sm ml-1">RiniWS12</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-base-100 px-3 py-3 flex">
                            <div className="w-20">
                                <img className="rounded-full" src="../img/putri.jpeg" />
                            </div> 
                            <div className="ml-5">
                                <div className="flex">
                                    <BiLogoInstagram size="1.5em"></BiLogoInstagram><p className="text-sm ml-1">@azzahrahputri_16</p>
                                </div>
                                <div className="flex">
                                    <BiLogoLinkedinSquare size="1.5em" /><p className="text-sm ml-1">Putri Amelia Az-zahrah</p>
                                </div>
                                <div className="flex">
                                    <BiLogoGithub size="1.5em" /><p className="text-sm ml-1">putriamelia16</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
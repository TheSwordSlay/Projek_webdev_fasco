import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import Carousel from "@/Components/Carousel";
import ShowCaseResep from "@/Components/ShowcaseResep";
import Footer from "@/Components/Footer";

export default function Homepage(props) {
    console.log(props)
    return(
        <div>   
            <Head title="Homepage"/>
            <Navbar />
            <Carousel />
            <div className="grid grid-cols-3 gap-4 my-12 mx-24">
            <ShowCaseResep resep={props.resep}/>
            </div>

            <Footer />
        </div>
    )
}
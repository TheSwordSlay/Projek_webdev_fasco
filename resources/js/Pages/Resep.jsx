import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import OneResep from "@/Components/OneResep";

export default function Resep(props) {
    return(
        <div>   
            <Head title="Resep"/>
            <Navbar />
            <OneResep resep={props.resep}/>
            <Footer />
        </div>
    )
}
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import OneResep from "@/Components/OneResep";

export default function Resep(props) {
    return(
        <div className="bg-neutral-content">   
            <Head title="Resep"/>
            <Navbar user={props.auth.user}/>
            <OneResep resep={props.resep}/>
            <Footer />
        </div>
    )
}
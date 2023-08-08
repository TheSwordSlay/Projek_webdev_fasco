import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import Carousel from "@/Components/Carousel";
import ShowCaseResep from "@/Components/ShowcaseResep";
import Footer from "@/Components/Footer";

export default function Homepage(props) {
    return(
        <div className="bg-neutral-content">   
            <Head title="Homepage"/>
            <Navbar user={props.auth.user}/>
            
            <div className="grid grid-cols-3 gap-4 my-12 mx-12">
            <div className="col-span-2">
                <Carousel resep={props.resep}/>
                <div className="text-center font-bold text-3xl mb-4 px-8 mt-8">
                    Resep Terbaru
                    <div className="flex justify-center mt-2"><object data="../img/divider.svg" type="" width="" ></object>   </div>
                                
                </div>
                <ShowCaseResep resep={props.resep} user={props.auth.user}/>
            </div>
            
            <div className="grid-rows-4">
                <div className="text-center font-bold text-3xl mb-4 px-8">
                    About
                    <hr className="h-1 mx-auto mx-4 mt-3 bg-base-300" />
                </div>
                <div className="row-span-3 mx-4 text-justify px-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad sed culpa, minima accusantium illo enim autem eveniet nisi doloribus. Similique ex deleniti aliquam. Magnam facilis pariatur et suscipit animi deserunt hic laboriosam fuga perferendis accusamus voluptates impedit laudantium minima, vero ipsam neque ipsum provident tenetur debitis rem? Omnis fuga illum perspiciatis corporis doloremque recusandae atque animi, repellendus ipsum quod voluptatem!
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}
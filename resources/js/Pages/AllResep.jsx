import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import ShowAllResep from "@/Components/ShowAllResep";
import Pagination from "@/Components/Pagination";
import { BiSearch } from "react-icons/bi";
import {useForm} from "@inertiajs/react";

export default function AllResep(props) {
    const { data, setData, get, processing, errors } = useForm({
        search: props.prevSearch.search,
        daerah: props.prevDaerah.daerah,
        tipe: props.prevTipe.tipe,
    })

    function submit(e) {
        e.preventDefault()
        get(route('all.resep', data, {
            _method: 'get'
        }));
      }

    return(
        <div className="bg-neutral-content">   
            <Head title="Search Resep"/>
            <Navbar user={props.auth.user}/>
            <h1 className="text-center text-3xl font-bold mt-8 font-[inter]">Cari Resep</h1>
            <h1 className="text-center font-normal font-[inter]">Cari resep sesuai dengan kebutuhan anda disini</h1>
            <div className="mx-12 mt-8">
                <form onSubmit={submit}>

                <div className="flex justify-center">
                    <input type="text" placeholder="Cari nama resep disini..." className="rounded-l-full rounded-r-none input input-bordered w-full max-w-xs" defaultValue={props.prevSearch.search} onChange={e => setData('search', e.target.value)} />
                    <button type="submit" className="btn btn-accent rounded-r-full rounded-l-none"><BiSearch></BiSearch></button>
                </div>
                <div className="flex justify-center">
                    <div className="form-control max-w-xs">
                    <label className="label">
                        <span className="label-text">Asal daerah</span>
                    </label>
                    <select className="select select-bordered" defaultValue={props.prevDaerah.daerah} onChange={e => setData('daerah', e.target.value)}>
                        <option value="">Semua daerah</option>
                            <option value="Sumatera Selatan">Sumatera Selatan</option>
                            <option value="Sumatera Utara">Sumatera Utara</option>
                            <option value="Sumatera Barat">Sumatera Barat</option>
                            <option value="Jambi">Jambi</option>
                            <option value="Lampung">Lampung</option>
                            <option value="Riau">Riau</option>
                            <option value="Aceh">Aceh</option>
                            <option value="Riau">Riau</option>
                            <option value="Bangka Belitung">Bangka Belitung</option>
                            <option value="Kalimantan Barat">Kalimantan Barat</option>
                            <option value="Kalimantan Timur">Kalimantan Timur</option>
                            <option value="Kalimantan Selatan">Kalimantan Selatan</option>
                            <option value="Kalimantan Tengah">Kalimantan Tengah</option>
                            <option value="Kalimantan Utara">Kalimantan Utara</option>
                            <option value="Banten">Banten</option>
                            <option value="Jakarta">Jakarta</option>
                            <option value="Jawa Barat">Jawa Barat</option>
                            <option value="Jawa Tengah">Jawa Tengah</option>
                            <option value="Jawa Timur">Jawa Timur</option>
                            <option value="Bali">Bali</option>
                            <option value="Nusa Tenggara Timur">Nusa Tenggara Timur</option>
                            <option value="Nusa Tenggara Barat">Nusa Tenggara Barat</option>
                            <option value="Gorontalo">Gorontalo</option>
                            <option value="Sulawesi Barat">Sulawesi Barat</option>
                            <option value="Sulawesi Timur">Sulawesi Timur</option>
                            <option value="Sulawesi Selatan">Sulawesi Selatan</option>
                            <option value="Sulawesi Tengah">Sulawesi Tengah</option>
                            <option value="Sulawesi Utara">Sulawesi Utara</option>
                            <option value="Maluku">Maluku</option>
                            <option value="Papua">Papua</option>
                    </select>
                    </div>

                    <div className="form-control max-w-xs ml-6">
                    <label className="label">
                        <span className="label-text">Tipe Makanan</span>
                    </label>
                    <select className="select select-bordered" defaultValue={props.prevTipe.tipe} onChange={e => setData('tipe', e.target.value)}>
                        <option value="">Semua tipe</option>
                            <option value="Cemilan">Cemilan</option>
                            <option value="Makanan berat">Makanan berat</option>
                            <option value="Dessert">Dessert</option>
                    </select>
                    </div>
                    
                </div>

                </form>
                <ShowAllResep resep={props.resep}></ShowAllResep>
                <div className="flex justify-center items-center mb-10">
                    <Pagination data={props.resep}></Pagination>
                </div>

            </div>
            <Footer />
        </div>
    )
}
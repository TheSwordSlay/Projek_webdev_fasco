import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { Head, Link, router } from '@inertiajs/react';
import { usePage } from '@inertiajs/react'
import Swal from 'sweetalert2'
import React from 'react';
import Navbar from '@/Components/Navbar';
import Footer from "@/Components/Footer";

export default function Dashboard(props) {
    console.log(props)
    const { flash } = usePage().props
    const conslelog = (i) => {
        console.log(i)
    }

    const confirmDelete = (i) => {
        const id = i
        const data = {
            id
        }
        Swal.fire({
            title: 'Anda yakin?',
            text: "Resep yang sudah dihapus tidak bisa dikembalikan lagi",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, saya yakin!'
          }).then((result) => {
            if (result.isConfirmed) {
                router.post('/resep/delete-admin', data)
            }
          })
    }
    return (
        <div className="bg-neutral-content">
            <Head title="Dashboard admin" />
            <Navbar user={props.auth.user}></Navbar>
            <div className="py-12 mx-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <p className="mb-4 text-xl font-semibold">List semua resep</p>
                            {flash.message &&
                                <div className="alert alert-success my-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>{flash.message}</span>
                                </div>
                            }

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {/* <div className="p-6 text-gray-900">You're logged in!</div> */}
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                <tr>
                                    <th>Nama Makanan</th>
                                    <th>Pemilik Resep</th>
                                    <th>Tipe Makanan</th>
                                    <th>Aksi</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {props.myResep && props.myResep.length > 0 ? props.myResep.map((data, i) => {
                                    return(
                                        <React.Fragment key={i}>
                                                                                        {/* row 1 */}
                                            <tr>
                                                <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <Link href={"../resep/"+data.id}>
                                                            <img src={"../storage/"+data.gambar} alt="Avatar Tailwind CSS Component" />
                                                        </Link>
                                                    </div>
                                                    </div>
                                                    <div>
                                                    <div className="font-bold"><a href={"../resep/"+data.id}>{data.title}</a></div>
                                                    <div className="text-sm opacity-50">{data.daerah}</div>
                                                    </div>
                                                </div>
                                                </td>
                                                <td>
                                                    {data.author.name}
                                                </td>
                                                <td>
                                                {data.tipe}
                                                <br/>
                                                </td>
                                                <td>
                                                    <button className="btn btn-error tooltip" data-tip="Delete" onClick={() => confirmDelete(data.id)}><MdDeleteOutline size="1.5em" /></button>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    )


                                }) : <tr>
                                    <div className='my-3 mx-5'>
                                        Website ini belum memiliki resep apapun
                                    </div>
                                    </tr>}
                                </tbody>
                                {/* foot */}
                                <tfoot>
                                <tr>
                                    <th>Nama Makanan</th>
                                    <th>Tipe</th>
                                    <th>Aksi</th>
                                    <th></th>
                                </tr>
                                </tfoot>
                                
                            </table>
                        </div>


                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

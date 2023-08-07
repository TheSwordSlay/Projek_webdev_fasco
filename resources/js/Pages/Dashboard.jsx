import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Link href={route('add-resep')}>
                        <button className="btn btn-accent mb-3">Tambah Resep</button>
                    </Link>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {/* <div className="p-6 text-gray-900">You're logged in!</div> */}
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                <tr>
                                    <th>Nama Makanan</th>
                                    <th>Tipe</th>
                                    <th>Aksi</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="../img/foodExample.webp" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                        </div>
                                        <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    Zemlak, Daniel and Leannon
                                    <br/>
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>
                                        <button className="btn btn-info mx-3 tooltip" data-tip="Edit"><FiEdit size="1.5em" /></button>
                                        <button className="btn btn-error tooltip" data-tip="Delete"><MdDeleteOutline size="1.5em" /></button>
                                    </td>
                                </tr>
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
        </AuthenticatedLayout>
    );
}

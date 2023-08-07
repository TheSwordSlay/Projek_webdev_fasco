import CustomAmountInput from '@/Components/CustomAmountInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function AddResep({ auth }) {
    const datas = [
        {
          id: 1,
          bahan: '',
        },
      ];
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [bahan, setBahan] = useState(datas);
    const [image, setImage] = useState('');
    const [filekey, setFileKey] = useState();
    const [inputkey, setInputKey] = useState();
    const [jumlahbahan, setJumlahBahan] = useState([1]);

    const handleSubmit = () => {
        const trueBahan = []
        bahan.map((bahans) => {
            trueBahan.push(bahans.bahan)
        })
        const data = {
            title, description, trueBahan
        }

        console.log(data)
        setFileKey(Math.random().toString(36));
        setImage('')
        setTitle('')
        setDescription('')
        setJumlahBahan([1])
        setBahan(datas)
    }

    const tambahBahan = () => {
        const lastElement = jumlahbahan[jumlahbahan.length-1]
        let tempList = jumlahbahan
        tempList.push(lastElement+1)
        setJumlahBahan(tempList)
        setInputKey(lastElement+Math.random())
        bahan.push({
            id: lastElement,
            bahan: '',
          })
    }

    const kurangBahan = () => {
        const lastElement = jumlahbahan[jumlahbahan.length-1]
        if(lastElement > 1) {
            let tempList = jumlahbahan
            setJumlahBahan(tempList.slice(0, -1))
            setInputKey(Math.random());
            bahan.pop()
        }
    }

    const updateState = (index) => (e) => {
        const newArray = bahan.map((item, i) => {
          if (index === i) {
            return { ...item, bahan: e.target.value };
          } else {
            return item;
          }
        });
        setBahan(newArray);
      };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tambah resep</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg px-8 py-8">

                        <input type="file" key={filekey || 'b' } className="file-input file-input-bordered file-input-primary w-full max-w-xs mt-4 m-2" onChange={(image) => setImage(image.target.files[0])} />

                        <input type="text" placeholder="Nama Makanan" className="m-2 input input-bordered input-primary w-full" onChange={(title) => setTitle(title.target.value)} value={title}/>

                        <input type="text" placeholder="Deskripsi Makanan" className="m-2 input input-bordered input-primary w-full" onChange={(description) => setDescription(description.target.value)} value={description}/>

                        <button className="btn btn-success m-2" onClick={tambahBahan}>Tambah Bahan</button>
                        <button className="btn btn-warning m-2" onClick={kurangBahan}>Kurangi Bahan</button>

                        <div key={inputkey || 'a'}>
                            {jumlahbahan.map((data, i) => <div key={i}>
                                <input type="text" placeholder={"Bahan ke - " + data} className="m-2 input input-bordered input-primary w-full" onChange={updateState(i)} value={bahan[i].bahan}/>
                                </div> )}
                        </div>

                        <button className="btn btn-primary m-2" onClick={() => handleSubmit()}>Submit</button>


                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

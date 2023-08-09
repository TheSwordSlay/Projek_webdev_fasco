import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';

export default function EditResep(props) {
    const datas = [
        {
          id: 1,
          bahan: '',
        },
      ];
    
      const datalangkah = [
        {
          id: 1,
          langkah: '',
        },
      ];
    const id = props.myResep.id;
    const [title, setTitle] = useState(props.myResep.title);
    const [description, setDescription] = useState(props.myResep.deskripsi);
    const [tipe, setTipe] = useState(props.myResep.tipe);
    const [daerah, setDaerah] = useState(props.myResep.daerah);
    const [bahan, setBahan] = useState(datas);
    const [langkah, setLangkah] = useState(datalangkah);
    const [image, setImage] = useState('');
    const [filekey, setFileKey] = useState();
    const [inputkey, setInputKey] = useState();
    const [inputkeyLangkah, setInputKeyLangkah] = useState();
    const [jumlahbahan, setJumlahBahan] = useState(props.myResep.bahan);
    const [jumlahlangkah, setJumlahLangkah] = useState(props.myResep.langkah);
    const { flash } = usePage().props

    useEffect(() => {
        props.myResep.bahan.map((data, i) => {
            bahan.push({
                id: i+1,
                bahan: data,
              })
        })

        props.myResep.langkah.map((data, i) => {
            langkah.push({
                id: i+1,
                langkah: data,
              })
        })
        bahan.shift()
        langkah.shift()
    }, [])

    function konsol(i) {
        console.log(i)
    }
    function blobUrl() {
      const url = URL.createObjectURL(image)
      return url
    }

    const handleSubmit = () => {
        const trueBahan = []
        const trueLangkah = []
        bahan.map((bahans) => {
            trueBahan.push(bahans.bahan)
        })

        langkah.map((langkahs) => {
            trueLangkah.push(langkahs.langkah)
        })
        const data = {
            id, title, description, trueBahan, trueLangkah, tipe, daerah, image
        }

        console.log(data)
        router.post('/resep/update', data)

        // setFileKey(Math.random().toString(36));
        // setImage('')
        // setTitle('')
        // setDescription('')
        // setJumlahBahan([1])
        // setBahan(datas)
        // setJumlahLangkah([1])
        // setLangkah(datalangkah)
    }

    const tambahBahan = () => {
        let tempList = jumlahbahan
        tempList.push('')
        setJumlahBahan(tempList)
        setInputKey(Math.random())
        bahan.push({
            id: jumlahbahan.length+1,
            bahan: '',
          })
    }

    const tambahLangkah = () => {
        let tempList = jumlahlangkah
        tempList.push('')
        setJumlahLangkah(tempList)
        setInputKeyLangkah(Math.random())
        langkah.push({
            id: jumlahlangkah.length+1,
            langkah: '',
          })
    }

    const kurangBahan = () => {
        if(jumlahbahan.length > 1) {
            let tempList = jumlahbahan
            setJumlahBahan(tempList.slice(0, -1))
            setInputKey(Math.random());
            bahan.pop()
        }
    }

    const kurangLangkah = () => {
        if(jumlahlangkah.length > 1) {
            let tempList = jumlahlangkah
            setJumlahLangkah(tempList.slice(0, -1))
            setInputKeyLangkah(Math.random());
            langkah.pop()
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

    const updateStateLangkah = (index) => (e) => {
        const newArray = langkah.map((item, i) => {
          if (index === i) {
            return { ...item, langkah: e.target.value };
          } else {
            return item;
          }
        });
        setLangkah(newArray);
      };

    return (
        <AuthenticatedLayout
            user={props.accName}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Resep</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            {(flash.message != undefined) || (Reflect.ownKeys(props.errors).length > 0) ?
                                <div className="alert alert-error my-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>Data yang diisi belum lengkap</span>
                                </div>
                                : <></>
                            }
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg px-8 py-8">

                        {image ? <img src={blobUrl()} alt="Makanan" className='h-40'/> : <img src={"/storage/"+props.myResep.gambar} alt="Makanan" className='h-40'/>}
                        <p className='m-2'>Gambar makanan</p>
                        <input type="file" key={filekey || 'b' } className="file-input file-input-bordered file-input-primary bg-white w-full max-w-xs m-2" onChange={(image) => setImage(image.target.files[0])}/>

                        <input type="text" placeholder="Nama Makanan" className="bg-white m-2 input input-bordered input-primary w-full" onChange={(title) => setTitle(title.target.value)} defaultValue={props.myResep.title}/>

                        <textarea className="textarea textarea-bordered bg-white m-2 w-full" placeholder="Deskripsi Makanan" onChange={(description) => setDescription(description.target.value)} defaultValue={props.myResep.deskripsi}></textarea>


                        <div className='m-2'>
                            
                            <label className="label">
                                <span className="label-text">Pilih daerah asal makanan</span>
                            </label>
                            <select className="select select-info w-full max-w-xs bg-white" defaultValue={props.myResep.daerah} onChange={e => setDaerah(e.target.value)}>
                            <option disabled value="">Pilih daerah makanan</option>
                            <option value="Sumatera Selatan">Sumatera Selatan</option>
                            <option value="Jawa Barat">Jawa Barat</option>
                            </select>
                        </div>

                        <div className='m-2'>
                            
                            <label className="label">
                                <span className="label-text">Pilih tipe makanan</span>
                            </label>
                            <select className="select select-info w-full max-w-xs bg-white" defaultValue={props.myResep.tipe} onChange={e => setTipe(e.target.value)}>
                            <option disabled selected value="">Pilih tipe makanan</option>
                            <option value="Cemilan">Cemilan</option>
                            <option value="Makanan berat">Makanan berat</option>
                            <option value="Desert">Desert</option>
                            </select>
                        </div>

                        <button className="btn btn-success m-2" onClick={tambahBahan}>Tambah Bahan</button>
                        <button className="btn btn-warning m-2" onClick={kurangBahan}>Kurangi Bahan</button>

                        <div key={inputkey || 'a'}>
                            {jumlahbahan.map((data, i) => <div key={i}>
                                <input type="text" placeholder={"Bahan ke - " + (i+1)} className="m-2 input input-bordered input-primary w-full bg-white" onChange={updateState(i)} defaultValue={data}/>
                                </div> )}
                        </div>

                        <button className="btn btn-success m-2" onClick={tambahLangkah}>Tambah Langkah</button>
                        <button className="btn btn-warning m-2" onClick={kurangLangkah}>Kurangi Langkah</button>

                        <div key={inputkeyLangkah || 'c'}>
                            {jumlahlangkah.map((data, i) => <div key={i}>
                                <input type="text" placeholder={"Langkah ke - " + (i+1)} className="m-2 input input-bordered input-primary w-full bg-white" onChange={updateStateLangkah(i)} defaultValue={data}/>
                                </div> )}
                        </div>

                        <button className="btn btn-primary m-2" onClick={() => handleSubmit()}>Submit</button>                       


                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
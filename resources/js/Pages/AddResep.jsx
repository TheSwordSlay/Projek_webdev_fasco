import { Head, router } from '@inertiajs/react';
import { useState } from 'react';
import { usePage } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function AddResep(props) {
  console.log(props)
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
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tipe, setTipe] = useState('');
    const [daerah, setDaerah] = useState('');
    const [bahan, setBahan] = useState(datas);
    const [langkah, setLangkah] = useState(datalangkah);
    const [image, setImage] = useState('');
    const [filekey, setFileKey] = useState();
    const [inputkey, setInputKey] = useState();
    const [inputkeyLangkah, setInputKeyLangkah] = useState();
    const [jumlahbahan, setJumlahBahan] = useState([1]);
    const [jumlahlangkah, setJumlahLangkah] = useState([1]);
    const { flash } = usePage().props

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
            title, description, trueBahan, trueLangkah, tipe, daerah, image
        }

        router.post('/tambahresep', data)

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

    const tambahLangkah = () => {
        const lastElement = jumlahlangkah[jumlahlangkah.length-1]
        let tempList = jumlahlangkah
        tempList.push(lastElement+1)
        setJumlahLangkah(tempList)
        setInputKeyLangkah(lastElement+Math.random())
        langkah.push({
            id: lastElement,
            langkah: '',
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

    const kurangLangkah = () => {
        const lastElement = jumlahlangkah[jumlahlangkah.length-1]
        if(lastElement > 1) {
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
      <div className='bg-neutral-content'>
            <Head title="Post resep" />
            <Navbar user={props.auth.user}></Navbar>
            <div className="mx-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                          {(flash.message != undefined) || (Reflect.ownKeys(props.errors).length > 0) ?
                                <div className="alert alert-error my-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>Data yang diisi belum lengkap / tidak sesuai</span>
                                </div>
                                : <></>
                            }
                    <div className="text-center text-3xl font-bold mt-8 font-[inter]">
                      Tambah Resep
                    </div>
                    <div className="bg-neutral-content overflow-hidden sm:rounded-lg px-8 py-8">
                        
                        {image ? 
                        <div className='flex justify-center'>                       
                        <img src={blobUrl()} alt="Makanan" className='h-60'/> 
                        </div>
                        : ""}
                        <label className="label mx-2">
                          <span className="label-text">Masukkan Foto</span>
                        </label>
                        <input type="file" key={filekey || 'b' } className="file-input file-input-bordered file-input-primary bg-white w-full mx-2 mb-2" onChange={(image) => setImage(image.target.files[0])} />
                        {props.errors.image ? <label className="label mx-2">
                          <span className="label-text text-red-600">{props.errors.image}</span>
                        </label> : ""}

                        <label className="label mx-2">
                          <span className="label-text">Nama Makanan</span>
                        </label>
                        <input type="text" placeholder="Nama Makanan" className="bg-white mx-2 input input-bordered input-primary w-full" onChange={(title) => setTitle(title.target.value)} value={title} required/>
                        <label className="label mx-2">
                          <span className="label-text">Deskripsi makanan</span>
                        </label>
                        <textarea className="textarea textarea-bordered bg-white mx-2 w-full" placeholder="Deskripsi Makanan" onChange={(description) => setDescription(description.target.value)} value={description}></textarea>


                        <div className='m-2'>
                            
                            <label className="label">
                                <span className="label-text">Pilih provinsi asal makanan</span>
                            </label>
                            <select className="select select-info w-full bg-white" value={daerah} onChange={e => setDaerah(e.target.value)}>
                            <option disabled selected value="">Pilih provinsi asal makanan</option>
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
                            <option value="Bengkulu">Bengkulu</option>
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

                        <div className='m-2'>
                            
                            <label className="label">
                                <span className="label-text">Pilih tipe makanan</span>
                            </label>
                            <select className="select select-info w-full bg-white" value={tipe} onChange={e => setTipe(e.target.value)}>
                            <option disabled selected value="">Pilih tipe makanan</option>
                            <option value="Cemilan">Cemilan</option>
                            <option value="Makanan berat">Makanan berat</option>
                            <option value="Dessert">Dessert</option>
                            </select>
                        </div>

                        <button className="btn btn-success m-2" onClick={tambahBahan}>Tambah Bahan</button>
                        <button className="btn btn-warning m-2" onClick={kurangBahan}>Kurangi Bahan</button>
                        <label className="label mx-2">
                          <span className="label-text">Bahan untuk membuat makanan</span>
                        </label>
                        <div key={inputkey || 'a'}>
                          <ul className='list-disc pl-8'>
                              {jumlahbahan.map((data, i) => <div key={i}>
                                <li>
                                  <input type="text" placeholder={"Bahan ke - " + data} className="m-2 input input-bordered input-primary w-full bg-white" onChange={updateState(i)} value={bahan[i].bahan}/>
                                </li>
                                  </div> )}
                                  
                          </ul>
                        </div>

                        <button className="btn btn-success m-2" onClick={tambahLangkah}>Tambah Langkah</button>
                        <button className="btn btn-warning m-2" onClick={kurangLangkah}>Kurangi Langkah</button>
                        <label className="label mx-2">
                          <span className="label-text">Langkah untuk membuat makanan</span>
                        </label>
                        <div key={inputkeyLangkah || 'c'}>
                          <ol className='list-decimal pl-8'>
                            
                              {jumlahlangkah.map((data, i) => <div key={i}>
                              <li>
                                  <input type="text" placeholder={"Langkah ke - " + data} className="m-2 input input-bordered input-primary w-full bg-white" onChange={updateStateLangkah(i)} value={langkah[i].langkah}/>
                              </li>
                                  </div> )}
                            
                          </ol>
                        </div>

                        <button className="btn btn-primary m-2" type="submit" onClick={() => handleSubmit()}>Submit</button>


                    </div>
                </div>
            </div>
            <Footer></Footer>
      </div>
    );
}

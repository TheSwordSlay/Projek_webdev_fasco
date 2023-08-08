const OneResep = (resep) => {
    return(
  <div>


    <div className="container px-4">
      <div className="text-center text-3xl font-bold mt-8 font-[inter]">
          Resep {resep.resep.title}
      </div>
  
      <div className="my-12 mx-12 flex justify-center">
          <img src={"../storage/" + resep.resep.gambar} className="max-h-[400px] w-[1000px] brightness-75"></img>
      </div>
  
      <h1 className="font-bold ml-28 text-3xl font-[inter]">
        Deskripsi
      </h1>
      <p className=" mt-5 text-xl font-[roboto] mx-28">{resep.resep.deskripsi}</p>
  
      <div className="grid grid-cols-4 gap-4 ml-28 my-10">
          <div className="text-3xl font-bold bg-base-100 pl-8 pt-6 font-[inter] rounded-lg ">Bahan:
            <div className="text-xl mt-6 font-normal font-[roboto]"> 
                <ul className="list-disc block mb-8">
                    {resep.resep.bahan.map((data, i) => <li key={i}>{data}</li>)}
                    {/* <li>350 gram daging di potong</li>
                    <li>1 buah lobak kecil</li>
                    <li>1 batang sereh</li>
                    <li>1 lembar daun salam</li>
                    <li>1 lembar daun jeruk</li>
                    <li>1 ruas lengkuas dan jahe</li>
                    <li>garam dan kaldu</li>
                    <li>air 500 ml dan 1000 ml</li>
                    <li>minyak goreng</li>
                    <li>5 siung bawang merah</li>
                    <li>2 siung bawang putih</li>
                    <li>1/2 sdt lada butir</li>
                    <li>kacang kedelai rebus</li>
                    <li>emping</li>
                    <li>sambal</li>
                    <li>seledri</li>
                    <li>bawang goreng</li> */}
                </ul>
            </div>
          </div>
  
          <div className="text-3xl font-bold col-span-3 px-8 font-[inter]">
            Cara Membuat:
            <div className="text-xl mt-6 font-normal font-[roboto]"> 
              <ol className="list-decimal">
                {resep.resep.langkah.map((data, i) => <li key={i}>{data}</li>)}
              </ol>.
            </div>
  
          </div>
        </div>

    </div>


        </div>
    )
}

export default OneResep
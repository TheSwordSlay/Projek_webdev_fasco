const OneResep = (resep) => {
    return(
  <div>


    <div className="px-4">
      <div className="text-center text-3xl font-bold mt-8 font-[inter]">
          Resep {resep.resep.title}
      </div>
      <p className="text-center text-xl font-semi-bold mt-3">By {resep.resep.author.name}</p>
  
      <div className="my-12 mx-12 flex justify-center">
          <img src={"../storage/" + resep.resep.gambar} className="max-h-[400px] w-[1000px] brightness-75"></img>
      </div>
  
      <h1 className="font-bold ml-28 text-3xl font-[inter]">
        Deskripsi
      </h1>
      <p className=" mt-5 text-xl font-[roboto] mx-28">{resep.resep.deskripsi}</p>
  
      <div className="grid grid-cols-4 gap-4 ml-28 my-10">
          <div className="text-3xl font-bold font-[inter]">Bahan:
            <div className="text-xl mt-6 font-normal font-[roboto] pl-8 pt-6 pb-6 bg-base-100 rounded-lg"> 
                <ul className="list-disc block mr-5">
                    {resep.resep.bahan.map((data, i) => <li key={i} className="mb-3">{data}</li>)}
                </ul>
            </div>
          </div>
  
          <div className="text-3xl font-bold col-span-3 px-8 font-[inter]">
            Cara Membuat:
            <div className="text-xl mt-6 font-normal font-[roboto] mx-16"> 
              <ol className="list-decimal">
                {resep.resep.langkah.map((data, i) => <li key={i} className="mt-5">{data}</li>)}
              </ol>
            </div>
  
          </div>
        </div>

    </div>


        </div>
    )
}

export default OneResep
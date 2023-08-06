import Langkah from "@/Components/Langkah";
import Bahan from "@/Components/Bahan";


const OneResep = (resep) => {
    console.log(resep)
    return(
        <div>


    <div className="container px-4">
      <div className="text-center text-3xl font-medium mt-8 font-[inter]">
          {resep.resep.title}
      </div>
  
      <div className="my-12 mx-12 flex justify-center">
          <img src={"../" + resep.resep.gambar} className="max-h-[400px] w-[1000px] brightness-75"></img>
      </div>
  
      <h1 className="font-bold ml-28 text-3xl font-[inter]">
        Deskripsi
      </h1>
      <p className=" mt-5 text-xl font-[roboto] mx-28">{resep.resep.deskripsi}</p>
  
      <div className="grid grid-cols-4 gap-4 ml-28 my-10">
          <div className="text-3xl font-bold bg-slate-100 px-8 pt-6 font-[inter] ">Bahan:
            <div className="text-xl mt-6 font-normal font-[roboto]"> 
                <ul className="list-disc block bg-slate-100">
                    <Bahan bahan={resep.resep.bahan}></Bahan>
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
                <Langkah langkah={resep.resep.langkah}></Langkah>
              </ol>.
            </div>
  
          </div>
        </div>

    </div>


        </div>
    )
}

export default OneResep
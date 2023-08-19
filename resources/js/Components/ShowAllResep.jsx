import { Link } from "@inertiajs/react"

const ShowAllResep = ({resep}) => {
    console.log(resep.data.length)
    return (
        <>
        <div className="grid grid-cols-3 gap-4 my-12 mx-10">
            {resep.data.length > 0 ? resep.data.map((data, i) =>
                <div key={i}>
                <Link href={"/resep/"+data.id}>
                <div className="card bg-base-100 shadow-xl overflow-hidden">               
                <Link href={"/resep/"+data.id}><figure><img src={"/storage/"+data.gambar} alt="Shoes" className="h-80" /></figure></Link>
                <div className="card-body">
                    <h2 className="card-title">
                    {data.title}
                    </h2>
                    <p className="font-bold">By {data.author.name}</p>
                    <p>{data.deskripsi.substring(0,50)}...</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">{data.daerah}</div> 
                    <div className="badge badge-outline">{data.tipe}</div>
                    </div>
                </div>
                </div>
                </Link>
                </div>
            ) : ""}
        </div>
        {resep.data.length == 0 ? <p className="text-center text-3xl mb-20">Resep yang anda cari tidak ditemukan</p> : ""}
        
        </>
    )
}

export default ShowAllResep
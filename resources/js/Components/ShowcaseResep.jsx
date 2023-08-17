import { Link } from "@inertiajs/react"

const ShowCaseResep = (resep) => {
    const arr = resep.resep.slice(0).reverse()
    return arr.slice(0, 3).map((data, i) => {
        return (
            <div key={i} className="my-4">

                <div className="card card-side bg-neutral-content">
                <figure><Link href={"/resep/"+data.id} method="GET" as="button"><img src={"/storage/"+data.gambar} alt="Makanan" className="w-60 h-40"/></Link></figure>
                <div className="card-body">
                    <h2 className="card-title"><Link href={"/resep/"+data.id} method="GET" as="button">{data.title}</Link></h2>
                    <div className="flex">
                        <h1>By {data.author.name}</h1>
                        <div className="badge badge-outline ml-auto">{data.tipe}</div> 
                        <div className="badge badge-outline mx-2">{data.daerah}</div>
                    </div>
                    <p>{data.deskripsi.substring(0,100)}...</p>
                    <div className="card-actions">
                    <Link href={"/resep/"+data.id} method="GET"><button className="btn btn-accent">Lihat resep</button></Link>
                    </div>
                </div>
                </div>
                <hr className="h-1 mt-3 bg-base-300" />
            </div>
        )
    })
}

export default ShowCaseResep
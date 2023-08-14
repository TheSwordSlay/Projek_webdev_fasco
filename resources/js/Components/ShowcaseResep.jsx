import { Link } from "@inertiajs/react"

const ShowCaseResep = (resep) => {
    const arr = resep.resep.slice(0).reverse()
    return arr.slice(0, 4).map((data, i) => {
        return (
            <div key={i} className="my-4">

                <div className="card card-side bg-neutral-content">
                <figure><Link href={"/resep/"+data.id} method="GET" as="button"><img src={"/storage/"+data.gambar} alt="Makanan" className="w-60 h-40"/></Link></figure>
                <div className="card-body">
                    <h2 className="card-title"><Link href={"/resep/"+data.id} method="GET" as="button">{data.title}</Link></h2>
                    <p>{data.deskripsi.substring(0,100)}...</p>
                    <div className="card-actions">
                    <Link href={"/resep/"+data.id} method="GET" as="button"><button className="btn btn-accent">Lihat resep</button></Link>
                    </div>
                </div>
                </div>
                <hr className="h-1 mt-3 bg-base-300" />
            </div>
        )
    })
}

export default ShowCaseResep
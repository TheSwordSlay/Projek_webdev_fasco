const ShowCaseResep = (resep) => {
    return resep.resep.map((data, i) => {

        return (
            <div key={i}>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={data.gambar} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    <a href={"resep/"+data.id}>
                                        {data.title}
                                    </a>
                                </h2>
                                <p>{data.deskripsi.substring(0,100)}...</p>
                                <div className="card-actions justify-end">
                                <div className="badge badge-outline">{data.tipe}</div> 
                                <div className="badge badge-outline">{data.daerah}</div>
                                </div>
                            </div>
                    </div>

            </div>
        )
    })
}

export default ShowCaseResep
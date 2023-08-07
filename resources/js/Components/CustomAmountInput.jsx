const CustomAmountInput = (jumlah) => {
    return jumlah.jumlah.map((data, i) => {
        return (
            <input key={i} type="text" placeholder={data} className="m-2 input input-bordered input-primary w-full"/>    
        )
    })
}

export default CustomAmountInput
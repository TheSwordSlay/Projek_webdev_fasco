const Bahan = (bahan) => {
    console.log(bahan.bahan)
    return bahan.bahan.map(notification => <li>{ notification }</li>)
}

export default Bahan
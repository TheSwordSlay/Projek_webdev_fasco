const Langkah = (langkah) => {
    console.log(langkah.langkah)
    return langkah.langkah.map(notification => <li>{ notification }</li>)
}

export default Langkah
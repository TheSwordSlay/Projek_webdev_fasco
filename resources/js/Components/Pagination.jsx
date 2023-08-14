import { Link } from "@inertiajs/react"

const Pagination = (props) => {
    return(
        <div className="join">
            {props.data.links.prev ? 
            <Link href={props.data.links.prev}><button className="join-item btn">«</button></Link> 
            : ""}
            <button className="join-item btn">Page {props.data.meta.current_page}</button>
            {props.data.links.next ? 
            <Link href={props.data.links.next}><button className="join-item btn">»</button></Link> 
            : ""}
        </div>
    )
}

export default Pagination
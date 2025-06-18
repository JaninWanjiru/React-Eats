function ListingItem({image, title, description}) {
    return(
        <div>
            <div>
                <img src={image} />
            </div>
            <div>
                <h3>{title}</h3>
            </div>
            <div>
                <h4>{description}</h4>
            </div>
            <div>
                <h5><span>$40.00</span></h5>
            </div>
        </div>
    )
}

function Listing() {
    return(
        <section>
            <ListingItem />
        </section>
    )
}

export default Listing; 
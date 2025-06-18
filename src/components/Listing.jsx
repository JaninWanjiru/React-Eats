import listingData from "../data/listing-data";

function ListingItem({ image, discount, title, description, price }) {
  return (
    <div className="list-item">
        <div className="discount">{discount}%</div>
      <div className="list-img ">
        <img src={image} />
      </div>
      <div className="list-details">
        <h3 className="list-title">{title}</h3>
        <div>
          <h4 className="list-description">{description}</h4>
        </div>
        <div>
          <h5 className="list-pricing">
            <span>${Number(price).toFixed(2)}</span>
          </h5>
        </div>
      </div>
    </div>
  );
}

function Listing() {
  return (
    <section className="listing-container">
      {listingData.map((listing) => {
        return (
          <ListingItem
            image={listing.image}
            discount={listing.discount}
            title={listing.title}
            description={listing.description}
            price={listing.price}
          />
        );
      })}
    </section>
  );
}

export default Listing;

export default function CssComponent() {
  return (
    <div id="root">
      <div id="content">
        <div id="info-section">
          <h2>{staticData.name}</h2>
          <div id="address-subsection">
            <h5>{staticData.rating}</h5>
            <span>"%C2%B7"</span>
            <h5>{staticData.numReviews}</h5>
            <span>"%C2%B7"</span>
            <h5>{Object.values(staticData.location).join(",")}</h5>
          </div>
        </div>
        <div id="image-container">
          {staticData.images.map((link, idx) => (
            <img key={idx} src={link} alt="spot" />
          ))}
        </div>
        <div id="center-container">
          <div id="description">{staticData.description}</div>
          <div id="callout-box">
            <button className="styled-button" id="reserve">reserve</button>
          </div>
        </div>
        <div id="review-container">
          {staticData.reviews.map((r, i) => (
            <div id="review-container">
              individual review container
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

var staticData = {
  name: "Serenity Suite on Chesapeake Bay",
  rating: 4.95,
  numReviews: 152,
  location: {
    city: "Port Republic",
    state: "Maryland",
    country: "United States",
  },
  images: [
    "https://a0.muscache.com/im/pictures/899fb4bb-3b6e-4132-9264-30df4e41842f.jpg?im_w=1200",
    "https://a0.muscache.com/im/pictures/2bc14a2d-ebd0-42ec-883e-5c81cc2de484.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/bd732fdc-1ab2-4f71-aeb8-602668909d32.jpg?im_w=1440",
    "https://a0.muscache.com/im/pictures/c4a850b2-3edc-4cd1-b5fd-e449ed8330bf.jpg?im_w=1440",
    "https://a0.muscache.com/im/pictures/da1a8792-80a8-493f-8fa9-89ac2f319c69.jpg?im_w=1440",
    "https://a0.muscache.com/im/pictures/f11b9661-6ea8-4a04-bcf7-e28af121ee38.jpg?im_w=1440",
  ],
  description:
    "Come enjoy our waterfront home on the scenic Calvert Cliffs.  Relax by the water under mature shade trees.  Take in  beautiful Bay views in Adirondack chairs with stunning vistas. Photograph wildlife. Comfortable ½ mile walk to private community bay shoreline. Have breakfast in the yard while enjoying the sunrise.  Stroll the community shoreline and explore fossil hunting, hike at nearby trails and enjoy dinner on Solomon’s Island.  Then open the windows to listen to waves overnight...",
  reviews: [
    {
      owner: "Marissa",
      date: "August 2023",
      content:
        "Lori’s place was beautiful!! She greeted my boyfriend and I when we got there and was super sweet! The place was incredibly relaxing, couldn’t have asked for anything better!!",
    },
    {
      owner: "Timothy",
      date: "August 2023",
      content:
        "A wonderful spot. Beautiful views and easy access to beaches and hiking. Lori was a perfect host, very communicative and accommodating. When we forgot a bag after checking out she quickly got in touch to let us know so we could come back and get it before we were too far away. Would recommend to anyone and hope to return soon.",
    },
  ],
};

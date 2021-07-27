import './Gallery.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Gallery() {
// Helper Function to Set Attributes on Gallery Elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function RenderImages(photosArray) {
  // Render Function Creates Image Elements inside Gallery Element
  const imageContainer = document.getElementById('gallery');
  photosArray.forEach((element) => {
    // Create <a> to link to full photo
    const item = document.createElement('a');
    setAttributes(item, {
      href: element.links.download,
      target: '_blank',
    });
    // Create <img> for photo
    const img = document.createElement('img');
    setAttributes(img, {
      src: element.urls.regular,
      alt: element.alt_description,
      title: element.alt_description,
    });
    // Put <img> inside <a>, then put both inside gallery Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  })
}

async function getPhotos() {
  // async await function to fetch images from Mocky API
  try {
    const response = await fetch('https://www.mocky.io/v2/5ecb5c353000008f00ddd5a0');
    const photosArray = await response.json();
    // Pass the photosArray to Render Function
    RenderImages(photosArray);
  } catch (error) {
    // Catch any Errors
    console.log(error);
  }
}
getPhotos()
  return (
    <>
    <h1>Wall Gallery</h1>
    <p>Hover on a Image <i className="fas fa-mouse-pointer"></i> to Read Description and Click To Expand <i className="fas fa-expand"></i></p>
    <div className="gallery" id="gallery">
    <div className="loader">
     <Loader
        type="Grid"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      </div>
    </div>
    </>
  );
}

export default Gallery;

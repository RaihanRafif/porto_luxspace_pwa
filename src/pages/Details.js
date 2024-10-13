import { useLocation } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Header from "../components/Header";
import { useState } from "react";

function Details({ cart, handleAddToCart }) {

  const location = useLocation();
  const { title, price, images = [], description } = location.state?.some || {};
  const [currentImage, setCurrentImage] = useState(0);

  function formatPrice(number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  }

  // function handleAddToCart(param) { }

  return (
    <>
      <Header mode="dark" cart={cart}/>
      <Breadcrumb />
      <section className="container mx-auto">
        <div className="flex flex-wrap my-4 md:my-12">
          <div className="w-full md:hidden px-4">
            <h2 className="text-5xl font-semibold">{title}</h2>
            <span className="text-xl">{formatPrice(price)}</span>
          </div>
          <div className="flex-1">
            <div className="slider">
              <div className="thumbnail">
                {images.map((e, index) => (
                  <div key={index} className="px-2">
                    <div
                      className={`item ${currentImage === index ? "selected" : ""}`}
                      data-img={e}
                      onClick={() => setCurrentImage(index)}
                    >
                      <img
                        src={e}
                        alt={`product-image-${index}`}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="preview">
                <div className="item rounded-lg h-full overflow-hidden">
                  <img
                    src={images[currentImage]}
                    alt="product"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 px-4 md:p-6">
            <h2 className="text-5xl font-semibold">{title}</h2>
            <p className="text-xl">{formatPrice(price)}</p>
            <button
              onClick={() => handleAddToCart(location.state.some)}
              className="transition-all duration-200 bg-pink-400 text-black focus:bg-black focus:text-pink-400 rounded-full px-8 py-3 mt-4 inline-flex"
            >
              <svg
                className="fill-current mr-3"
                width="26"
                height="24"
                viewBox="0 0 26 24"
              >
                <path d="..." />
              </svg>
              Add to Cart
            </button>
            <hr className="my-8" />
            <h6 className="text-xl font-semibold mb-4">About the product</h6>
            <p className="text-xl leading-7 mb-6">{description}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details;

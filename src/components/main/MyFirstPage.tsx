import { useEffect, useState } from "react";
import { Product } from "../../types/index";
import { useNavigate, Link } from "react-router-dom";

export default function MyCarousel() {
  const navigate = useNavigate();
  const [singleProduct, setSingleProduct] = useState<Product[]>([]);

  const fetchProduct = async () => {
    try {
      let res = await fetch(process.env.REACT_APP_API + "product");
      if (res.ok) {
        let data = await res.json();
        console.log(data);
        setSingleProduct(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the
              harsh elements of a world that doesn't care if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10 tabs-second-page-pagination">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      {singleProduct.slice(-8, -6).map((d) => {
                        return (
                          <Link to={`/details/${d._id}`}>
                            <div
                              className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100 "
                              key={d._id}
                            >
                              <img
                                src={d.imageUrl}
                                onClick={() => navigate(`/details/${d._id}`)}
                                alt=""
                                className="w-full h-full object-center object-cover"
                              />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      {singleProduct.slice(-6, -3).map((d) => {
                        return (
                          <div
                            className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100"
                            key={d._id}
                          >
                            <img
                              src={d.imageUrl}
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      {singleProduct.slice(-2).map((d) => {
                        return (
                          <div
                            className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100"
                            key={d._id}
                          >
                            <img
                              src={d.imageUrl}
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

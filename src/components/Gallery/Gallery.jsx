import { useInView } from "react-intersection-observer";
import g_image_1 from "../../assets/images/gallery-img-1.jpg";
import g_image_2 from "../../assets/images/gallery-img-2.jpg";
import g_image_3 from "../../assets/images/gallery-img-3.jpg";
import g_image_4 from "../../assets/images/gallery-img-4.jpg";
import g_image_5 from "../../assets/images/gallery-img-5.jpg";
import g_image_6 from "../../assets/images/gallery-img-6.jpg";
import { useEffect } from "react";

const images = [
  g_image_1,
  g_image_2,
  g_image_3,
  g_image_4,
  g_image_5,
  g_image_6,
];

export const Gallery = ({ setSectionInView }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  useEffect(() => {
    if (inView) {
      setSectionInView("gallery");
    }
  }, [inView]);
  return (
    <section ref={ref} id="gallery">
      <h1 className="uppercase text-center font-bold text-3xl pb-10">
        <span className="text-accent">g</span>allery
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative rounded-md overflow-hidden cursor-pointer group"
          >
            <img className="h-full w-full" src={img} alt={`g_image_${index}`} />
            <div
              className={`absolute transition-transform translate-y-full group-hover:translate-y-0 top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#333] z-20`}
            >
              <div className="flex items-center justify-around absolute bottom-3 w-full">
                {/* Heart Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 xl:w-8 xl:h-8 fill-white stroke-white hover:fill-accent hover:stroke-accent"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                {/* Send Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 xl:w-8 xl:h-8 fill-white stroke-white hover:fill-accent hover:stroke-accent"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
                {/* Search Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6  xl:w-8 xl:h-8 fill-white stroke-white hover:fill-accent hover:stroke-accent"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

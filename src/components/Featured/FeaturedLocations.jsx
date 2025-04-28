import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import image1 from "../../assets/images/image-1.jpg";
import image2 from "../../assets/images/image-2.jpg";
import image3 from "../../assets/images/image-3.jpg";
import image4 from "../../assets/images/image-4.jpg";
import image5 from "../../assets/images/image-5.jpg";

const fasilitas = [
  {
    name: "Spot Foto Instagramable",
    desc: "Bukit Kebo menawarkan banyak spot foto menarik berlatar hutan dan pemandangan kota Balikpapan.",
    image: image1,
  },
  {
    name: "Gazebo & Tempat Duduk",
    desc: "Tersedia gazebo dan tempat duduk untuk bersantai menikmati udara segar dan pemandangan.",
    image: image2,
  },
  {
    name: "Warung & Kafe",
    desc: "Ada warung dan kafe sederhana yang menyediakan makanan ringan dan minuman.",
    image: image3,
  },
  {
    name: "Area Camping",
    desc: "Tersedia area camping untuk pengunjung yang ingin bermalam dan menikmati suasana malam di bukit.",
    image: image4,
  },
  {
    name: "Parkir Luas",
    desc: "Area parkir yang luas dan mudah diakses kendaraan roda dua maupun empat.",
    image: image5,
  },
];

const FeaturedFacilities = ({ setSectionInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setSectionInView("feature");
    }
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="bg-base-200" id="feature">
      <h1 className="uppercase text-center font-bold text-3xl pb-10">
        <span className="text-accent">f</span>asilitas{" "}
        <span className="text-accent">b</span>ukit kebo
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {fasilitas.map((item, index) => (
          <div key={index} className="card card-compact bg-base-100 shadow-xl">
            <figure className="max-h-40 lg:max-h-48 xl:max-h-52 h-full relative">
              <img
                className="h-full w-full object-cover"
                src={item.image}
                alt={item.name}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-accent lg:text-2xl">{item.name}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedFacilities;

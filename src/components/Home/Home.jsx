import React, { useEffect } from "react";
import { motion } from "framer-motion";
import bukit_kebo_video from "../../assets/videos/home-video.mp4";
import { useInView } from "react-intersection-observer";

export const Home = ({ setSectionInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setSectionInView("home");
    }
  }, [inView]);

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: custom * 0.3 },
    }),
  };

  return (
    <section
      ref={ref}
      id="home"
      className="w-full min-h-screen pt-28 pb-10 relative flex flex-col items-center lg:flex-row lg:justify-center gap-10"
    >
      <video
        autoPlay
        loop
        muted
        id="HomeVideo"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={bukit_kebo_video} type="video/mp4" />
      </video>

      <motion.div
        className="max-w-4xl text-center lg:text-left bg-black bg-opacity-50 p-5 rounded-md"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <h2 className="text-4xl lg:text-5xl font-bold uppercase text-white">
          Jelajahi Bukit Kebo, <br />
          Keindahan Alam Balikpapan
        </h2>
        <p className="mt-5 text-lg lg:text-xl text-white">
          Bukit Kebo merupakan destinasi wisata alam yang sedang hits di Balikpapan, Kalimantan Timur. 
          Dahulu merupakan peternakan kerbau yang kini berkembang menjadi lokasi wisata dengan hamparan padang rumput hijau, 
          pemandangan kota dari ketinggian, serta fasilitas camping dan hiking yang terus dikembangkan.
        </p>
        <p className="mt-3 text-lg lg:text-xl text-white">
          Lokasi mudah diakses di Jalan Soekarno-Hatta KM 8, cocok untuk keluarga dan pecinta alam yang ingin menikmati suasana asri dan udara segar.
        </p>
        <p className="mt-3 text-sm text-white/80 italic">
          Sumber informasi lainnya:
          <ul className="list-disc list-inside mt-1">
            <li>
              <a
                href="https://kaltimkece.id/warta/balikpapan/berawal-dari-lokasi-syuting-bukit-kebo-di-balikpapan-jadi-lokasi-wisata-andalan-masa-depan"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Kaltim Kece - Sejarah dan Wisata Bukit Kebo
              </a>
            </li>
            <li>
              <a
                href="https://www.detik.com/kalimantan/wisata/d-7831039/bukit-kebo-balikpapan-wisata-alam-habitat-kerbau-yang-lagi-hits"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Detik.com – Bukit Kebo, Wisata Alam Habitat Kerbau yang Lagi Hits
              </a>
            </li>
            <li>
              <a
                href="https://www.kompas.tv/video/411814/bukit-kebo-balikpapan-jadi-lokasi-wisata-favorit-warga-di-akhir-pekan"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Kompas.com – Liputan Wisata Bukit Kebo
              </a>
            </li>
            <li>
              <a
                href="https://www.tribunnews.com/tag/bukit-kebo"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Tribunnews.com – Berita dan Artikel Bukit Kebo
              </a>
            </li>
          </ul>
        </p>
      </motion.div>
    </section>
  );
};

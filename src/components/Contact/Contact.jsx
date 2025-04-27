import React, { useEffect } from "react";
import mapImage from "../../assets/images/map.jpg";
import { useInView } from "react-intersection-observer";
const Contact = ({ setSectionInView }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  useEffect(() => {
    if (inView) {
      setSectionInView("contact");
    }
  }, [inView]);
  return (
    <section ref={ref} id="contact">
      <h1 className="uppercase text-center font-bold text-3xl pb-20">
        <span className="text-accent">c</span>ontact{" "}
        <span className="text-accent">u</span>s
      </h1>

      <div className="grid gap-5 lg:gap-10 lg:grid-cols-3 ">
        {/* map image */}
        <div className="lg:col-span-3 flex items-center justify-center ">
          <img
            className="w-full max-w-2xl xl:max-w-4xl rounded-md"
            src={mapImage}
            alt="map-Image"
          />
        </div>
        {/* website details */}
        <div className="flex flex-col justify-center lg:col-span-1">
          <ul>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 fill-accent stroke-accent"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span className="font-bold">address</span>
            </li>
            <li>Tehran ,</li>
            <li>Daryan No , </li>
            <li>400104</li>
          </ul>
          <ul className="my-5">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 fill-accent stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span className="font-bold">e-mail</span>
            </li>
            <li>xyz@gmail.com</li>
          </ul>

          <ul>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 fill-accent stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span className="font-bold">phone</span>
            </li>
            <li>+123 4567 890</li>
          </ul>
        </div>
        {/* contact form */}
        <div className="lg:col-span-2">
          <h3 className="uppercase font-bold text-3xl pb-5 text-accent">
            get in touch
          </h3>
          <form action="" className="grid grid-rows-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered input-accent w-full  "
              />
              <input
                type="email"
                placeholder="E-mail"
                className="input input-bordered input-accent w-full    "
              />
            </div>

            <textarea
              className="textarea textarea-accent w-full"
              placeholder="Message"
            ></textarea>
            <button
              type="submit"
              className="btn btn-outline btn-accent w-full mt-2"
            >
              Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

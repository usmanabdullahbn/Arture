import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./style.css";
import img2 from "../asserts/g2.jpg";
import img1 from "../asserts/mm.jpg";
import img3 from "../asserts/ww.png";

const Courses = () => {
  const data = [
    {
      id: 1,
      name: "Art Mania",
      description:
        "Hands-on workshops and art sessions that allow participants to explore various artistic techniques and mediums, fostering creativity and self-expression.",
      img: img2,
    },
    {
      id: 2,
      name: "Maverick Math",
      description:
        "Innovative sessions that integrate mathematical concepts with creative thinking, making learning math an engaging and enjoyable experience.",
      img: img1,
    },
    {
      id: 3,
      name: "Wellness Warriors",
      description:
        "Comprehensive wellness sessions covering topics such as nutrition, fitness and mental health to help individuals achieve optimal health and lifestyle objectives.",
      img: img3,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <FaChevronLeft style={{ color: "black" }} />, // Custom previous arrow
    nextArrow: <FaChevronRight />, // Custom next arrow
  };
  return (
    <>
      <div>

        <h1
          style={{
            textAlign: "center",
            marginTop: "50px",
            fontWeight: "bolder",
          }}
        >
          Our Programs
        </h1>
      </div>
      <div className="3/4 m-auto">
        <div className="mt-20 mx-5">
          <Slider {...settings}>
            {data.map((d) => (
              <div className="bg-gray-100 h-[520px]  text-black card">
                <div className="h-60  flex justify-center items-center">
                  <img src={d.img} alt="" className="h-56 w-96 rounded-sm" />
                </div>
                <div className="flex flex-col justify-center items-center gap-3 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p>{d.description}</p>
                  <button className="bg-indigo-500 text-white text-lg px-3 py-2 rounded-sm">
                    View
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Courses;

import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSoQvfRQEo4dnB7OVfLsIZFoUoHWMEJ8jcMQ&s",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6w0oaY55mpCtZpVMZaMq7m2RAQp4OJKPzzQ&s",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwDHxR4TiIKqpifGYxd5P9rP-i34ErRDeIA&s",
      title: "Camping Trip Planning",
    },
    {
      id: 4,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXU8yu2T9_VW6g2D9NpekpZ_NpgdNg4J4eiQ&s",
      title: "Game Night Planning",
    },
    {
      id: 5,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYh4PsPGkBKRTn8bm6mRa_OsQKhrvWttS3VA&s",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT48rTu_F2tH5k68ei3glspdAtTrWFExyihVQ&s",
      title: "Wedding Planning",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/3.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "100 Days of Code in Python",
    description:
      "Collaboration to create a beginner friendly course to help explain Python Programming and its concepts.",
    url: "https://github.com/hamzaiftkhar/100-Days-of-Code-with-Python",
  },
  {
    title: "Softing Algorithms Visualizer",
    description:
      "This is a user friendly projectand help to provide visual representation of different Sorting Algorithms in a beautiful way.",
    url: "https://github.com/hamzaiftkhar/Sorting-Algorithm-visualizer",
  },
  {
    title: "Teacher Portal using C++",
    description:
      "Created a highly efficient Teacher Portal using C++ for effective grading system.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "RC-Bluetooth-Robotic-Car-Using-Arduino",
    description:
      "The project aims to create a remote control interface for a robotic car using Bluetooth technology.",
    url: "https://github.com/hamzaiftkhar/RC-Bluetooth-Robotic-Car-Using-Arduino",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div
        style={{ display: "flex", flexDirection: "row", paddingTop: "3rem", paddingLeft: "3rem" }}
      >
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
              border: "1px solid #ddd",
              padding: "5px",
            }}
            alt={imageAltText}
            className="slideInLeft"
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

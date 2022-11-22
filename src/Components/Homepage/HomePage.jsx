import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Homepage.css";

const HomePage = () => {
  return (
    <>
      <Carousel className="image-slides">
        <Carousel.Item>
          <img
            className="item"
            src="https://sheffnews.com/media/11522/christmas-2021-1-sml.jpg?anchor=center&mode=crop&width=1500&height=550&rnd=133119653410000000"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>APPLEBUM</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="item"
            src="https://sashaleephotography.com/wp-content/uploads/2018/04/SharrowLanternFestival-7.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="item"
            src="https://cdn.hunthalloween.com/events8/banners/6405ec966a21a6769bdeda5a44f61f46b8fa552ea2d6fcecb4aadbcd922a17cb-rimg-w960-h626-gmir.jpg?v=1667583549"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="about">
        <h1 className="title">About the carnival</h1>
        <p>
          Stannington Carnival is a great day out for all the family. This is
          the annual event, it takes place on the second Saturday in July.
          Visitors can enjoy performances by dance acts and musical groups in
          the main arena, wander around the many stalls offering gifts and
          goodies, swoon at the dog show or have a go at archery or circus
          skills. We also have fairground rides, bouncy castles and a
          Helter-skelter to keep the kids entertained and a variety of food
          vendors offering tasty treats.
        </p>
        <p>
          Started in the mid 90's, Stannington Carnival has raised nearly
          £70,000 to support local community groups. The Carnival aims to help
          make Stannington a great place to live and work by helping our
          beneficiaries provide services in and around the village. We also want
          to create a fun day out to bring people together.
        </p>
        <p>
          Thousands of visitors come each year. So, why not join us and book a
          stall?
        </p>
        <a
          className="location-link"
          rel="noopener noreferrer"
          target="blank"
          href="https://goo.gl/maps/UK6DSxXkBvtAJvKn8"
        >
          <FaMapMarkerAlt /> Location: Stannington Park, Stannington, Sheffield
          S6 6BX
        </a>
      </div>
    </>
  );
};

export default HomePage;

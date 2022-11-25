import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaMapMarkerAlt, FaRegEnvelope } from "react-icons/fa";
import { BsMailbox } from "react-icons/bs";

import "./Homepage.css";

const HomePage = () => {
  return (
    <>
      <Carousel className="image-slides">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://scontent.flhr6-1.fna.fbcdn.net/v/t31.18172-8/11336962_880084938714620_1833581849408480907_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=xzDKJ35Es2AAX9UISi5&_nc_ht=scontent.flhr6-1.fna&oh=00_AfCJTWNThMtTnV3wOwf45Bahii-Bmy0JS2OM1MJGy8mJpg&oe=63A58810"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://scontent.flhr6-1.fna.fbcdn.net/v/t31.18172-8/11154861_880084915381289_3909534780009307590_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=D1BLAaKG8pwAX8VdVLd&_nc_ht=scontent.flhr6-1.fna&oh=00_AfBfY54UUj4iNXUfG2U7d1tZjnmhCZvB8IGVX_-pFU1fJA&oe=63A59511"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://scontent.flhr6-1.fna.fbcdn.net/v/t1.6435-9/45327702_1996132673776502_4266921717902868480_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=V8ULU9oqYkUAX-e4_Qm&_nc_ht=scontent.flhr6-1.fna&oh=00_AfDzYPBkyKSUiaZCKgzywePxU9NRyUy2TEhuhm_9shfkbA&oe=63A591F0"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="section about">
        <h1 className="title about">About Us</h1>
        <p className="text">
          Stannington Carnival is a great day out for all the family. This is
          the annual event, it takes place on the second Saturday in July.
          Visitors can enjoy performances by dance acts and musical groups in
          the main arena, wander around the many stalls offering gifts and
          goodies, swoon at the dog show or have a go at archery or circus
          skills. We also have fairground rides, bouncy castles and a
          Helter-skelter to keep the kids entertained and a variety of food
          vendors offering tasty treats.
        </p>
        <p className="text">
          Started in the mid 90's, Stannington Carnival has raised nearly
          £70,000 to support local community groups. The Carnival aims to help
          make Stannington a great place to live and work by helping our
          beneficiaries provide services in and around the village. We also want
          to create a fun day out to bring people together.
        </p>
        <p className="text">
          Thousands of visitors come each year. So, why not join us and book a
          stall?
        </p>
        <a
          className="location-link"
          rel="noopener noreferrer"
          target="blank"
          href="https://goo.gl/maps/UK6DSxXkBvtAJvKn8"
        >
          <FaMapMarkerAlt size="1.2em" />
          <span>
            {" "}
            Location: Stannington Park, Stannington, Sheffield S6 6BX
          </span>
        </a>
      </section>
      <section className="section booking">
        <h2 className="title">Booking a Stall</h2>
        <p className="text">
          Thank you for considering to run your stall in STANNINGTON CARNIVAL.
          Below there is information regarding pricing and terms and conditions.
          To book a stall you need to register by pressing button on the top of
          the page and fill in the form. If you have any questions regarding
          stall hire, please contact us
          <a className="email" href="mailto:stanningtoncarnival@gmail.com">
            <FaRegEnvelope className="email-icon" size="1.6em" />{" "}
            <span> stanningtoncarnival@gmail.com</span>
          </a>
        </p>

        <h3 className="subtitle">Stall Prices</h3>
        <p className="text">Prices to come</p>

        <h3 className="subtitle">Terms and Conditions</h3>
        <p className="text">
          Please read carefully as you are agreeing to abide by the terms and
          conditions when booking a stall / table / space at the Carnival By
          completing the booking form you are agreeing to the following
          information: Stalls will not be confirmed or booked until full payment
          has been made and public liability / food hygiene certificates have
          been received (when you book in we will send you details on how to
          send payment and provide the documents). All rubbish must be bagged up
          and taken away at the end of the festival All food stall must have
          allergen information signs clearly displayed at all times
        </p>
      </section>
      <section className="section next">
        <h3 className="title next">What happens next</h3>
        <p className="text">
          Once you complete the form you will receive confirmation of booking by
          email when the Admin Officer check all the details of booking. Our
          Finance Officer will send the payment request by email, the payment
          will confirm your stall booking. Payments are accepted via bank
          transfer. You will receive a receipt confirming we have received your
          payment and allocated pitch number. You may see the status and the
          details of you booking in your account. Closer to the event, you will
          be contacted again with details of the event.
        </p>
      </section>
    </>
  );
};

export default HomePage;

import React from "react";
import { Hero } from "../components";
import backImage from "../assets/image/Contact-hero.png";
import useTitle from "../useTitle";
const ContactScreen = () => {
  useTitle("Contact us");

  return (
    <>
      <Hero img={backImage} disableOverlay>
        <div className="contact-hero container">
          <div className="contact-hero-text">
            <div className="contact-hero-title">
              <h2 className="contact-title">Add a Cocktail</h2>
              <h4 className="contact-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                at condimentum mauris. Fusce maximus tortor id purus suscipit
                suscipit in sed urna.
              </h4>
            </div>
          </div>
          <div className="contact-form-container container">
            <form
              className="contact-form container"
              action="https://formspree.io/f/mgepggej"
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input"
                  placeholder="Will"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="surname">Surname</label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  className="input"
                  placeholder="Camillo"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  placeholder="youremail@example.com"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="cel"
                  id="mobile"
                  name="mobile"
                  className="input"
                  placeholder="555 555-5555"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="recipe">Your recipe</label>
                <textarea
                  type="tel"
                  id="recipe"
                  name="recipe"
                  className="input"
                  placeholder="Describe your recipe"
                />
              </div>
              <button className="btn btn-primary">Send recipe</button>
            </form>
          </div>
        </div>
      </Hero>
    </>
  );
};

export default ContactScreen;

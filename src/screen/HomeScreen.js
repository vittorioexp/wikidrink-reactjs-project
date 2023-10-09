import React, { useEffect, useState } from "react";
import { Hero, Cocktails, Loading, ErrorMessage } from "../components";
import { FaSearch } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "../assets/animation/drink-animation.json";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import useTitle from "../useTitle";
const HomeScreen = () => {
  useTitle("Home");

  const {
    query,
    isLoading,
    isError,
    data,
    count,
    searchCocktail,
    deleteScrollPosition,
    scrollPosition,
  } = useGlobalContext();
  const [input, setInput] = useState(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCocktail(input);
  };

  useEffect(() => {
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
      deleteScrollPosition();
    }
  }, []);

  return (
    <>
      <Hero>
        <div className="home-hero">
          <div className="home-hero-text">
            <div className="home-hero-title">
              <h2 className="brand-color">WIKI DRINK</h2>
              <h4>Pellentesque eleifend ipsum eget nunc dapibus semper</h4>
            </div>
            <p>
              Suspendisse ac tempus mauris. Integer mollis eros dui,
              <span className="brand-color">sit amet convallis turpis </span>
              scelerisque in. Fusce ornare, nunc id consequat vulputate, nisl
              arcu cursus lorem, consequat pharetra quam ligula eleifend odio.
            </p>
            <Link className="btn btn-primary" to="/about">Click for more!</Link>
          </div>
          <div className="home-hero-img">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                reverse: true,
                animationData,
                /* rendererSettings: { preserveAspectRatio: "xMidYMid slice" }, */
              }}
              height={300}
            ></Lottie>
          </div>
        </div>
      </Hero>
      <section className="container home-screen">
        <div className="search-bar">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="drink">
                <h4>Search your drink</h4>
              </label>

              <div className="input-search">
                <input
                  id="drink"
                  type="text"
                  className="input"
                  placeholder={query}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn icon-btn" type="submit">
                  <FaSearch className="icon" />
                </button>
              </div>
            </form>
          </div>
          <p className="result">{count} results</p>
        </div>
        {!isLoading && isError ? (
          <ErrorMessage>No cocktails</ErrorMessage>
        ) : !isLoading && !isError ? (
          <Cocktails data={data.drinks} />
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
};

export default HomeScreen;

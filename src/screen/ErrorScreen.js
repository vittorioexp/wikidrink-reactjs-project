import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import animationData from "../assets/animation/not-found.json";
import useTitle from "../useTitle";

const ErrorScreen = () => {
  useTitle("Page not found");

  return (
    <Wrapper>
      <h3>Page not found</h3>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          reverse: true,
          animationData: animationData,
          rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
        }}
        width={500}
        height={500}
      ></Lottie>
      <Link to="/" className="btn btn-primary">
        Back to home
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 86.2vh;
  display: grid;
  display: --ms-grid;
  display: --moz-grid;
  display: --webkit-grid;
  place-items: center;
  padding-top: 3rem;
  padding-bottom: 5rem;
  h3 {
    text-transform: uppercase;
    padding-bottom: 1rem;
  }
  .btn {
    border-radius: 22px;
  }
  @media screen and (min-width: 992px) {
    min-height: 84.5vh;
  }
`;

export default ErrorScreen;

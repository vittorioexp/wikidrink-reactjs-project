import React from "react";
import { Loading, ErrorMessage } from "../components";
import { useParams, Link } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import styled from "styled-components";
import useFetch from "../useFetch";
import useTitle from "../useTitle";

const SingleCocktailScreen = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useFetch(`i=${id}`, true);

  useTitle(data?.drinks ? data.drinks[0].strDrink : "Not found");

  if (isLoading)
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );

  if (isError)
    return (
      <Wrapper>
        <div className="container cocktail-content">
          <header>
            <Link to="/">
              <IoArrowBackCircleSharp className="icon" />
            </Link>
          </header>
          <ErrorMessage>Cocktail not available</ErrorMessage>
        </div>
      </Wrapper>
    );

  const {
    strDrink: name,
    strCategory: category,
    strAlcoholic: type,
    strGlass: glass,
    strDrinkThumb: image,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strInstructionsIT,
    strInstructions,
  } = data.drinks[0];

  const strInstructionList = [
    { instruction: strIngredient1, qty: strMeasure1 },
    { instruction: strIngredient2, qty: strMeasure2 },
    { instruction: strIngredient3, qty: strMeasure3 },
    { instruction: strIngredient4, qty: strMeasure4 },
    { instruction: strIngredient5, qty: strMeasure5 },
  ];

  return (
    <Wrapper>
      <div className="container cocktail-content">
        <header>
          <Link to="/">
            <IoArrowBackCircleSharp className="icon" />
          </Link>
          <h4 className="back-arrow">Back to home</h4>
        </header>
        <hr />
        <div className="cocktail-container">
          <img src={image} alt={name} className="img" />
          <div className="cocktail-details">
            <div className="spacer">
              <h2>{name}</h2>
              <div className="cocktail-type">
                <p className="label">{type}</p>
                <p className="label">{category}</p>
                <p className="label">{glass}</p>
              </div>
            </div>
            <hr />
            <div className="spacer">
              <h4>Ingredients:</h4>
              <ul className="instruction-list">
                {strInstructionList.map((el, index) => {
                  if (el.instruction) {
                    return (
                      <li key={index}>
                        <p className="info">
                          {el.qty} {el.instruction}
                        </p>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <hr />
            <div className="spacer">
              <h4>Instructions:</h4>
              <p className="info">
                {strInstructions || strInstructionsIT}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 86vh;
  height: auto;
  padding-bottom: 4rem;
  .spacer {
    display: grid;
    gap: 0.325rem;
  }
  .cocktail-content {
    display: grid;
    gap: 2rem;
    header {
      display: grid;
      align-items: center;
      justify-content: flex-start;
      grid-template-columns: auto 1fr;
      gap: 2rem;
      margin-top: 2rem;
      margin-bottom: 0;
      .icon {
        font-size: 2.5rem;
        transition: var(--transition);
        &:hover {
          color: var(--byzantine);
          transform: scale(1.02);
        }
      }
      .back-arrow {
        text-transform: uppercase;
        color: var(--primary-gray);
        font-weight: 500;
      }
    }
    .cocktail-container {
      margin-top: 1rem;
      display: grid;
      gap: 2rem;
      .img {
        width: 100%;
        border-radius: var(--radius);
      }
      .cocktail-details {
        display: grid;
        gap: 1rem;
        h2 {
          text-transform: uppercase;
        }
        .cocktail-type {
          display: grid;
          grid-template-columns: auto auto auto;
          justify-content: flex-start;
          gap: 0.5rem !important;
          align-items: center;
          .label {
            text-transform: lowercase;
            font-size: 0.8em;
            font-weight: 700;
            letter-spacing: var(--letter-spacing);
            font-variant: small-caps;
            color: var(--soft-dark-gray);
            border: 1px solid var(--soft-light-gray);
            border-radius: var(--radius);
            background-color: var(--extra-light-gray);
            padding: 0rem 0.5rem;
          }
        }
        .info {
          color: var(--soft-dark-gray);
          max-width: 55ch;
        }
        h4 {
          color: var(--dark-gray);
        }
        .instruction-list {
          list-style: outside;
          padding-left: 1.1rem;
        }
      }
    }
  }
  @media screen and (min-width: 753px) {
    min-height: 84.5vh;
    hr {
      display: none;
    }
    .cocktail-container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      .img {
        max-height: 500px;
        grid-column: 1/6;
        grid-row: 1/1;
        width: 100%;
      }
      .cocktail-details {
        grid-column: 6/-1;
        grid-row: 1/1;
        width: 100%;
        gap: 1rem !important;
      }

    }
  }
  @media screen and (min-width: 992px) {
    .cocktail-container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      .img {
        max-height: 600px;
        grid-column: 1/5;
        grid-row: 1/1;
        width: 100%;
      }
    }
  }
`;

export default SingleCocktailScreen;

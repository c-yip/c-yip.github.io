import React, { useContext } from "react";
import { Context } from "../Context";
import shoppingCartGif from "../img/portfolio-gifs/shopping-cart-short.gif";
import cvGif from "../img/portfolio-gifs/cv.gif";
import tvGif from "../img/portfolio-gifs/tv-trivia.gif";
import battleshipGif from "../img/portfolio-gifs/battleship.gif";
import weatherGif from "../img/portfolio-gifs/weather-app.gif";
import todoGif from "../img/portfolio-gifs/todo.gif";
import GitHubIcon from "@mui/icons-material/GitHub";

export function PortfolioSection() {
  const { darkModeBackground } = useContext(Context);

  return (
    <section className={`my-projects ${darkModeBackground}`} id={`projects`}>
      <h2 className="section__title section__title--my-projects">
        My projects
      </h2>
      <p className="section__subtitle section__subtitle--projects">
        A selection of my range of work
        <br />
        (Click on the gifs for a live demo!)
      </p>

      <div className="portfolio">
        <div className="portfolio__item-container">
          <div className="project-header-container">
            <h3 className="project-header">Shopping Cart</h3>
            <a
              href="https://github.com/c-yip/shopping-cart"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </a>
          </div>

          <a
            href="https://c-yip.github.io/shopping-cart/"
            className="portfolio__item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={shoppingCartGif}
              alt="gif of shopping cart app"
              className="portfolio__img"
            />
          </a>
          <p className="project-description">
            E-commerce website built with React that allows users to quickly
            navigate pages, add and remove items to their cart, and filter
            products by category
          </p>
        </div>

        <div className="portfolio__item-container">
          <div className="project-header-container">
            <h3 className="project-header">CV Generator</h3>
            <a href="https://github.com/c-yip/cv-application-generator">
              <GitHubIcon fontSize="large" />
            </a>
          </div>
          <a
            href="https://c-yip.github.io/cv-application-generator/"
            className="portfolio__item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={cvGif}
              alt="gif of cv generator app"
              className="portfolio__img"
            />
          </a>
          <p className="project-description">
            React application that generates a resume using a premade layout and
            user input and saves the resume as a PDF
          </p>
        </div>

        <div className="portfolio__item-container">
          <div className="project-header-container">
            <h3 className="project-header">TV Trivia</h3>
            <a
              href="https://github.com/c-yip/tv-trivia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </a>
          </div>

          <a
            href="https://c-yip.github.io/tv-trivia/"
            className="portfolio__item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={tvGif}
              alt="gif of TV trivia app"
              className="portfolio__img"
            />
          </a>
          <p className="project-description">
            TV Trivia React application that generates a set of multiple choice
            questions for users and tracks user score
          </p>
        </div>

        <div className="portfolio__item-container">
          <div className="project-header-container">
            <h3 className="project-header">Battleship</h3>
            <a
              href="https://github.com/c-yip/battleship"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </a>
          </div>
          <a
            href="https://c-yip.github.io/battleship/"
            className="portfolio__item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={battleshipGif}
              alt="gif of battleship app"
              className="portfolio__img"
            />
          </a>
          <p className="project-description">
            Battleship game where a user plays against a computer and has their
            score kept
          </p>
        </div>

        <div className="portfolio__item-container">
          <div className="project-header-container">
            <h3 className="project-header">Weather App</h3>
            <a
              href="https://github.com/c-yip/weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </a>
          </div>
          <a
            href="https://c-yip.github.io/weather-app/"
            className="portfolio__item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={weatherGif}
              alt="gif of weather app"
              className="portfolio__img"
            />
          </a>
          <p className="project-description">
            Utilized Open Weather API to display weather details and relevant
            images by asynchronously fetching data
          </p>
        </div>

        <div className="portfolio__item-container">
          <div className="project-header-container">
            <h3 className="project-header">Todo List</h3>
            <a
              href="https://github.com/c-yip/todo-list"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </a>
          </div>

          <a
            href="https://c-yip.github.io/todo-list/"
            className="portfolio__item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={todoGif}
              alt="gif of todo list app"
              className="portfolio__img"
            />
          </a>
          <p className="project-description">
            Todo list app that allows users to add, delete, and edit tasks and
            organize them by project name
          </p>
        </div>
      </div>
    </section>
  );
}

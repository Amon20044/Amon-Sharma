'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import $ from 'jquery';
import './Project.css'; // Make sure this file contains your CSS

// Anime data
const animeData = [
  {
    index: "01",
    releaseYear: "2013",
    name: "Attack On Titan",
    genre: "Action, Dark fantasy, Post-apocalyptic",
    imdbLink: "https://www.imdb.com/title/tt2560140/",
    imgSrc: "https://www.yudiz.com/codepen/hover-reveal/levi_ackerman.jpg",
  },
  {
    index: "02",
    releaseYear: "2019",
    name: "Demon Slayer",
    genre: "Adventure, Dark fantasy, Martial arts",
    imdbLink: "https://www.imdb.com/title/tt9335498/",
    imgSrc: "https://www.yudiz.com/codepen/hover-reveal/demon-slayer.png",
  },
  {
    index: "03",
    releaseYear: "2016",
    name: "your name",
    genre: "Romance, Fantasy",
    imdbLink: "https://www.imdb.com/title/tt5311514/",
    imgSrc: "https://www.yudiz.com/codepen/hover-reveal/Your-name.jpg",
  },
  {
    index: "04",
    releaseYear: "2021",
    name: "Jujutsu Kaisen",
    genre: "Adventure, Dark fantasy, Supernatural",
    imdbLink: "https://www.imdb.com/title/tt12343534/",
    imgSrc: "https://www.yudiz.com/codepen/hover-reveal/jujutsu-kaisen.jpg",
  },
  {
    index: "05",
    releaseYear: "1999",
    name: "One Piece",
    genre: "Adventure, Fantasy",
    imdbLink: "https://www.imdb.com/title/tt0388629/",
    imgSrc: "https://www.yudiz.com/codepen/hover-reveal/one-piece.jpg",
  },
  {
    index: "06",
    releaseYear: "2019",
    name: "Weathering with You",
    genre: "Fantasy, Romance",
    imdbLink: "https://www.imdb.com/title/tt9426210/",
    imgSrc: "https://www.yudiz.com/codepen/hover-reveal/weathering-with-you.jpg",
  },
  {
    index: "07",
    releaseYear: "2006",
    name: "Death Note",
    genre: "Psychological thriller",
    imdbLink: "https://www.imdb.com/title/tt0877057/",
    imgSrc: "https://www.yudiz.com/codepen/hover-reveal/death-note.jpg",
  },
];

const AnimationComponent = () => {
    const ballRef = useRef(null);
    const listItemRefs = useRef([]);
  
    useEffect(() => {
      // Ball Animation
      const ball = ballRef.current;
      gsap.set(ball, { xPercent: -50, yPercent: -50 });
  
      const mouseBall = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      const speedBall = 0.08;
      const xSetBall = gsap.quickSetter(ball, "x", "px");
      const ySetBall = gsap.quickSetter(ball, "y", "px");
  
      const handleMouseMoveBall = (e) => {
        mouseBall.x = e.clientX;
        mouseBall.y = e.clientY;
      };
  
      window.addEventListener("mousemove", handleMouseMoveBall);
  
      gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speedBall, gsap.ticker.deltaRatio());
        xSetBall(mouseBall.x);
        ySetBall(mouseBall.y);
      });
  
      // Image Animation
      const items = listItemRefs.current;
      const mouse = { x: window.innerWidth / 2 };
      const speed = 0.1;
      const pos = { x: window.innerWidth / 2 };
  
      items.forEach(el => {
        const image = el.querySelector(".hover-img");
        const innerImage = el.querySelector(".hover-img img");
        gsap.set(image, { xPercent: -50, yPercent: -50 });
        const xSet = gsap.quickSetter(image, "x", "px");
  
        const handleMouseMove = (e) => {
          mouse.x = e.clientX;
        };
  
        window.addEventListener("mousemove", handleMouseMove);
  
        gsap.ticker.add(() => {
          const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
          pos.x += (mouse.x - pos.x) * dt;
          xSet(pos.x);
        });
  
        let oldx = 0;
        let lastCursorX = null;
        const cursorThreshold = 150;
  
        const mouseMoveHandler = (e) => {
          if (e.pageX < oldx && e.clientX <= lastCursorX - cursorThreshold) {
            innerImage.style.transform = "rotate(-15deg)";
            lastCursorX = e.clientX;
          } else if (e.pageX > oldx && e.clientX >= lastCursorX + cursorThreshold) {
            innerImage.style.transform = "rotate(15deg)";
            lastCursorX = e.clientX;
          }
          oldx = e.pageX;
        };
  
        $(document).on("mousemoveend", function () {
          innerImage.style.transform = "translateX(0%) rotate(0deg)";
        });
  
        document.addEventListener("mousemove", mouseMoveHandler);
  
        let timeout;
        $(document).on("mousemove", function (event) {
          if (timeout !== undefined) {
            window.clearTimeout(timeout);
          }
          timeout = window.setTimeout(function () {
            $(event.target).trigger("mousemoveend");
          }, 100);
        });
  
        return () => {
          document.removeEventListener("mousemove", mouseMoveHandler);
        };
      });
  
      // Letter Animation
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
      items.forEach((el) => {
        el.onmouseenter = (event) => {
          const targetElement = event.target.querySelector("h2");
          let iteration = 0;
          const interval = setInterval(() => {
            targetElement.innerText = targetElement.innerText
              .split("")
              .map((letter, index) => {
                if (index < iteration) {
                  return targetElement.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)];
              })
              .join("");
  
            if (iteration >= targetElement.dataset.value.length) {
              clearInterval(interval);
            }
            iteration += 1 / 3;
          }, 20);
        };
      });
  
      // Cleanup event listeners on component unmount
      return () => {
        window.removeEventListener("mousemove", handleMouseMoveBall);
        items.forEach((el) => {
          el.onmouseenter = null;
        });
      };
    }, []);
  
    return (
      <div>
        <ul className="anime-list">
          {animeData.map((anime, index) => (
            <li key={index} ref={(el) => (listItemRefs.current[index] = el)}>
              <div className="hover-img">
                <img src={anime.imgSrc} alt={anime.name} />
              </div>
              <h2 data-value={anime.name}>{anime.name}</h2>
              <div className="index">
                <span>{anime.index}</span>
              </div>
              <div className="release-year">
                <span>{anime.releaseYear}</span>
              </div>
              <div className="genre">
                <span>{anime.genre}</span>
              </div>
              <div className="redirect-link">
                <a href={anime.imdbLink} target="_blank" rel="noopener noreferrer">
                  <svg
                    width="1.25rem"
                    height="1.25rem"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4H12.75ZM11.25 10C11.25 10.4142 11.5858 10.75 12 10.75C12.4142 10.75 12.75 10.4142 12.75 10H11.25ZM11.25 4V10H12.75V4H11.25Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M12 4.75C12.6213 4.75 13.25 4.6213 13.75 4.4375V4.4375H12.75V4.4375V10H13.75V4.4375V4.4375V4.4375H13.75C13.25 4.6213 12.6213 4.75 12 4.75Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M12.75 4V10H11.25V4H12.75ZM12.75 10C12.75 10.4142 12.4142 10.75 12 10.75C11.5858 10.75 11.25 10.4142 11.25 10H12.75Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div className="ball" ref={ballRef}></div>
      </div>
    );
  };
  
  export default AnimationComponent;
"use strict";

const moonIcon = document.querySelector("#moonIcon");
const container = document.querySelector(".container");
const navbar = document.querySelector("nav");
const row = document.querySelector(".first-row");
const input = document.querySelector("#input");
const filter = document.querySelector("#filter");
const countries = document.querySelector(".country");
const search = document.querySelector("#search");

moonIcon.addEventListener("click", (e) => {
  e.preventDefault();

  container.classList.toggle("dark-mode");
  navbar.classList.toggle("dark-mode");
  row.classList.toggle("dark-mode");
});

search.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("searched");
});

input.addEventListener("click", (e) => {
  e.preventDefault();

  const country = document.querySelector("#input").value;

  // fetch("./data.json")
  // fetch(`https://restcountries.com/v3.1/name/{country}`)

  // if (!country) {
  //   alert("Please enter a country name.");
  //   return;
  // }

  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((country) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <h2>${data[0].name}</h2>        
        <p><strong>Flag:</strong> ${country.flag}</p>
        <p><strong>Capital:</strong> ${country.capital}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Population:</strong> ${country.population}</p>
        <hr />
      `;
        row.appendChild(div);
      });
    })
    .catch((error) => {
      console.error("Error loading JSON:", error);
    });
});

// console.log(countries);

"use strict";

const moonIcon = document.querySelector("#moonIcon");
const container = document.querySelector(".container");
const navbar = document.querySelector("nav");
const row = document.querySelector(".first-row");
const second = document.querySelector(".second-row");

const input = document.querySelector("#input");
const filter = document.querySelector("#filter");
const countries = document.querySelector("#country");

moonIcon.addEventListener("click", (e) => {
  e.preventDefault();

  container.classList.toggle("dark-mode");
  navbar.classList.toggle("dark-mode");
  row.classList.toggle("dark-mode");
});

// input.addEventListener("click", (e) => {
//   e.preventDefault();
//   const searchCountry = document.querySelector("#input").value;

//   const countryFetch = fetch("./data.json")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);

//       data.forEach((country) => {
//         const div = document.createElement("div");
//         div.innerHTML = `
//         <h2>${country.name}</h2>
//         <img src="${country.flags.png}" alt="">
//         <p><strong>Population:</strong> ${country.population}</p>
//         <p><strong>Region:</strong> ${country.region}</p>
//         <p><strong>Capital:</strong> ${country.capital}</p>
//         <hr />
//         `;
//         row.appendChild(div);
//       });
//     })
//     .catch((error) => {
//       console.error("Error loading JSON:", error);
//     });
// });

// console.log(countries);

function loadCountries() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const selectedCountries = data.slice(0, 4);

      selectedCountries.forEach((country) => {
        const div = document.createElement("div");
        div.classList.add("country-card");

        div.innerHTML = `
        <img src="${country.flags.png}" alt="Flag of ${country.name}"/>
        <h2>${country.name}</h2>
          <p><strong>Population:</strong> ${country.population}</p>
          <p><strong>Region:</strong> ${country.region}</p>
          <p><strong>Capital:</strong> ${country.capital}</p>
        `;

        row.appendChild(div);
      });
    })
    .catch((error) => {
      console.error("Error loading JSON:", error);
      row.innerHTML = "<p>Failed to load countries.</p>";
    });
}

loadCountries();

const updateUIDetails = (cityName, temperature, weatherDescription) => {
  const details = document.querySelector(".details");
  const html = ` 
      <h5 class="my-3">${cityName}</h5>
      <div class="my-3">Weather: ${weatherDescription}</div>
      <div class="display-4 my-4">
        <span>${temperature}</span>
        <span>&deg;C</span>
      </div>
    </div>
    `;
  details.innerHTML = html;
};

const updateUIImg = timeSrc => {
  const time = document.querySelector(".time");
  time.src = timeSrc;
};
const updateUIIcon = importedIcon => {
  const icon = document.querySelector(".icon img");
  icon.src = importedIcon;
};

export { updateUIDetails, updateUIIcon, updateUIImg };

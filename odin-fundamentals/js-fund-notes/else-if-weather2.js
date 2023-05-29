const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch(choice) {
    case "sunny":
      para.textContent = "It is sunny.";
      break;
    case "rainy":
      para.textContent = "It is rainy.";
      break;
    case "snowing":
      para.textContent = "It is snowing.";
      break;
    case "overcast":
      para.textContent = "It is cloudy.";
      break;
    default:
      para.textContent = "";
  }
}
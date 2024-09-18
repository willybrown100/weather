export function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], "☀️"],
    [[1], "🌤"],
    [[2], "⛅️"],
    [[3], "☁️"],
    [[45, 48], "🌫"],
    [[51, 56, 61, 66, 80], "🌦"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "🌧","rainy"],
    [[71, 73, 75, 77, 85, 86], "🌨"],
    [[95], "🌩"],
    [[96, 99], "⛈"],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "";
  return icons.get(arr);
}

export function getWeatherIcons(wmoCode) {
  const icons = new Map([
    [[0], ["☀️", "clear"]],
    [[1], ["🌤", "partly cloudy"]],
    [[2], ["⛅️", "cloudy"]],
    [[3], ["☁️", "overcast"]],
    [
      [45, 48],
      ["🌫", "foggy"],
    ],
    [
      [51, 56, 61, 66, 80],
      ["🌦", "light rain"],
    ],
    [
      [53, 55, 63, 65, 57, 67, 81, 82],
      ["🌧", "rainy"],
    ],
    [
      [71, 73, 75, 77, 85, 86],
      ["🌨", "snow"],
    ],
    [[95], ["🌩", "thunderstorms"]],
    [
      [96, 99],
      ["⛈", "heavy thunderstorms"],
    ],
  ]);


  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return { icon: "", description: "" }; // Default response if not found

  const [icon, description] = icons.get(arr); // Destructure the array (icon, description)
  return { icon, description };
}



export function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
    day: "numeric",
    
  }).format(new Date(dateStr));
}

export function formatDays(dateStr) {


  const date = new Date(dateStr);

  if (isNaN(date)) {
    // Handle invalid date
    console.log("Invalid dateStr:", dateStr);
    return "";
  }

  return new Intl.DateTimeFormat("en", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}


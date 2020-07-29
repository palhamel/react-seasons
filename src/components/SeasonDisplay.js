//rafc
import React from "react";

// Determine season
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

export const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  const textMessage =
    season === "winter"
      ? "Wintertime - cold and fresh!"
      : "Summertime - warm and sunny";
  const iconMessage = season === 'winter' ? 'snowflake' : 'sun';



  return (
    <div>
      <i className={`${iconMessage} icon`}/>
      <h1>{textMessage}</h1>
      <i className={`${iconMessage} icon`}/>
    </div>
  );
};

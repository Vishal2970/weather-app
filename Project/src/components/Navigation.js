import React from "react";

export default function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <div className="container-navigation">
          <a className="navbar-brand" href="/">
            <img
              src={process.env.PUBLIC_URL +"/weather_rain_snow_icon.png"}
              alt="Whether App"
              width={50}
              height={50}
            />
            <h3>Whether</h3>
          </a>
        </div>
      </nav>
    </div>
  );
}

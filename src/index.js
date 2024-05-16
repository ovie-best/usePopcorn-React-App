import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";
// import { useState } from "react";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating
//         color="chocolate"
//         maxRating={10}
//         onSetRating={setMovieRating}
//       />
//       <p>This Movie was rated {movieRating} Stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating color="blue" size={24} defaultRating={3} />
    <Test /> */}
  </React.StrictMode>
);

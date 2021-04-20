import React from "react";

export const WhereWeAre = () => {
  return (
    <div className="container">
      <h1>Donde Estamos?</h1>
      <iframe
        title="mapadegoogle"
        style={{ border: 0, width: "100%", height: "350px" }}
        src={`https://maps.google.com/maps?q=-32.886153,-68.8386639&zoom=5&output=embed`}
        frameborder="0"
        allowfullscreen={true}
      ></iframe>
    </div>
  );
};

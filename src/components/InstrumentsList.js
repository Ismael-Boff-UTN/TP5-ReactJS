import React, { useState } from "react";
import { InstrumentItem } from "./InstrumentItem";
import instrumentos from "../fakeAPI/instrumentos.json";

export const InstrumentsList = () => {
  const [instruments] = useState(instrumentos);

  return (
    <div className="container productos mt-4">
      <h1 className="text-center mb-5">Los Instrumentos Que Vendemos!</h1>
      <h5 className="text-center mb-5">
        Actualmente Tenemos Disponible : {instruments.instrumentos.length}{" "}
        Instrumentos!
      </h5>
      <div className="row">
        {instruments.instrumentos.map((instrument) => (
          <InstrumentItem key={instrument.id} instrument={instrument} />
        ))}
      </div>
    </div>
  );
};

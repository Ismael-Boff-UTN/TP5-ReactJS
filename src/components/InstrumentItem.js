import React from "react";
import { useHistory } from "react-router-dom";

export const InstrumentItem = ({ instrument }) => {
  const history = useHistory();
  const {
    id,
    instrumento,
    imagen,
    precio,
    costoEnvio,
    cantidadVendida,
  } = instrument;
  const redirectToDetails = (id) => {
    history.push(`instrument/${id}`);
  };
  return (
    <div className="col-mb-1 ml-3">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={`assets/img/${imagen}`} className="card-img" alt="item" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{instrumento}</h5>

              {costoEnvio === "G" ? (
                <h5 style={{ color: "green" }}>
                  {" "}
                  <img src="assets/img/camion.png" alt="envioIcon" />
                  Envio Gratis A Todo El Pais
                </h5>
              ) : (
                <h5 style={{ color: "orange" }}>
                  Costo Envio Interior De Argentina ${precio}
                </h5>
              )}

              <p className="card-text">{cantidadVendida} Vendidos</p>
            </div>
          </div>
        </div>
        <div class="card-footer bg-transparent border-dark">
          <button
            className="btn btn-success btn-lg btn-block"
            onClick={() => redirectToDetails(id)}
          >
            Ver Detalles
          </button>
        </div>
      </div>
    </div>
  );
};

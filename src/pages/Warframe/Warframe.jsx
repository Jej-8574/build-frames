import { Link } from "react-router-dom";
import { warframes } from "./warframes";
import "./Warframe.css";

function Warframe() {
  return (
    <section className="warframes-page">
      <h2>Warframes</h2>

      <div className="warframes-grid">
        {warframes.map((wf) => (
          <Link
            key={wf.id}
            to={`/warframes/${wf.id}`}
            className="warframe-card"
          >
            <div className="card-img">
              <img className="img-base" src={wf.image} alt={wf.name} />
              {wf.primeImage && (
                <img
                  className="img-prime"
                  src={wf.primeImage}
                  alt={`${wf.name} Prime`}
                />
              )}
            </div>
            <h3>{wf.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Warframe;

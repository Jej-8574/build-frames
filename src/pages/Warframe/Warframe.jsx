import { Link, useSearchParams } from "react-router-dom";
import { warframes } from "../../data/warframes";
import "./Warframe.css";

function Warframe() {
  const [searchParams] = useSearchParams();
  const search = (searchParams.get("search") || "").toLowerCase().trim();

  const filteredWarframes = warframes.filter((wf) =>
    wf.name.toLowerCase().includes(search),
  );

  return (
    <section className="warframes-page">
      <h2>Warframes</h2>

      {search && <p>Résultat pour : "{search}"</p>}

      <div className="warframes-grid">
        {filteredWarframes.map((wf) => (
          <Link
            key={wf.id}
            to={`/warframes/${wf.id}`}
            className={`warframe-card ${wf.primeImage ? "has-prime" : ""}`}
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

      {filteredWarframes.length === 0 && (
        <p>Aucune warframe trouvée pour "{search}".</p>
      )}
    </section>
  );
}

export default Warframe;

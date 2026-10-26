import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { warframes } from "../../data/warframes";
import "./Warframesdetails.css";

function WarframesDetails() {
  const { id } = useParams();
  const [lang, setLang] = useState("fr");
  const [buildIndex, setBuildIndex] = useState(0);

  const wf = warframes.find(
    (w) => String(w.id).toLowerCase() === String(id).toLowerCase(),
  );

  if (!wf) {
    return (
      <section className="wf-detail">
        <p>Warframe introuvable.</p>
        <Link to="/warframes">← Retour</Link>
      </section>
    );
  }

  const builds = Array.isArray(wf.builds) ? wf.builds : [];
  const safeIndex =
    buildIndex >= 0 && buildIndex < builds.length ? buildIndex : 0;
  const currentBuild = builds[safeIndex] || null;

  const hasArchonData =
    (wf.archonShards || []).length > 0 || Boolean(wf.archonShardImage);

  return (
    <section className="wf-detail">
      <Link to="/warframes" className="wf-back">
        ← Retour
      </Link>

      <div className="wf-layout">
        <div className="wf-image">
          <img src={wf.image} alt={wf.name} />
        </div>

        <div className="wf-center">
          <div className="wf-box">
            <h2>{wf.name}</h2>
            <p>{wf.description || "Description à venir."}</p>
          </div>

          <div className="wf-columns">
            <div className="wf-box wf-good">
              <h3>Avantages</h3>
              <ul>
                {(wf.strengths || []).map((s, i) => (
                  <li key={`${s}-${i}`}>{s}</li>
                ))}
              </ul>
            </div>

            <div className="wf-box wf-bad">
              <h3>Inconvénients</h3>
              <ul>
                {(wf.weaknesses || []).map((w, i) => (
                  <li key={`${w}-${i}`}>{w}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Link to="/skins" className="wf-skin">
          <span>SKIN</span>
        </Link>
      </div>

      <div className="wf-box wf-build">
        <div className="lang-switch">
          <button type="button" onClick={() => setLang("fr")}>
            <span className="fi fi-fr" />
            <span>FR</span>
          </button>

          <button type="button" onClick={() => setLang("en")}>
            <span className="fi fi-gb" />
            <span>EN</span>
          </button>

          <span className={`lang-slider ${lang}`} />
        </div>

        {builds.length > 1 && (
          <div className="build-tabs">
            {builds.map((b, i) => (
              <button
                key={`${b.name || "build"}-${i}`}
                className={i === safeIndex ? "active" : ""}
                onClick={() => setBuildIndex(i)}
                type="button"
              >
                {b.name || `Build ${i + 1}`}
              </button>
            ))}
          </div>
        )}

        {currentBuild?.images?.[lang] ? (
          <img
            className="build-img"
            src={currentBuild.images[lang]}
            alt={`Build ${currentBuild.name || ""} ${wf.name} ${lang}`}
          />
        ) : (
          <p>Build à venir.</p>
        )}
      </div>

      {(wf.weaponBuilds || []).map((w, i) => (
        <div
          className="wf-box wf-build wf-weapon"
          key={`${w.name || "weapon"}-${i}`}
        >
          <h3>{w.name || "Arme dédiée"}</h3>

          {w.images?.[lang] ? (
            <img
              className="build-img"
              src={w.images[lang]}
              alt={`Build ${w.name || "Arme dédiée"} ${wf.name} ${lang}`}
            />
          ) : (
            <p>Build à venir.</p>
          )}
        </div>
      ))}

      {(wf.helminth || hasArchonData) && (
        <div className="wf-extra">
          <div className="wf-box">
            <h3>Helminth</h3>
            <p>{wf.helminth?.[lang] || "Infos à venir."}</p>
          </div>

          <div className="wf-box wf-shards">
            <h3>Fragments d'Archon</h3>

            {(wf.archonShards || []).length > 0 ? (
              <div className="archon-list">
                {wf.archonShards.map((s, i) => {
                  // Nouveau format recommandé:
                  // { color, icon, text: { fr, en } }
                  const isNewFormat = Boolean(s?.text);

                  const shardText = isNewFormat
                    ? s.text?.[lang]
                    : `${s.count ? `x${s.count} ` : ""}${lang === "fr" ? s.labelFr : s.labelEn}`;

                  return (
                    <div
                      className={`archon-item ${s.color || ""}`}
                      key={`${s.color || "shard"}-${i}`}
                    >
                      {s.icon ? (
                        <img
                          className="archon-icon"
                          src={s.icon}
                          alt={`Fragment ${s.color || ""}`}
                        />
                      ) : (
                        <span className={`shard-dot ${s.color || ""}`} />
                      )}

                      <p className="archon-text">
                        {shardText || "Description à venir."}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : wf.archonShardImage ? (
              <img
                className="shard-img"
                src={wf.archonShardImage}
                alt={`Fragments d'Archon ${wf.name}`}
              />
            ) : (
              <p>Infos à venir.</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default WarframesDetails;

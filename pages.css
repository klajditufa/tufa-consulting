/* ============== TUFA Consult — Pricing page ============== */

/* small check / dash marks for the comparison matrix */
function Tick(){
  return (
    <svg className="cmp-tick" width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.4l3 3L13 4.5" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* render a single matrix cell value: boolean → tick/dash, object/string → text */
function CmpCell({ val, lang }){
  if (val === true)  return <span className="cmp-cell yes"><Tick/></span>;
  if (val === false) return <span className="cmp-cell no" aria-label="—">–</span>;
  return <span className="cmp-cell txt">{tx(val, lang)}</span>;
}

function Pricing({ lang, go }){
  const T = window.TUFA;
  const P = T.pricing;
  const order = ["start", "standart", "premium"];

  return (
    <main className="page-enter">
      <PageHead lang={lang}
        eyebrow={tx(P.eyebrow, lang)}
        title={tx(P.title, lang)}
        lead={tx(P.lead, lang)}/>

      {/* ---- tier cards ---- */}
      <section className="section price-sec">
        <div className="wrap">
          <div className="price-tiers">
            {P.tiers.map((t, i)=>(
              <Reveal key={t.id} delay={i*70}
                className={"tier" + (t.featured ? " tier-feat" : "")}>
                {t.featured && (
                  <span className="tier-badge">{lang==="sq"?"Më e zgjedhura":"Most popular"}</span>
                )}
                <div className="tier-head">
                  <h3 className="tier-name">{t.name}</h3>
                  <p className="tier-tag">{tx(t.tagline, lang)}</p>
                </div>
                <div className="tier-price">
                  <span className="tier-amt">{tx(t.price, lang)}</span>
                  <span className="tier-unit">{tx(P.unit, lang)}</span>
                </div>
                <span className="tier-foot">{tx(t.foot, lang)}</span>
                <hr className="tier-rule"/>
                <ul className="tier-list">
                  {tx(t.highlights, lang).map((h, j)=>(
                    <li key={j} className="tier-li"><Tick/><span>{h}</span></li>
                  ))}
                </ul>
                <button className={"btn " + (t.featured ? "btn-orange" : "btn-primary") + " tier-btn"}
                  onClick={()=>go("contact")}>
                  {tx(T.ui.cta_book, lang)} <Arrow/>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- full comparison matrix ---- */}
      <section className="section cmp-sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <span className="eyebrow">{lang==="sq"?"Krahasimi i plotë":"Full comparison"}</span>
              <h2 className="h2" style={{marginTop:"18px",maxWidth:"18ch"}}>
                {lang==="sq"?"Çfarë përfshin secila paketë":"What each package includes"}
              </h2>
            </div>
          </Reveal>

          <div className="cmp-scroll">
            <div className="cmp-table">
              {/* sticky column header */}
              <div className="cmp-row cmp-head">
                <div className="cmp-feat cmp-feat-head">
                  {lang==="sq"?"Shërbimi":"Service"}
                </div>
                {order.map(id=>{
                  const t = P.tiers.find(x=>x.id===id);
                  return (
                    <div key={id} className={"cmp-h" + (t.featured?" cmp-h-feat":"")}>
                      <span className="cmp-h-name">{t.name}</span>
                      <span className="cmp-h-price">{tx(t.price, lang)}</span>
                    </div>
                  );
                })}
              </div>

              {P.groups.map((g, gi)=>(
                <React.Fragment key={gi}>
                  <div className="cmp-grouprow">
                    <span className="cmp-group">{tx(g.name, lang)}</span>
                  </div>
                  {g.rows.map((r, ri)=>(
                    <div className="cmp-row" key={ri}>
                      <div className="cmp-feat">
                        <span className="cmp-f-name">{tx(r.f, lang)}</span>
                        <span className="cmp-f-desc">{tx(r.d, lang)}</span>
                      </div>
                      {order.map(id=>(
                        <CmpCell key={id} val={r.v[id]} lang={lang}/>
                      ))}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ---- notes ---- */}
          <div className="price-notes">
            {tx(P.notes, lang).map((n, i)=>(
              <p key={i} className="price-note">
                <span className="price-note-mark">{i===0?"*":"**"}</span>{n}
              </p>
            ))}
          </div>
        </div>
      </section>

      <CtaBand lang={lang} go={go}/>
    </main>
  );
}

Object.assign(window, { Pricing });

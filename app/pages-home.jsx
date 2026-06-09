/* ============== TUFA Consult — Home (Ballina) ============== */

/* stylized balance-sheet card — the hero's subject, drawn in HTML (no stock photo) */
function BalanceCard({ lang }){
  const rows = [
    { l:{sq:"Para & ekuivalente", en:"Cash & equivalents"}, v:"4 820 000" },
    { l:{sq:"Të arkëtueshme",     en:"Receivables"},          v:"2 140 000" },
    { l:{sq:"Inventar",            en:"Inventory"},            v:"1 560 000" },
    { l:{sq:"Aktive afatgjata",    en:"Fixed assets"},         v:"3 310 000" },
  ];
  return (
    <div className="bcard">
      <div className="bcard-top">
        <div>
          <div className="bcard-ey">{lang==="sq"?"BILANCI":"BALANCE"} · 2025</div>
          <div className="bcard-ttl">{lang==="sq"?"Pasqyra Financiare":"Financial Statement"}</div>
        </div>
        <div className="bcard-stamp">{lang==="sq"?"MBYLLUR":"CLOSED"}</div>
      </div>
      <div className="bcard-rows">
        {rows.map((r,i)=>(
          <div className="bcard-row" key={i}>
            <span>{tx(r.l,lang)}</span><span className="bcard-num">{r.v} L</span>
          </div>
        ))}
      </div>
      <div className="bcard-total">
        <div>
          <div className="bcard-tl">{lang==="sq"?"Totali i aktiveve":"Total assets"}</div>
          <div className="bcard-tv">11 830 000 L</div>
        </div>
        <div className="bcard-delta"><Arrow size={14}/> 8.4%</div>
      </div>
    </div>
  );
}

function ServiceCard({ s, lang, go }){
  return (
    <a href="#" className="svc" onClick={(e)=>{e.preventDefault(); go("services");}}>
      <div className="svc-top">
        <span className="svc-ico"><SvcIcon name={s.icon}/></span>
        <span className="svc-n">{s.n}</span>
      </div>
      <h3 className="svc-t">{tx(s.t,lang)}</h3>
      <p className="svc-d">{tx(s.d,lang)}</p>
      <span className="svc-arr"><Arrow/></span>
    </a>
  );
}

function Home({ lang, go }){
  const T = window.TUFA;
  const heroTitle = tx(T.hero.title, lang).split("\n");
  const latest = T.pubs.items.slice(0,3);
  const catName = (id)=> { const c=T.pubs.cats.find(c=>c.id===id); return c?tx(c,lang):id; };

  return (
    <main className="page-enter">

      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-left">
            <span className="eyebrow reveal">{tx(T.hero.eyebrow,lang)}</span>
            <h1 className="display hero-ttl">
              {heroTitle.map((l,i)=>(
                <span key={i} className="reveal" style={{display:"block",animationDelay:(0.06+i*0.08)+"s"}}>{l}</span>
              ))}
            </h1>
            <p className="lead reveal" style={{animationDelay:".28s"}}>{tx(T.hero.lead,lang)}</p>
            <div className="hero-cta reveal" style={{animationDelay:".38s"}}>
              <button className="btn btn-primary" onClick={()=>go("contact")}>{tx(T.ui.cta_book,lang)} <Arrow/></button>
              <button className="btn btn-ghost" onClick={()=>go("services")}>{tx(T.ui.cta_services,lang)}</button>
            </div>
          </div>
          <div className="hero-right reveal" style={{animationDelay:".2s"}}>
            <BalanceCard lang={lang}/>
          </div>
        </div>
        <div className="hero-marquee" aria-hidden="true">
          <div className="mq-track">
            {Array(2).fill(0).map((_,k)=>(
              <span key={k} className="mq-grp">
                {["Kontabilitet","Fiskalitet","Bilance","Raportim","Konsulencë","TVSH","Pasqyra","Deklarime"].map((w,i)=>(
                  <span key={i} className="mq-item">{w}<i className="mq-dot">↗</i></span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO / KUSH JEMI */}
      <section className="section intro-sec">
        <div className="wrap intro-grid">
          <Reveal className="intro-l">
            <span className="eyebrow">{tx(T.intro.eyebrow,lang)}</span>
          </Reveal>
          <Reveal className="intro-r" delay={80}>
            <p className="intro-statement">
              {tx(T.intro.body,lang)}
            </p>
            <button className="tlink" onClick={()=>go("about")} style={{marginTop:"34px"}}>
              {tx(T.ui.cta_about,lang)} <Arrow/>
            </button>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section svc-sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <span className="eyebrow">{tx(T.services.eyebrow,lang)}</span>
              <h2 className="h2" style={{marginTop:"18px"}}>{tx(T.services.title,lang)}</h2>
            </div>
            <p className="lead sec-head-lead">{tx(T.services.lead,lang)}</p>
          </Reveal>
          <div className="svc-grid">
            {T.services.items.map((s,i)=>(
              <Reveal key={s.n} delay={(i%3)*70}><ServiceCard s={s} lang={lang} go={go}/></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section proc-sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <span className="eyebrow">{tx(T.process.eyebrow,lang)}</span>
              <h2 className="h2" style={{marginTop:"18px",maxWidth:"16ch"}}>{tx(T.process.title,lang)}</h2>
            </div>
          </Reveal>
          <div className="proc-grid">
            {T.process.steps.map((p,i)=>(
              <Reveal key={p.k} delay={i*70} className="proc-item">
                <span className="proc-k">{p.k}</span>
                <h3 className="proc-t">{tx(p.t,lang)}</h3>
                <p className="proc-d">{tx(p.d,lang)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS PREVIEW */}
      <section className="section pubprev-sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <div>
              <span className="eyebrow">{tx(T.pubs.eyebrow,lang)}</span>
              <h2 className="h2" style={{marginTop:"18px"}}>{tx(T.pubs.title,lang)}</h2>
            </div>
            <button className="tlink" onClick={()=>go("pubs")}>{tx(T.ui.cta_all_pubs,lang)} <Arrow/></button>
          </Reveal>
          <div className="pubprev-list">
            {latest.map((p,i)=>(
              <Reveal key={i} delay={i*60}>
                <a href="#" className="pubrow" onClick={(e)=>{e.preventDefault(); go("article", i);}}>
                  <span className="pubrow-cat">{catName(p.cat)}</span>
                  <span className="pubrow-t">{tx(p.t,lang)}</span>
                  <span className="pubrow-meta">{tx(p.date,lang)}</span>
                  <span className="pubrow-arr"><Arrow/></span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <CtaBand lang={lang} go={go}/>
    </main>
  );
}

function CtaBand({ lang, go }){
  const T = window.TUFA;
  return (
    <section className="cta-band">
      <div className="wrap cta-inner">
        <Reveal>
          <span className="eyebrow no-tick" style={{color:"var(--orange)"}}>{tx(T.contact.eyebrow,lang)}</span>
          <h2 className="h2 cta-ttl">{tx(T.contact.title,lang)}</h2>
        </Reveal>
        <Reveal delay={80} className="cta-right">
          <p className="cta-lead">{tx(T.contact.lead,lang)}</p>
          <button className="btn btn-orange" onClick={()=>go("contact")}>{tx(T.ui.cta_contact,lang)} <Arrow/></button>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Home, CtaBand, BalanceCard, ServiceCard });

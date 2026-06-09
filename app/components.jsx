/* ============== TUFA Consult — shared components ============== */
const { useState, useEffect, useRef } = React;

/* language helper: pick sq/en from a {sq,en} pair, pass-through plain strings */
function tx(v, lang){
  if (v == null) return "";
  if (typeof v === "object") return v[lang] ?? v.sq ?? "";
  return v;
}

/* up-right arrow motif (from the logo) */
function Arrow({ size = 15, cls = "" }){
  return (
    <svg className={"arr " + cls} width={size} height={size} viewBox="0 0 16 16" fill="none"
      style={{ display:"inline-block", flex:"0 0 auto" }}>
      <path d="M4.5 11.5L11.5 4.5M6 4.5h5.5V10" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* wordmark for light backgrounds */
function Wordmark({ onClick, mono }){
  return (
    <a href="#" onClick={(e)=>{e.preventDefault(); onClick&&onClick();}} className="wordmark" aria-label="TUFA Consult">
      <span className="wm-row">
        <span className="wm-name">TUFA</span>
        <span className="wm-sub">Consult</span>
        <span className="wm-arrow"><Arrow size={13}/></span>
      </span>
      {!mono && <span className="wm-tag">SOLUTIONS</span>}
    </a>
  );
}

/* simple geometric line icons for services */
function SvcIcon({ name }){
  const c = { width:26, height:26, viewBox:"0 0 24 24", fill:"none",
    stroke:"currentColor", strokeWidth:1.4, strokeLinecap:"round", strokeLinejoin:"round" };
  const P = {
    ledger: <><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 3v18M11 8h6M11 12h6M11 16h4"/></>,
    chip:   <><rect x="6" y="6" width="12" height="12" rx="1"/><path d="M9 9h6v6H9zM10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3"/></>,
    scale:  <><path d="M12 4v16M6 20h12M5 8h14M5 8l-2.5 5a2.5 2.5 0 005 0L5 8zM19 8l-2.5 5a2.5 2.5 0 005 0L19 8z"/></>,
    doc:    <><path d="M6 3h8l4 4v14H6zM14 3v4h4"/><path d="M9 13h6M9 17h6"/></>,
    support:<><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M14.1 9.9l3-3M6.9 17.1l3-3M14.1 14.1l3 3M6.9 6.9l3 3"/></>,
    chart:  <><path d="M4 20V4M4 20h16"/><path d="M8 16l3-4 3 2 4-6"/></>,
  };
  return <svg {...c}>{P[name] || P.doc}</svg>;
}

/* ---------------- Header ---------------- */
function Header({ page, go, lang, setLang }){
  const T = window.TUFA;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const f = ()=> setScrolled(window.scrollY > 8);
    f(); window.addEventListener("scroll", f, { passive:true });
    return ()=> window.removeEventListener("scroll", f);
  },[]);
  useEffect(()=>{ setOpen(false); },[page]);

  return (
    <header className={"hdr" + (scrolled ? " is-scrolled" : "")}>
      <div className="hdr-inner wrap">
        <Wordmark onClick={()=>go("home")} />

        <nav className="nav-desktop">
          {T.nav.map(n=>(
            <a key={n.id} href="#"
               onClick={(e)=>{e.preventDefault(); go(n.id);}}
               className={"navlink" + ((page===n.id || (page==="article" && n.id==="pubs")) ? " active" : "")}>
              {tx(n, lang)}
            </a>
          ))}
        </nav>

        <div className="hdr-right">
          <div className="lang" role="group" aria-label="Language">
            {["sq","en"].map(l=>(
              <button key={l} className={"lang-btn"+(lang===l?" on":"")} onClick={()=>setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="btn btn-orange hdr-cta" onClick={()=>go("contact")}>
            {tx(T.ui.cta_contact, lang)} <Arrow/>
          </button>
          <button className={"burger"+(open?" x":"")} aria-label="Menu" onClick={()=>setOpen(o=>!o)}>
            <span></span><span></span>
          </button>
        </div>
      </div>

      <div className={"nav-mobile"+(open?" show":"")}>
        {T.nav.map(n=>(
          <a key={n.id} href="#" onClick={(e)=>{e.preventDefault(); go(n.id);}}
             className={"m-link"+(page===n.id?" active":"")}>
            {tx(n, lang)} <Arrow size={16}/>
          </a>
        ))}
        <div className="m-foot">
          <div className="lang">
            {["sq","en"].map(l=>(
              <button key={l} className={"lang-btn"+(lang===l?" on":"")} onClick={()=>setLang(l)}>{l.toUpperCase()}</button>
            ))}
          </div>
          <button className="btn btn-orange" onClick={()=>go("contact")}>{tx(T.ui.cta_contact,lang)} <Arrow/></button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Footer ---------------- */
function Footer({ go, lang }){
  const T = window.TUFA;
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-top">
          <div className="ftr-brand">
            <img src="assets/logo-dark.png" alt="TUFA Consult" className="ftr-logo"/>
            <p className="ftr-blurb">{tx(T.intro.body, lang)}</p>
          </div>
          <div className="ftr-cols">
            <div className="ftr-col">
              <span className="ftr-h">{lang==="sq"?"Faqet":"Pages"}</span>
              {T.nav.map(n=>(
                <a key={n.id} href="#" onClick={(e)=>{e.preventDefault(); go(n.id);}}>{tx(n,lang)}</a>
              ))}
            </div>
            <div className="ftr-col">
              <span className="ftr-h">{lang==="sq"?"Kontakt":"Contact"}</span>
              {T.contact.details.map((d,i)=>(
                <span key={i} className="ftr-val">{tx(d.v, lang)}</span>
              ))}
            </div>
          </div>
        </div>
        <hr className="ftr-rule"/>
        <div className="ftr-bot">
          <span>© {new Date().getFullYear()} TUFA Consult. {tx(T.ui.rights, lang)}</span>
          <span className="ftr-mono">TIRANË · SHQIPËRI</span>
        </div>
      </div>
    </footer>
  );
}

/* layout wrapper — content visible by default; class hook kept for callers */
function Reveal({ children, delay=0, className="", as="div" }){
  const Tag = as;
  return <Tag className={"reveal " + className}>{children}</Tag>;
}

Object.assign(window, { tx, Arrow, Wordmark, SvcIcon, Header, Footer, Reveal });

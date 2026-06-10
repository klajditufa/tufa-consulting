/* ============== TUFA Consult — inner pages ============== */

/* striped placeholder for a real photo the user will drop in */
function Placeholder({ label, ratio="4 / 3", className="" }){
  return (
    <div className={"ph "+className} style={{aspectRatio:ratio}}>
      <span className="ph-label">{label}</span>
    </div>
  );
}

function PageHead({ eyebrow, title, lead, lang }){
  return (
    <section className="pagehead">
      <div className="wrap">
        <span className="eyebrow reveal">{eyebrow}</span>
        <h1 className="display ph-ttl reveal" style={{animationDelay:".06s"}}>{title}</h1>
        {lead && <p className="lead reveal" style={{animationDelay:".16s",marginTop:"24px"}}>{lead}</p>}
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About({ lang, go }){
  const T = window.TUFA;
  return (
    <main className="page-enter">
      <PageHead lang={lang}
        eyebrow={tx(T.intro.eyebrow,lang)}
        title={lang==="sq" ? "Partneri juaj në numra." : "Your partner in numbers."}/>

      <section className="section about-story">
        <div className="wrap about-grid">
          <Reveal className="about-photo">
            <div className="ph-slot" style={{aspectRatio:"4 / 5"}}>
              <image-slot id="about-team" shape="rounded" radius="3" src="assets/about-team.webp"
                placeholder={lang==="sq"?"Tërhiqni një foto këtu":"Drop a photo here"}
                style={{width:"100%",height:"100%",display:"block"}}></image-slot>
            </div>
          </Reveal>
          <Reveal className="about-copy" delay={80}>
            <p className="h3 about-lead">{tx(T.intro.body,lang)}</p>
            <p className="about-p">{lang==="sq"
              ? "Besojmë se kontabiliteti nuk është thjesht detyrim ligjor, por një mjet që ndihmon biznesin të vendosë me siguri. Prandaj punojmë pranë jush — me afate të qarta, komunikim të drejtpërdrejtë dhe raporte që i kuptoni."
              : "We believe accounting is not merely a legal duty but a tool that helps a business decide with confidence. So we work close to you — with clear deadlines, direct communication and reports you actually understand."}</p>
            <p className="about-p">{lang==="sq"
              ? "Nga regjistrimi i parë i transaksioneve deri te mbyllja e bilancit vjetor, ekipi ynë qëndron përgjegjës për saktësinë dhe afatet, që ju të fokusoheni te rritja."
              : "From the first recorded transaction to the annual balance-sheet close, our team stays accountable for accuracy and timing, so you can focus on growth."}</p>
            <button className="btn btn-primary" style={{marginTop:"12px"}} onClick={()=>go("services")}>
              {tx(T.ui.cta_services,lang)} <Arrow/>
            </button>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="section values-sec">
        <div className="wrap">
          <Reveal className="sec-head">
            <div><span className="eyebrow">{tx(T.values.eyebrow,lang)}</span></div>
          </Reveal>
          <div className="values-grid">
            {T.values.items.map((v,i)=>(
              <Reveal key={i} delay={(i%4)*60} className="value-item">
                <span className="value-n">{String(i+1).padStart(2,"0")}</span>
                <h3 className="value-t">{tx(v.t,lang)}</h3>
                <p className="value-d">{tx(v.d,lang)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS reuse */}
      <ProcessSection lang={lang}/>
      <CtaBand lang={lang} go={go}/>
    </main>
  );
}

function ProcessSection({ lang }){
  const T = window.TUFA;
  return (
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
  );
}

/* ---------------- SERVICES ---------------- */
function Services({ lang, go }){
  const T = window.TUFA;
  return (
    <main className="page-enter">
      <PageHead lang={lang}
        eyebrow={tx(T.services.eyebrow,lang)}
        title={tx(T.services.title,lang)}
        lead={tx(T.services.lead,lang)}/>

      <section className="svc-list-sec">
        <div className="wrap">
          {T.services.items.map((s,i)=>(
            <Reveal key={s.n}>
              <div className="svc-rowfull" onClick={()=>go("contact")}>
                <span className="svcf-n">{s.n}</span>
                <span className="svcf-ico"><SvcIcon name={s.icon}/></span>
                <div className="svcf-body">
                  <h3 className="svcf-t">{tx(s.t,lang)}</h3>
                  <p className="svcf-d">{tx(s.d,lang)}</p>
                </div>
                <span className="svcf-arr"><Arrow size={18}/></span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ProcessSection lang={lang}/>
      <CtaBand lang={lang} go={go}/>
    </main>
  );
}

/* ---------------- PUBLICATIONS ---------------- */
function Publications({ lang, go }){
  const T = window.TUFA;
  const [cat, setCat] = useState("all");
  const catName = (id)=>{ const c=T.pubs.cats.find(c=>c.id===id); return c?tx(c,lang):id; };
  const list = cat==="all" ? T.pubs.items : T.pubs.items.filter(p=>p.cat===cat);
  const feat = T.pubs.items[0];

  return (
    <main className="page-enter">
      <PageHead lang={lang}
        eyebrow={tx(T.pubs.eyebrow,lang)}
        title={tx(T.pubs.title,lang)}
        lead={tx(T.pubs.lead,lang)}/>

      {/* featured */}
      <section className="pub-feat-sec">
        <div className="wrap">
          <Reveal>
            <div className="pub-feat">
              <div className="ph-slot pub-feat-img" style={{aspectRatio:"16 / 9"}}>
                <image-slot id="pub-featured" shape="rounded" radius="3"
                  placeholder={lang==="sq"?"Tërhiqni një foto":"Drop a photo"}
                  style={{width:"100%",height:"100%",display:"block"}}></image-slot>
              </div>
              <div className="pub-feat-body pub-feat-click" onClick={()=>go("article",0)} role="link" tabIndex="0">
                <div className="pub-tags">
                  <span className="pub-cat-tag">{catName(feat.cat)}</span>
                  <span className="pub-meta">{tx(feat.date,lang)} · {feat.read} min</span>
                </div>
                <h2 className="h3 pub-feat-t">{tx(feat.t,lang)}</h2>
                <p className="pub-feat-x">{tx(feat.x,lang)}</p>
                <span className="tlink">{tx(T.ui.cta_read,lang)} <Arrow/></span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* filter + grid */}
      <section className="section pub-grid-sec">
        <div className="wrap">
          <div className="pub-filter">
            <button className={"chip"+(cat==="all"?" on":"")} onClick={()=>setCat("all")}>{tx(T.ui.filter_all,lang)}</button>
            {T.pubs.cats.map(c=>(
              <button key={c.id} className={"chip"+(cat===c.id?" on":"")} onClick={()=>setCat(c.id)}>{tx(c,lang)}</button>
            ))}
          </div>
          <div className="pub-grid">
            {list.map((p,i)=>(
              <Reveal key={p.t.sq} delay={(i%3)*60}>
                <a href="#" className="pubcard" onClick={(e)=>{e.preventDefault(); go("article", T.pubs.items.indexOf(p));}}>
                  <div className="pubcard-top">
                    <span className="pub-cat-tag">{catName(p.cat)}</span>
                    <span className="pubcard-arr"><Arrow/></span>
                  </div>
                  <h3 className="pubcard-t">{tx(p.t,lang)}</h3>
                  <p className="pubcard-x">{tx(p.x,lang)}</p>
                  <div className="pubcard-meta">{tx(p.date,lang)} · {p.read} min</div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand lang={lang} go={go}/>
    </main>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact({ lang, go }){
  const T = window.TUFA;
  const F = T.contact.fields;
  const [form, setForm] = useState({ name:"", email:"", company:"", message:"" });
  const [errs, setErrs] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const set = (k)=>(e)=> setForm(f=>({...f,[k]:e.target.value}));

  const submit = async (e)=>{
    e.preventDefault();
    const er = {};
    if(!form.name.trim()) er.name = true;
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = true;
    if(!form.message.trim()) er.message = true;
    setErrs(er);
    if(Object.keys(er).length!==0) return;
    setFailed(false);
    setSending(true);
    try {
      const res = await fetch("https://formspree.io/f/xaqzbdoo", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: (()=>{ const fd=new FormData();
          fd.append("Emri", form.name);
          fd.append("email", form.email);
          fd.append("Biznesi", form.company);
          fd.append("Mesazhi", form.message);
          fd.append("_subject", "Mesazh i ri nga tufa.consulting — "+form.name);
          return fd; })()
      });
      if(res.ok){ setSent(true); }
      else { setFailed(true); }
    } catch(err){ setFailed(true); }
    setSending(false);
  };

  return (
    <main className="page-enter">
      <PageHead lang={lang}
        eyebrow={tx(T.contact.eyebrow,lang)}
        title={tx(T.contact.title,lang)}
        lead={tx(T.contact.lead,lang)}/>

      <section className="section contact-sec">
        <div className="wrap contact-grid">
          {/* details */}
          <Reveal className="contact-info">
            {T.contact.details.map((d,i)=>(
              <div className="cinfo-row" key={i}>
                <span className="cinfo-k">{tx(d.k,lang)}</span>
                <span className="cinfo-v">{tx(d.v,lang)}</span>
              </div>
            ))}
            <div className="cinfo-card">
              <img src="assets/logo-dark.png" alt="TUFA Consult" className="cinfo-logo"/>
              <p>{lang==="sq"?"Konsulta e parë është pa pagesë.":"The first consultation is free."}</p>
            </div>
          </Reveal>

          {/* form */}
          <Reveal className="contact-form-wrap" delay={80}>
            {sent ? (
              <div className="form-sent">
                <span className="form-sent-ico"><Arrow size={26}/></span>
                <p className="h3">{tx(F.sent,lang)}</p>
                <button className="tlink" onClick={()=>{ setSent(false); setForm({name:"",email:"",company:"",message:""}); }}>
                  {lang==="sq"?"Dërgo një tjetër":"Send another"} <Arrow/>
                </button>
              </div>
            ) : (
              <form className="cform" onSubmit={submit} noValidate>
                <div className="field">
                  <label>{tx(F.name,lang)}</label>
                  <input className={errs.name?"err":""} value={form.name} onChange={set("name")} placeholder="—"/>
                </div>
                <div className="field-row">
                  <div className="field">
                    <label>{tx(F.email,lang)}</label>
                    <input className={errs.email?"err":""} value={form.email} onChange={set("email")} placeholder="—"/>
                  </div>
                  <div className="field">
                    <label>{tx(F.company,lang)}</label>
                    <input value={form.company} onChange={set("company")} placeholder="—"/>
                  </div>
                </div>
                <div className="field">
                  <label>{tx(F.message,lang)}</label>
                  <textarea className={errs.message?"err":""} rows="4" value={form.message} onChange={set("message")} placeholder="—"></textarea>
                </div>
                <button type="submit" className="btn btn-primary cform-btn" disabled={sending}>
                  {sending ? (lang==="sq"?"Po dërgohet…":"Sending…") : tx(F.send,lang)} <Arrow/>
                </button>
                {failed && (
                  <p className="cform-err-msg">{lang==="sq"?"Mesazhi nuk u dërgua dot. Provoni sërish ose na shkruani direkt në email.":"Could not send. Please try again or email us directly."}</p>
                )}
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { About, Services, Publications, Contact, Placeholder, PageHead, ProcessSection });

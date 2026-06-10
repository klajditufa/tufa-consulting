/* ============== TUFA Consult — article (publication detail) ============== */

function Article({ lang, go, arg }){
  const T = window.TUFA;
  const items = T.pubs.items;
  const idx = (typeof arg === "number" && arg >= 0 && arg < items.length) ? arg : 0;
  const p = items[idx];
  const A = p.body || { sections: [] };
  const catName = (id)=>{ const c=T.pubs.cats.find(c=>c.id===id); return c?tx(c,lang):id; };
  const prev = idx > 0 ? idx - 1 : null;
  const next = idx < items.length - 1 ? idx + 1 : null;

  return (
    <main className="page-enter">
      <article className="article">
        <div className="wrap art-head">
          <button className="art-back" onClick={()=>go("pubs")}>
            <span className="art-back-ico">←</span> {lang==="sq"?"Të gjitha publikimet":"All publications"}
          </button>
          <div className="art-tags">
            <span className="pub-cat-tag">{catName(p.cat)}</span>
            <span className="pub-meta">{tx(p.date,lang)} · {p.read} min</span>
          </div>
          <h1 className="art-title">{tx(p.t,lang)}</h1>
          <p className="art-standfirst">{tx(p.x,lang)}</p>
        </div>

        <div className="wrap">
          <div className="ph-slot art-hero-img" style={{aspectRatio:"16 / 9"}}>
            {p.img
              ? <img src={p.img} alt={tx(p.t,lang)} style={{width:"100%",height:"100%",objectFit:"cover",display:"block",borderRadius:"4px"}}/>
              : <image-slot id={"pub-img-"+idx} shape="rounded" radius="4"
                  placeholder={lang==="sq"?"Tërhiqni një foto për këtë artikull":"Drop a photo for this article"}
                  style={{width:"100%",height:"100%",display:"block"}}></image-slot>}
          </div>
        </div>

        <div className="wrap art-body">
          {A.lede && <p className="art-lede">{tx(A.lede,lang)}</p>}
          {(A.sections||[]).map((s,i)=>(
            <section className="art-sec" key={i}>
              <h2 className="art-h">{tx(s.h,lang)}</h2>
              <p className="art-p">{tx(s.p,lang)}</p>
            </section>
          ))}
          {A.close && <p className="art-close">{tx(A.close,lang)}</p>}

          <div className="art-share">
            <span className="art-share-k">{lang==="sq"?"Keni pyetje për këtë temë?":"Questions on this topic?"}</span>
            <button className="tlink" onClick={()=>go("contact")}>
              {tx(T.ui.cta_contact,lang)} <Arrow/>
            </button>
          </div>
        </div>
      </article>

      {(prev!==null || next!==null) && (
        <section className="art-nav-sec">
          <div className="wrap art-nav">
            {prev!==null ? (
              <button className="art-navlink art-prev" onClick={()=>go("article",prev)}>
                <span className="art-navk">← {lang==="sq"?"E mëparshmja":"Previous"}</span>
                <span className="art-navt">{tx(items[prev].t,lang)}</span>
              </button>
            ) : <span/>}
            {next!==null ? (
              <button className="art-navlink art-next" onClick={()=>go("article",next)}>
                <span className="art-navk">{lang==="sq"?"Tjetra":"Next"} →</span>
                <span className="art-navt">{tx(items[next].t,lang)}</span>
              </button>
            ) : <span/>}
          </div>
        </section>
      )}

      <CtaBand lang={lang} go={go}/>
    </main>
  );
}

Object.assign(window, { Article });

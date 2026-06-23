/* ============== TUFA Consult — app shell / router ============== */
const { useState: useS, useEffect: useE } = React;

function App(){
  const [page, setPage] = useS(()=> localStorage.getItem("tufa_page") || "home");
  const [lang, setLang] = useS(()=> localStorage.getItem("tufa_lang") || "sq");
  const [arg, setArg]   = useS(()=> { const v = localStorage.getItem("tufa_arg"); return v==null ? null : Number(v); });

  useE(()=>{ localStorage.setItem("tufa_page", page); }, [page]);
  useE(()=>{ localStorage.setItem("tufa_lang", lang);
    document.documentElement.lang = lang; }, [lang]);
  useE(()=>{ if(arg==null) localStorage.removeItem("tufa_arg"); else localStorage.setItem("tufa_arg", String(arg)); }, [arg]);

  // Google Analytics — dërgo një "page_view" sa herë ndërron faqja
  useE(()=>{
    if(typeof window.gtag !== "function") return;
    const titles = { home:"Ballina", about:"Kush jemi", services:"Shërbimet",
      pricing:"Çmimet", pubs:"Publikimet", contact:"Kontakt", article:"Artikull" };
    window.gtag('event','page_view',{
      page_title: (titles[page]||page)+" — TUFA Consult",
      page_path: "/"+page+(page==="article"&&arg!=null?("/"+arg):""),
      page_location: location.origin+location.pathname+"#"+page,
      language: lang
    });
  }, [page, arg, lang]);

  const go = (p, a)=>{
    setPage(p);
    if(a !== undefined) setArg(a);
    window.scrollTo({ top:0, behavior: "instant" in window ? "instant" : "auto" });
  };

  const Pages = { home:Home, about:About, services:Services, pricing:Pricing, pubs:Publications, contact:Contact, article:Article };
  const Current = Pages[page] || Home;

  return (
    <React.Fragment>
      <Header page={page} go={go} lang={lang} setLang={setLang}/>
      <Current key={page+lang+(page==="article"?("-"+arg):"")} lang={lang} go={go} arg={arg}/>
      <Footer go={go} lang={lang}/>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

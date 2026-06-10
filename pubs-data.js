/* ============== TUFA Consult — page styles ============== */

/* ---------- shared section head ---------- */
.sec-head{display:flex;justify-content:space-between;align-items:flex-end;gap:32px;margin-bottom:clamp(40px,5vw,68px);flex-wrap:wrap}
.sec-head-lead{max-width:38ch;font-size:17px}

/* ---------- placeholder ---------- */
.ph{width:100%;border:1px solid var(--line);position:relative;overflow:hidden;
  background-image:repeating-linear-gradient(135deg,transparent,transparent 9px,rgba(54,54,54,.05) 9px,rgba(54,54,54,.05) 10px);
  background-color:var(--bg-2);display:flex;align-items:flex-end}
.ph-label{font-family:var(--mono);font-size:11px;letter-spacing:.04em;color:var(--muted);padding:14px}
.ph-slot{width:100%;border-radius:3px;overflow:hidden}
.ph-slot image-slot{border:1px solid var(--line);border-radius:3px}

/* ===================== HERO ===================== */
.hero{position:relative;padding-top:clamp(48px,7vw,96px);overflow:hidden}
.hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:clamp(32px,5vw,72px);align-items:center;
  padding-bottom:clamp(56px,7vw,92px)}
.hero-ttl{margin:26px 0 28px}
.hero-cta{display:flex;gap:14px;flex-wrap:wrap;margin-top:34px}

/* balance card */
.hero-right{display:flex;justify-content:flex-end}
.bcard{width:100%;max-width:430px;background:var(--paper);border:1px solid var(--line);
  border-radius:4px;padding:28px 30px 26px;box-shadow:0 30px 60px -38px rgba(54,54,54,.4);
  transform:rotate(.4deg)}
.bcard-top{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:22px;border-bottom:1px solid var(--line)}
.bcard-ey{font-family:var(--mono);font-size:11px;letter-spacing:.18em;color:var(--muted)}
.bcard-ttl{font-family:var(--serif);font-size:23px;letter-spacing:-.01em;margin-top:6px}
.bcard-stamp{font-family:var(--mono);font-size:10px;letter-spacing:.14em;color:var(--orange-deep);
  border:1px solid var(--orange);border-radius:2px;padding:5px 8px;transform:rotate(3deg)}
.bcard-rows{padding:18px 0 6px}
.bcard-row{display:flex;justify-content:space-between;align-items:baseline;padding:11px 0;font-size:14.5px;color:#56534e;
  border-bottom:1px dashed var(--line-soft)}
.bcard-num{font-family:var(--mono);font-size:13.5px;color:var(--ink);letter-spacing:-.01em}
.bcard-total{display:flex;justify-content:space-between;align-items:flex-end;margin-top:18px;padding-top:18px;border-top:1.5px solid var(--ink)}
.bcard-tl{font-size:13px;color:var(--muted)}
.bcard-tv{font-family:var(--mono);font-size:22px;font-weight:500;margin-top:5px;letter-spacing:-.02em}
.bcard-delta{display:inline-flex;align-items:center;gap:5px;font-family:var(--mono);font-size:13px;
  color:#1f7a4d;background:rgba(31,122,77,.08);padding:5px 9px;border-radius:2px}

/* marquee */
.hero-marquee{border-top:1px solid var(--line);border-bottom:1px solid var(--line);overflow:hidden;padding:16px 0;background:rgba(243,239,232,.5)}
.mq-track{display:flex;width:max-content;animation:mq 38s linear infinite}
.mq-grp{display:flex}
.mq-item{display:inline-flex;align-items:center;gap:22px;font-family:var(--serif);font-size:22px;color:#46443f;padding:0 22px}
.mq-dot{color:var(--orange);font-style:normal;font-size:15px}
@keyframes mq{to{transform:translateX(-50%)}}
@media (prefers-reduced-motion:reduce){.mq-track{animation:none}}

/* ===================== INTRO ===================== */
.intro-sec{border-bottom:1px solid var(--line)}
.intro-grid{display:grid;grid-template-columns:.4fr 1fr;gap:clamp(24px,5vw,64px)}
.intro-statement{font-family:var(--serif);font-weight:430;font-size:clamp(24px,3.2vw,40px);line-height:1.22;letter-spacing:-.015em;color:var(--ink);max-width:22ch}
.intro-statement{text-wrap:balance}

/* ===================== SERVICES (home grid) ===================== */
.svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
.svc{background:var(--bg);padding:34px 30px 30px;display:flex;flex-direction:column;position:relative;min-height:248px;
  transition:background .3s var(--ease)}
.svc:hover{background:var(--paper)}
.svc-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:26px}
.svc-ico{color:var(--ink)}
.svc:hover .svc-ico{color:var(--orange-deep)}
.svc-n{font-family:var(--mono);font-size:12px;letter-spacing:.1em;color:var(--muted-2)}
.svc-t{font-family:var(--serif);font-size:21px;font-weight:460;line-height:1.16;letter-spacing:-.01em;margin-bottom:14px;min-height:calc(2 * 1.16em)}
.svc-d{font-size:14.5px;color:var(--muted);line-height:1.55;flex:1}
.svc-arr{color:var(--ink);margin-top:22px;opacity:0;transform:translateX(-6px);transition:.3s var(--ease)}
.svc:hover .svc-arr{opacity:1;transform:none;color:var(--orange-deep)}

/* ===================== PROCESS ===================== */
.proc-sec{background:var(--bg-2)}
.proc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(20px,3vw,40px)}
.proc-item{border-top:1.5px solid var(--ink);padding-top:22px}
.proc-k{font-family:var(--mono);font-size:13px;color:var(--orange-deep);letter-spacing:.08em}
.proc-t{font-family:var(--serif);font-size:24px;font-weight:460;margin:16px 0 12px;letter-spacing:-.01em}
.proc-d{font-size:14.5px;color:var(--muted);line-height:1.55}

/* ===================== PUB PREVIEW ===================== */
.pubprev-list{display:flex;flex-direction:column;border-top:1px solid var(--line)}
.pubrow{display:grid;grid-template-columns:160px 1fr auto 28px;gap:24px;align-items:center;
  padding:26px 4px;border-bottom:1px solid var(--line);transition:padding-left .3s var(--ease),background .3s}
.pubrow:hover{padding-left:16px}
.pubrow-cat{font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep)}
.pubrow-t{font-family:var(--serif);font-size:clamp(19px,2vw,25px);font-weight:440;letter-spacing:-.01em;line-height:1.2}
.pubrow-meta{font-family:var(--mono);font-size:12px;color:var(--muted)}
.pubrow-arr{color:var(--muted);opacity:.4;transition:.3s var(--ease)}
.pubrow:hover .pubrow-arr{opacity:1;color:var(--orange-deep)}

/* ===================== CTA BAND ===================== */
.cta-band{background:var(--charcoal);color:#fff}
.cta-inner{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:end;
  padding-top:clamp(64px,8vw,108px);padding-bottom:clamp(64px,8vw,108px)}
.cta-ttl{color:#fff;margin-top:18px;max-width:14ch}
.cta-right{display:flex;flex-direction:column;align-items:flex-start;gap:26px}
.cta-lead{color:#b9b5ad;font-size:18px;line-height:1.6;max-width:42ch}

/* ===================== PAGE HEAD ===================== */
.pagehead{padding-top:clamp(56px,8vw,104px);padding-bottom:clamp(36px,5vw,60px);border-bottom:1px solid var(--line)}
.ph-ttl{margin-top:24px;max-width:18ch}

/* ===================== ABOUT ===================== */
.about-grid{display:grid;grid-template-columns:.8fr 1fr;gap:clamp(32px,5vw,72px);align-items:start}
.about-photo{position:sticky;top:100px}
.about-lead{margin-bottom:26px;color:var(--ink)}
.about-p{font-size:16px;line-height:1.7;color:#56534e;margin-bottom:18px;max-width:54ch}
.values-sec{background:var(--bg-2)}
.values-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
.value-item{background:var(--bg-2);padding:30px 26px 36px}
.value-n{font-family:var(--mono);font-size:12px;color:var(--orange-deep);letter-spacing:.1em}
.value-t{font-family:var(--serif);font-size:23px;font-weight:460;margin:20px 0 12px}
.value-d{font-size:14.5px;color:var(--muted);line-height:1.55}

/* ===================== SERVICES PAGE ===================== */
.svc-list-sec{padding-top:clamp(20px,3vw,40px)}
.svc-rowfull{display:grid;grid-template-columns:64px 56px 1fr 40px;gap:clamp(16px,2.5vw,40px);align-items:center;
  padding:clamp(28px,3.4vw,42px) 4px;border-bottom:1px solid var(--line);cursor:pointer;
  transition:padding-left .3s var(--ease)}
.svc-rowfull:first-child{border-top:1px solid var(--line)}
.svc-rowfull:hover{padding-left:18px}
.svcf-n{font-family:var(--mono);font-size:13px;color:var(--muted-2);letter-spacing:.06em}
.svcf-ico{color:var(--ink)}
.svc-rowfull:hover .svcf-ico{color:var(--orange-deep)}
.svcf-t{font-family:var(--serif);font-size:clamp(22px,2.6vw,30px);font-weight:460;letter-spacing:-.01em;margin-bottom:8px}
.svcf-d{font-size:15.5px;color:var(--muted);line-height:1.55;max-width:62ch}
.svcf-arr{color:var(--muted);opacity:.4;transition:.3s var(--ease);justify-self:end}
.svc-rowfull:hover .svcf-arr{opacity:1;color:var(--orange-deep)}

/* ===================== PRICING PAGE ===================== */
.price-sec{padding-top:clamp(32px,4vw,56px)}
.price-tiers{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
.tier{background:var(--bg);padding:clamp(28px,2.6vw,38px) clamp(24px,2.2vw,32px) clamp(28px,2.6vw,36px);
  display:flex;flex-direction:column;position:relative}
.tier-feat{background:var(--charcoal);color:#fff}
.tier-badge{position:absolute;top:0;right:clamp(24px,2.2vw,32px);transform:translateY(-50%);
  font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;
  background:var(--orange);color:#1d1d1d;padding:6px 11px;border-radius:2px}
.tier-name{font-family:var(--serif);font-size:clamp(26px,3vw,34px);font-weight:460;letter-spacing:-.015em}
.tier-feat .tier-name{color:#fff}
.tier-tag{font-size:14.5px;color:var(--muted);margin-top:8px;min-height:2.6em}
.tier-feat .tier-tag{color:#b9b5ad}
.tier-price{display:flex;flex-direction:column;gap:3px;margin-top:22px}
.tier-amt{font-family:var(--mono);font-size:clamp(26px,2.8vw,32px);font-weight:500;letter-spacing:-.02em;color:var(--ink)}
.tier-feat .tier-amt{color:#fff}
.tier-unit{font-family:var(--mono);font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
.tier-feat .tier-unit{color:var(--orange)}
.tier-foot{font-size:12.5px;color:var(--muted-2);margin-top:10px;min-height:1.4em}
.tier-feat .tier-foot{color:#9a968d}
.tier-rule{height:1px;border:none;background:var(--line);margin:22px 0;width:100%}
.tier-feat .tier-rule{background:var(--line-dark)}
.tier-list{list-style:none;display:flex;flex-direction:column;gap:13px;flex:1;margin-bottom:28px}
.tier-li{display:grid;grid-template-columns:18px 1fr;gap:11px;align-items:start;font-size:14.5px;line-height:1.4;color:#46443f}
.tier-feat .tier-li{color:#e6e3dd}
.tier-li .cmp-tick{color:var(--orange-deep);margin-top:1px}
.tier-feat .tier-li .cmp-tick{color:var(--orange)}
.tier-btn{justify-content:center;width:100%}

/* ---- comparison matrix ---- */
.cmp-sec{background:var(--bg-2);border-top:1px solid var(--line)}
.cmp-scroll{overflow-x:auto;-webkit-overflow-scrolling:touch}
.cmp-table{min-width:680px;border:1px solid var(--line);border-radius:3px;overflow:hidden;background:var(--paper)}
.cmp-row{display:grid;grid-template-columns:minmax(0,1.7fr) repeat(3,minmax(0,1fr));align-items:center}
.cmp-row:not(.cmp-head):not(:last-child){border-bottom:1px solid var(--line-soft)}
.cmp-head{position:sticky;top:0;z-index:2;background:var(--charcoal);color:#fff}
.cmp-feat{padding:16px clamp(16px,1.6vw,24px);display:flex;flex-direction:column;gap:3px}
.cmp-feat-head{font-family:var(--mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#cbc7bf;justify-content:center}
.cmp-h{padding:14px 10px;text-align:center;display:flex;flex-direction:column;gap:3px;align-items:center;
  border-left:1px solid var(--line-dark)}
.cmp-h-feat{background:rgba(255,157,59,.14)}
.cmp-h-name{font-family:var(--serif);font-size:19px;font-weight:480;color:#fff}
.cmp-h-price{font-family:var(--mono);font-size:11px;letter-spacing:.04em;color:var(--orange)}
.cmp-grouprow{background:var(--bg-2);border-bottom:1px solid var(--line-soft);border-top:1px solid var(--line-soft)}
.cmp-group{display:inline-flex;align-items:center;gap:10px;font-family:var(--mono);font-size:11.5px;letter-spacing:.16em;
  text-transform:uppercase;color:var(--orange-deep);padding:13px clamp(16px,1.6vw,24px)}
.cmp-group::before{content:"";width:18px;height:1px;background:var(--orange);display:inline-block}
.cmp-f-name{font-size:15px;font-weight:600;color:var(--ink);letter-spacing:-.005em}
.cmp-f-desc{font-size:12.5px;color:var(--muted);line-height:1.45}
.cmp-cell{display:flex;align-items:center;justify-content:center;padding:16px 8px;min-height:100%;
  text-align:center;border-left:1px solid var(--line-soft)}
.cmp-cell.yes{color:var(--orange-deep)}
.cmp-cell.no{color:var(--muted-2);font-size:17px}
.cmp-cell.txt{font-family:var(--mono);font-size:12.5px;color:#46443f;letter-spacing:-.01em;line-height:1.3}
.cmp-tick{flex:0 0 auto}

/* ---- notes ---- */
.price-notes{margin-top:clamp(28px,3.5vw,40px);display:flex;flex-direction:column;gap:12px;max-width:88ch}
.price-note{font-size:13.5px;line-height:1.6;color:var(--muted);display:flex;gap:9px}
.price-note-mark{font-family:var(--mono);color:var(--orange-deep);flex:0 0 auto;font-size:13px;line-height:1.6}

@media (max-width:860px){
  .price-tiers{grid-template-columns:1fr}
  .tier-tag,.tier-foot{min-height:0}
  .tier-badge{right:auto;left:clamp(24px,2.2vw,32px)}
}

/* ===================== ARTICLE (publication detail) ===================== */
.article{padding-top:clamp(40px,6vw,72px)}
.art-head{max-width:880px}
.art-back{display:inline-flex;align-items:center;gap:8px;font-family:var(--mono);font-size:12px;
  letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:clamp(28px,4vw,44px);
  transition:color .2s var(--ease)}
.art-back:hover{color:var(--ink)}
.art-back-ico{font-size:15px;transition:transform .25s var(--ease)}
.art-back:hover .art-back-ico{transform:translateX(-3px)}
.art-tags{display:flex;align-items:center;gap:16px;margin-bottom:22px}
.art-title{font-family:var(--serif);font-weight:440;font-size:clamp(32px,4.6vw,56px);line-height:1.07;
  letter-spacing:-.018em;max-width:20ch;text-wrap:balance}
.art-standfirst{font-size:clamp(18px,1.7vw,22px);line-height:1.55;color:#46443f;margin-top:24px;max-width:60ch}

.art-hero-img{margin:clamp(36px,5vw,60px) 0 clamp(20px,3vw,32px)}

.art-body{max-width:680px}
.art-lede{font-family:var(--serif);font-weight:420;font-size:clamp(20px,2.1vw,26px);line-height:1.45;
  letter-spacing:-.01em;color:var(--ink);margin:clamp(16px,2.5vw,28px) 0 clamp(28px,4vw,44px)}
.art-sec{margin-bottom:clamp(28px,3.5vw,40px)}
.art-h{font-family:var(--serif);font-weight:480;font-size:clamp(22px,2.3vw,28px);line-height:1.18;
  letter-spacing:-.012em;margin-bottom:14px}
.art-p{font-size:17px;line-height:1.72;color:#46443f}
.art-close{font-family:var(--serif);font-style:italic;font-size:clamp(19px,1.9vw,23px);line-height:1.5;
  color:var(--ink);padding:clamp(24px,3vw,32px) 0;border-top:1px solid var(--line);margin-top:clamp(20px,3vw,32px)}
.art-share{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;
  margin-top:clamp(20px,3vw,28px);padding:24px 26px;background:var(--bg-2);border-radius:4px}
.art-share-k{font-size:16px;color:#46443f}

.art-nav-sec{border-top:1px solid var(--line);margin-top:clamp(48px,7vw,88px)}
.art-nav{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--line)}
.art-navlink{background:var(--bg);display:flex;flex-direction:column;gap:10px;text-align:left;
  padding:clamp(28px,4vw,44px) clamp(20px,3vw,36px);transition:background .3s var(--ease)}
.art-navlink:hover{background:var(--paper)}
.art-next{text-align:right;align-items:flex-end}
.art-navk{font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep)}
.art-navt{font-family:var(--serif);font-size:clamp(18px,1.9vw,23px);font-weight:450;line-height:1.2;
  letter-spacing:-.01em;color:var(--ink);max-width:30ch}

@media (max-width:600px){
  .art-nav{grid-template-columns:1fr}
  .art-next{text-align:left;align-items:flex-start}
}

/* ===================== PUBLICATIONS PAGE ===================== */
.pub-feat-sec{padding-top:clamp(40px,5vw,64px)}
.pub-feat{display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(24px,4vw,52px);align-items:center}
.pub-feat-img{border-radius:3px}
.pub-tags{display:flex;align-items:center;gap:16px;margin-bottom:18px}
.pub-cat-tag{font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--orange-deep);
  border:1px solid var(--orange);border-radius:2px;padding:4px 9px}
.pub-meta{font-family:var(--mono);font-size:12px;color:var(--muted)}
.pub-feat-t{margin-bottom:14px;font-size:clamp(24px,2.8vw,34px)}
.pub-feat-click{cursor:pointer}
.pub-feat-click .pub-feat-t{transition:color .2s var(--ease)}
.pub-feat-click:hover .pub-feat-t{color:var(--orange-deep)}
.pub-feat-x{font-size:16px;color:#56534e;line-height:1.6;margin-bottom:24px;max-width:46ch}

.pub-toolbar{display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;margin-bottom:clamp(32px,4vw,48px)}
.pub-filter{display:flex;gap:10px;flex-wrap:wrap}
.chip{font-family:var(--sans);font-size:13.5px;font-weight:500;padding:9px 16px;border:1px solid var(--line);
  border-radius:40px;color:#56534e;transition:.2s var(--ease);white-space:nowrap}
.chip:hover{border-color:var(--charcoal)}
.chip.on{background:var(--charcoal);color:#fff;border-color:var(--charcoal)}
.pub-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}
.pubcard{background:var(--bg);padding:30px 28px 28px;display:flex;flex-direction:column;min-height:280px;overflow:hidden;transition:background .3s var(--ease)}
.pubcard:hover{background:var(--paper)}
.pubcard-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:22px}
.pubcard-arr{color:var(--muted);opacity:.35;transition:.3s var(--ease)}
.pubcard:hover .pubcard-arr{opacity:1;color:var(--orange-deep)}
.pubcard-t{font-family:var(--serif);font-size:22px;font-weight:460;line-height:1.18;letter-spacing:-.01em;margin-bottom:12px;min-height:calc(2 * 1.18em)}
.pubcard-x{font-size:14.5px;color:var(--muted);line-height:1.55;flex:1}
.pubcard-meta{font-family:var(--mono);font-size:12px;color:var(--muted-2);margin-top:22px}

/* search */
.pub-search{position:relative;display:flex;align-items:center;min-width:260px;flex:0 1 320px}
.pub-search-ico{position:absolute;left:14px;color:var(--muted-2);pointer-events:none}
.pub-search input{width:100%;font-family:var(--sans);font-size:14.5px;color:var(--ink);
  padding:11px 38px 11px 40px;border:1px solid var(--line);border-radius:40px;background:var(--bg);
  transition:border-color .2s var(--ease),box-shadow .2s var(--ease)}
.pub-search input::placeholder{color:var(--muted-2)}
.pub-search input:focus{outline:none;border-color:var(--charcoal);box-shadow:0 0 0 3px rgba(54,54,54,.06)}
.pub-search-clear{position:absolute;right:10px;width:24px;height:24px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;font-size:18px;line-height:1;color:var(--muted);
  background:transparent;transition:.2s var(--ease)}
.pub-search-clear:hover{background:var(--line);color:var(--ink)}

/* card image */
.pubcard-img{width:calc(100% + 56px);margin:-30px -28px 24px;overflow:hidden;background:var(--line);aspect-ratio:16/10}
.pubcard-img img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s var(--ease)}
.pubcard:hover .pubcard-img img{transform:scale(1.04)}

/* empty state */
.pub-empty{border:1px solid var(--line);border-radius:4px;padding:64px 40px;text-align:center;
  display:flex;flex-direction:column;align-items:center;gap:18px;background:var(--paper)}
.pub-empty p{font-family:var(--serif);font-size:20px;color:#56534e}

/* ===================== CONTACT ===================== */
.contact-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:clamp(32px,5vw,80px)}
.contact-info{display:flex;flex-direction:column}
.cinfo-row{display:flex;flex-direction:column;gap:5px;padding:20px 0;border-bottom:1px solid var(--line)}
.cinfo-row:first-child{padding-top:0}
.cinfo-k{font-family:var(--mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}
.cinfo-v{font-size:17px;color:var(--ink)}
.cinfo-card{margin-top:32px;background:var(--charcoal);color:#fff;padding:28px;border-radius:4px}
.cinfo-logo{width:140px;margin-bottom:16px}
.cinfo-card p{color:#bcb8b0;font-size:15px;line-height:1.5}

.cform{display:flex;flex-direction:column;gap:22px}
.field{display:flex;flex-direction:column;gap:9px}
.field-row{display:grid;grid-template-columns:1fr 1fr;gap:22px}
.field label{font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.field input,.field textarea{font-family:var(--sans);font-size:16px;color:var(--ink);background:var(--paper);
  border:1px solid var(--line);border-radius:3px;padding:14px 16px;transition:border-color .2s,box-shadow .2s;resize:vertical}
.field input:focus,.field textarea:focus{outline:none;border-color:var(--charcoal);box-shadow:0 0 0 3px rgba(54,54,54,.07)}
.field input.err,.field textarea.err{border-color:#c0492b;box-shadow:0 0 0 3px rgba(192,73,43,.08)}
.cform-btn{align-self:flex-start;margin-top:6px}
.cform-btn:disabled{opacity:.55;cursor:default}
.cform-err-msg{margin-top:14px;font-size:14px;color:#c0492b;line-height:1.5}
.form-sent{border:1px solid var(--line);border-radius:4px;padding:56px 40px;display:flex;flex-direction:column;align-items:flex-start;gap:20px;background:var(--paper)}
.form-sent-ico{width:54px;height:54px;border-radius:50%;background:var(--orange);color:#1d1d1d;display:flex;align-items:center;justify-content:center}

/* ===================== RESPONSIVE ===================== */
@media (max-width:980px){
  .hero-grid{grid-template-columns:1fr;gap:40px}
  .hero-right{justify-content:flex-start}
  .bcard{transform:none}
  .intro-grid{grid-template-columns:1fr}
  .svc-grid,.pub-grid,.values-grid{grid-template-columns:repeat(2,1fr)}
  .proc-grid{grid-template-columns:repeat(2,1fr);gap:32px 28px}
  .about-grid{grid-template-columns:1fr}
  .about-photo{position:static;max-width:380px}
  .pub-feat{grid-template-columns:1fr}
  .cta-inner{grid-template-columns:1fr;gap:28px}
  .contact-grid{grid-template-columns:1fr}
}
@media (max-width:600px){
  .svc-grid,.pub-grid,.values-grid{grid-template-columns:1fr}
  .pub-toolbar{flex-direction:column;align-items:stretch;gap:16px}
  .pub-search{min-width:0;flex:1 1 auto}
  .proc-grid{grid-template-columns:1fr}
  .pubrow{grid-template-columns:1fr;gap:8px;align-items:flex-start}
  .pubrow-arr{display:none}
  .field-row{grid-template-columns:1fr}
  .svc-rowfull{grid-template-columns:auto 1fr;gap:14px}
  .svcf-ico,.svcf-arr{display:none}
}

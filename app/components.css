/* ============== TUFA Consult — header / footer / wordmark ============== */

/* ---------- wordmark ---------- */
.wordmark{display:inline-flex;flex-direction:column;gap:3px;line-height:1}
.wm-row{display:inline-flex;align-items:center;gap:8px}
.wm-name{font-family:var(--sans);font-weight:800;font-size:22px;letter-spacing:.02em;color:var(--ink)}
.wm-sub{font-family:var(--sans);font-weight:400;font-size:22px;letter-spacing:.01em;color:var(--ink)}
.wm-arrow{color:var(--orange);display:inline-flex;transition:transform .3s var(--ease)}
.wordmark:hover .wm-arrow{transform:translate(2px,-2px)}
.wm-tag{font-family:var(--mono);font-size:9px;letter-spacing:.42em;color:var(--muted-2);padding-left:2px}

/* ---------- header ---------- */
.hdr{position:sticky;top:0;z-index:60;background:rgba(250,248,244,.72);
  backdrop-filter:saturate(140%) blur(14px);-webkit-backdrop-filter:saturate(140%) blur(14px);
  transition:box-shadow .3s var(--ease),background .3s var(--ease),border-color .3s;
  border-bottom:1px solid transparent}
.hdr.is-scrolled{border-bottom-color:var(--line);background:rgba(250,248,244,.86)}
.hdr-inner{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;height:78px;gap:24px}

.nav-desktop{display:flex;align-items:center;justify-content:center;gap:clamp(14px,2.2vw,40px);grid-column:2}
.navlink{font-size:15px;font-weight:500;color:#4b4943;position:relative;padding:6px 0;white-space:nowrap;
  transition:color .2s var(--ease)}
.navlink::after{content:"";position:absolute;left:0;bottom:-2px;height:1.5px;width:0;background:var(--orange);
  transition:width .28s var(--ease)}
.navlink:hover{color:var(--ink)}
.navlink.active{color:var(--ink)}
.navlink.active::after{width:100%}

.hdr-right{display:flex;align-items:center;gap:16px;justify-self:end;grid-column:3}
.lang{display:inline-flex;border:1px solid var(--line);border-radius:2px;overflow:hidden}
.lang-btn{font-family:var(--mono);font-size:11px;letter-spacing:.06em;padding:6px 9px;color:var(--muted);
  transition:background .2s,color .2s}
.lang-btn.on{background:var(--charcoal);color:#fff}
.hdr-cta{padding:11px 18px;font-size:14px;white-space:nowrap}

.burger{display:none;width:34px;height:34px;position:relative}
.burger span{position:absolute;left:7px;right:7px;height:1.6px;background:var(--ink);transition:transform .3s var(--ease),opacity .2s}
.burger span:nth-child(1){top:13px}
.burger span:nth-child(2){top:20px}
.burger.x span:nth-child(1){transform:translateY(3.5px) rotate(45deg)}
.burger.x span:nth-child(2){transform:translateY(-3.5px) rotate(-45deg)}

.nav-mobile{display:none;flex-direction:column;background:var(--bg);border-bottom:1px solid var(--line);
  overflow:hidden;max-height:0;transition:max-height .4s var(--ease)}
.nav-mobile.show{max-height:520px}
.m-link{display:flex;align-items:center;justify-content:space-between;padding:18px var(--pad);
  font-family:var(--serif);font-size:26px;color:var(--ink);border-top:1px solid var(--line-soft)}
.m-link.active{color:var(--orange-deep)}
.m-foot{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px var(--pad) 26px}

/* ---------- footer ---------- */
.ftr{background:var(--charcoal);color:#e9e6e0}
.ftr .wrap{padding-top:clamp(56px,7vw,96px);padding-bottom:40px}
.ftr-top{display:grid;grid-template-columns:1.3fr 1fr;gap:48px}
.ftr-logo{width:170px;margin-bottom:22px}
.ftr-blurb{color:#b6b2aa;font-size:15px;line-height:1.6;max-width:46ch}
.ftr-cols{display:grid;grid-template-columns:1fr 1.2fr;gap:32px}
.ftr-col{display:flex;flex-direction:column;gap:12px}
.ftr-h{font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--orange);margin-bottom:4px}
.ftr-col a,.ftr-val{color:#cbc7bf;font-size:15px;transition:color .2s}
.ftr-col a:hover{color:#fff}
.ftr-rule{height:1px;background:var(--line-dark);border:none;margin:48px 0 22px}
.ftr-bot{display:flex;justify-content:space-between;align-items:center;color:#8f8b83;font-size:13px}
.ftr-mono{font-family:var(--mono);letter-spacing:.16em;font-size:11px}

@media (max-width:1040px){
  .nav-desktop,.hdr-cta{display:none}
  .burger{display:block}
  .nav-mobile{display:flex}
}
@media (max-width:900px){
  .ftr-top{grid-template-columns:1fr;gap:36px}
}
@media (max-width:560px){
  .ftr-cols{grid-template-columns:1fr}
  .ftr-bot{flex-direction:column;gap:8px;align-items:flex-start}
  .hdr-inner{height:66px}
}

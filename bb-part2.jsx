/* ============================================================
   BORA Brandbook — Part 2
   Cores · Tipografia · Voz · Textura · Ícones · Componentes · Aplicações · Fecho
   ============================================================ */
const DS2 = window.BoraDesignSystem_24e027;
const { Eyebrow: Eye, Tag: T2, Badge: Bdg, Button: Btn, Card: Crd, Stat: St } = DS2;

/* =====================  5 · CORES  ===================== */
function Color() {
  const dom = [
    ["var(--navy-700)", 60, "Navy 60%"],
    ["var(--cream)", 25, "Cream 25%", "var(--ink-900)"],
    ["var(--orange-500)", 10, "Laranja 10%"],
    ["var(--amber-500)", 3, ""],
    ["var(--green-500)", 2, ""],
  ];
  const swatches = [
    ["Navy Profundo", "#1A2234", "var(--navy-700)", "60%", "Superfície dominante: heros, rodapés, autoridade.", "#fff"],
    ["Cream Off-white", "#F5F0E8", "var(--cream)", "25%", "Seções claras, fundo de cards, respiro.", "var(--ink-900)"],
    ["Laranja Bora", "#E8622A", "var(--orange-500)", "10%", "CTA, títulos de seção, logo, destaques. Racionado.", "#fff"],
    ["Âmbar Acento", "#F4A01C", "var(--amber-500)", "5%", "Destaques secundários, hovers, a seta.", "var(--ink-900)"],
    ["Verde Resultado", "#2D9E6B", "var(--green-500)", "5%", "Entrega, sucesso, confirmação.", "#fff"],
    ["Coral", "#FF4F2B", "var(--coral)", "—", "Variante energética para posts sociais.", "#fff"],
  ];
  const ramp = (name, vars) => (
    <div style={{ marginBottom: 18 }}>
      <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 6, color: "var(--text-muted)", letterSpacing: ".04em" }}>{name}</div>
      <div className="ramp">
        {vars.map((v, i) => (
          <div key={i} style={{ background: `var(${v})`, color: i > vars.length / 2 ? "#fff" : "rgba(0,0,0,.45)" }}>{v.replace("--", "")}</div>
        ))}
      </div>
    </div>
  );
  return (
    <section className="page page--cream" id="cores">
      <SecHead n="05" eyebrow="Cores" title="Uma paleta com regra de dominância"
        lead="A proporção é a regra: 60% navy, 25% cream, 10% laranja, 5% âmbar, 5% verde. O laranja conquista atenção justamente por ser racionado — nunca em tudo ao mesmo tempo." />

      <div style={{ marginTop: 44 }}>
        <div className="dominance">
          {dom.map(([bg, w, label, col], i) => (
            <div key={i} style={{ background: bg, flex: w, color: col || "#fff" }}>{label}</div>
          ))}
        </div>
        <div className="dom-legend" style={{ marginTop: 14 }}>
          <span style={{ "--c": "var(--navy-700)" }}>Navy · 60%</span>
          <span style={{ "--c": "var(--cream)" }}>Cream · 25%</span>
          <span style={{ "--c": "var(--orange-500)" }}>Laranja · 10%</span>
          <span style={{ "--c": "var(--amber-500)" }}>Âmbar · 5%</span>
          <span style={{ "--c": "var(--green-500)" }}>Verde · 5%</span>
        </div>
      </div>

      <div className="swatches" style={{ marginTop: 40 }}>
        {swatches.map(([name, hex, v, pct, use, txt]) => (
          <div className="sw" key={name}>
            <div className="sw__chip" style={{ background: v, color: txt }}>
              <span className="sw__pct">{pct}</span>
            </div>
            <div className="sw__body">
              <div className="sw__name">{name}</div>
              <div className="sw__hex">{hex}</div>
              <p className="sw__use">{use}</p>
            </div>
          </div>
        ))}
      </div>

      <hr className="divider" />
      <Eye>Escalas derivadas (oklch)</Eye>
      <div style={{ marginTop: 18 }}>
        {ramp("Laranja", ["--orange-50","--orange-100","--orange-200","--orange-300","--orange-400","--orange-500","--orange-600","--orange-700","--orange-800","--orange-900"])}
        {ramp("Navy", ["--navy-900","--navy-800","--navy-700","--navy-600","--navy-500","--navy-400","--navy-300","--navy-200"])}
      </div>
    </section>
  );
}

/* =====================  6 · TIPOGRAFIA  ===================== */
function Typography() {
  const scale = [
    ["Display · 88px", 88, "Bora pra cima"],
    ["H1 · Syne 600 · 52px", 52, "Gestão que funciona"],
    ["H2 · Syne 600 · 28px", 28, "Clareza e estrutura"],
    ["H3 · Syne 600 · 22px", 22, "Do caos à entrega"],
  ];
  return (
    <section className="page page--paper" id="tipografia">
      <SecHead n="06" eyebrow="Tipografia" title="Syne + DM Sans"
        lead="Syne Regular dá personalidade geométrica e um quê techie aos títulos e ao logo. DM Sans, leve e neutra, sustenta o corpo de texto com clareza. Tracking de 0.04em no display; entrelinha 1.7 no corpo." />
      <div className="type-spec" style={{ marginTop: 44 }}>
        <div className="type-card type-card--dark">
          <div className="type-card__name" style={{ fontFamily: "var(--font-display)" }}>Aa</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 24, marginTop: 8 }}>Syne Regular</div>
          <div className="type-card__meta"><span>Display · Logo · Títulos</span><span>·</span><span>peso 400 · Regular</span><span>·</span><span>tracking 0.04em</span></div>
          <div className="type-card__row" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>ABCDEFGHIJ</div>
          <div className="type-card__row" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>abcdefghij 0123</div>
        </div>
        <div className="type-card">
          <div className="type-card__name" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "var(--ink-900)" }}>Aa</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 24, marginTop: 8 }}>DM Sans</div>
          <div className="type-card__meta"><span>Corpo · UI · Interface</span><span>·</span><span>300 corpo / 500 ênfase</span><span>·</span><span>entrelinha 1.7</span></div>
          <div className="type-card__row" style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: 18 }}>A clareza vem da estrutura. A estrutura vem do método.</div>
          <div className="type-card__row" style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 18 }}>Ênfase em peso 500 · PMP · Scrum · Agile</div>
        </div>
      </div>
      <hr className="divider" />
      <Eye>Hierarquia</Eye>
      <div style={{ marginTop: 12 }}>
        {scale.map(([lbl, size, demo]) => (
          <div className="scale-row" key={lbl}>
            <span className="lbl">{lbl}</span>
            <span className="demo" style={{ fontSize: size }}>{demo}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =====================  7 · VOZ & TOM  ===================== */
function Voice() {
  return (
    <section className="page page--navy grainband" id="voz">
      <SecHead n="07" eyebrow="Voz & tom" title="Bora, vamos resolver isso juntos." onDark
        lead="A Bora fala como um colega capaz que está do seu lado: jovial, direta, confiante e calorosa. Português do Brasil, primeiro. Frases curtas, declarativas, orientadas a resultado." />
      <div style={{ margin: "40px 0 48px" }}>
        <p className="pull" style={{ color: "#fff", fontSize: 44 }}>
          “Gestão de projetos que funciona de verdade.” <span className="arrow">›</span><br/>
          “Do caos à entrega.”
        </p>
      </div>
      <div className="voice-grid">
        <div className="vbox vbox--do">
          <h4>✔ Faça</h4>
          <ul>
            <li>“Bora resolver isso.”</li>
            <li>Frases curtas, concretas, orientadas a entrega.</li>
            <li>Vocabulário simples: clareza, estrutura, execução.</li>
            <li>Use a seta “›” / “→” como glifo expressivo.</li>
            <li>Credenciais como tags discretas: PMP · Scrum · Agile.</li>
          </ul>
        </div>
        <div className="vbox vbox--dont">
          <h4>✕ Evite</h4>
          <ul>
            <li>Jargão corporativo (“soluções sinérgicas end-to-end”).</li>
            <li>Hype, excesso de exclamação, CAPS além do logotipo.</li>
            <li>Emoji como decoração em peças finais.</li>
            <li>Números e estatísticas inventados (data-slop).</li>
            <li>Tom acadêmico, frio ou distante.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* =====================  8 · TEXTURA  ===================== */
function Texture() {
  return (
    <section className="page page--cream" id="textura">
      <SecHead n="08" eyebrow="Textura & grão" title="Grão: feito com intenção"
        lead="Um ruído monocromático sutil a 8–12% de opacidade sobre campos de cor sólidos é a assinatura tátil da Bora — o antídoto ao flat genérico. Reserve para momentos de impacto; não em tudo." />
      <div className="tex-demo" style={{ marginTop: 44 }}>
        <div className="tex-tile tex-grain" style={{ background: "var(--navy-700)" }}><span>Navy · grão</span></div>
        <div className="tex-tile tex-grain" style={{ background: "var(--orange-500)" }}><span>Laranja · grão</span></div>
        <div className="tex-tile" style={{ background: "var(--navy-700)" }}><span>Navy · liso</span></div>
      </div>
      <p className="muted" style={{ marginTop: 20, fontSize: 14 }}>
        Aplicação via utilitário <code style={{ fontFamily: "var(--font-mono)", background: "var(--surface-inset)", padding: "2px 8px", borderRadius: 6 }}>.grain</code> sobre blocos de cor sólida (heros, posts, slides, banners).
      </p>
    </section>
  );
}

/* =====================  9 · ICONOGRAFIA  ===================== */
function lucide(d, extra) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{d}{extra}</svg>;
}
function Icons() {
  const set = [
    lucide(<path d="M5 12h14M13 6l6 6-6 6"/>),
    lucide(<><circle cx="12" cy="12" r="9"/><path d="M8 12l2.5 2.5L16 9"/></>),
    lucide(<><path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z"/><path d="M3 12l9 4.5 9-4.5M3 16.5L12 21l9-4.5"/></>),
    lucide(<><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></>),
    lucide(<><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></>),
    lucide(<><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0M16 6a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.6"/></>),
  ];
  return (
    <section className="page page--paper" id="icones">
      <SecHead n="09" eyebrow="Iconografia" title="A seta é o glifo da marca"
        lead="A Bora não tem fonte de ícones própria. O glifo mais branded é a seta — “›” / “→” / a seta ascendente do B-mark. Para UI, padronizamos a biblioteca Lucide (traço 1.5–2px, cantos arredondados), que combina com Syne e DM Sans." />
      <div className="glyph-hero" style={{ marginTop: 44 }}>
        <div className="glyph-big">›</div>
        <div>
          <Eye tone="onDark">O glifo expressivo</Eye>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 34, lineHeight: 1.15, margin: "12px 0 0", color: "#fff" }}>
            bora <span style={{ color: "var(--orange-500)" }}>→</span>
          </p>
          <p style={{ color: "var(--navy-200)", fontWeight: 300, fontSize: 16, marginTop: 12, maxWidth: 420 }}>
            Direção e progresso. Use a seta para fechar chamadas, conectar ideias e dar movimento — sem exagerar.
          </p>
        </div>
      </div>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, margin: "44px 0 18px" }}>Ícones de UI · estilo Lucide</h3>
      <div className="icon-row">
        {set.map((ic, i) => <div className="icon-chip" key={i}>{ic}</div>)}
      </div>
    </section>
  );
}

/* =====================  10 · COMPONENTES  ===================== */
function Components() {
  return (
    <section className="page page--cream" id="componentes">
      <SecHead n="10" eyebrow="Componentes" title="O kit de UI da marca"
        lead="Primitivos reutilizáveis do design system Bora — usados aqui diretamente do kit, não recriados. Cantos suaves, sombras quentes de baixa difusão, laranja racionado para a ação principal." />
      <div className="spec-grid" style={{ marginTop: 44 }}>
        <div className="spec-card">
          <div className="spec-card__head">Button</div>
          <div className="spec-card__body">
            <Btn variant="primary" arrow>Bora começar</Btn>
            <Btn variant="secondary">Saiba mais</Btn>
            <Btn variant="ghost">Ghost</Btn>
            <Btn variant="soft">Soft</Btn>
          </div>
        </div>
        <div className="spec-card">
          <div className="spec-card__head">Badge & Tag</div>
          <div className="spec-card__body">
            <Bdg tone="success">Entregue</Bdg>
            <Bdg tone="brand" subtle={false}>Novo</Bdg>
            <Bdg tone="warning">Em foco</Bdg>
            <Bdg tone="neutral">Rascunho</Bdg>
            <T2>PMP</T2><T2>Scrum</T2>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 28 }}>
        <Crd variant="feature" grain>
          <Eye>Clareza</Eye>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 26, margin: "10px 0 8px" }}>Card de destaque</h3>
          <p style={{ fontWeight: 300, color: "var(--text-body)", lineHeight: 1.6, margin: 0 }}>
            O contêiner de trabalho da marca: fundo claro, hairline quente, sombra navy suave. A variação
            <b> feature</b> sobe um pouco mais; <b>dark</b> assenta no navy.
          </p>
          <div style={{ display: "flex", gap: 40, marginTop: 26, flexWrap: "wrap" }}>
            <St value="100%" label="Entregas no prazo" accent="success" />
            <St value="3x" label="Mais previsibilidade" accent="brand" />
            <St value="-40%" label="Retrabalho" accent="brand" />
          </div>
        </Crd>
      </div>
    </section>
  );
}

/* =====================  11 · APLICAÇÕES  ===================== */
function MiniBanner() {
  // Fiel ao Modelo 1 (Navy + marca d'água BORA) dos Headers de LinkedIn.
  // Unidades cqw (relativas à largura do banner) escalam tudo sem sobreposição.
  return (
    <div className="app-banner">
      <div className="grainband" style={{ position: "relative", background: "var(--navy-700)", aspectRatio: "1584 / 396", overflow: "hidden", containerType: "inline-size" }}>
        {/* marca d'água */}
        <div style={{ position: "absolute", right: "-2.5cqw", bottom: "-7cqw", zIndex: 0, fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: ".02em", fontSize: "24cqw", lineHeight: .8, color: "#fff", opacity: .05, whiteSpace: "nowrap" }}>BORA</div>
        {/* lockup topo-esquerda */}
        <div style={{ position: "absolute", top: "2.9cqw", left: "4cqw", zIndex: 3, display: "flex", alignItems: "center", gap: "1cqw" }}>
          <img src={M.white} alt="" style={{ width: "3.5cqw", height: "3.5cqw", objectFit: "contain" }} />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: ".04em", fontSize: "2.5cqw", lineHeight: 1, color: "var(--text-on-dark)" }}>BORA</span>
        </div>
        {/* headline à direita, centralizada na vertical */}
        <div style={{ position: "absolute", right: "4cqw", top: "50%", transform: "translateY(-50%)", textAlign: "right", zIndex: 3, maxWidth: "74cqw" }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: ".01em", lineHeight: 1.08, fontSize: "3.15cqw", color: "var(--text-on-dark)" }}>
            Gestão de projetos que<br/>funciona <b style={{ color: "var(--orange-500)", fontWeight: 400 }}>de verdade.</b>
          </div>
        </div>
        {/* credenciais embaixo à direita */}
        <div style={{ position: "absolute", right: "4cqw", bottom: "2.8cqw", zIndex: 3, display: "flex", alignItems: "center", gap: "1.2cqw", fontFamily: "var(--font-body)", fontWeight: 500 }}>
          <span style={{ color: "var(--text-on-dark)", border: "1px solid rgba(255,255,255,.18)", borderRadius: 999, padding: ".5cqw 1.1cqw", fontSize: "1.01cqw", whiteSpace: "nowrap" }}>PMP · Scrum · Agile</span>
          <span style={{ color: "var(--amber-500)", fontSize: "1.07cqw", display: "inline-flex", alignItems: "center", gap: ".5cqw" }}>boraprojetos.com <span style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>›</span></span>
        </div>
      </div>
    </div>
  );
}
function Applications() {
  return (
    <section className="page page--paper" id="aplicacoes">
      <SecHead n="11" eyebrow="Aplicações" title="A marca em movimento"
        lead="A Bora se expressa em superfícies B2B: LinkedIn, propostas, decks e assinatura. O sistema mantém o navy dominante, o laranja racionado e o grão nos momentos de impacto." />

      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, margin: "44px 0 16px" }}>Banner de LinkedIn</h3>
      <MiniBanner />

      <div className="app-grid" style={{ marginTop: 40 }}>
        <div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, margin: "0 0 16px" }}>Slides</h3>
          <div style={{ display: "grid", gap: 16 }}>
            <div className="mini-slide mini-slide--navy grainband">
              <div className="ms-eye">Método Bora</div>
              <div className="ms-h">Do caos <span style={{ color: "var(--orange-500)" }}>→</span> à entrega.</div>
              <div className="ms-foot"><span>boraprojetos.com</span><img className="ms-mark" src={M.white} alt="" /></div>
            </div>
            <div className="mini-slide mini-slide--cream">
              <div className="ms-eye">02 · Estrutura</div>
              <div className="ms-h">O ritual mínimo viável que o time mantém.</div>
              <div className="ms-foot" style={{ color: "var(--ink-500)" }}><span>Proposta comercial</span><img className="ms-mark" src={M.full} alt="" /></div>
            </div>
          </div>
        </div>
        <div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, margin: "0 0 16px" }}>Assinatura de e-mail</h3>
          <div className="sig">
            <img className="sig__mark" src={M.full} alt="" />
            <div className="sig__div"></div>
            <div>
              <div className="sig__name">Paula Balduino</div>
              <div className="sig__role">Comunicação & Marketing · Bora</div>
              <div className="sig__contact">
                <b>boraprojetos.com</b> · erico@boraprojetos.com<br/>
                WhatsApp · (11) 9 9999-9999<br/>
                Gestão de projetos · PMP · Scrum · Agile
              </div>
            </div>
          </div>
          <div style={{ marginTop: 16, padding: "18px 22px", background: "var(--navy-700)", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", gap: 16 }}>
            <img src={M.white} style={{ width: 40 }} alt="" />
            <div style={{ color: "#fff", fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 18 }}>Bora conversar <span style={{ color: "var(--amber-500)" }}>›</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================  FECHO  ===================== */
function Closing() {
  return (
    <section className="page page--navy-deep grainband closing" id="fecho">
      <div className="ghost-wm" style={{ fontSize: 360, left: -40, top: -60 }}>BORA</div>
      <img src={M.full} style={{ width: 76, marginBottom: 28 }} alt="" />
      <div className="closing__big">Bora<span className="accent">.</span></div>
      <p className="closing__sub">Vamos resolver isso juntos. · boraprojetos.com</p>
    </section>
  );
}

Object.assign(window, { Color, Typography, Voice, Texture, Icons, Components, Applications, Closing });

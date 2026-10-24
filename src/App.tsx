const capabilities = [
  ['01', 'Estratégia & Inovação', 'Mapeamos oportunidades e desenhamos caminhos para negócios relevantes.'],
  ['02', 'Produtos Digitais', 'Criamos produtos intuitivos, escaláveis e desejáveis.'],
  ['03', 'IA & Dados', 'Transformamos dados em inteligência para decisões mais ágeis.'],
  ['04', 'Experiências de Marca', 'Aproximamos marcas, pessoas e possibilidades.'],
]

const Brand = () => <a className="brand" href="#inicio"><span>N</span>EXUS <i>LAB</i></a>
const Eyebrow = ({ children }: { children: string }) => <p className="eyebrow"><b />{children}</p>

export default function App() {
  return <><div className="noise" />
    <header className="nav wrap"><Brand /><nav><a href="#sobre">O laboratório</a><a href="#capacidades">Capacidades</a><a href="#contato">Contato</a></nav><a className="nav-link" href="#contato">Vamos conversar ↗</a></header>
    <main id="inicio">
      <section className="hero wrap"><div className="hero-text"><Eyebrow>TECNOLOGIA, ESTRATÉGIA & IMPACTO</Eyebrow><h1>Ideias que<br /><em>ganham vida</em><br />em tecnologia.</h1><p>Somos um laboratório de inovação digital. Transformamos desafios complexos em produtos, experiências e sistemas que movem negócios.</p><div className="actions"><a className="button fill" href="#contato">Comece um projeto <b>→</b></a><a className="button underline" href="#sobre">Conheça a NEXUS ↓</a></div></div><div className="orbital" aria-hidden="true"><i className="ring outer"/><i className="ring inner"/><div className="core">N<small>01</small></div><i className="dot a"/><i className="dot b"/><i className="dot c"/></div><div className="scroll">SCROLL PARA EXPLORAR <i /> 2024 — ∞</div></section>
      <div className="ticker"><div>PRODUTOS DIGITAIS <b>✦</b> INTELIGÊNCIA ARTIFICIAL <b>✦</b> EXPERIÊNCIAS DE MARCA <b>✦</b> PRODUTOS DIGITAIS <b>✦</b> INTELIGÊNCIA ARTIFICIAL <b>✦</b></div></div>
      <section id="sobre" className="about wrap"><Eyebrow>01 / QUEM SOMOS</Eyebrow><div className="about-grid"><h2>Construímos o<br />próximo <em>agora.</em></h2><div><p>A NEXUS LAB aproxima o pensamento estratégico da potência da tecnologia. Trabalhamos ao lado de equipes ambiciosas para criar valor que permanece.</p><a className="inline-link" href="#contato">Nossa visão ↗</a></div></div><div className="metrics"><p><strong>+30</strong>projetos lançados</p><p><strong>06</strong>especialidades integradas</p><p><strong>∞</strong>possibilidades para explorar</p></div></section>
      <section id="capacidades" className="capabilities"><div className="wrap"><div className="section-head"><Eyebrow>02 / CAPACIDADES</Eyebrow><p>Do primeiro insight ao impacto real.</p></div><div className="capability-list">{capabilities.map(([index, title, text]) => <article key={index}><span>{index}</span><h3>{title}</h3><p>{text}</p><button aria-label={`Abrir ${title}`}>↗</button></article>)}</div></div></section>
      <section className="quote wrap"><div>N</div><blockquote><Eyebrow>NOSSO PONTO DE VISTA</Eyebrow>“A melhor tecnologia não é a que impressiona. É a que torna o impossível <em>natural.</em>”</blockquote></section>
      <section id="contato" className="contact"><div className="glow"/><div className="wrap"><Eyebrow>03 / VAMOS CONSTRUIR</Eyebrow><h2>Tem uma ideia<br />que não sai da<br /><em>cabeça?</em></h2><a href="mailto:ola@nexuslab.com.br">ola@nexuslab.com.br ↗</a></div></section>
    </main><footer className="wrap"><Brand /><p>© 2024 NEXUS LAB. FEITO PARA O FUTURO.</p><div><a href="#">LinkedIn</a><a href="#">Instagram</a></div></footer>
  </>
}

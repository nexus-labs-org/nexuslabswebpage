import { useState, type FormEvent } from 'react'

const capabilities = [
  ['01', 'Estratégia & Inovação', 'Mapeamos oportunidades e desenhamos caminhos para negócios relevantes.'],
  ['02', 'Produtos Digitais', 'Criamos produtos intuitivos, escaláveis e desejáveis.'],
  ['03', 'IA & Dados', 'Transformamos dados em inteligência para decisões mais ágeis.'],
  ['04', 'Experiências de Marca', 'Aproximamos marcas, pessoas e possibilidades.'],
]

const tickerItems = ['PRODUTOS DIGITAIS', 'INTELIGÊNCIA ARTIFICIAL', 'EXPERIÊNCIAS DE MARCA', 'ESTRATÉGIA & INOVAÇÃO']

const email = 'ola@nexuslab.com.br'
// Número com DDI + DDD, só dígitos (ex.: 5511999999999). Vazio esconde o botão do WhatsApp.
const whatsapp = ''

// Preencha com as URLs reais; links vazios não são exibidos.
const socials = [
  ['LinkedIn', ''],
  ['Instagram', ''],
].filter(([, href]) => href)

const Brand = () => (
  <a className="brand" href="#inicio" aria-label="Nexus Labs">
    <img src="/assets/nexus-labs-horizontal-light.svg" alt="Nexus Labs" className="brand-logo" width="135" height="36" />
  </a>
)
const Eyebrow = ({ children }: { children: string }) => <p className="eyebrow"><b />{children}</p>

const ContactForm = ({ interest, onInterestChange }: { interest: string, onInterestChange: (value: string) => void }) => {
  const send = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const field = (name: string) => String(data.get(name) ?? '').trim()
    const text = [
      `Olá, NEXUS LABS! Sou ${field('nome')}${field('empresa') && ` (${field('empresa')})`}.`,
      `Interesse: ${field('interesse')}`,
      '',
      field('mensagem'),
    ].join('\n')
    const channel = (event.nativeEvent as SubmitEvent).submitter?.getAttribute('value')
    if (channel === 'whatsapp') window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    else window.location.href = `mailto:${email}?subject=${encodeURIComponent(`Projeto: ${field('interesse')}`)}&body=${encodeURIComponent(text)}`
  }

  return <form className="contact-form" onSubmit={send}>
    <label>Nome<input name="nome" autoComplete="name" required /></label>
    <label><span>Empresa <small>(opcional)</small></span><input name="empresa" autoComplete="organization" /></label>
    <label>Interesse<select name="interesse" value={interest} onChange={event => onInterestChange(event.target.value)}>
      {capabilities.map(([, title]) => <option key={title}>{title}</option>)}
      <option>Outro assunto</option>
    </select></label>
    <label>Conte sobre o projeto<textarea name="mensagem" rows={4} required /></label>
    <div className="form-actions">
      {whatsapp && <button className="button fill" type="submit" value="whatsapp">Enviar pelo WhatsApp <b>→</b></button>}
      <button className={`button ${whatsapp ? 'outline' : 'fill'}`} type="submit" value="email">Enviar por e-mail</button>
    </div>
  </form>
}

export default function App() {
  const [interest, setInterest] = useState(capabilities[0][1])

  return <><div className="noise" />
    <header className="nav wrap"><Brand /><nav><a href="#sobre">O laboratório</a><a href="#capacidades">Capacidades</a><a href="#contato">Contato</a></nav><a className="nav-link" href="#contato">Vamos conversar</a></header>
    <main id="inicio">
      <section className="hero wrap"><div className="hero-text"><Eyebrow>TECNOLOGIA, ESTRATÉGIA & IMPACTO</Eyebrow><h1>Ideias que<br /><em>ganham vida</em><br />em tecnologia.</h1><p>Somos um laboratório de inovação digital. Transformamos desafios complexos em produtos, experiências e sistemas que movem negócios.</p><div className="actions"><a className="button fill" href="#contato">Comece um projeto <b>→</b></a><a className="button underline" href="#sobre">Conheça a NEXUS</a></div></div><div className="orbital" aria-hidden="true"><i className="ring outer"/><i className="ring inner"/><div className="core"><img src="/assets/nexus-labs-symbol.svg" alt="Nexus Labs Keystone Mark" className="core-logo" /></div><div className="orbit orbit-inner orbit-a"><i className="dot" /></div><div className="orbit orbit-inner orbit-b"><i className="dot" /></div><div className="orbit orbit-c"><i className="dot" /></div></div><div className="scroll">SCROLL PARA EXPLORAR <i /> 2026 — ∞</div></section>
      <div className="ticker"><div className="ticker-track">{[0, 1].map(copy => <div key={copy} className="ticker-group" aria-hidden={copy === 1 || undefined}>{[0, 1, 2].flatMap(repeat => tickerItems.map(item => <span key={`${repeat}-${item}`}>{item} <b>✦</b></span>))}</div>)}</div></div>
      <section id="sobre" className="about wrap"><div className="about-grid"><h2>Construímos o<br />próximo agora.</h2><div><p>A NEXUS LABS aproxima o pensamento estratégico da potência da tecnologia. Trabalhamos ao lado de equipes ambiciosas para criar valor que permanece.</p><a className="inline-link" href="#contato">Nossa visão</a></div></div><div className="metrics"><p><strong>+30</strong>projetos lançados</p><p><strong>06</strong>especialidades integradas</p><p><strong>∞</strong>possibilidades para explorar</p></div></section>
      <section id="capacidades" className="capabilities"><div className="wrap"><div className="section-head"><h2>O que fazemos</h2><p>Do primeiro insight ao impacto real.</p></div><div className="capability-list">{capabilities.map(([index, title, text]) => <article key={index}><span>{index}</span><h3>{title}</h3><p>{text}</p><a className="capability-cta" href="#contato" onClick={() => setInterest(title)} aria-label={`Falar sobre ${title}`}>↗</a></article>)}</div></div></section>
      <section className="quote wrap"><div className="quote-mark"><img src="/assets/nexus-labs-symbol.svg" alt="Nexus Labs Keystone Mark" /></div><blockquote>“A melhor tecnologia não é a que impressiona. É a que torna o impossível natural.”</blockquote></section>
      <section id="contato" className="contact"><div className="glow"/><div className="wrap contact-grid"><div><h2>Tem uma ideia<br />que não sai da<br />cabeça?</h2><a className="contact-email" href={`mailto:${email}`}>{email}</a></div><ContactForm interest={interest} onInterestChange={setInterest} /></div></section>
    </main><footer className="wrap"><Brand /><p>© 2026 NEXUS LABS. FEITO PARA O FUTURO.</p>{socials.length > 0 && <div>{socials.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>)}</div>}</footer>
  </>
}

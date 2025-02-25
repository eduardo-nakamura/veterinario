import { useEffect, useState, useRef } from 'react'
import LogoV2 from './assets/2.png'
import './App.css'
import './var.css'
import Header from './Components/Header'
import AnimatedSection from './Components/AnimatedSection'

function App() {
  const contatosRef = useRef(null);
  const servicosRef = useRef(null);
  const missoesRef = useRef(null);
  const sobreRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 575); // Adjust breakpoint as needed
    };

    checkMobile(); // Check on initial render

    window.addEventListener("resize", checkMobile); // Listen for resize

    return () => {
      window.removeEventListener("resize", checkMobile); // Cleanup
    };
  }, []);

  //   contatos
  // servicos
  // atendimento
  // missoes-valores
  // sobre
  return (
    <div className='vet__container'>
      <Header 
        isMobile={isMobile} 
        contatosRef={contatosRef}
        servicosRef={servicosRef}
        // atendimentoRef={atendimentoRef}
        missoesRef={missoesRef}
        sobreRef={sobreRef} />
      <section className="vet__section column__center__flex" style={{ backgroundColor: 'var(--cor-verde-claro)' }}>
        <h1>Atendimento Veterinário Domiciliar</h1>
        <img className='round-border' src={LogoV2} alt="Atendimento Veterinário Domiciliar" />
      </section>
      <AnimatedSection>
        <section ref={servicosRef} className="vet__section row__center__flex" style={{ backgroundColor: 'var(--cor-branca)' }}>

          <div>
            <h2 id="servicos">Tipo de serviço</h2>
            <p>Atendimento veterinário domiciliar para cães e gatos<br />Consultas, vacinas e coleta de sangue.</p>
            <h2 id="atendimento">Horário de atendimento</h2>
            <p>Segunda a sexta das 8h às 18h<br />Sábados e Domingos das 10 às 16h	</p>
          </div>
          <img className='round-border' src={LogoV2} alt="Atendimento Veterinário Domiciliar" />

        </section>
      </AnimatedSection>
      <AnimatedSection>
        <section ref={missoesRef} className="vet__section" style={{ backgroundColor: 'var(--cor-verde-claro)' }}>
          <h2>Missão e valores</h2>
          <p>Acredito no cuidado humanizado que prioriza o bem-estar da família pet e tutor(es). Realizo um atendimento que valoriza as características individuais de cada animal e os valores de seus tutores. Considero que o atendimento a domicílio não é apenas uma comodidade, como também faz parte do respeito ao animal ao proporcionar um ambiente seguro e familiar durante as consultas. <br />
            Prezo pelo acompanhamento longitudinal, de modo que seja possível compreender e valorizar os diferentes momentos e fases da vida. O acompanhamento personalizado ao decorrer do tempo permite identificar a dinâmica diária, as  peculiaridades, os gostos e as necessidades de cada indivíduo. Essa visão geral da saúde e do bem estar animal minimiza o volume de procedimentos  invasivos excessivos, tornando possível realizar encaminhamentos pontuais para especialistas que se adequem ao perfil do animal  apenas quando necessário.
          </p>
        </section>
      </AnimatedSection>
      <AnimatedSection>
        <section ref={sobreRef} className="vet__section" style={{ backgroundColor: 'var(--cor-branca)' }}>
          <h2>Quem é o Bruno</h2>
          <p>Me formei em Medicina Veterinária pela Universidade Anhembi Morumbi. Desde criança tive contato com a natureza e sua fauna, fazendo trekking, acampando, escalando, dentre outras atividades. Isso me levou a ter muita curiosidade em relação aos animais, fossem eles grandes ou pequenos, vertebrados ou invertebrados. <br /> Me considero uma pessoa paciente, preocupada com o bem estar do outro, sempre empenhado em ajudar da melhor forma possível, e reflito estas qualidades nos atendimentos que realizo. Sendo pai de dois cachorros e um coelho, sei como o ambiente influencia as consultas e como é importante que o seu pet se sinta seguro em um local familiar.</p>
        </section>
      </AnimatedSection>
      <AnimatedSection>
        <section ref={contatosRef} className="vet__section" style={{ backgroundColor: 'var(--cor-verde-claro)' }}>
          <h2>Contatos</h2>
          <ul>
            <li>Whatsapp: <a href="https://wa.me/5511993177378?text=SuaMensagem">(11) 99317-7378</a></li>
            <li>Email: <a href="mailto:bruno.may.pisetta@gmail.com">bruno.may.pisetta@gmail.com</a></li>
            <li>Linkedin: <a href="https://www.linkedin.com/in/bruno-pisetta" target="_blank">https://www.linkedin.com/in/bruno-pisetta</a></li>
            <li>Cartão de visita: <a href="https://trakto.link/BrunoMayPisetta" target="_blank">https://trakto.link/BrunoMayPisetta</a></li>
          </ul>
        </section>
      </AnimatedSection>
    </div>
  )
}


export default App

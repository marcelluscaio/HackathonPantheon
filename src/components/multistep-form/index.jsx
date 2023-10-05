import "./styles.css";
import { Laptop, Users, ArrowLeft } from "@phosphor-icons/react";
import { MultistepButtons } from "./Buttons/index";

export function MultistepForm() {
  return (
    <main>
      <div className='content-container'>
        <div className='container-head'>
          <h3>Agendamento de Consultas</h3>
          <span>Modalidade</span>
        </div>
        <div className='container-main'>
          <img src='../../../public/img/heart-pulse.svg' width='80px' />
          <span>
            Para começar seu agendamento, selecione a modalidade desejada.
          </span>
          <div className='btn-sections'>
            <MultistepButtons
              icon={<Laptop size={26} />}
              color='pink'
              title='Atendimento Virtual'
            />
            <MultistepButtons
              icon={<Users size={26} />}
              color='blue'
              title='Atendimento presencial'
            />
            <MultistepButtons
              icon={<ArrowLeft size={26} />}
              title='Voltar para o início'
            />
          </div>
        </div>
      </div>
    </main>
  );
}

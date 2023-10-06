import { ArrowLeft, Check } from "@phosphor-icons/react";
import { MultistepButtons } from "../../Buttons";
import { StatusBar } from "../../StatusBar";
import { TitleComponent } from "../../TitleComponent";
import "./styles.css";

export function SummaryStep() {
  const pageProps = {
    page: "summary",
    link: "public/img/clock-2.svg",
    title: "Resumo da Solicitação.",
  };

  const mock = {
    modalidade: "Atendimento online",
    unidade: "Online",
    especialidade: "Cardiologista",
    horario: "Quinta-feira, 12/10/23 - 09:00 às 10:00",
  };

  return (
    <>
      <StatusBar />
      <div className={`container-main ${pageProps.page}`}>
        <TitleComponent link={pageProps.link} title={pageProps.title} />
        <div className='summary-container'>
          <span>Modalidade do atendimento</span>
          {mock.modalidade}
          <span>Unidade de atendimento</span>
          {mock.unidade}
          <span>Especialidade do profissional</span>
          {mock.especialidade}
          <span>Horário escolhido</span>
          {mock.horario}
        </div>
        <div className='btn-sections'>
          <MultistepButtons
            icon={<ArrowLeft size={26} />}
            title='Realizar agendamento'
          />
          <MultistepButtons
            icon={<ArrowLeft size={26} />}
            title='Voltar para Horários'
          />
        </div>
      </div>
    </>
  );
}

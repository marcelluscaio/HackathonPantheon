import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { MultistepButtons } from "../../Buttons";
import { StatusBar } from "../../StatusBar";
import { TitleComponent } from "../../TitleComponent";
import "./style.css";

export function DateTimeStep() {
  const pageProps = {
    page: "date-time-select",
    link: "public/img/clock-2.svg",
    title: "Horários disponíveis com base nas opções escolhidas:",
  };
  return (
    <>
      <StatusBar />
      <div className={`container-main ${pageProps.page}`}>
        <TitleComponent link={pageProps.link} title={pageProps.title} />
        <div className='btn-sections'>
          <MultistepButtons icon={<ArrowRight size={26} />} title='Continuar' />
          <MultistepButtons
            icon={<ArrowLeft size={26} />}
            title='Voltar para Especialidade'
          />
        </div>
      </div>
    </>
  );
}

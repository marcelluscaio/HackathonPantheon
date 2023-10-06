import { ArrowLeft, Laptop, Users } from "@phosphor-icons/react";
import { MultistepButtons } from "../../Buttons";
import { StatusBar } from "../../StatusBar";
import { TitleComponent } from "../../TitleComponent";
import "./styles.css";
import { SelectComponent } from "../../Select";

export function ModalityStep() {
  const titleProps = {
    link: "public/img/heart-pulse.svg",
    title: "Para começar seu agendamento, selecione a modalidade desejada.",
  };

  return (
    <>
      <StatusBar />
      <div className='container-main'>
        <TitleComponent link={titleProps.link} title={titleProps.title} />

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
          S SelectComponentProps
        </div>
      </div>
    </>
  );
}

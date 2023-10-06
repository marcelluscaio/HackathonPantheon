import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { MultistepButtons } from "../../Buttons";
import { StatusBar } from "../../StatusBar";
import { TitleComponent } from "../../TitleComponent";
import "./styles.css";
import { SelectComponent } from "../../Select";

export function ServiceUnitStep() {
  const titleProps = {
    link: "public/img/building-2.svg",
    title:
      "Você selecionou a modalidade presencial, agora, escolha a unidade desejada.",
  };

  const mock = ["Felipinho", "Cipó", "Granjinha", "Centro"];

  return (
    <>
      <StatusBar />
      <div className='container-main'>
        <TitleComponent link={titleProps.link} title={titleProps.title} />
        <SelectComponent title='Selecione' content={mock} id='dataValue' />
        <div className='btn-sections'>
          <MultistepButtons icon={<ArrowRight size={26} />} title='Continuar' />
          <MultistepButtons
            icon={<ArrowLeft size={26} />}
            title='Voltar para Modalidade'
          />
        </div>
      </div>
    </>
  );
}

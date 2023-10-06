import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { MultistepButtons } from "../../Buttons";
import { StatusBar } from "../../StatusBar";
import { TitleComponent } from "../../TitleComponent";
import "./styles.css";

export function ProfessionalSelectStep() {
  const pageProps = {
    page: "professional-select",
    link: "public/img/book-plus.svg",
    title: "Agora escolha a especialidade do profissional.",
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
            title='Voltar para Unidades'
          />
        </div>
      </div>
    </>
  );
}

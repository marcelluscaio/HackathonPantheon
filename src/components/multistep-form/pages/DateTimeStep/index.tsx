import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { MultistepButtons } from "../../Buttons";
import { StatusBar } from "../../StatusBar";
import { TitleComponent } from "../../TitleComponent";
import "./style.css";
import { SelectComponent } from "../../Select";

export function DateTimeStep() {
  const pageProps = {
    page: "date-time-select",
    link: "public/img/clock-2.svg",
    title: "Horários disponíveis com base nas opções escolhidas:",
  };

  const mock = [
    {
      data: "Quinta-feira, 05/10/23",
      hora: [
        "09:00 às 10:00",
        "09:00 às 10:00",
        "09:00 às 10:00",
        "09:00 às 10:00",
        "09:00 às 10:00",
        "09:00 às 10:00",
      ],
    },
    {
      data: "Sexta-feira, 06/10/23",
      hora: [
        "09:00 às 10:00",
        "09:00 às 10:00",
        "09:00 às 10:00",
        "09:00 às 10:00",
        "09:00 às 10:00",
        "09:00 às 10:00",
      ],
    },
    {
      data: "Sábado, 07/10/23",
      hora: [
        "09:00 às 10:00",
        "09:00 às 10:00",
        "09:00 às 10:00",
        "09:00 às 10:00",
        "09:00 às 10:00",
        "09:00 às 10:00",
      ],
    },
    {
      data: "Domingo, 08/10/23",
      hora: [
        "09:00 às 10:00",
        "09:00 às 10:00",
        "09:00 às 10:00",
        "09:00 às 10:00",
        "09:00 às 10:00",
        "09:00 às 10:00",
      ],
    },
  ];
  return (
    <>
      <StatusBar />
      <div className={`container-main ${pageProps.page}`}>
        <TitleComponent link={pageProps.link} title={pageProps.title} />
        <div>
          <SelectComponent
            title='Selecione'
            content={mock.map((data) => data.data)}
          />
          <SelectComponent title='Selecione' content={mock[0].hora} />
        </div>
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

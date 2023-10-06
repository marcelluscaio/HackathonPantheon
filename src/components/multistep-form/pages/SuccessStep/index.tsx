import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { MultistepButtons } from "../../Buttons";
import "./styles.css";

export function SuccessStep() {
  return (
    <>
      <div className='success-container'>
        <img src='../../../public/img/success.svg' />
        <span>Agendamento realizado!</span>
        <div className='btn-sections'>
          <MultistepButtons
            icon={<ArrowRight size={26} />}
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

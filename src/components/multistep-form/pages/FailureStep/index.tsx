import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { MultistepButtons } from "../../Buttons";
import "./styles.css";

export function FailureStep() {
  return (
    <>
      <div className='failure-container'>
        <img src='../../../public/img/nodoc.svg' />
        <span>Ops. Por favor, tente mais tarde.</span>
        <div className='btn-sections'>
          <MultistepButtons
            icon={<ArrowLeft size={26} />}
            title='Voltar para resumo'
          />
          <MultistepButtons
            icon={<ArrowLeft size={26} />}
            title='Voltar para inicio'
          />
        </div>
      </div>
    </>
  );
}

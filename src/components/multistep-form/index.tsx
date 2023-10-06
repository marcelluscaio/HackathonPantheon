import "./styles.css";
import { ModalityStep } from "./pages/ModalityStep";
import { ServiceUnitStep } from "./pages/ServiceUnitStep";
import { ProfessionalSelectStep } from "./pages/ProfessionalSelectStep";
import { DateTimeStep } from "./pages/DateTimeStep";
import { SummaryStep } from "./pages/SummaryStep";
import { SuccessStep } from "./pages/SuccessStep";
import { FailureStep } from "./pages/FailureStep";
import { useState } from "react";

export function MultistepForm() {
  const pageProps = {
    modalityStep: "modality",
    serviceUnitiSetp: "service-unity",
    professionalSelectStep: "professional-select",
    dateTimeSelectStep: "date-time-select",
    summaryStep: "summary",
    successStep: "success",
    failureStep: "failure",
  };

  const step = 1;

  function verifyStep(i) {
    if (step !== i) {
      return "hide";
    }
  }

  return (
    <main>
      <div
        className={`content-container ${pageProps.modalityStep} ${verifyStep(
          1
        )}`}
      >
        <ModalityStep />
      </div>
      <div
        className={`content-container ${
          pageProps.serviceUnitiSetp
        } ${verifyStep(2)}`}
      >
        <ServiceUnitStep />
      </div>
      <div
        className={`content-container ${
          pageProps.professionalSelectStep
        } ${verifyStep(3)}`}
      >
        <ProfessionalSelectStep />
      </div>
      <div
        className={`content-container ${
          pageProps.dateTimeSelectStep
        } ${verifyStep(4)}`}
      >
        <DateTimeStep />
      </div>
      <div
        className={`content-container ${pageProps.summaryStep} ${verifyStep(
          5
        )}`}
      >
        <SummaryStep />
      </div>
      <div
        className={`content-container ${pageProps.successStep} ${verifyStep(
          6
        )}`}
      >
        <SuccessStep />
      </div>
      <div
        className={`content-container ${pageProps.failureStep} ${verifyStep(
          7
        )}`}
      >
        <FailureStep />
      </div>
    </main>
  );
}

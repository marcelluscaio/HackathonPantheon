import "./styles.css";
import { ModalityStep } from "./pages/ModalityStep";

export function MultistepForm() {
  return (
    <main>
      <div className='content-container'>
        <ModalityStep />
      </div>
    </main>
  );
}

import "./styles.css";

export function StatusBar() {
  const status = [
    "Modalidade",
    "Unidade",
    "Especialidade",
    "Horários",
    "Resumo",
  ];

  return (
    <div className='container-head'>
      <h3>Agendamento de Consultas</h3>
      {status.map((status) => (
        <>
          <span>{status}</span>
        </>
      ))}
    </div>
  );
}

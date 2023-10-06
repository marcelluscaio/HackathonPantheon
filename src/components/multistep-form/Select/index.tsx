import "./styles.css";

interface SelectComponentProps {
  title: string;
  content: string[];
}

export function SelectComponent({ title, content }: SelectComponentProps) {
  return (
    <>
      <fieldset className='select-container'>
        <legend className='regular-text'>{title}</legend>
        <div>
          <select className='regular-text '>
            <option value=''>Selecione uma opção</option>
            {content.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
      </fieldset>
    </>
  );
}

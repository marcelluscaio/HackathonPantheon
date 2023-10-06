import "./styles.css";

interface TitleComponentProps {
  link: string;
  title: string;
}

export function TitleComponent({ link, title }: TitleComponentProps) {
  return (
    <div className='title-container'>
      <img src={link} width='80px' />
      <span>{title}</span>
    </div>
  );
}

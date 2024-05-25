
export default function ImageCard(props) {
  return (
    <div className={props.className}>
      <img src={props.src} className={props.imageClassname} alt=" avater" />
      <p className={props.nameClassname}>{props.name}</p>
    </div>
  );
}

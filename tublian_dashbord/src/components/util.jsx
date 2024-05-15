const Util = ({ ...props }) => {
  return (
    <li
      className={props.li}
      key={props.key}
      onMouseOver={props.mouseOver}
      onMouseOut={props.mouseOut}
    >
      <img src={props.src} 
      alt={props.alt} />
      <span> {props.text}</span>
    </li>
  );
};
export default Util;

import "./Display.css";

export default function Display(value) {
  return (
    <div className="display">
      <input type="text" value={value.value} />
    </div>
  );
}

import "./Title.css"

export function Title(props) {
  return (
    <h1 className="p-3">{props.greeting}</h1>
  )
}
import './index.css'

export default function Button({text, color, longness, style}) {
    return <div className={`nBtn ${color}Btn ${longness}Btn`}  style={style}>
        {text}
    </div>
}
import './index.css'

export default function Button({text, color, longness, style, disabled}) {
    return <div className={`nBtn ${color}Btn ${longness}Btn ${disabled?'disabledBtn':''}`}  style={style}>
        {text}
    </div>
}
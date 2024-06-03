import './index.css'

export default function Button({text, type, size}) {
    return <div className={`nBtn ${type}btn ${size}btn`} >
        {text}
    </div>
}
import styles from './input.module.scss'
interface  InputProps{
type:string
name:string
// value:any
placeholder:string
// onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input:React.FC<InputProps> =({ type, name, placeholder })=>{
    return(
        <input className={styles["custom-input"]}
         type={type}
         name={name}
         placeholder={placeholder}
         />
            
       
    )
}
export default Input;
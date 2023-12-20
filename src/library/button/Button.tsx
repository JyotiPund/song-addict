import styles from './button.module.scss'
interface ButtonProps {
    label: string;
    // onClick: () => void;
  }
const Button:React.FC<ButtonProps>= ({label})=>{
    return(
        <button className={styles['custom-button']}>{label}</button>
    )
}
export default Button;
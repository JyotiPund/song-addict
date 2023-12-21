import styles from "./header.module.scss";
import Searchbar from "./searchbar/Searchbar";
// import logo from "../../../public/logo.png";
// import logo from '../../logo.png';

 function Header(){
    return(
        <div className={styles["header-container"]}>
            <div className={styles["header-wrapper"]}>
                {/* <div className={styles["app-logo"]}>
                    <img className={styles['logo']} src={logo}/>
                </div> */}
                <Searchbar/>
            </div>
        </div>
    )
}

export default Header;





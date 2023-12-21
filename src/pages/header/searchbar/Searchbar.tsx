import styles from "./searchbar.module.scss";
function Searchbar(){
    return(
        <div className={styles['searchbar-container']}>
            <div className={styles['searchbar-wrapper']}>
                <div className={styles['search-box']}>
                    <input className={styles['search-input']} type="text" name="search" placeholder="Search Artist,Songs,Album" />
                </div>
            </div>

        </div>
    )
}
export default Searchbar;
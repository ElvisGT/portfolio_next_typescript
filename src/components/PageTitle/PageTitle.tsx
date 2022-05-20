import styles from '@static/css/style.module.css';

const PageTitle = (props) => {
    return(
        <>
            <h1 className={styles['page-title']}>{props.title}</h1>
            <h2 className={styles['page-description']}>{props.description}</h2>
        </>
    )
}

export {PageTitle};
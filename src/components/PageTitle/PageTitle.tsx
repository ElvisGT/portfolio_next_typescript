import { PropsPageTitle } from '@interface/index';
import styles from '@static/css/style.module.css';

const PageTitle = ({title, description} : PropsPageTitle) => {
    return(
        <>
          {
            title && <h1 className={styles['page-title']}>{title}</h1>
          }

          {
            description && <h2 className={styles['page-description']}>{description}</h2>
          }
        </>
    );
};

export {PageTitle};

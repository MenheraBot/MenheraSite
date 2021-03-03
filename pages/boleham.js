import Maintenance from '../components/maintenance'
import { withTranslation } from '../services/i18n'
import styles from '../styles/pages/boleham.module.css'

const Boleham = () => {
  return (
    <div className={styles.container}>
      <Maintenance />
    </div>
  )
}

export default withTranslation('common')(Boleham)


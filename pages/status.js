import Maintenance from '../components/maintenance'
import { withTranslation } from '../services/i18n'

const Status = ({ t }) => {
  return (
    <div>
      <Maintenance />
    </div>
  )
}

export default withTranslation('common')(Status)


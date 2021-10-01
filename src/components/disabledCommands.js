
import { withTranslation } from '../services/i18n'
import style from '../styles/pages/status.module.css'

const captalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const disabledCommandsTable = ({ cmds, t }) => {

  return (
    <table>
      <thead>
        <tr><th key='disabled'>{t('disabled-commands')}</th></tr>
      </thead>
      <tbody>
        {cmds.map(c => (
          <tr key={c.name}>
            <td className={style.center}>{`${captalize(c.name)} | ${c.reason}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default withTranslation('common')(disabledCommandsTable)

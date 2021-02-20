
import { withTranslation } from '../services/i18n'
import style from '../styles/pages/status.module.css'

const captalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const pingTable = ({ pings, t }) => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th key='services'>{t('service')}</th>
          <th key='pings'>{t('ping')}</th>
        </tr>
      </thead>
      <tbody>
        {pings?.map(a => {
          if (a._id !== 'main') return (
            <tr key={a._id}>
              <td>{a._id.length < 3 ? `${t('shard')} ${a._id}` : captalize(a._id)}</td>
              <td>{a.lastPingAt > (Date.now() - 70000) ? <span style={{ color: a.ping > 70 ? 'yellow' : 'yellowgreen' }}>{a.ping}ms</span> : <span className={style.off}>OFF</span>}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default withTranslation('common')(pingTable)

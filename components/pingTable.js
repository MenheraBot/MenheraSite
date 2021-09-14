import { withTranslation } from '../services/i18n';
import style from '../styles/pages/status.module.css';
import moment from 'moment';
import 'moment-duration-format';

const captalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const pingTable = ({ pings, t }) => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <td key='services'>{t('service')}</td>
          <td key='pings'>{t('ping')}</td>
          <td key='guilds'>{t('guilds')}</td>
          <td key='uptime'>{t('uptime')}</td>
        </tr>
      </thead>
      <tbody>
        {pings
          ?.sort((a, b) => a._id - b._id)
          ?.map((a) => {
            if (a._id !== 'main')
              return (
                <tr key={a._id}>
                  <td>{a._id.length < 3 ? `${t('shard')} ${a._id}` : captalize(a._id)}</td>
                  <td>
                    {a.lastPingAt > Date.now() - 70000 ? (
                      <span
                        style={{
                          color: a.ping > 80 ? 'yellow' : 'yellowgreen',
                        }}>
                        {a.ping}ms
                      </span>
                    ) : (
                      <span className={style.off}>OFF</span>
                    )}
                  </td>
                  <td>
                    <b>
                      {a.lastPingAt > Date.now() - 70000 ? (
                        a.guilds || 'Available'
                      ) : (
                        <span className={style.off}>OFF</span>
                      )}
                    </b>
                  </td>
                  <td className='text-green-500'>
                    {a.lastPingAt > Date.now() - 70000 ? (
                      moment.duration(a.uptime).format('D[d], H[h], m[m], s[s]')
                    ) : (
                      <span className={style.off}>OFF</span>
                    )}
                  </td>
                </tr>
              );
          })}
      </tbody>
    </table>
  );
};

export default withTranslation('common')(pingTable);

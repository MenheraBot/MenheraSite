import style from '../styles/pages/status.module.css';
import moment from 'moment';
import 'moment-duration-format';
import { useTranslation } from 'react-i18next';

type Props = {
  pings: Array<{
    id: number;
    ping: number;
    lastPingAt: number;
    guilds: number;
    members: number;
    uptime: number;
  }>;
};

const PingTable = ({ pings }: Props): JSX.Element => {
  const { t } = useTranslation('common');

  return (
    <table className={style.table}>
      <thead>
        <tr>
          <td key='services'>{t('service')}</td>
          <td key='pings'>{t('ping')}</td>
          <td key='guilds'>{t('guilds')}</td>
          <td key='users'>Users</td>
          <td key='uptime'>{t('uptime')}</td>
        </tr>
      </thead>
      <tbody>
        {pings
          .sort((a, b) => a.id - b.id)
          .map((a) => (
            <tr key={a.id}>
              <td>
                {t('shard')} {a.id}
              </td>
              <td>
                {a.lastPingAt > Date.now() - 70000 ? (
                  <span style={{ color: a.ping > 80 ? 'yellow' : 'yellowgreen' }}>{a.ping}ms</span>
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
              <td>
                <b>{a.members}</b>
              </td>
              <td className='text-green-500'>
                {a.lastPingAt > Date.now() - 70000 ? (
                  moment
                    .utc(moment.duration(a.uptime).asMilliseconds())
                    .format('D[d], H[h], m[m], s[s]')
                ) : (
                  <span className={style.off}>OFF</span>
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default PingTable;

import style from '../styles/pages/status.module.css';
import moment from 'moment';
import 'moment-duration-format';
import { useTranslation } from 'react-i18next';
import type { Shard } from '../services/api/api.types';

type Props = {
  pings: Shard[];
};

const PingTable = ({ pings }: Props): JSX.Element => {
  const { t } = useTranslation('status');

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
            <tr key={a.id} data-testid={`cluster-${a.id}`}>
              <td>
                {t('cluster')} {a.id}
              </td>
              <td>
                {a.isOff ? (
                  <span data-testid={`cluster-ping-${a.id}`} className={style.off}>
                    OFF
                  </span>
                ) : (
                  <span
                    data-testid={`cluster-ping-${a.id}`}
                    style={{ color: a.ping > 80 ? 'yellow' : 'yellowgreen' }}
                  >
                    {Math.floor(a.ping)}ms
                  </span>
                )}
              </td>
              <td>
                <b data-testid={`cluster-servers-${a.id}`}>
                  {a.isOff ? <span className={style.off}>OFF</span> : a.guilds || 'Available'}
                </b>
              </td>
              <td>
                <b>{a.isOff ? <span className={style.off}>OFF</span> : a.members}</b>
              </td>
              <td data-testid={`cluster-uptime-${a.id}`} className='text-green-500'>
                {a.isOff ? (
                  <span className={style.off}>OFF</span>
                ) : (
                  moment.duration(a.uptime).format('D[d], H[h], m[m], s[s]')
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default PingTable;

import style from '../styles/pages/status.module.css';
import moment from 'moment';
import 'moment-duration-format';
import { useTranslation } from 'react-i18next';
import type { Shard } from '../services/api/api.types';

type Props = {
  pings: Shard[];
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
            <tr key={a.id} data-testid={`shard-${a.id}`}>
              <td>
                {t('shard')} {a.id}
              </td>
              <td>
                {a.isOff ? (
                  <span data-testid={`shard-ping-${a.id}`} className={style.off}>
                    OFF
                  </span>
                ) : (
                  <span
                    data-testid={`shard-ping-${a.id}`}
                    style={{ color: a.ping > 80 ? 'yellow' : 'yellowgreen' }}
                  >
                    {a.ping}ms
                  </span>
                )}
              </td>
              <td>
                <b data-testid={`shard-servers-${a.id}`}>
                  {a.isOff ? <span className={style.off}>OFF</span> : a.guilds || 'Available'}
                </b>
              </td>
              <td>
                <b>{a.members}</b>
              </td>
              <td data-testid={`shard-uptime-${a.id}`} className='text-green-500'>
                {a.isOff ? (
                  <span className={style.off}>OFF</span>
                ) : (
                  moment.utc(Date.now() + a.uptime).format('D[d], H[h], m[m], s[s]')
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default PingTable;

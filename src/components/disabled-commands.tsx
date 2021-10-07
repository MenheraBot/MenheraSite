import { useTranslation } from 'react-i18next';
import type { Command } from '../services/api/api.types';

import style from '../styles/pages/status.module.css';

type Props = {
  cmds: Command[];
};

const DisabledCommandsTable = ({ cmds }: Props): JSX.Element => {
  const { t } = useTranslation('common');

  return (
    <table>
      <thead>
        <tr>
          <th key='disabled'>{t('disabled-commands')}</th>
        </tr>
      </thead>
      <tbody>
        {cmds.map((c) => (
          <tr key={c.name}>
            <td className={style.center}>
              <span className='capitalize'>{c.name}</span> | {c.disabled.reason}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisabledCommandsTable;

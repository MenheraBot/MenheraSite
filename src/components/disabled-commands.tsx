import { useTranslation } from 'react-i18next';
import type { Command } from '../services/api/api.types';

import style from '../styles/pages/status.module.css';

type Props = {
  cmds: Command[];
  lang: string;
};

const DisabledCommandsTable = ({ cmds, lang }: Props): JSX.Element => {
  const { t } = useTranslation('status');

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
              <span className='capitalize'>
                {lang === 'pt' && c?.nameLocalizations ? c.nameLocalizations['pt-BR'] : c.name}
              </span>{' '}
              | {c.disabled.reason}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisabledCommandsTable;

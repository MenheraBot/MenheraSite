import { useTranslation } from 'react-i18next';

import { capitalize } from '../utils/capitalize';
import { CommandDisabled } from '../../typings/Command';

import style from '../styles/pages/status.module.css';

type Props = {
  cmds: CommandDisabled[];
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
            <td className={style.center}>{`${capitalize(c.name)} | ${c.reason}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisabledCommandsTable;

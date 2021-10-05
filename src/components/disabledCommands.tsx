import { useTranslation } from 'react-i18next';

import style from '../styles/pages/status.module.css';

const captalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

type Props = {
  cmds: Array<{
    name: string;
    reason: string;
  }>;
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
            <td className={style.center}>{`${captalize(c.name)} | ${c.reason}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisabledCommandsTable;

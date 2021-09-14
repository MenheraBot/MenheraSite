import { useTranslation } from 'next-i18next';

import style from '../styles/pages/status.module.css';

const captalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const DisabledCommandsTable = ({ cmds }) => {
  const { t } = useTranslation('common');

  const hasDisabled = cmds.length > 0;

  return (
    <>
      {hasDisabled ? (
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
      ) : (
        <></>
      )}
    </>
  );
};

export default DisabledCommandsTable;

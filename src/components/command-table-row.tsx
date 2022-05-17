import { useState } from 'react';
import { TFunction } from 'next-i18next';
import ReactTooltip from 'react-tooltip';

import { Command, Option } from '../services/api/api.types';

interface ResolveSubCommandProps {
  cmd: Option;
  key: string;
  t: TFunction;
  lang: string;
}

const ResolveSubCommand = ({ cmd, key, t, lang }: ResolveSubCommandProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <tr
        key={key}
        className='hover:border-purple-700 cursor-pointer'
        onClick={() => setExpanded(!expanded)}
      >
        <td className='text-current capitalize'>{cmd.name}</td>
        <td className='text-current'>{cmd.description.replace('【ＲＰＧ】', '')}</td>
        <td className='text-current'>{t(cmd.type)}</td>
        <td className='text-current text-purple-400'>{t('click')}</td>
      </tr>
      {expanded && (
        <tr className='overflow-hidden' key='tr-expander'>
          <td style={{ backgroundColor: 'inherit' }} colSpan={4}>
            <div className='overflow-hidden m-4'>
              <div>{cmd.options.length > 0 && resolveOptions(cmd.options, t, lang)}</div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

interface CommandTableRowProps {
  cmd: Command;
  key: string;
  lang: string;
  t: TFunction;
}

const CommandTableRow = ({ cmd, key, t, lang }: CommandTableRowProps): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <tr
        key={key}
        className='hover:border-purple-700 cursor-pointer'
        onClick={() => setExpanded(!expanded)}
      >
        <td
          className={`capitalize ${
            cmd?.disabled?.isDisabled ? `text-red-600 cursor-help` : 'text-current'
          }`}
        >
          {lang === 'pt' && cmd?.nameLocalizations ? cmd.nameLocalizations['pt-BR'] : cmd.name}
        </td>
        <td
          className={`capitalize ${
            cmd?.disabled?.isDisabled ? `text-red-600 cursor-help` : 'text-current'
          }`}
        >
          {lang === 'pt' && cmd?.descriptionLocalizations
            ? cmd.descriptionLocalizations['pt-BR'].replace('【ＲＰＧ】', '')
            : cmd.description.replace('【ＲＰＧ】', '')}
        </td>
      </tr>
      {expanded && (
        <tr key={key + Date.now()} className='overflow-hidden'>
          <td style={{ backgroundColor: 'inherit' }} colSpan={2}>
            <div className='overflow-hidden m-4'>
              <div>
                {cmd?.disabled?.isDisabled && (
                  <div>
                    <p className='text-2xl'>
                      <span className='text-3xl font-bold text-yellow-600'>{t('disabled')}</span>
                      <br />
                      {t('reason')} {cmd?.disabled?.reason}
                    </p>
                  </div>
                )}
                <p>{t('cooldown', { seconds: cmd.cooldown })}</p>
                {cmd.options.length > 0 && resolveOptions(cmd.options, t, lang)}
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

const resolveOptions = (options: Option[], t: TFunction, lang: string) => (
  <>
    <table className='mb-0 !important'>
      <caption className='text-2xl mb-2 text-purple-500'>
        {'options' in options[0] ? t('subcommands') : t('arguments')}
      </caption>
      <thead>
        {options.every((a) => a.options) ? (
          <tr>
            <th>{t('name')}</th>
            <th>{t('desc')}</th>
            <th>{t('type')}</th>
          </tr>
        ) : (
          <tr>
            <th>{t('name')}</th>
            <th>{t('desc')}</th>
            <th>{t('type')}</th>
            <th>{t('required')}</th>
          </tr>
        )}
      </thead>
      <tbody>
        {options.map((opt, i) =>
          opt.options ? (
            <ResolveSubCommand key={opt.name} cmd={opt} t={t} lang={lang} />
          ) : (
            <tr key={opt.name + Date.now()}>
              <td className='capitalize'>
                {lang === 'pt' && opt?.nameLocalizations
                  ? opt.nameLocalizations['pt-BR']
                  : opt.name}
              </td>
              <td>
                {lang === 'pt' && opt?.descriptionLocalizations
                  ? opt.descriptionLocalizations['pt-BR'].replace('【ＲＰＧ】', '')
                  : opt.description.replace('【ＲＰＧ】', '')}
              </td>
              <td
                data-tip
                data-for={opt.name + i}
                className={opt.choices && 'text-yellow-300 cursor-help'}
              >
                {opt.choices ? t('choices') : t(opt.type)}
                {opt.choices && (
                  <>
                    <ReactTooltip id={opt.name + i} effect='solid'>
                      <span>
                        {opt.choices
                          .map((a) =>
                            lang === 'pt' && a?.nameLocalizations
                              ? a.nameLocalizations['pt-BR']
                              : a.name,
                          )
                          .join(', ')}
                      </span>
                    </ReactTooltip>
                    <svg
                      className='inline ml-1'
                      xmlns='http://www.w3.org/2000/svg'
                      version='1.1'
                      id='Capa_1'
                      x='0px'
                      y='0px'
                      width='12px'
                      height='12px'
                      viewBox='0 0 93.936 93.936'
                    >
                      <g>
                        <path d='M80.179,13.758c-18.342-18.342-48.08-18.342-66.422,0c-18.342,18.341-18.342,48.08,0,66.421   c18.342,18.342,48.08,18.342,66.422,0C98.521,61.837,98.521,32.099,80.179,13.758z M44.144,83.117   c-4.057,0-7.001-3.071-7.001-7.305c0-4.291,2.987-7.404,7.102-7.404c4.123,0,7.001,3.044,7.001,7.404   C51.246,80.113,48.326,83.117,44.144,83.117z M54.73,44.921c-4.15,4.905-5.796,9.117-5.503,14.088l0.097,2.495   c0.011,0.062,0.017,0.125,0.017,0.188c0,0.58-0.47,1.051-1.05,1.051c-0.004-0.001-0.008-0.001-0.012,0h-7.867   c-0.549,0-1.005-0.423-1.047-0.97l-0.202-2.623c-0.676-6.082,1.508-12.218,6.494-18.202c4.319-5.087,6.816-8.865,6.816-13.145   c0-4.829-3.036-7.536-8.548-7.624c-3.403,0-7.242,1.171-9.534,2.913c-0.264,0.201-0.607,0.264-0.925,0.173   s-0.575-0.327-0.693-0.636l-2.42-6.354c-0.169-0.442-0.02-0.943,0.364-1.224c3.538-2.573,9.441-4.235,15.041-4.235   c12.36,0,17.894,7.975,17.894,15.877C63.652,33.765,59.785,38.919,54.73,44.921z' />
                      </g>
                    </svg>
                  </>
                )}
              </td>
              <td className='text-center'>{opt.required ? t('yes') : t('no')}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  </>
);

export default CommandTableRow;

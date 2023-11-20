import { TFunction } from 'next-i18next';
import { BichoGame } from '../services/api/api.types';
import { optionBetToText } from '../services/bicho';

const BichoPlayerCard = ({
  player,
  t,
}: {
  player: BichoGame['players'][number];
  t: TFunction;
}): JSX.Element => {
  const won = player.didWin;
  return (
    <div className={`${won ? 'bg-primary' : 'bg-secondary'} p-2 rounded-md`}>
      <p className='text-white'>{`ID: ${player.id}`}</p>
      <p className='text-white'>
        {t(won ? 'profit' : 'bet', {
          bet: player.bet,
          profit: player.profit,
          taxed: (((player.profit - player.taxed) / player.profit) * 100).toFixed(2),
        })}
      </p>
      <p className='text-white'>{t('choice', { option: optionBetToText(player.option, t) })}</p>
    </div>
  );
};

export { BichoPlayerCard };

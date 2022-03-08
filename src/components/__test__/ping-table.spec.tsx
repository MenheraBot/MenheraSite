import { render } from '@testing-library/react';

import { Shard } from '../../services/api/api.types';

import PingTable from '../shard-info';

const ping: Shard = {
  id: 0,
  memoryUsed: 62528632,
  uptime: 434218175,
  guilds: 1053,
  unavailable: 0,
  ping: 33,
  lastPingAt: 1633573679058,
  members: 124890,
  executedCommands: 6064,
  isOff: false,
  top: [
    {
      commandName: 'perfil',
      uses: 436,
    },
    {
      commandName: 'abracar',
      uses: 417,
    },
  ],
};

const pings: Shard[] = [
  ping,
  { ...ping, id: 1, ping: 84 },
  { ...ping, id: 2, isOff: true },
  { ...ping, id: 3, guilds: 0 },
];

describe('PingTable component', () => {
  it('Should be able to render correctly', () => {
    const { getByTestId } = render(<PingTable pings={pings} />);
    const firstShard = getByTestId('cluster-0');

    expect(firstShard).toBeTruthy();
  });

  it('Render the ping with yellow color if the ping is greater than 80', () => {
    const { getByTestId } = render(<PingTable pings={pings} />);
    const secondShardPing = getByTestId('cluster-ping-1');

    expect(secondShardPing).toBeTruthy();
    expect(secondShardPing).toHaveStyle({
      color: 'yellow',
    });
  });

  it('Render text off if isOff is true', () => {
    const { getByTestId } = render(<PingTable pings={pings} />);
    const thirdShardPing = getByTestId('cluster-ping-2');

    expect(thirdShardPing).toBeTruthy();
    expect(thirdShardPing).toHaveTextContent('OFF');
  });

  it('Render Available if there are no guilds or guilds is equal to 0', () => {
    const { getByTestId } = render(<PingTable pings={pings} />);
    const fourthShardPing = getByTestId('cluster-servers-3');

    expect(fourthShardPing).toBeTruthy();
    expect(fourthShardPing).toHaveTextContent('Available');
  });
});

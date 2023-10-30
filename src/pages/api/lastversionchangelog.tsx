import { NextApiRequest, NextApiResponse } from 'next';
import { fetchGithub } from '../../services/api/api';
import { parseChangelog } from '../../services/changelogParser';

export default async function handler(_: NextApiRequest, res: NextApiResponse): Promise<void> {
  res.statusCode = 200;

  res.setHeader('Content-Type', 'application/json');

  const github = await fetchGithub();

  const changelogVersion = parseChangelog(github, 'pt-BR');

  res.end(JSON.stringify(changelogVersion[0]));
}

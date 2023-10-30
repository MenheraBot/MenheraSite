import { NextApiRequest, NextApiResponse } from 'next';
import { fetchGithub } from '../../services/api/api';
import { parseChangelog } from '../../services/changelogParser';

let githubCache: null | string = null;

const getGithubData = async () => {
  if (githubCache) return githubCache;

  githubCache = await fetchGithub();

  setTimeout(() => {
    githubCache = null;
  }, 600000);

  return githubCache;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { version } = req.query;

  if (typeof version !== 'string') {
    res.statusCode = 400;
    res.end();
    return;
  }

  const github = await getGithubData();

  const changelogVersion = parseChangelog(github, 'pt-BR');

  const fromChangelog = changelogVersion.find((a) => a.versionName === version);

  if (!fromChangelog) {
    res.statusCode = 404;
    res.end();
    return;
  }

  res.statusCode = 200;

  res.end(fromChangelog);
}

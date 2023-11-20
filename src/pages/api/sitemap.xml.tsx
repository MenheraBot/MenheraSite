import { NextApiRequest, NextApiResponse } from 'next';
import { fetchGithub } from '../../services/api/api';
import { parseChangelog } from '../../services/changelogParser';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-control', 'stale-while-revalidate, maxage=3600');

  const pages = ['/index', '/commands', '/bicho', '/changelog', '/donate', '/legal'];

  const github = await fetchGithub();

  const changelogVersion = parseChangelog(github, 'pt-BR');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((path) => {
          const route = path === '/index' ? '' : path;

          return `
            <url>
                <loc>${`https://menherabot.xyz${route}`}</loc>
                <priority>${path === '/index' ? '1.0' : '0.9'}</priority>
            </url>
          `;
        })
        .join('')}
            <url>
              <loc>${`https://menherabot.xyz/#ranking`}</loc>
              <priority>0.8</priority>
            </url>
        ${changelogVersion
          .map((page, i) => {
            return `
              <url>
                  <loc>${`https://menherabot.xyz/changelog/${page.versionName}`}</loc>
                  <priority>${i === 0 ? '0.7' : i < 10 ? '0.3' : '0.1'}</priority>
              </url>
            `;
          })
          .join('')}

  </urlset>
  `;

  res.end(sitemap);
}

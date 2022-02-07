import { capitalize } from 'lodash';

export interface ChangelogVersion {
  versionName: string;
  date: string;
  info: {
    added?: string;
    changed?: string;
    deprecated?: string;
    removed?: string;
    fixed?: string;
    security?: string;
  };
}

export const parseChangelog = (changelog: string): ChangelogVersion[] => {
  const removeDescription = changelog.slice(267);
  const words = removeDescription.replace(/## \[/i, 'ä ## [').split('ä '); // 267 is the size of first text in CHANGELOG
  words.shift(); // Remove the empty String

  return words.map<ChangelogVersion>((v) => {
    const startingData = v.split('\n')[0].split(' ');
    const name = startingData[1].replace('[', '').replace(']', '');
    const date = startingData[3];
    const info: { [name: string]: string | null } = {
      added: null,
      changed: null,
      deprecated: null,
      removed: null,
      fixed: null,
      secutiry: null,
    };

    const restData = v.split('### ');
    restData.shift();

    restData.forEach((a) => {
      const text = a.split(' ');
      const infoName = text[0].replace('\n\n-', '').toLowerCase();
      if (!infoName) return;

      info[infoName] = text.join(' ').replace(`${capitalize(infoName)}\n\n`, '');
    });

    return { date: new Date(date).toLocaleDateString(), versionName: name, info };
  });
};

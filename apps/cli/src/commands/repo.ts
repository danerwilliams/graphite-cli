import { Argv } from 'yargs';

export const aliases = ['r'];
export const command = 'repo <command>';
export const desc =
  "Read or write Charcoal's configuration settings for the current repo. Run `gt repo --help` to learn more.";

export const builder = function (yargs: Argv): Argv {
  return yargs
    .commandDir('repo-commands', {
      extensions: ['js'],
    })
    .strict()
    .demandCommand();
};

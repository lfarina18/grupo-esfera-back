import { Injectable } from '@nestjs/common';

export const corpus = [
  'cantar',
  'cantaba',
  'cantando',
  'cantante',
  'cantado',
  'canto',
  'canta',
  'cantas',
  'cantamos',
  'cantarán',
  'bailar',
  'bailaba',
  'bailando',
  'bailado',
  'baile',
  'baila',
  'bailas',
  'bailamos',
  'bailarás',
  'bailarín',
];

export interface Pair {
  pair: string;
  count: number;
}

@Injectable()
export class AppService {
  getPairValues(corpus: string[], pair: string): Pair {
    const count = corpus.reduce((total, word) => {
      let occurrences = 0;
      let pos = word.indexOf(pair);

      while (pos !== -1) {
        occurrences++;
        pos = word.indexOf(pair, pos + 1);
      }

      return total + occurrences;
    }, 0);

    return { pair, count };
  }
}

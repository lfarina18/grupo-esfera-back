import { AppService } from '../src/app.service';

describe('AppService', () => {
  it('should return a 1 when the pair is "ca" ', () => {
    const appService = new AppService();
    const array = ['cantar'];
    const word = appService.getPairValues(array, 'ca');

    expect(word).toEqual({ pair: 'ca', count: 1 });
  });

  it('should return a 4 when the pair is "ca" ', () => {
    const appService = new AppService();
    const array = ['cantar', 'canto', 'canta', 'cantaba'];
    const word = appService.getPairValues(array, 'ca');

    expect(word).toEqual({ pair: 'ca', count: 4 });
  });

  it('should return a 5 when the pair is "ca"', () => {
    const appService = new AppService();
    const array = ['cantar', 'canto', 'canta', 'cantaba', 'contrataca'];
    const word = appService.getPairValues(array, 'ca');

    expect(word).toEqual({ pair: 'ca', count: 5 });
  });

  it('should return a 7 when the pair is "ca"', () => {
    const appService = new AppService();
    const array = ['cantar', 'canto', 'canta', 'cantaba', 'contrataca', 'caca'];
    const word = appService.getPairValues(array, 'ca');

    expect(word).toEqual({ pair: 'ca', count: 7 });
  });

  it('should return a 0 when the pair is "ca" ', () => {
    const appService = new AppService();
    const array = ['cantar', 'canto', 'canta', 'cantaba', 'contrataca', 'caca'];
    const word = appService.getPairValues(array, 'ca');

    expect(word).toEqual({ pair: 'ca', count: 7 });
  });
});

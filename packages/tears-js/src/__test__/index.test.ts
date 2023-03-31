import start from '../index';

describe('start', () => {
  it('use', () => {
    start((a: any) => {
      console.log(a,'a');
    });
  });
});
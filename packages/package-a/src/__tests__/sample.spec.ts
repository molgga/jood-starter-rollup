import { sum } from '../';

describe('테스트 샘플', () => {
  beforeEach(() => {
    console.log('hello beforeEach');
  });
  afterEach(() => {
    console.log('hello afterEach');
  });
  it('테스트가 실행되어야 합니다.', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

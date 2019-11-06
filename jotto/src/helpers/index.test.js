import { getLatterMatchCount } from '.';

describe('getLatterMatchCount', () => {
  const secretWord = 'party';
  test('returns correct count when there are no matching letters', () => {
    const letterMatchCount = getLatterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0);
  });
  test('returns correct count where there are 3 matching letters', () => {
    const letterMatchCount = getLatterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3);
  });
  test('returns correct count when there are duplicate letters in te guessed word', () => {
    const letterMatchCount = getLatterMatchCount('parka', secretWord);
    expect(letterMatchCount).toBe(3);
  });
});

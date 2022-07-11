import { Greeter } from '../index';
test('My Greeter', () => {
  expect(Greeter('Mido')).toBe('Hello Mido');
});

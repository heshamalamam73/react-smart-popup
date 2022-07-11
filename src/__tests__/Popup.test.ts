import { Popup } from '../index';

test('Popup actions', () => {
  expect(Popup.defaultProps).toStrictEqual({
    closeOnClickAway: true,
    closeOnPressEscape: true,
    width: '80%',
    height: '80%',
  });
});

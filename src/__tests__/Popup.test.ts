import { Popup } from '../index';

test('Popup actions', () => {
  expect(Popup.defaultProps).toStrictEqual({
    closeOnClickAway: true,
    closeOnPressEscape: true,
    width: '50%',
    height: '50%',
  });
});

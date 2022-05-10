import Validator from '../validator';

test('validating for the correct name', () => {
  const user = new Validator('uSeR');
  expect(user.validateUsername()).toEqual(true);
});
test('validating for the incorrect name,which includes with &', () => {
  const user = new Validator('uS&eR');
  expect(user.validateUsername()).toEqual(false);
});
test('validating for the incorrect name,which includes number in start ', () => {
  const user = new Validator('8uSeR');
  expect(user.validateUsername()).toEqual(false);
});
test('validating for the incorrect name,which includes number in end ', () => {
  const user = new Validator('uSeRs7');
  expect(user.validateUsername()).toEqual(false);
});
test('validating for the incorrect name,which includes number more then three ', () => {
  const user = new Validator('uSeR7898s');
  expect(user.validateUsername()).toEqual(false);
});

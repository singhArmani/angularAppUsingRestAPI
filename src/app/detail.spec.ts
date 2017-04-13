import {Detail} from './detail';

describe('Detail', () => {
  it('should create an instance', () => {
    expect(new Detail()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const detail = new Detail({
      firstName: 'Amandeep',
      lastName: 'Singh',
      age: 29,
      sex: 'male',
      role: 'Web developer'
    });
    expect(detail.firstName).toEqual('Amandeep');
    expect(detail.age).toEqual(29);
  });
});

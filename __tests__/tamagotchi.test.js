import { Name_Of_Class_Or_Function } from './../src/scripts.js';

describe('Title', () => {

  test('description of the test', () => {
    let newDayOfWeek = new DayOfWeek();
    expect(newDayOfWeek instanceof DayOfWeek).toEqual(true);

  });

  test('description of the test', () => {
    let newDayOfWeek = new DayOfWeek(2020, 2, 11);
    expect(newDayOfWeek.year).toEqual(2020);
    expect(newDayOfWeek.month).toEqual(2);
    expect(newDayOfWeek.day).toEqual(11);
  });

});
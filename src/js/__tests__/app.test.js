import { orderByProps, getSpecs } from '../app.js';

describe('testing app.js', () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

  test('sort not ordered', () => {
    const expected = [
      {key: 'attack', value: 80},
      {key: 'defence', value: 40},
      {key: 'health', value: 10},
      {key: 'level', value: 2},
      {key: 'name', value: 'мечник'}
    ];

    const result = orderByProps(obj);
    expect(result).toEqual(expected);
  });

  test('sort all ordered', () => {
    const ord = ['name', 'level', 'defence', 'attack', 'health'];
    const expected = [
      {key: 'name', value: 'мечник'},
      {key: 'level', value: 2},
      {key: 'defence', value: 40},
      {key: 'attack', value: 80},
      {key: 'health', value: 10}
    ];

    const result = orderByProps(obj, ord);
    expect(result).toEqual(expected);
  });

  test('sort partially ordered', () => {
    const ord = ['name', 'level'];
    const expected = [
      {key: 'name', value: 'мечник'},
      {key: 'level', value: 2},
      {key: 'attack', value: 80},
      {key: 'defence', value: 40},
      {key: 'health', value: 10}
    ];

    const result = orderByProps(obj, ord);
    expect(result).toEqual(expected);
  });

  test('sort with no object', () => {
    const expected = [];
    const result = orderByProps();
    expect(result).toEqual(expected);
  });

  test('deconstruct character for specials', () => {
    const data = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон'
        }, 
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...'

        }
      ]	
    }
    const expected = [
        {"id": 8,
        "name": "Двойной выстрел",
        "icon": "http://...",
        "description": "Двойной выстрел наносит двойной урон" },
        {"id": 9,
        "name": "Нокаутирующий удар",
        "icon": "http://...",
        "description": "Описание недоступно"
        },
    ];
    const result = getSpecs(data);

    expect(result).toEqual(expected);
  });

  test('deconstruct nothing for specials', () => {
    const expected = [];
    const result = getSpecs();
    expect(result).toEqual(expected);
  });

});

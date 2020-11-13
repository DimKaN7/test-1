export const placeholders = {
    basicInfo: [
      'Имя*',
      'Фамилия*',
      'Отчество',
      'Номер телефона*',
      'Дата рождения*',
      'Пол',
      'Группа клиентов*',
      'Лечащий врач',
      'Не отправлять СМС',
    ],
    addressInfo: [
      'Индекс',
      'Страна',
      'Область',
      'Город*',
      'Улица',
      'Дом',
    ],
    docInfo: [
      'Тип документа*',
      'Серия',
      'Номер',
      'Кем выдан',
      'Дата выдачи*',
    ],
};

export const clientGroups = [
  'VIP', 
  'Проблемные', 
  'ОМС',
];

export const doctors = [
  'Иванов', 
  'Захаров', 
  'Чернышева',
];

export const sexes = [
  'м',
  'ж',
];

export const docTypes = [
  'Паспорт', 
  'Свидетельство о рождении', 
  'Водительское удостоверение',
];

export const popupMessages = {
  creationSuccess: 'Новый клиент создан',
  enterNeededData: 'Введите необходимые данные',
}

export const errorMessages = {
  requiredField: 'Обязательное поле',
  wrongFieldFormat: 'Недопустимый формат поля',
  wrongCharFormat: `Поле содержит недопустимые символы`,
  wrongNumberFormat: 'Поле должно содержать только числа',
}
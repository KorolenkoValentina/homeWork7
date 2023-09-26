// Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання.
// Наприклад, тип значення для кожного ключа може бути число | рядок.

interface IMyObject {
  [key: string]: number | string;
}


// Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями.
//  Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.

interface IFunctionInterface {
 [key: string]: (...args: any[]) => any;
}


// Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву.
// Ключі повинні бути числами, а значення - певного типу.

interface IArraySimilarObject {
 [index: number]: string; 
}
  
 
  // const myArraySimilarObject: IArraySimilarObject = {
  //  0: "mango",
  //  1: "melon",
  //  2: "cherry",
  // };
  // const itemIndex0: string = myArraySimilarObject[0];


// Створіть інтерфейс з певними властивостями та індексною сигнатурою. 
// Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.

interface IMyInterface {
  name: string;
  age: number;
  [key: string]: any;
}

// const person: IMyInterface = {
//   name: "Valya",
//   age: 32,
//   gender: "female", 
//   city: "Ukrain", 
// };


// Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.


interface IndexSignatureInterface {
  [key: string]: string | number
  // [key: string]: any;
}

interface IExtendedInterface extends IndexSignatureInterface {
  specificProperty: string;
  anotherProperty: number;
}



// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє,
//  чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).

interface IThisObject {
  [key: string]: any;
}


function checkValues(obj: IThisObject, keys: string[], validator: (value: any) => boolean): boolean {
  for (const key of keys) {
    if (obj.hasOwnProperty(key) && !validator(obj[key])) {
      return false;
    }
  }
  return true;
}

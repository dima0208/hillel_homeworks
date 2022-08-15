const userInfo = [
    {
      index: 0,
      isActive: true,
      name: "John Doe",
      balance: "$2,226.60",
      phone: "+1 (840) 583-3207",
    },
    {
      index: 1,
      isActive: true,
      name: "Merry Hope",
      balance: "$2,778.05",
      phone: "+1 (856) 599-3450",
    },
    {
      index: 2,
      isActive: true,
      name: "Eugene Stakidis",
      balance: "$730.10",
      phone: "+1 (840) 333-5400",
    },
    {
      index: 2,
      isActive: true,
      name: "Stan Smith",
      balance: "$5,001.50",
      phone: "+1 (839) 121-3044",
    },
    {
      index: 3,
      isActive: true,
      name: "Johnatan Tape",
      balance: "$3,020.60",
      phone: "+1 (839) 003-5579",
    },
    {
      index: 4,
      isActive: true,
      name: "Aaron Big",
      balance: "$1,999.99",
      phone: "+1 (840) 033-6873",
    },
    {
      index: 5,
      isActive: true,
      name: "Artur Cheese",
      balance: "$2,545.00",
      phone: "+1 (840) 562-3790",
    },
  ];


const arrOne = [];
let sumBalance = 0;

  for (let i = 0; i < userInfo.length; i++) {

    // Приводим баланс к нормальному числу
    let str = userInfo[i].balance;
    let strTwo = str.slice(str.indexOf("$") + 1, str.indexOf("$") + 2);
    if (str.includes(",")) {
        strThree = str.slice(str.indexOf(",") + 1);
    } else {
        strThree = str.slice(str.indexOf("$") + 2);
    };
    let trueBalance = parseFloat(strTwo + strThree);

    //Суммируем все балансы пользователей
    sumBalance += trueBalance;

    // Отсеиваем счета менее 2000$ и получаем массив из телефонов тех пользователей, у кого баланс больше 2000$
    if (trueBalance >= 2000) {
        arrOne.push(userInfo[i].phone);
    };
  };
  console.log(`Сумма всех счетов пользвателей: ${sumBalance}$`);
  console.log(arrOne);




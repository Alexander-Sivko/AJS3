    "use script"
    
    // 1 //

    //Дві компанії вирішили об'єднатись, і для цього їм потрібно об'єднати базу даних своїх клієнтів.

    // У вас є 2 масиви рядків, у кожному з них – прізвища клієнтів.
    //  Створіть на їх основі один масив, який буде об'єднання двох масивів без повторюваних прізвищ клієнтів.

    const clients1 = ["Гилберт", "Сальваторе", "Пирс", "Соммерс", "Форбс", "Донован", "Беннет"];
    const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];

    const combinedClients = clients1.concat(clients2);

    function newClients() {
      const uniqueClients = [...new Set(combinedClients)];
      return uniqueClients;
    };

    console.log(newClients());


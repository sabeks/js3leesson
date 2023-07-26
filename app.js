// for (let i = 0; i <= 50; i++) {
//   console.log(i);
// }
// დავალება 2 whiles
// let i = 0;
// while (i <= 20) {
//   console.log(i);
//   i++;
// }
// radgan iyo i index magitom davacommite ro error ar amoegdo
// დავალება do whiles
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 30);

const numbers = [1, 2, 5, 7, 8, 10, 23, 24, 26];

for (let num = 0; num < numbers.length; num++) {
  const numb = numbers[num];
  if (numb % 2 === 0) {
    console.log(numb);
  }
}
const currentday = new Date().getDay();

switch (currentday) {
  case 0:
    console.log(`კვირა`);
    break;
  case 1:
    console.log(`ორშაბათი`);
    break;
  case 2:
    console.log(`სამშაბათი`);
    break;
  case 3:
    console.log(`ოთხშაბათი`);
    break;
  case 4:
    console.log(`ხუთშაბათი`);
    break;
  case 5:
    console.log(`პარასკები`);
    break;
  case 6:
    console.log(`შაბათი`);
    break;
}

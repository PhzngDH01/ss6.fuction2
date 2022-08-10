/////Bài 1: Viết chương trình cộng hai số (Sử dụng Return)

// function tong() {
//   let a = Number(prompt("Nhập a"));
//   let b = Number(prompt("Nhập b"));
//   let tong = parseInt(a) + b;
//   alert(` Tổng a + b là ${tong}`);
//   return;
// }
// tong();

////// Bài 2: Tính tổng các số lẻ trong mảng. Sử dụng Return

// array = [1, 2, 3, 4, 5, 6];
// function tongle() {
//   tong = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       tong = tong + array[i];
//     }
//   }
//   alert(` Tổng các số lẻ là ${tong}`);
//   return;
// }
// tongle();

////// Bài 3 : Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn
//        tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng. Nếu giá trị của
//      tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.
// let a = Number(prompt("Nhập a"));
// let b = Number(prompt("Nhập b"));
// function namea(a, b) {
//   if (a > b) {
//     alert("Giá trị của a lớn hơn b");
//   } else {
//     let c = a + b;
//     alert(` Tổng của hai tham số là ${c}`);
//   }
//   return;
// }
// namea(a, b);

////// Bài 4 :

// function addNumbers() {
//   firstNum = 4;
//   secondNum = 8;
//   result = firstNum + secondNum;
//   alert(` Sau khi gọi hàm giá trị result là ${result}`);
//   return result;
// }
// result = 0;
// alert(` Trước khi gọi hàm giá trị result là ${result}`);
// result = addNumbers();

////// Bài 5:

//Chuyển đổi từ feet sang meters:

// function footToMeter() {
//   let feet = prompt("Nhập feet để chuyển sang mester");
//   mester = feet * 0.305;
//   alert(` Giá trị feet đổi sang mester là : ${mester}`);
// }
// footToMeter();

//Chuyển đổi từ  meters sang feet:

// function mesterToMeter() {
//   let mester = prompt("Nhập mester để chuyển sang feet");
//   feet = mester * 3.279;
//   alert(` Giá trị mester đổi sang feet là : ${feet}`);
// }
// mesterToMeter();

/////// Bài 6 :
//6.1

////6.1
// let num = prompt("nhap n");
// function isPrime(num) {
//   if (num < 2) return "Không phải là số nguyên tố";
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) return "Không phải là số nguyên tố";
//   }

//   return "Là số nguyên tố";
// }
// isPrime(num);
// alert(isPrime(num));

// /// 6.2
// for (let i = 0; i < 100; i++) {
//   if (isPrime(i)) console.log(i);
// }

// ! EX1: Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + 3 +...+ n > 10000
/* 
todo: Mô Hình 3 Khối
* input: không có
* bước xử lý: 
*   1. Tạo một biến sum giữ kết quả tổng các giá trị từ 1 đến n và một biến result để chứa kết quả số n cần tìm
*   2. Chạy 1 vòng lặp với i tăng dần từ 1 và điều kiện của vòng lặp sẽ là biến tổng các giá trị sum <= 10000
*   3. Trong vòng lặp sẽ cho biến sum cộng dồn giá trị i ở mỗi vòng lặp; biến result sẽ lấy giá trị i ở mỗi vòng lặp
*   4. Khi giá trị sum lớn hơn 10000, vòng lặp sẽ kết thúc và biến result sẽ mang giá trị của biến i lớn nhất mà sum <= 10000 cũng là giá trị n mà ta cần tìm 
* output: số n thoả đề bài và in ra màn hình
*/

function ex1() {
  var sum = 0;
  var result = 0;
  for (var i = 1; sum <= 10000; i++) {
    sum += i;
    result = i;
  }
  document.querySelector(".ex1 .result span:nth-child(2)").innerHTML = result;
}

// ! EX2: Viết chương trình nhập vào 2 số x, n tính tổng S(n) = x + x^2 + x^3 +...+ x^n (Sử dụng vòng lặp và hàm)
/* 
todo: Mô Hình 3 Khối
* input: Số x và số n
* bước xử lý: 
*   1. Tạo sự kiện onclick ở button
*   2. Lấy số x và số n người dùng nhập vào
*   2. Tạo biến chứa kết quả result = 0
*   3. Chạy vòng lặp với biến i tăng dần từ 1 đến n và điều kiện chạy là i <= n
*   4. Trong vòng lặp thực hiện cộng dồn biến result với Math.pow(số x, biến i ở mỗi vòng lặp) <=> result += x^i
* output: tổng s(n) theo số x và số n và in ra màn hình
*/

function ex2() {
  // todo: take user data
  var x_number = +document.getElementById("X").value;
  var n_number = +document.getElementById("N").value;

  // todo: loop
  var result = 0;
  for (var i = 1; i <= n_number; i++) {
    result += Math.pow(x_number, i);
  }

  // todo: print result
  document.querySelector(".ex2 .result .text-success").innerHTML = result;
}

// ! EX3: Nhập vào n. Tính giai thừa 1 * 2 *...* n
/* 
todo: Mô Hình 3 Khối
* input: số n do người dùng nhập vào
* bước xử lý: 
*   1. tạo sự kiện onclick trên button
*   2. lấy giá trị số n mà người dùng nhập
*   3. kiểm tra giá trị số n: n >= 0
*   4. chia trường hợp nếu n = 0 thì 0! sẽ bằng 1. Ngược lại nếu n != 0 thì chạy vòng lặp với biến i tăng dần từ 1 đến n
*   5. trong vòng lặp thực hiện nhân dồn giá trị i cho biến result khởi tạo trước vòng lặp
* output: giai thừa của số n và in ra màn hình
*/

function ex3() {
  // todo: take user data
  var n_number = +document.getElementById("ex3-n").value;
  var result = 1;

  // todo: check valid
  if (n_number < 0) {
    alert("Giá trị số n vừa nhập ở bài 3 không hợp lệ!");
    // todo: clear previous result
    document.querySelector(".ex3 .result .text-success").innerHTML = "";
    return;
  } else if (n_number > 0) {
    // todo: loop
    for (var i = 1; i <= n_number; i++) {
      result *= i;
    }
  }

  // todo: print result
  document.querySelector(".ex3 .result .text-success").innerHTML = result;
}

// ! EX4: Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div. Nếu div vào vị trí chẵn thì bg màu đỏ, lẻ thì bg màu xanh dương
/* 
todo: Mô Hình 3 Khối
* input: không có
* bước xử lý: 
*   1. tạo sự kiện onclick trên thẻ button
*   2. khỏi tạo biến result chứa kết quả
*   3. chạy vòng lặp với biến i tăng dần từ 1 đến 10
*   4. trong vòng lặp thực hiện if-else. Nếu:
*       - i % 2 == 0: result += `<div class="bg-danger">div thứ ${i}:</div>`
*       - i % 2 == 1: result += `<div class="bg-info">div thứ ${i}:</div>`
*   5. getElementById đến thẻ rồi innerHTML để in kết quả ra màn hình
* output: 10 thẻ div màu đỏ và xanh dương xen kẽ
*/

function ex4() {
  // todo: initiate result
  var result = "";

  // todo: loop
  for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      result += `<div class="bg-danger text-center text-white fst-italic py-3 my-3">div-nth-${i}</div>`;
    } else {
      result += `<div class="bg-info text-center text-white fst-italic py-3 my-3">div-nth-${i}</div>`;
    }
  }

  // todo: print result
  document.getElementById("drawDiv").innerHTML = result;
}

// ! EX5: Viết chương trình có một ô input, một button. Khi click vào button thì in ra các số nguyên tố từ 1 tới giá trị của ô input
/* 
todo: Mô Hình 3 Khối
* input: số n
* bước xử lý: 
*   1. tạo sự kiện onclick trên button
*   2. lấy giá trị số n từ người dùng
*   3. khởi tạo biến result để chứa dãy số nguyên tố cần tìm
*   4. kiểm tra giá trị n của người dùng: n >= 2 vì số nguyên tố nhỏ nhất là 2
*   5. chạy vòng lặp với biến i tăng dần từ 2 đến số n
*   6. trong vòng lặp thực hiện:
*     - Khởi tạo biến count để đếm số lần chia hết
*     - chạy vòng lặp thứ 2 với biến j tăng dần từ 1 đến biến i / 2 để đếm xem có bao nhiêu số j mà i có thể chia hết <=> i % j == 0 thì biến count + 1 
*     - Hết vòng lặp biến j nếu count == 1 thì số i hiện tại sẽ là số nguyên tố. Khi đó result += i 
*   7. getElementById đến thẻ rồi innerHTML để in kết quả ra màn hình
* output: dãy số nguyên tố từ 1 đến số n
*/

function ex5() {
  // todo: take n
  var n_number = +document.getElementById("ex5-n").value;
  var result = "";

  // todo: check valid
  if (n_number < 2) {
    alert("Giá trị số n vừa nhập ở bài 5 không hợp lệ!");
  } else {
    // todo: loop
    for (var i = 2; i <= n_number; i++) {
      var count = 0;
      for (var j = 1; j <= Math.floor(i / 2); j++) {
        if (i % j == 0) {
          count++;
        }
      }
      if (count == 1) {
        result += `
        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
          <p class="text-white bg-warning rounded-5 py-3 text-center shadow">${i}</p>
        </div>
      `;
      }
    }
  }

  // todo: print result
  document.getElementById("listOut").innerHTML = result;
}

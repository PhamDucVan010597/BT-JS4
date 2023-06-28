// BÀI 1
document.getElementById("tinhbai1").onclick = function () {
  var min = 0;
  var max = 0;
  var mam = 0;

  var n1 = document.getElementById("sothunhat").value * 1;
  var n2 = document.getElementById("sothuhai").value * 1;
  var n3 = document.getElementById("sothuba").value * 1;
  if (n1 > n2 && n1 > n3) {
    max = n1;
  } else if (n2 > n1 && n2 > n3) {
    max = n2;
  } else {
    max = n3;
  }

  if (n1 <= n2 && n1 < n3) {
    min = n1;
  } else if (n2 <= n1 && n2 < n3) {
    min = n2;
  } else {
    min = n3;
  }
  if ((n1 >= n2 && n1 <= n3) || (n1 >= n3 && n1 <= n2)) {
    mam = n1;
  } else if ((n2 > n3 && n2 < n1) || (n2 > n1 && n2 < n3)) {
    mam = n2;
  } else {
    mam = n3;
  }

  var ketQuaBai1 = `${min},${mam},${max}`;
  document.getElementById("ketquabai1").innerHTML = ketQuaBai1;
};

// BÀI 2
document.getElementById("chaohoi").onclick = function () {
  var nguoiChao = document.getElementById("nguoichao").value * 1;
  switch (nguoiChao) {
    case 1:
      nguoiChao = "Hoàng thượng vạn tuế !!!";
      break;

    case 2:
      nguoiChao = "Bái kiến mẫu hậu !!!";
      break;
    case 3:
      nguoiChao = "Hi Đại ca!!";
      break;
    case 4:
      nguoiChao = "Ê con kia, quét nhà chưa?";
  }
  document.getElementById("ketquabai2").innerHTML = nguoiChao;
};

// BÀI 3
document.getElementById("bai3").onclick = function () {
  var soThuNhat = document.getElementById("n1").value * 1;
  var soThuHai = document.getElementById("n2").value * 1;
  var soThuBa = document.getElementById("n3").value * 1;
  var soChan = 0;
  var soLe = 0;
  if (soThuNhat % 2 == 0) {
    soChan += 1;
  } else {
    soLe += 1;
  }

  if (soThuHai % 2 == 0) {
    soChan += 1;
  } else {
    soLe += 1;
  }

  if (soThuBa % 2 == 0) {
    soChan += 1;
  } else {
    soLe += 1;
  }
  var ketQua3 = ` Số chẵn: ${soChan} Số lẻ: ${soLe} `;
  document.getElementById("ketquabai3").innerHTML = ketQua3;
};

// BÀI 4
document.getElementById("btn4").onclick = function () {
  var canhA = document.getElementById("canha").value * 1;
  var canhB = document.getElementById("canhb").value * 1;
  var canhC = document.getElementById("canhc").value * 1;
  var ketQuaBai4 = "";
  if (canhA == canhB && canhA != canhC) {
    ketQuaBai4 = "Tam giác ABC là tam giác cân";
  } else if (canhA == canhB && canhA == canhC) {
    ketQuaBai4 = "Tam giác ABC là tam giác đều";
  } else if (canhC * canhC == canhA * canhA + canhB * canhB) {
    ketQuaBai4 = "Tam giác ABC là tam giác vuông";
  } else {
    ketQuaBai4 = "Tam giác ABC là tam giác thường";
  }

  document.getElementById("ketquabai4").innerHTML = ketQuaBai4;
};

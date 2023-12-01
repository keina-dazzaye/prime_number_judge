let primeCount = 0;
let count = 0;
let divisionNum = 5;
let checkDivisionNum = 5;
function validate() {
  let isPrime = true;

  let text = document.getElementById("textarea").value;
  if (isNaN(text) || !text) {
    alert("半角数字を入れてね！");
    return;
  } else if (text < 0) {
    alert("マイナスになる数字は入れないでね！");
    return;
  } else if (Number.isInteger(Number(text)) === false) {
    alert("小数は判定できないよ！");
    return;
  }

  //ここに計算処理を入れる

  // console.log(typeof text);

  const newElement = document.createElement("p"); //pタグを作成
  if (Number(text) <= 1) {
    alert("2以上の数字を入れてね！");
    return;
  }

  if (text <= 3) {
    isPrime = true;
  } else if (text % 2 === 0) {
    isPrime = false;
    divisionNum = 2;
  } else if (text % 3 === 0) {
    isPrime = false;
    divisionNum = 3;
  } else {
    for (let i = 5; Math.sqrt(i) <= text; i += 6) {
      if (text % i === 0) {
        isPrime = false;
        divisionNum = i;
        break;
      }
      if (text % (i + 2) === 0) {
        isPrime = false;
        divisionNum = i + 2;
        break;
      }
    }
  }

  if (!isPrime) {
    newElement.innerHTML = `これは素数ではありません→${text}　${divisionNum}で割り切れます`;
  } else {
    primeCount++;
    newElement.innerHTML = `これは${primeCount}回目の素数です→${text}`;
  }
  document.getElementById("output").prepend(newElement);
  divisionNum = undefined;
}

// カウンターの処理 ここをisPrimeのときにincriment()を使わず勝手にcount++で値を更新できるようにしたい

function incriment() {
  const firstBomberCount = document.getElementById("bomberCount");

  count++;
  firstBomberCount.innerHTML = `${count}回`;
}

//カウントを減らす処理
function reduce() {
  const firstBomberCount = document.getElementById("bomberCount");
  if (count > 0) {
    count--;
  }
  firstBomberCount.innerHTML = `${count}回`;
}

//カウントリセットの処理
function reset() {
  const firstBomberCount = document.getElementById("bomberCount");

  let result = window.confirm("爆発回数をリセットしてもいいですか？");
  if (result) {
    count = 0;
    firstBomberCount.innerHTML = `${count}回`;
  }
}

//全リセットの処理

function textareaDelete() {
  let deleteResult = window.confirm(
    "履歴をリセットしますか？　爆発回数はそのまま残ります。"
  );
  if (deleteResult) {
    document.getElementById("output").innerHTML = "";
    document.getElementById("textarea").value = "";
  }
}

// //textという変数がテキストとして表示される。また`と$の間に●という文字列を追加

////textという変数がテキストとして表示される。また`と$の間に●という文字列を追加

//document.getElementById("output").textContent = `${inputTextarea}`;

//document.getElementById("textarea").onclick = function (event) {
// let inputTextarea = document.getElementById("textarea").inputArea.value;
// document.getElementById("output").textContent = `${inputTextarea}`;
//};

//isPrimeがtrueのとき、bomberCountも連動させたい
//bomberCountは1づつ減らせるようにした

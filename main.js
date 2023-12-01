let primeCount = 0;
let count = 0;
let divisionNum = 2;
function validate() {
  let isPrime = true;

  let text = document.getElementById("textarea").value;
  if (isNaN(text) || !text) {
    alert("半角数字を入れてね！");
    return;
  }

  //ここに計算処理を入れる

  // console.log(typeof text);

  const newElement = document.createElement("p"); //pタグを作成
  if (text % 2 === 0) {
    // textを2で割ったときあまりが0になったら素数ではないのでfalseを出す
    isPrime = false;
  } else {
    for (let i = 2; i < text; i++) {
      //   if (i + 1 === Number(text)) {
      //     //　i+1がtextと同じになったときにtrueを出してループを終了する
      //     isPrime = true;
      //     break;
      //   }
      if (text % i === 0) {
        // textが割り切れたときにfalseを出してループを終了する
        isPrime = false;
        divisionNum = i; //割り切れた数を入れる
        break;
      }
    }
  }
  if (!isPrime) {
    newElement.innerHTML = `これは素数ではありません→${text} 少なくとも${divisionNum}で割り切れます`;
  } else if (isPrime) {
    primeCount++;
    newElement.innerHTML = `これは${primeCount}回目の素数です→${text}`;
  }

  document.getElementById("output").prepend(newElement);
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

  count--;
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
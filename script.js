document.addEventListener('DOMContentLoaded', () => {
  // HTMLのid値を使って以下のDOM要素を取得
  const downbutton = document.getElementById('down');
  const upbutton = document.getElementById('up');
  const text = document.getElementById('textbox');
  const reset = document.getElementById('reset');

  const diffcolor = document.getElementById('prob-select');
  const apearnumber = document.getElementById('n-textbox');
  const appearresult = document.getElementById('prob-textbox');

  // 確率を計算して表示する関数
  function calculateProbability() {
    const count = parseInt(text.value, 10);
    let probability = 0;

    if (count > 0) {
      probability = (1 - Math.pow((diffcolor.value - 1) / diffcolor.value, count)) * 100;
    }
    
    appearresult.textContent = probability.toFixed(3);
  }

  // 色違い確率をプルダウンで選択するたびに値に代入する
  diffcolor.addEventListener('change', () => {
    calculateProbability();
  });

  // ボタンが押されたらカウント減
  downbutton.addEventListener('click', () => {
    if (text.value > 0) {
      text.value--;
    }
    apearnumber.textContent = text.value;
    calculateProbability();
  });

  // ボタンが押されたらカウント増
  upbutton.addEventListener('click', () => {
    text.value++;
    apearnumber.textContent = text.value;
    calculateProbability();
  });

  // リセットボタンが押されたら0に戻る
  reset.addEventListener('click', () => {
    text.value = 0;
    apearnumber.textContent = text.value;
    calculateProbability();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  //HTMLのid値を使って以下のDOM要素を取得
  const downbutton = document.getElementById('down');
  const upbutton = document.getElementById('up');
  const text = document.getElementById('textbox');
  const reset = document.getElementById('reset');

  const diffcolor = document.getElementById('prob-select');
  const apearnumber = document.getElementById('n-textbox');
  const appearresult = document.getElementById('prob-textbox');

  // ボタンが押されたらカウント減
  downbutton.addEventListener('click', () => {
    if (text.value > 0) {
      text.value--;
    }
    apearnumber.textContent=text.value;
    // 色違い確率ボタンが押されたら結果を代入する
   appearresult.textContent = 1-(((diffcolor.value -1)/diffcolor.value)**text.value);
  });

  // ボタンが押されたらカウント増
  upbutton.addEventListener('click', () => {
    text.value++;
    apearnumber.textContent=text.value;
    // 色違い確率ボタンが押されたら結果を代入する
    const probability = 1-(((diffcolor.value -1)/diffcolor.value)**text.value)
    appearresult.textContent = (probability *100).toFixed(5);
  });

  // リセットボタンが押されたら0に戻る
  reset.addEventListener('click', () => {
    text.value = 0;
    apearnumber.textContent=text.value;
    // 色違い確率ボタンが押されたら結果を代入する
    const probability = 1-(((diffcolor.value -1)/diffcolor.value)**text.value)
    appearresult.textContent = (probability *100).toFixed(5);
  });
});
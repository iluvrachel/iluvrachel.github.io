/* 首屏描述文字：每次刷新随机显示一句 */
(function () {
  // ===== 在这里维护你的预设文字（想加多少条都可以）=====
  var TEXTS = [
    '浅い眠りの中を 猫が歩いている',
    'くぁwせdrftgyふじこlp',
    'Hanezeve Caradhina'
  ]
  // ==================================================

  function applyRandomDescription() {
    var descBox = document.querySelector('.first-screen-content .description')
    if (!descBox) return

    var descItems = descBox.querySelectorAll('.desc-item')
    if (!descItems.length) return

    var picked = TEXTS[Math.floor(Math.random() * TEXTS.length)]

    descItems.forEach(function (item, index) {
      if (index === 0) {
        // 第一行显示随机到的那句
        var desc = item.querySelector('.desc')
        if (desc) desc.textContent = picked
      } else {
        // 如果主题配置里用 “||” 写了多行，这里只保留第一行
        item.remove()
      }
    })
  }

  // 主题的打字机动画会在 DOMContentLoaded 之后约 300ms 读取 .desc 的文字，
  // 这里提前把文字换掉，动画就会直接打出随机到的这一句。
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', applyRandomDescription)
  } else {
    applyRandomDescription()
  }
})()

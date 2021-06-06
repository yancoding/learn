const show = content => {
  document.getElementById('app').innerText = `Hello, ${content}`
}

// 使用commonjs模块导出
module.exports = show

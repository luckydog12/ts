class Food {
  element: HTMLElement

  constructor() {
    // ! 去空
    this.element = document.getElementById('food')! 
  }

  get X() {
    return this.element.offsetLeft
  }

  get Y() {
    return this.element.offsetTop
  }

  // 修改食物位置
  change() {
    // 生成随机位置 10的整数 
    // left 0-290     top 0-290
    let top =  Math.round(Math.random() * 29) * 10
    let left =  Math.round(Math.random() * 29) * 10
    this.element.style.top = top + 'px'
    this.element.style.left = left + 'px' 
  }
}

export default Food
class Snake {
  // 获取蛇的容器
  element: HTMLElement
  // 蛇头
  head: HTMLElement
  // 身体 (包括蛇头)
  body: HTMLCollection

  constructor() {
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div') as HTMLElement
    this.body =  this.element.getElementsByTagName('div')
  }

  // 获取蛇的坐标（蛇头坐标）
  get X() {
    return this.head.offsetLeft
  }

  get Y() {
    return this.head.offsetTop
  }

  // 设置蛇头的坐标
  set X(val) {
    if (this.X === val) {
      return
    }
    if ( val < 0 || val > 290) {
      throw new Error('蛇撞墙了')
    }
    if (this.body[1] && (this.body[1] as HTMLElement).offsetLeft === val) {
      // 如果发生了掉头 让蛇向反方向继续移动
      if (val > this.X) {
        // 如果新值val大于旧值x 说明蛇在向右走 此时发生掉头 应该使蛇继续向左走
        val = this.X - 10
      } else {
        val = this.X + 10
      }
    }
    this.moveBody()
    this.head.style.left = val + 'px'
    this.checkHeadBody()
  }

  set Y(val) {
    if (this.Y === val) {
      return
    }
    if ( val < 0 || val > 290) {
      throw new Error('蛇撞墙了')
    }
    if (this.body[1] && (this.body[1] as HTMLElement).offsetTop === val) {
      // 如果发生了掉头 让蛇向反方向继续移动
      if (val > this.Y) {
        // 如果新值val大于旧值y 说明蛇在向下走 此时发生掉头 应该使蛇继续向上走
        val = this.Y - 10
      } else {
        val = this.Y + 10
      }
    }
    this.moveBody()
    this.head.style.top = val + 'px'
    this.checkHeadBody()
  }

  // 蛇添加身体的方法
  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
  }

  // 蛇身体移动的方法
  moveBody() {
    // 将后面的身体设置为前边身体的位置
    for( let i = this.body.length - 1; i > 0; i-- ) {
      // 获取前面身体的位置
      let X = (this.body[i - 1] as HTMLElement).offsetLeft
      let Y = (this.body[i - 1] as HTMLElement).offsetTop;

      (this.body[i] as HTMLElement).style.left = X + "px";
      (this.body[i] as HTMLElement).style.top = Y + 'px'
    } 
  }

  checkHeadBody() {
    // 获取所有的身体 检查是否和蛇头坐标重叠
    for (let i=1; i<this.body.length; i++) {
      let bd = this.body[i] as HTMLElement
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        throw new Error('撞到自己了')
      }
    }
  }
}

export default Snake
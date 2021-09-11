// 引入其他的类
import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';


// 游戏控制器 控制其他所有类
class GameControl {
  snake: Snake
  food: Food
  scorePanel: ScorePanel
  // 存储键盘按键的方向
  direction: string = ''
  // 记录游戏是否结束
  isLive: boolean = true
  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel(10,1)

    this.init()
  }

  // 游戏初始化 调用后游戏即开始
  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run()
  }

  // 键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key
  }

  // 控制蛇移动的方法
  run() {
    // 根据this.direction使蛇的位置改变
    // 获取蛇现在的坐标
    let X = this.snake.X
    let Y = this.snake.Y

    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -=10
        break
      case "ArrowDown":
      case "Down":
        Y +=10
        break
      case "ArrowLeft":
      case "Left":
        X -= 10
        break
      case "ArrowRight":
      case "Right":
        X += 10
        break
    }

    this.checkEat(X, Y)

    try {
      this.snake.X = X
      this.snake.Y = Y 
    } catch (err) {
      this.isLive = false
    }

    this.isLive && setTimeout( this.run.bind(this), 300 - ( this.scorePanel.level -1 ) * 30);
  }

  // 检测蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.change()
      this.scorePanel.addScore()
      this.snake.addBody()
    }
  }
}

export default GameControl
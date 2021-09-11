class ScorePanel {
  score = 0
  level = 1
  // 最大等级
  maxLevel: number
  // 获得多少分升级
  upScore: number
  scoreEle: HTMLElement
  levelEle: HTMLElement

  constructor( maxLevel: number = 10, upScore: number = 10 ) {
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  // 加分方法
  addScore() {
    this.scoreEle.innerText = ++this.score + ''
    if ( this.score%this.upScore === 0 ) {
      this.levelUp()
    }
  }

  // 提升等级
  levelUp() {
    if ( this.level < this.maxLevel ) {
      this.levelEle.innerText = ++this.level + ''
    }
  }
}

export default ScorePanel
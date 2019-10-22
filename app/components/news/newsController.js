export default class NewsController {
  constructor() {
  }

  openNews() {
    window.open('https://twitter.com/home');
    this.openNews1()
  }

  openNews1() {
    window.open('https://www.rt.com/news/');
    this.openNews2()
  }

  openNews2() {
    window.open('https://www.drudgereport.com/');
    this.openNews3()
  }

  openNews3() {
    window.open('https://www.zerohedge.com/');
  }
}
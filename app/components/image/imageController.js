import ImageService from "./imageService.js";

const _is = new ImageService()

function drawImg() {
  let img = _is.ImgApi
  // @ts-ignore
  document.querySelector('#bg-image').style.backgroundImage = `url(${img})`;
}


//Public
export default class WeatherController {
  constructor() {
    _is.addSubscriber('img', drawImg)
    _is.getImgData()
  }

  nextImg() {
    _is.nextImg()
  }

}


// @ts-ignore
const _imgApi = axios.create({
	//baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	//baseURL: 'https://cors-anywhere.herokuapp.com/https://picsum.photos/v2/list?limit=100',
	baseURL: 'https://picsum.photos/v2/list?limit=115',
	timeout: 15000
});

let _state = {
	img: '',
	allImages: []
}

let _subscribers = {
	img: [],
	allImages: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}


//Public
export default class ImageService {


	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	get ImgApi() {
		return _state.img
	}

	get AllImages() {
		return _state.allImages
	}

	getImgData() {
		let i = this.getRandom()
		_imgApi.get()
			.then(res => {
				_setState('allImages', res.data)
				_setState('img', res.data[i].download_url)
			})
	}

	nextImg() {
		let i = this.getRandom()
		_setState('img', this.AllImages[i].download_url)
	}

	getRandom() {
		return Math.floor((Math.random() * 100) + 1)
	}

}

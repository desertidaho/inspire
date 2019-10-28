// @ts-ignore
const _imgApi = axios.create({
	//baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	baseURL: 'https://cors-anywhere.herokuapp.com/https://picsum.photos/v2/list',
	timeout: 15000
});

let _state = {
	img: ''
}

let _subscribers = {
	img: []
}

function setState(prop, data) {
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

	getImgData() {
		_imgApi.get()
			.then(res => {
				setState('img', res.data[1].download_url)
			})
	}

	nextImg() {
		this.getImgData()
	}

}

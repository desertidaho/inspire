// @ts-ignore
const _imgApi = axios.create({
	//baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	baseURL: 'https://cors-anywhere.herokuapp.com/https://picsum.photos/v2/list?limit=100',
	timeout: 15000
});

let _state = {
	img: ''
}

let _subscribers = {
	img: []
}

let i = -1;

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
		i = Math.floor((Math.random() * 100) + 1);
		_imgApi.get()
			.then(res => {
				setState('img', res.data[i].download_url)
			})
	}

	nextImg() {
		this.getImgData()
	}

}

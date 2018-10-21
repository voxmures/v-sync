import install from './install';

export default class VSync {
	static install;
	options = {};

	constructor (options) { 
		this.options = options;
	}
}

VSync.install = install;
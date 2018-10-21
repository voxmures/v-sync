import { Game, Container, Sprite } from './components';

export let _Vue;

export default function install (Vue) {
	if (install.installed && _Vue === Vue) return;
	install.installed = true;

	_Vue = Vue;

	Vue.component('Game', Game);
	Vue.component('Container', Container);
	Vue.component('Sprite', Sprite);
}
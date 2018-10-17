import Game from './components/game';

export let _Vue;

export function install (Vue) {
	if (install.installed && _Vue === Vue) return;
	install.installed = true;

	_Vue = Vue;

	Vue.component('Game', Game);
}
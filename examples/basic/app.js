import Vue from 'vue';
import VSync from '@voxmures/v-sync';

Vue.use(VSync);

new Vue({
	template: `
		<div id="app">
			<Game></Game>
		</div>
	`
}).$mount('#app');
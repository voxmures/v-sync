import Vue from 'vue';
import VSync from '@voxmures/v-sync';

Vue.use(VSync);

const assets = [
	{ name: 'symbol0', url: '/static/images/symbol0.png' },
	{ name: 'symbol1', url: '/static/images/symbol1.png' },
	{ name: 'symbol2', url: '/static/images/symbol2.png' }
];

const REEL_WIDTH = 175;
const SYMBOL_SIZE = 155;
new Vue({
	data () {
		return {
			assets: assets,
			REEL_WIDTH: REEL_WIDTH,
			SYMBOL_SIZE: SYMBOL_SIZE
		}
	},
	methods: {
		randomize () {
			return this.assets[Math.floor(Math.random() * this.assets.length)].url;
		}
	},
	template: `
		<div id="app">
			<Game>
				<template v-for="i in 3">
					<Container :x="REEL_WIDTH * (i - 1)">
						<template v-for="j in 4">
							<Sprite 
								:src="randomize()"
								:y="SYMBOL_SIZE * (j - 1)">
							</Sprite>
						</template>
					</Container>
				</template>
			</Game>
		</div>
	`
}).$mount('#app');
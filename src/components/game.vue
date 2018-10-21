<template>
	<div name="game">
		<canvas ref="canvas"></canvas>
		<slot></slot>
	</div>
</template>

<script>
import Vue from 'vue';
import * as PIXI from 'pixi.js';

export default {
	name: 'Game',
	props: {
		width: {
			type: Number
		},
		height: {
			type: Number
		},
		// preload: {
		// 	type: Array
		// }
	},
	data () {
		return {
			_width: 0,
			_height: 0,
			app: null,
			bus: new Vue()
		}
	},
	provide() {
		const context = {};

		Object.defineProperty(context, 'app', {
			enumerable: true,
			writtable: false,
			get: () => this.app
		});

		Object.defineProperty(context, 'bus', {
			enumerable: true,
			writtable: false,
			get: () => this.bus
		});

		return { context };
	},

	// Lifecycle Hooks
	mounted () {
		this.canvas = this.$refs['canvas'];
		const w = this.width || this.canvas.offsetWidth;
		const h = this.height || this.canvas.offsetHeight;

		this._width = w;
		this._height = h;

		this.app = new PIXI.Application(this._width, this._height, {
			view: this.canvas,
			backgroundColor: 0x000000
		});

		this.bus.$emit('READY');
	}
};
</script>

<style scoped>
canvas {
	width: 100%;
	height: 100%;
}
</style>
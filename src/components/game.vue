<template>
	<div name="game">
		<canvas ref="canvas"></canvas>
	</div>
</template>

<script>
import * as PIXI from 'pixi.js';

export default {
	name: 'Game',
	props: {
		width: {
			type: Number,
			default: 800
		},
		height: {
			type: Number,
			default: 600
		}
	},
	data () {
		return {
			canvas: null,
			renderer: null
		}
	},
	// Lifecycle Hooks
	mounted () {
		this.canvas = this.$refs['canvas'];
		this.renderer = new PIXI.autoDetectRenderer({ view: this.canvas });
	}
};
</script>
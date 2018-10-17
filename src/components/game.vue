<template>
	<div name="game">
		<canvas ref="canvas"></canvas>
	</div>
</template>

<script>
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
			canvas: null
		}
	},
	// Lifecycle Hooks
	mounted () {
		this.canvas = this.$refs['canvas'];
	}
};
</script>
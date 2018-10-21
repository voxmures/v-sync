<script>
import * as PIXI from 'pixi.js';
import TWEEN from '@tweenjs/tween.js';

export default {
	inject: ['context'],
	render (h) {
		console.log('Rendering Sprite');
		return h();
	},
	props: {
		src: {
			type: String,
			required: true
		},
		x: {
			type: Number,
			default: 0
		},
		y: {
			type: Number,
			default: 0
		},
		script: {
			type: Function
		}
	},
	data () {
		return {
			sprite: null
		}
	},
	methods: {
		setup () {
			if (this.$parent.container)
				this.$parent.container.addChild(this.sprite);
			else
				this.context.app.stage.addChild(this.sprite);
		}
	},
	// Lifecycle Hooks
	created () {
		this.sprite = PIXI.Sprite.fromImage(this.src);
		this.sprite.x = this.x;
		this.sprite.y = this.y;

		this.sprite.interactive = true;

		this.context.bus.$on('READY', this.setup);
	},

}
</script>
<script>
import * as PIXI from 'pixi.js';

export default {
	inject: ['context'],
	props: {
		x: {
			type: Number,
			default: 0
		},
		y: {
			type: Number,
			default: 0
		}
	},
	data () {
		return {
			container: null
		}
	},
	render (h) {
		return h('template', this.$slots.default);
	},
	methods: {
		setup () {
			if (this.$parent.container)
				this.$parent.container.addChild(this.container);
			else
				this.context.app.stage.addChild(this.container);

			// this.context.app.ticker.add(delta => this.$emit)
		}
	},
	created () {
		this.container = new PIXI.Container();

		this.container.x = this.x;
		this.container.y = this.y;

		this.container.interactive = true;

		this.context.bus.$on('READY', this.setup);
	}
};
</script>
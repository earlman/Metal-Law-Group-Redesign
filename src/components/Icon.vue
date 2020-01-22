  <template>
	<span :style="{color: color}">
		<!-- How you treat size of the Icon is up to you. I stick to default `1em` or `size` props with 1:1 ratio -->
		<svg
			version="1.0"
            style="overflow: visible;"
			:width="size || name.size.width"
			:height="size || name.size.height"
			:viewBox="viewBox || name.viewBox"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g :transform="getTranslate">
				<path
					v-for="(path, index) in name.paths"
					:d="path.data"
					:key="index"
					:style="{
            fillRule: path.windingRule,
            fill: color
          }"
				/>
			</g>
		</svg>
	</span>
</template>

<script>
export default {
	name: "Icon",
	props: {
		name: {
			type: Object,
			required: true
		},
		size: {
			type: String,
			default: "1em"
		},
		color: String,
		viewBox: String,
		translate: {
			x: Number,
			y: Number
		}
	},
	computed: {
		getTranslate: function() {
			if (this.translate)
				return `translate(${this.translate.x} ${this.translate.y})`;
			return `translate(${this.name.translate.x} ${this.name.translate.y})`;
		}
	}
};
</script>

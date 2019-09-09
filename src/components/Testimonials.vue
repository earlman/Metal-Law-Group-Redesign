
/**
 *
 * Horizontal scrolling testimonial component 
 *
 */



<template>
	<div>
		<div class="testimonials">
			<div v-for="testimonial in testimonials" :key="testimonial.name">
				<div class="testimonials--container" v-if="testimonial.active">
					<div class="testimonials--content">
						<p class="testimonials--quote">{{testimonial.quote}}</p>
						<h4 class="testimonials--name">{{testimonial.name}}</h4>
						<h5 class="testimonials--occupation">{{testimonial.occupation}}</h5>
					</div>
				</div>
			</div>
			<div class="testimonials--selector">
				<div
					v-for="testimonial in testimonials"
					:key="testimonial.id"
					class="indicator"
					:class="{ 'active': testimonial.active }"
					@mouseover="changeActive(testimonial.id)"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			testimonials: [
				{
					id: 0,
					quote:
						"Richard Jefferson is a Mensch and a gentleman who is also well-versed in cutting-edge legal developments that he employs to help his clients, from the large to the very small. He is especially good about looking after the business interests of the ‘little guy’ and is just as well equipped to handle large, complex and far reaching deals.",
					name: "Tess Taylor",
					occupation: "President Narip",
					active: false
				},
				{
					id: 1,
					quote:
						"Richard Jefferson is a Mensch and a gentleman who is also well-versed in cutting-edge legal developments that he employs to help his clients, from the large to the very small. He is especially good about looking after the business interests of the ‘little guy’ and is just as well equipped to handle large, complex and far reaching deals.",
					name: "David Rosenhaus",
					occupation: "Owner of DFN Graphics Company",
					active: true
				},
				{
					id: 2,
					quote:
						"Richard Jefferson is a Mensch and a gentleman who is also well-versed in cutting-edge legal developments that he employs to help his clients, from the large to the very small. He is especially good about looking after the business interests of the ‘little guy’ and is just as well equipped to handle large, complex and far reaching deals.",
					name: "Jasmine Diaz",
					occupation: "Owner of The J. Diaz Company",
					active: false
				}
			]
		};
	},

	methods: {
		changeActive(selectedId) {
			for (var key in this.testimonials) {
				if (selectedId == this.testimonials[key].id) {
					this.testimonials[key].active = true;
				} else {
					this.testimonials[key].active = false;
				}
			}
		}
	}
};
</script>

<style lang="sass" scoped>

.testimonials

    &--content
        display: flex
        flex-direction: column
        align-items: center
        text-align: center

    &--quote
        margin-bottom: var(--space-md)

    &--container
        margin: var(--space-lg) auto var(--space-sm)
        padding: var(--space-md) 0 var(--space-sm)
        background-color: var(--color-a)
        max-width: 768px
        display: flex
        justify-content: center

    &--selector
        display: flex
        flex-direction: row
        justify-content: center
        margin-bottom: var(--space-lg)



        .indicator
            @include space-inline(var(--space-xs))
            height: 5px
            width: 48px
            background-color: var(--color-a)

        .active
            background-color: var(--color-p)

</style>
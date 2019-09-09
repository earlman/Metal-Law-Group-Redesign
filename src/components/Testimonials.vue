
/**
 *
 * Horizontal scrolling testimonial component 
 *
 */



<template>
	<div>
		<div v-for="testimonial in testimonials" :key="testimonial.name">
			<div class="testimonials--container" v-if="testimonial.active">
				<div class="testimonials">
					<p class="testimonials--content">{{testimonial.content}}</p>
					<h4 class="testimonials--name">{{testimonial.name}}</h4>
					<h5 class="testimonials--occupation">{{testimonial.occupation}}</h5>
				</div>
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
					content:
						"Richard Jefferson is a Mensch and a gentleman who is also well-versed in cutting-edge legal developments that he employs to help his clients, from the large to the very small. He is especially good about looking after the business interests of the ‘little guy’ and is just as well equipped to handle large, complex and far reaching deals.",
					name: "Tess Taylor",
					occupation: "President Narip",
					active: false
				},
				{
					content:
						"Richard Jefferson is a Mensch and a gentleman who is also well-versed in cutting-edge legal developments that he employs to help his clients, from the large to the very small. He is especially good about looking after the business interests of the ‘little guy’ and is just as well equipped to handle large, complex and far reaching deals.",
					name: "David Rosenhaus",
					occupation: "Owner of DFN Graphics Company",
					active: true
				},
				{
					content:
						"Richard Jefferson is a Mensch and a gentleman who is also well-versed in cutting-edge legal developments that he employs to help his clients, from the large to the very small. He is especially good about looking after the business interests of the ‘little guy’ and is just as well equipped to handle large, complex and far reaching deals.",
					name: "Jasmine Diaz",
					occupation: "Owner of The J. Diaz Company",
					active: false
				}
			]
		};
	}
};
</script>

<style lang="sass" scoped>

.testimonials
    display: flex
    flex-direction: column
    align-items: center
    text-align: center

    &--content
        margin-bottom: var(--space-md)

    &--container
        margin: var(--space-lg) auto
        padding: var(--space-md) 0 var(--space-sm)
        background-color: var(--color-a)
        max-width: 768px
        display: flex
        justify-content: center

    &--indicator

</style>

/**
 *
 * Horizontal scrolling testimonial component 
 *
 */



<template>
	<div>
		<div class="testimonials--container">
			<div class="testimonials">
				<p
					class="testimonials--content"
				>“Richard Jefferson is a Mensch and a gentleman who is also well-versed in cutting-edge legal developments that he employs to help his clients, from the large to the very small. He is especially good about looking after the business interests of the ‘little guy’ and is just as well equipped to handle large, complex and far reaching deals.”</p>
				<h4 class="testimonials--name">Tess Taylor</h4>
				<h5 class="testimonials--job">President Narip</h5>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
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

</style>
<template>
	<div class="card-wrapper">
		<div class="card">
			<img src class="card--icon" alt="icon" />
			<div class="card--info">
				<h3 class="card--title">
					<slot>Business Litigation Card</slot>
				</h3>
				<p class="card--detail">
					<slot
						name="detail"
					>We can help you in breach of contract cases, joint partnership ventures gone bad, LLC lawsuits, and other business disputes.</slot>
				</p>
			</div>
			<div class="card--arrow">
				<img src alt="arrow" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		icon: {
			type: String,
			default: "hi"
		}
	}
};
</script>

<style lang="sass" scoped>


.card-wrapper
    border: 1px solid var(--color-a)

    width: 100%

    &:nth-child(odd) .card
        justify-content: flex-end
    &:nth-child(even) .card
        justify-content: flex-start

.card
    display: flex
    padding: var(--space-lg) var(--space-sm) var(--space-md)
    flex-direction: column
    height: 100%

    &--title
        margin-bottom: var(--space-sm)

    &--detail
        max-width: 400px

    &--info
        margin-bottom: var(--space-sm)

    &--arrow
        align-self: end
        // position: relative
        // bottom: -2rem
        // padding: var(--space-xs)        

    &--icon
        margin-bottom: var(--space-xs)

    // when there's 2 columns, change the layout. See CardGrid.vue
    @include lg
        flex-direction: row
        margin: 0 var(--space-lg)

        &--icon
            margin-right: var(--space-md)    






</style>

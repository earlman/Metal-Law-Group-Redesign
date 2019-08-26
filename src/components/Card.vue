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
			<img src class="card--arrow" alt="arrow" />
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
    padding: var(--space-lg) var(--space-sm)
    
    flex-direction: column

    &--title
        margin-bottom: var(--space-sm)

    &--info
        // flex-grow: 1

    // when there's 2 columns, change the layout. See CardGrid.vue
    @include md 
        flex-direction: row
    
        &--icon
            padding: 0 var(--space-sm)


    &--detail
        max-width: 400px

    &--arrow
        position: relative
        bottom: -2rem
        align-self: end
        







// .section--title
//     left: 50%
//     margin-left: -51vw
//     margin-right: -51vw
//     position: relative
//     right: 50%
//     border: 1px solid var(--color-a)

//     h2
//         box-sizing: border-box
//         padding: var(--space-sm)
//         text-align: center
//         width: 102vw
//         margin: 0
</style>

<template>
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
		<img src class="card--arrow" alt="arrow icon" />
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

.card
    // width: 500px //! temporary
    border: 1px solid var(--color-a)
    display: flex
    flex-direction: row
    padding-top: var(--space-lg)
    padding-bottom: var(--space-lg)
    
    &--icon
        padding-right: var(--space-md)
        padding-left: var(--space-lg)

    &--title
        margin-bottom: var(--space-sm)

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

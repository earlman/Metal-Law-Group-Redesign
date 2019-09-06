
/**
 *
 * Only one of these per section
 * No borders
 * 
 *
 */




<template>
	<div>
		<div class="display-text--container">
			<div class="display-text--content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.display-text

    &--content
        margin: auto


    &--container
        margin: var(--space-lg) auto
        padding: var(--space-md)
        background-color: var(--color-a)
        max-width: 768px
        display: flex
        justify-content: center

</style>
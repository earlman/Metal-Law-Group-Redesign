<template>
	<div class="section--title">
		<h2>
			<slot>Our Services</slot>
		</h2>
	</div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.section--title
    left: 50%
    margin-left: -51vw
    margin-right: -51vw
    position: relative
    right: 50%

    h2
        box-sizing: border-box
        padding: var(--space-sm)
        border: 1px solid var(--color-a)
        text-align: center
        width: 102vw
</style>

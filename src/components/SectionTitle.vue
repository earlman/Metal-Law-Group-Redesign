<template>
	<div class="section--title">
		<h2>
			<slot>Insert Title into Component</slot>
		</h2>
		<slot v-if="this.$slots.detail" name="detail"></slot>
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
    border: 1px solid var(--color-a)

    h2
        box-sizing: border-box
        padding: var(--space-sm)
        text-align: center
        width: 102vw
        margin: 0
</style>

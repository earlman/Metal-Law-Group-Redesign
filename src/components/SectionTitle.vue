<template>
	<div class="section-title">
		<h2>
			<slot>Insert Title into Component</slot>
		</h2>
		<slot v-if="this.$slots.detail" name="detail" class="section-title--detail"></slot>
	</div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.section-title
    left: 50%
    margin-left: -51vw
    margin-right: -51vw
    position: relative
    right: 50%
    border: 1px solid var(--color-a)
    text-align: center
    width: 102vw
    padding: var(--space-sm) 0

    &>*
        @include space-stack(var(--space-sm))

    &--detail
        margin-bottom: var(--space-md)

    h2
        box-sizing: border-box

    
</style>

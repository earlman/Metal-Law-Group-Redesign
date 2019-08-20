<template>
	<div class="page-title">
		<h1>
			<slot>Insert Title into Component via Slot</slot>
		</h1>
		<slot
			v-if="this.$slots.detail"
			name="detail"
			class="section-title--detail"
		>Additional content goes into `detail` slot</slot>

	</div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

    .page-title
        display: flex
        flex-direction: column
        align-items: center
        text-align: center

        h1
            margin: 0 0 var(--space-md)

    
</style>

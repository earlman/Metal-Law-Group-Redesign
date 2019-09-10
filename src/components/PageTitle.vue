<template>
	<div class="page-title">
		<div class="page-title--inner">
			<h1>
				<slot>Insert Title into Component via Slot</slot>
			</h1>
			<div class="page-title--detail">
				<slot name="detail">Additional content goes into `detail` slot</slot>
			</div>
		</div>
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
        padding: var(--space-md) 0 var(--space-lg)
        border: 1px solid var(--color-a)
        

        // full bleed properties. not sure about it yet
        left: 50%
        margin-left: -51vw
        margin-right: -51vw
        position: relative
        right: 50%
        width: 102vw


        &--inner
            max-width: 88vw


        h1
            margin: 0 0 var(--space-sm)
            // max-width: 88vw

        &--detail p
            max-width: 75ch
            
    
</style>

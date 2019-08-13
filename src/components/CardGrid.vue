<template>
	<div class="cardgrid">
		<slot></slot>
	</div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.cardgrid
    display: grid
    grid-template-columns: 1fr
    grid-template-rows: auto
    justify-items: stretch
    
    @include md
        grid-template-columns: 1fr 1fr


</style>
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

    border: 1px solid var(--color-a)

    
    @include md
        grid-template-columns: 1fr 44vw 44vw 1fr


    & > *
        &:nth-child(odd) 
            border-left: none
            border-right: 1px solid var(--color-a)

        &:nth-child(even)
            border-left: 1px solid var(--color-a)
            border-right: none

    &::before,
    &::after
        content: ''


</style>
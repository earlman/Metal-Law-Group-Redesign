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
    justify-content: center

    border: 1px solid var(--color-a)

    
    @include md
        grid-template-columns:  44vw 44vw 
        &>*
            &:nth-child(odd) 
                padding-left: 0
            &:nth-child(even)
                padding-right: 0
        

        @include xl
            grid-template-columns:  700px 700px 

    & > *
        border-bottom: 1px solid var(--color-a)

        &:nth-child(odd) 
            border-left: 1px solid var(--color-a)
            border-right: 1px solid var(--color-a)

        &:nth-child(even)
            border-left: 1px solid var(--color-a)
            border-right: 1px solid var(--color-a)

    // &::before,
    // &::after
    //     content: ''


</style>
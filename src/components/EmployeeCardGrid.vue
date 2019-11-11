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
    // display: grid
    // grid-template-columns: 1fr
    // grid-template-rows: auto

    @include grid-main
    grid-gap: 0


    justify-items: stretch
    justify-content: center
    // border-top: 1px solid var(--color-a)

    & > * // CARDS

        @include grid-full
        border-bottom: 1px solid var(--color-a)

        @include md
            grid-column: span 3

            &:nth-child(odd) 
                padding-left: 0
                border-right: 1px solid var(--color-a)

            &:nth-child(even)
                padding-right: 0


            @include lg
                grid-column: span 6

                &:nth-child(odd) 
                    border-left: 1px solid var(--color-a)
                &:nth-child(even)
                    border-right: 1px solid var(--color-a)




</style>
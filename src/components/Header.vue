<template>
	<header class="header">
		<div class="header--additional">
			<img src alt class="header--searchicon" />
		</div>
		<nav class="p-nav header--menu">
			<g-link to="/">
				<div class="header--menu--logo">
					<img src alt="Metal Law Group" class="logo" />
				</div>
			</g-link>
			<ul>
				<li>
					<g-link to="/">Home</g-link>
				</li>
				<li>
					<g-link to>What We Do</g-link>
				</li>
				<li>
					<g-link to="/who-we-are">Who We Are</g-link>
				</li>
				<li>
					<g-link to="/contact-us">Contact</g-link>
				</li>
			</ul>
		</nav>
		<div class="header--hero">
			<!-- Optional Image Prop -->
			<img src="../images/hero-landing.png" alt />
		</div>
	</header>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>


    .header
        // border: 1px solid blue //* for development, delete later
        justify-self: center
        width: 100vw
        display: flex
        flex-direction: column
        align-items: center

        &>*
            max-width: var(--max-width)

        &--additional
            border-bottom: 1px solid var(--color-a)
            max-width: 100vw
            width: 100vw

        &--menu
            width: 100%
            display: flex
            justify-content: space-around            
            align-items: center
            flex-wrap: wrap
            padding-bottom: var(--space-sm)

            @include landscape
                justify-content: space-between

            &--logo
                margin: var(--space-sm) var(--space-md)               

            ul
                display: flex
                flex-wrap: wrap
                justify-content: center
                padding: 0
                margin: 0

            li
                @include space-inline(var(--space-md))



        &--hero
            max-width: var(--max-width)
            // max-height: 20vh
            // height: 200px
            height: 25vh
            width: 100%
            position: relative
            overflow: hidden

            @include md
                @include landscape
                    height: 35vh

            img
                margin: auto
                position: absolute
                top: -50%
                bottom: -50%


    .full-bleed
        width: 100vw
        margin-left: 50%
        transform: translateX(-50%)
</style>
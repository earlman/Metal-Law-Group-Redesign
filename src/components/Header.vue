<template>
	<header class="header">
		<div class="header--additional">
			<img src alt class="header--searchicon" />
			<!-- (under construction) -->
		</div>
		<nav class="p-nav header--menu">
			<div class="header--menu--logo">
				<g-link to="/">
					<img src="../images/logo.svg" alt="Metal Law Group Logo" class="logo" />
				</g-link>
			</div>
			<ul>
				<li>
					<g-link to="/">Home</g-link>
				</li>
				<li>
					<p class="empty">What We Do</p>
					<ul>
						<li>
							<g-link to="/business-litigation">Business Litigation</g-link>
						</li>
						<li>
							<g-link to="/employment-law-defense">Employment Law Defense</g-link>
						</li>
					</ul>
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
            display: flex
            justify-content: center
            padding: var(--space-xs) 0 var(--space-xs)

        &--menu
            width: 100%
            display: flex
            justify-content: space-around            
            align-items: flex-end
            flex-wrap: wrap
            width: 88vw
            max-width: 1400px

            @include landscape
                justify-content: space-between


            &--logo
                max-width: 300px
                margin-bottom: var(--space-sm)
                margin-top: var(--space-md)


                
            ul
                display: flex
                flex-wrap: wrap
                justify-content: center
                padding: 0
                margin-bottom: 0

                li:hover > ul,
                li:focus-within > ul,
                li ul:hover
                    visibility: visible
                    opacity: 1    
                    display: block                

                li
                    display: block
                    padding: var(--space-xs)
                    transition-duration: .5s
                    background: var(--color-b)
                    position: relative
                    float: left

                    &:hover,
                    &:focus-within
                        // cursor: pointer
                        background: var(--color-a)

                    &:focus-within a
                        outline: none

                    .empty 
                        cursor: default

                    ul
                        position: absolute
                        z-index: 10
                        transition: all 0.5s ease
                        visibility: hidden
                        opacity: 0
                        min-width: 25ch
                        padding-top: var(--space-xs)
                        display: none
                        left: 0

                        li
                            clear: both;
                            width: 100%;
             


        &--hero
            // max-width: var(--max-width)
            // max-height: 20vh
            // height: 200px
            height: 25vh
            width: 100vw
            max-width: 100vw
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
                width: 100%


    .full-bleed
        width: 100vw
        margin-left: 50%
        transform: translateX(-50%)
</style>
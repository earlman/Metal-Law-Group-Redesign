<template>
	<header class="header">
		<div class="header--additional">
			<img src alt class="header--searchicon" />
		</div>
		<nav class="p-nav header--menu">
			<div class="header--menu--logo">
				<img src alt="Metal Law Group" class="logo" />
			</div>
			<ul>
				<li>Home</li>
				<li>Services</li>
				<li>People</li>
				<li>Contact</li>
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
            max-width: 1400px

        &--menu
            width: 100%
            display: flex
            justify-content: space-around            
            flex-wrap: wrap

            @include landscape
                justify-content: space-between

            &--logo
                

            ul
                display: flex
                flex-wrap: wrap
                justify-content: center
                padding: 0

            li
                @include space-inline(var(--space-md))



        &--hero
            max-width: 1400px


    .full-bleed
        width: 100vw
        margin-left: 50%
        transform: translateX(-50%)
</style>
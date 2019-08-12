<template>
	<header>
		<div class="header--additional">
			<img src alt class="header--searchicon" />
		</div>
		<nav>
			<img src alt="Metal Law Group" class="logo" />
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

    header
        // border: 1px solid blue //* for development, delete later
        justify-self: center
        width: 100vw

    .full-bleed
        width: 100vw
        margin-left: 50%
        transform: translateX(-50%)
</style>
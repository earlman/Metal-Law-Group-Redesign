<template>
	<footer class="footer">
		<nav class="footer--nav">
			<div class="footer--logo">
				<img src alt class="logo" />
				(LOGO)
			</div>
			<div class="footer--links p-small">
				<div class="footer--submenu">
					<h5>Our Services</h5>
					<ul>
						<li>Business Litigation</li>
						<li>Employment Law Defense</li>
					</ul>
				</div>
				<div class="footer--submenu">
					<h5>Quick Links</h5>
					<ul>
						<li>Disclaimer</li>
						<li>Privacy Policy</li>
					</ul>
				</div>
				<div class="footer--submenu">
					<h5>Contact</h5>
					<ul>
						<li>Phone: 323-289-2260</li>
						<li>Fax: 323-289-2261</li>
						<li>
							Address: 725 S Figueroa Street #3065
							<br />Los Angeles, CA 90017
						</li>
					</ul>
				</div>
				<div class="footer--social">
					<ul>
						<li>Fb</li>
						<li>Tw</li>
						<li>Ig</li>
					</ul>
				</div>
			</div>
		</nav>
		<aside class="copyright p-copyright">
			<span>© &nbsp foundations.dev. All Rights Reserved. 2019</span>
		</aside>
	</footer>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

    .footer
        // border: 1px solid red //* for development, delete later
        justify-self: center
        background-color: var(--color-b-alt)
        width: 100vw
        display: flex
        flex-direction: column
        align-items: center
        
        &>*
            max-width: 1400px

        *
            color: white

        &--nav
            display: flex
            width: 100%
            justify-content: space-around
            justify-items: center
            flex-wrap: wrap


            h5
                color: var(--color-t-h-alt)


        &--logo
            flex-grow: 1
            text-align: center
            min-width: 200px

        &--links
            display: flex
            flex-grow: 4
            justify-content: center
            flex-wrap: wrap
            max-width: 90vw

            @include landscape
                justify-content: space-between

            &>*
                min-width: 200px
                flex-grow: 1

            ul
                padding: 0

        &--social ul
            display: flex
            min-width: 10ch
            flex-grow: 2
            justify-content: center

            li
                @include space-inline(var(--space-xs))

        .copyright
            @include grid-full
            text-align: center
</style>
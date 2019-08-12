<template>
	<footer>
		<nav>
			<div class="footer--logo">
				<img src alt class="logo" />
				(LOGO)
			</div>
			<div class="footer--links p-small">
				<div>
					<h5>Our Services</h5>
					<ul>
						<li>Business Litigation</li>
						<li>Employment Law Defense</li>
					</ul>
				</div>
				<div>
					<h5>Quick Links</h5>
					<ul>
						<li>Disclaimer</li>
						<li>Privacy Policy</li>
					</ul>
				</div>
				<div>
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
				<div>
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

    footer
        // border: 1px solid red //* for development, delete later
        justify-self: center
        background-color: var(--color-b-alt)
        width: 100vw

        .footer--logo
            grid-column: 1/-1

        .footer--links
            grid-column: 1/-1

        nav
            @include grid-main
            justify-items: center

            h5
                color: var(--color-t-h-alt)

        *
            color: white


        .copyright
            @include grid-full
            text-align: center
</style>
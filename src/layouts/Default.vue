<template>
	<div class="layout">
		<Header
			:heroImage="heroImage"
			:hideHero="hideHero"
		/>

		<slot />
		<Footer />
	</div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
	components: {
		Header,
		Footer
	},
	props: {
		hideHero: {},
		heroImage: {
			default: "hero-landing"
		}
	}
};
</script>

<style lang="sass">

.layout
    display: contents

</style>

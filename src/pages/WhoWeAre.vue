<template>
	<Layout>
		<PageTitle>
			Who We Are
			<template v-slot:detail>
				Metal Law Group exists to advise, defend and protect business owners, entrepreneurs and employers.
				<input
					type="search"
					name
					id
				/>
			</template>
		</PageTitle>
	</Layout>
</template>

<script>
import SectionTitle from "~/components/SectionTitle.vue";
import PageTitle from "~/components/PageTitle.vue";
import Card from "~/components/Card.vue";
import CardGrid from "~/components/CardGrid.vue";

export default {
	components: {
		SectionTitle,
		PageTitle,
		Card,
		CardGrid
	}
};
</script>

<style lang="sass" scoped>
    

</style>
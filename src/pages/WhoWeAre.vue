<template>
	<Layout>
		<PageTitle>
			Who We Are
			<template v-slot:detail>
				<p class="search-text">Search for an employee below</p>
				<div>
					<input type="search" name id />
				</div>
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
.search-text
    margin: 0 auto var(--space-sm)
    text-align: center    
    


</style>
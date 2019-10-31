<template>
	<Layout>
		<PageTitle>
			Who We Are
			<template v-slot:detail>
				<p class="search-text">Search for an employee below</p>
				<div>
					<input type="search" name id v-model="searchTerm" />
				</div>
			</template>
		</PageTitle>
		<div>
			<h3>Results</h3>
			<EmployeeCardGrid v-if="searchResults">
				<EmployeeCard v-for="result in searchResults" :key="result.id">{{result}}</EmployeeCard>
			</EmployeeCardGrid>
		</div>
	</Layout>
</template>

<static-query>
query Posts {
  posts: allEmployee {
    edges {
      node {
        id
        title
        date
        path
        excerpt
      }
    }
  }
}
</static-query>

<script>
import SectionTitle from "~/components/SectionTitle.vue";
import PageTitle from "~/components/PageTitle.vue";
import EmployeeCard from "~/components/EmployeeCard.vue";
import EmployeeCardGrid from "~/components/EmployeeCardGrid.vue";

import Flexsearch from "flexsearch";

export default {
	data() {
		return {
			index: null,
			searchTerm: ""
		};
	},
	beforeMount() {
		this.index = new Flexsearch({
			tokenize: "forward",
			doc: {
				id: "id",
				field: ["title", "excerpt"]
			}
		});
		this.index.add(this.$static.posts.edges.map(e => e.node));
	},
	computed: {
		searchResults() {
			if (this.index === null || this.searchTerm.length < 1) return [];
			return this.index.search({
				query: this.searchTerm,
				limit: 10
			});
		}
	},

	components: {
		SectionTitle,
		PageTitle,
		EmployeeCard,
		EmployeeCardGrid
	}
};
</script>

<style lang="sass" scoped>
.search-text
    margin: 0 auto var(--space-sm)
    text-align: center    

input[type="search"]
    width: 350px
    


</style>
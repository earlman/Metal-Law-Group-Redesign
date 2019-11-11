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
		<SectionTitle v-if="searchResults">Results</SectionTitle>
		<div class="results">
			<EmployeeCardGrid>
				<EmployeeCard
					v-for="result in searchResults"
					:key="result.id"
					:linkto="result.path"
					:photo="result.acf.photo"
				>
					{{result.acf.name}}
					<template v-slot:detail>{{result.acf.title}}</template>
				</EmployeeCard>
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
                acf {
                    name
                    email
                    photo
                    phoneNumber
                    title
                    experience
                    barAdmissions
                    practiceAreas
                    education    
                }   
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
    
.results
    border-top: 1px solid var(--color-a)
    padding-bottom: var(--space-lg)


</style>
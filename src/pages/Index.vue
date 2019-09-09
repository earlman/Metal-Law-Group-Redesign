<template>
	<Layout>
		<main>
			<section>
				<PageTitle>
					We are a full business law firm with a solid reputation for providing effective and zealous representation.
					<template
						v-slot:detail
					>
						<button>Contact us for a free consultation&nbsp;&nbsp;&#8594;</button>
					</template>
				</PageTitle>
			</section>
			<SectionTitle>Our Services</SectionTitle>
			<section>
				<CardGrid>
					<Card>
						Business Litigation Card
						<template
							v-slot:detail
						>We can help you in breach of contract cases, joint partnership ventures gone bad, LLC lawsuits, and other business disputes.</template>
					</Card>
					<Card>
						Employment Defense
						<template
							v-slot:detail
						>We will help you build a strong line of defense to protect your business from the unfair state laws and vindictive former employees.</template>
					</Card>
				</CardGrid>
			</section>
			<SectionTitle>Get in Touch</SectionTitle>
			<section class="get-in-touch">
				<div>
					<table class="info">
						<tr>
							<td>
								<h5>Phone:</h5>
							</td>
							<td class="info--detail">
								<h5>323-289-2260</h5>
							</td>
						</tr>
						<tr>
							<td>
								<h5>Fax:</h5>
							</td>
							<td class="info--detail">
								<h5>323-289-2261</h5>
							</td>
						</tr>
						<tr>
							<td>
								<h5>Address:</h5>
							</td>
							<td class="info--detail">
								<h5>
									725 S Figueroa Street
									<br />#3065
									<br />Los Angeles, CA 90017
								</h5>
							</td>
						</tr>
					</table>
				</div>
				<div>
					<form class="form">
						<input type="text" aria-placeholder="name" placeholder="Name" class="name" />
						<input type="tel" aria-placeholder="Phone" placeholder="Phone" class="tel" />
						<input type="email" aria-placeholder="Email" placeholder="Email" class="email" />
						<textarea type="Message" aria-placeholder="Message" placeholder="Message" class="message"></textarea>
					</form>
				</div>
			</section>
			<SectionTitle>
				Find a Professional
				<template v-slot:detail>
					<input type="search" name id />
				</template>
			</SectionTitle>
			<SectionTitle>Our Success Stories</SectionTitle>
			<section>
				<Testimonials></Testimonials>
			</section>
		</main>
	</Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 10) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
import Post from "~/components/Post.vue";
import SectionTitle from "~/components/SectionTitle.vue";
import Card from "~/components/Card.vue";
import CardGrid from "~/components/CardGrid.vue";
import PageTitle from "~/components/PageTitle.vue";
import Testimonials from "~/components/Testimonials.vue";

export default {
	components: {
		Pager,
		PageTitle,
		Post,
		SectionTitle,
		Card,
		CardGrid,
		Testimonials
	},
	metaInfo: {
		title: "Metal Law Group"
	}
};
</script>

<style lang="sass" scoped>




    
    .get-in-touch
        border: 1px solid var(--color-a)
        padding: var(--space-md) var(--space-sm)
        display: flex
        flex-direction: column

        .info
            width: 100%
            margin-bottom: var(--space-sm)

            *
                vertical-align: top

            .info--detail
                text-align: right
    
        .form
            display: grid
            grid-template-columns: 1fr
            max-width: 100%
            grid-gap: var(--space-sm)

            &>*
                max-width: 100%

            ::placeholder
                color: var(--color-t-h-alt)

            textarea
                height: 30vh


        @include lg
            flex-direction: row

            &>*
                width: 50vw
                padding: 0 var(--space-md)

            .form
                grid-template-columns: 1fr 1fr

                .name
                    grid-column: 1/-1

                .message
                    grid-column: 1/-1
                    


</style>

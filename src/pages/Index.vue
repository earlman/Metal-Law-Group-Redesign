<template>
	<Layout>
		<div class="panelcomponent">
			<h1>We are a full business law firm with a solid reputation for providing effective and zealous representation.</h1>
			<button>Contact us for a free initial consultation &nbsp; &#8594;</button>
		</div>
		<section>
			<SectionTitle>Our Services</SectionTitle>
			<div class="cardgridcomponent">
				<div class="cardcomponent">
					<img src alt="icon" />
					<h3>Business Litigation</h3>
					<p>We can help you in breach of contract cases, joint partnership ventures gone bad, LLC lawsuits, and other business disputes.</p>
					<img src alt="arrow icon" />
				</div>
				<div class="cardcomponent">
					<img src alt="icon" />
					<h3>Employment Defense</h3>
					<p>We will help you build a strong line of defense to protect your business from the unfair state laws and vindictive former employees.</p>
					<img src alt="arrow icon" />
				</div>
			</div>
		</section>
		<section>
			<SectionTitle>Get in Touch</SectionTitle>
			<div class="info">
				<h5>Phone:</h5>
				<h5>323-289-2260</h5>
				<h5>Fax:</h5>
				<h5>323-289-2261</h5>
				<h5>Address:</h5>
				<h5>
					725 S Figueroa Street #3065
					<br />Los Angeles, CA 90017
				</h5>
			</div>
			<div class="form">
				<form action>
					Name
					<input type="text" />
					Phone
					<input type="tel" name id />
					Email
					<input type="email" name id />
					Message
					<textarea></textarea>
				</form>
			</div>
		</section>
		<section>
			<SectionTitle>
				Find a Professional
				<template v-slot:detail>
					<input type="search" name id />
				</template>
			</SectionTitle>
		</section>
		<section>
			<SectionTitle>Our Success Stories</SectionTitle>
			<div class="testimonialcomponent">
				<p>“Richard Jefferson is a Mensch and a gentleman who is also well-versed in cutting-edge legal developments that he employs to help his clients, from the large to the very small. He is especially good about looking after the business interests of the ‘little guy’ and is just as well equipped to handle large, complex and far reaching deals.”</p>
				<h4 class="testimonial--name">Tess Taylor</h4>
				<h5 class="testimonial--job">President Narip</h5>
			</div>
		</section>
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

export default {
	components: {
		Pager,
		Post,
		SectionTitle
	},
	metaInfo: {
		title: "Welcome to my blog :)"
	}
};
</script>

<style lang="sass" scoped>

    

</style>

<template>
	<Layout>
		<PageTitle>
			Employment Law Defense
			<template
				v-slot:detail
			>We will help you build a strong line of defense to protect your business from the unfair state laws, vindictive former employees and greedy employee side attorneys looking to extort and exploit you.</template>
		</PageTitle>
		<SectionTitle>Overview</SectionTitle>
		<section class="overview">
			<div class="youtube-link"></div>
			<p>
				We focus our practice on employment law defense and ONLY representing and protecting California Employers!
				If you are have a business in California and are having any issues with employees you have come to the right place.
			</p>
		</section>
		<SectionTitle>Services</SectionTitle>
		<section class="services">
			<CardGrid>
				<Card>
					Labor Lawsuits / Litigation
					<template
						v-slot:detail
					>We can handle the litigation for you in superior or federal court. Since we only defend employers we have developed aggressive tactics to bring favorable results for our clients.</template>
				</Card>
				<Card>
					Labor Board Defense
					<template
						v-slot:detail
					>You do not have to sit there and let the Labor Board push you around. We can attend your notice of claim and conference or hearing with you and help defend your business.</template>
				</Card>
				<Card>
					Workers Comp Claims
					<template
						v-slot:detail
					>Did one of your (ex)workers make a Workmen’s Compensation Claim against your business and you were not insured at the time? This could be trouble as this insurance is mandatory. Contact us and we can help minimize the damage.</template>
				</Card>
				<Card>
					Policies and Procedures
					<template
						v-slot:detail
					>We can create a custom Policies and Procedures package that will keep your business out of trouble with labor laws and out of the cross hairs of greedy employee side attorneys. We also offer a 1 day onsite audit to go over your entire business with you.</template>
				</Card>
				<Card>
					Sexual Harassment Defense
					<template
						v-slot:detail
					>There are two sides to every story. We help you defend against sexual harassment claims and work to make the problem go away as quickly and discreetly as possible.</template>
				</Card>
				<Card>
					Firing and Termination Help
					<template
						v-slot:detail
					>You do not have to sit there and let the Labor Board push you around. We can attend your notice of claim and conference or hearing with you and help defend your business.</template>
				</Card>
			</CardGrid>
		</section>
		<SectionTitle>Employee Lawsuit Prevention</SectionTitle>
		<section class="employee-lawsuit-prevention">
			<p>
				When it comes to employee issues, avoiding a lawsuit in the first place is always the first choice. Right or wrong if your business gets sued, you’ve already lost. Why? Because even if best case scenario you “win,”the case you will still have pay your lawyers to defend you and spend valuable time away from your business and family to prove you are right.
				This is the best case scenario.
				If you lose, you pay your attorneys, the damages awarded to the employee AND, worst of all, the employees attorneys!
				Yes you read that right. If you lose you have to pay the bills for the attorneys on the other side which is usually the biggest expense in all of this.
				We help you avoid employee problems in the first place before they become full blown devastating lawsuits. We have developed tactics to not only help keep you out of court but also put some pressure back on the employees so you are not always the one on the defensive.
			</p>
		</section>
		<SectionTitle>Our Success Stories</SectionTitle>
		<section class="our-success-stories">
			<div class="testimonialcomponent">
				<p>“Richard Jefferson is a Mensch and a gentleman who is also well-versed in cutting-edge legal developments that he employs to help his clients, from the large to the very small. He is especially good about looking after the business interests of the ‘little guy’ and is just as well equipped to handle large, complex and far reaching deals.”</p>
				<h4 class="testimonial--name">Tess Taylor</h4>
				<h5 class="testimonial--job">President Narip</h5>
			</div>
		</section>
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
<template>
	<Layout>
		<PageTitle>
			Contact Us
			<template v-slot:detail>
				METAL LAW Group moved its Employer Defense practice into the Ernst & Young Plaza in Downtown Los Angeles in February of 2018.
				This office exclusively practices in the businesses representation areas of employer defense, labor law and commercial litigation.
			</template>
		</PageTitle>
		<section class="contact-info">
			<div class="contact-form">
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
			<div class="info">
				<div class="info--description">
					Whether you are a business owner with employees or an entrepreneur in the entertainment world your story is important to us.
					We offer a FREE 15 Minute Consultation for anyone we feel we can help.
					Fill out the form and we will reach back out to you as soon as possible.
				</div>
				<div class="info--details">
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
			</div>
		</section>
		<section class="directions">
			<div class="directions--map">
				<a href="googlemaps">
					<img src alt="Map of location linked to google" />
				</a>
			</div>
			<div class="directions--parking">
				<h5>PARKING RATES (with validation):</h5>
				<table>
					<thead>
						<td>Length of Stay</td>
						<td>Price</td>
						<td>Availability</td>
					</thead>
					<tr>
						<td>1 hour</td>
						<td>$1</td>
						<td>Always Available</td>
					</tr>
					<tr>
						<td>2 hours</td>
						<td>$2.50</td>
						<td>Always Available</td>
					</tr>
					<tr>
						<td>4 hours</td>
						<td>$4</td>
						<td>Always Available</td>
					</tr>
					<tr>
						<td>After 3 hours, standard office building rates apply ($3 every 10 minutes; $35 maximum)</td>
					</tr>
					<tr>
						<td>&#8734; (No Limit)</td>
						<td>$6</td>
						<td>Saturday, Sunday, & after 4pm on Weekdays</td>
					</tr>

					<tr>
						<td>--</td>
						<td>Not Permitted</td>
						<td>Overnight</td>
					</tr>
				</table>
			</div>
			<div class="directions--instructions">
				<h2>Parking Instructions</h2>
				<p>
					Our office is adjacent to the DTLA Shopping Center FIGat7th. The easiest option is to park there and then come to the front desk of the Ernest & Young Plaza Building.
					We do not offer validation but you can grab a coffee from Starbucks on the ground floor to get validated rates.
					There are 500 shopping and dining parking spaces conveniently located at the 945 W. 8th Street parking structure adjacent to the FIGat7th retail center. Entrances to the parking structure are located on both 7th and 8th Streets.
					The parking structure is open 24 hours a day / 7 days a week. Parking structure managed by ABM Parking. Call (213) 955-7945 for more information.
					PLEASE NOTE: For discounted parking rates, you MUST have parking tickets validated in a store or restaurant and ONLY park on garage levels L1, L2, or L3. To avoid being charged a higher rate, DO NOT PARK on level L4 or higher.
				</p>
			</div>
		</section>
	</Layout>
</template>

<script>
import SectionTitle from "~/components/SectionTitle.vue";
import PageTitle from "~/components/PageTitle.vue";

export default {
	components: {
		SectionTitle,
		PageTitle
	}
};
</script>

<style lang="sass" scoped>

</style>
<template>
	<Layout>
		<section class="general-info">
			<div class="photo placeholder"></div>
			<h1>Rosie Palmer</h1>
			<h2>Managing Partner</h2>
			<h5>Phone</h5>
			<p>(630) 235 1515</p>
			<h5>Email</h5>
			<p>palmar@metallawgroup.com</p>
		</section>
		<section class="experience">
			<h2>Experience</h2>
			<p>
				Dan is currently the Litigation Managing Partner and lead trial attorney at M.E.T.A.L. Law Group, LLP.
				His practice is focused on labor & employment, commercial & business litigation, corporate law, franchise law, church-related litigation, and representing news media and publisher in defamation cases.
				He was a law clerk and a staff attorney in the Law Department, Commercial Calendar, of the Circuit Court of Cook County, Illinois.
				He has practiced in Illinois, the District of Columbia and California.
				He is a member of the Federal Trial Bar for the Northern District of Illinois. Also, he has been a certified mediator since 2001 in Chicago.
				Dan has represented both employers and employees in labor disputes (but now his focus is only on employers) regarding wage claims, wrongful termination, and violations of state and federal labor law.
				He has tried complex commercial and business matters, and recently, obtained a multi-million-dollar settlement based on cross-complaint on the eve of a three-week jury trial in Chicago.
				Also, he recently obtained a non-suit against plaintiffs seeking 20 million dollars in a defamation action against a newspaper and online publisher in the District of Columbia.
				Dan is known as one of the most prominent trial attorneys for the church-related matters concerning property and control disputes, clergy malpractice and defamation.
				He has taught church polity of various denominations at seminaries and published and lectured on church-related issues. He has tried over 70 cases representing in both civil and ecclesiastical courts.
				Most recently, he successfully represented Holy Hill Community Church in the Superior Court of the State of California, which was affirmed on appeal, in an action entitled Jun Ki Kim, et al. v. The True Church Member of the Holy Hill Community Church, et al. (2014) 236 Cal. App. 4th 1435. This case is considered one of the most complex church litigation involving civil and ecclesiastical laws concerning property.
				As part of community service, Dan often provides pro bono legal services to indigenous and minority groups, especially for victims of domestic violence whose resources are limited due to their legal status, language and/or financial means.
				In addition to his legal profession, Dan was assistant professor of philosophy and theology at Northern Seminary (Lombard, IL). He brings his unique skill of teaching for trial.
			</p>
		</section>
		<section class="additional-info">
			<h5>Bar Admissions</h5>
			<ul>California</ul>
			<h5>Practice Areas</h5>
			<ul>
				<li>Litigation and Trials</li>
				<li>Commercial and Business Litigation</li>
				<li>Corporate Law</li>
				<li>Church-Related Litigation</li>
				<li>New Media Defamination</li>
			</ul>
			<h5>Education</h5>
			<ul>
				<li>BA * MA in philosophy, Baylor University</li>
				<li>Master of Divinity</li>
			</ul>
		</section>
	</Layout>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

    section
        padding: 0 var(--space-sm)

    .general-info
        padding-top: var(--space-md)
        padding-bottom: var(--space-sm)
        border-bottom: 1px solid var(--color-a)

        h1
            margin-bottom: 0

    .experience

        .photo
            margin: auto
            width: 80%


        .placeholder
            border: 3px solid var(--color-a)
            color: var(--color-a)
            height: calc(100vw * 1.5)
            width: 90%
            max-height: 300px
            max-width: 200px
            text-align: center
            margin-bottom: var(--space-sm)
        

</style>
<template>
	<Layout>
		<h1>Does it work????? {{$page.employee.title}}</h1>
		<section class="general">
			<div class="section--inner">
				<div class="general--photo">
					<img src="https://via.placeholder.com/400.png" alt="Employee Photo" />
				</div>
				<div class="general--info">
					<h1 class="general--name">Rosie Palmer</h1>
					<h2>Managing Partner</h2>
					<div class="general--details">
						<div>
							<h5>Phone</h5>
							<p>(630) 235 1515</p>
						</div>
						<div>
							<h5>Email</h5>
							<p>palmar@metallawgroup.com</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<div class="bottom-container">
			<section class="experience">
				<div class="section--inner">
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
				</div>
			</section>
			<section class="additional-info">
				<div class="section--inner">
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
				</div>
			</section>
		</div>
	</Layout>
</template>

<page-query>

query Post ($path: String!) {
    employee (path: $path) {
        title
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

</page-query>




<script>
export default {};
</script>

<style lang="sass" scoped>

    /* This code is very low quality right now. */

    /* We're gonna need system-wide changes for consistent grids accross the site. */

    
    .section--inner
        width: 88vw
        max-width: 1200px
        margin: auto

    section
        
        padding: 0 var(--space-sm)

        @include md
            padding: 0 var(--space-md)


    .general
        padding-top: var(--space-md)
        padding-bottom: var(--space-sm)
        border-bottom: 1px solid var(--color-a)


        @include lg
            padding-top: var(--space-lg)
            padding-bottom: var(--space-lg)

            .section--inner
                display: grid
                grid-template-columns: min-content auto

            .general--info
                margin-left: var(--space-lg)

            .general--name
                margin-top: 0

        &--photo
            margin: auto
            width: 100%

            @include md
                max-width: 300px
                width: 30vw

                @include lg
                    margin-left: var(--space-md)

        &--name
            margin-bottom: 0

        &--details
            display: flex
            width: 100%
            flex-wrap: wrap

            &>*
                @include space-inline(var(--space-md))
                flex-grow: 1
                min-width: 10ch

    .experience
        padding-top: var(--space-md)

    .additional-info
        padding-top: var(--space-md)
        margin-bottom: var(--space-lg)


        ul
            padding-left: 20px
            list-style: none

            li
                line-height: 2.5
        
    .bottom-container
        @include lg
            max-width: 1200px
            margin: auto
            margin-bottom: var(--space-lg)
            display: grid
            grid-template-columns: 2fr 1fr

            .section--inner
                display: contents

            .additional-info
                margin-top: var(--space-lg)




</style>
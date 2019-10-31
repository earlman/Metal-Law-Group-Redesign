<template>
	<Layout>
		<section class="general">
			<div class="section--inner">
				<div class="general--photo">
					<g-image :src="$page.employee.acf.photo" alt="Employee Photo" width="500" />

					<!-- <img :src="$page.employee.acf.photo" alt="Employee Photo" /> -->
				</div>
				<div class="general--info">
					<h1 class="general--name">{{$page.employee.acf.name}}</h1>
					<h2>{{$page.employee.acf.title}}</h2>
					<!-- <div class="general--details">
						<div>
							<h5>Phone</h5>
							<p>(630) 235 1515</p>
						</div>
						<div>
							<h5>Email</h5>
							<p>palmar@metallawgroup.com</p>
						</div>
					</div>-->
				</div>
			</div>
		</section>
		<div class="bottom-container">
			<section class="experience">
				<div class="section--inner">
					<h2>Experience</h2>
					<p>{{$page.employee.acf.experience}}</p>
				</div>
			</section>
			<section class="additional-info">
				<div class="section--inner">
					<h5>Bar Admissions</h5>
					<ul>
						<li>{{$page.employee.acf.barAdmissions}}</li>
					</ul>
					<h5>Practice Areas</h5>
					<ul>
						<li>{{$page.employee.acf.practiceAreas}}</li>
					</ul>
					<h5>Education</h5>
					<ul>
						<li>{{$page.employee.acf.education}}</li>
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
        white-space: pre-line //magically converts '/n' to new lines


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

/**
 *
 * Horizontal scrolling testimonial component 
 *
 */



<template>
	<div>
		<div class="testimonials">
			<div v-for="testimonial in testimonials" :key="testimonial.name">
				<div class="testimonials--container" v-if="testimonial.active">
					<transition name="fade">
						<div class="testimonials--content">
							<p class="testimonials--quote">{{testimonial.quote}}</p>
							<h4 class="testimonials--name">{{testimonial.name}}</h4>
							<h5 class="testimonials--occupation">{{testimonial.occupation}}</h5>
						</div>
					</transition>
				</div>
			</div>
			<div class="testimonials--selector">
				<div
					v-for="testimonial in testimonials"
					:key="testimonial.id"
					class="indicator"
					:class="{ 'active': testimonial.active }"
					@mouseover="changeActive(testimonial.id)"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			testimonials: [
				{
					id: 0,
					quote:
						"Richard Jefferson is a Mensch and a gentleman who is also well-versed in cutting-edge legal developments that he employs to help his clients, from the large to the very small. He is especially good about looking after the business interests of the ‘little guy’ and is just as well equipped to handle large, complex and far reaching deals.",
					name: "Tess Taylor",
					occupation: "President Narip",
					active: false
				},
				{
					id: 1,
					quote:
						"Richard Jefferson is a Mensch and a gentleman who is also well-versed in cutting-edge legal developments that he employs to help his clients, from the large to the very small. He is especially good about looking after the business interests of the ‘little guy’ and is just as well equipped to handle large, complex and far reaching deals.",
					name: "David Rosenhaus",
					occupation: "Owner of DFN Graphics Company",
					active: true
				},
				{
					id: 2,
					quote:
						"Richard Jefferson is a Mensch and a gentleman who is also well-versed in cutting-edge legal developments that he employs to help his clients, from the large to the very small. He is especially good about looking after the business interests of the ‘little guy’ and is just as well equipped to handle large, complex and far reaching deals.",
					name: "Jasmine Diaz",
					occupation: "Owner of The J. Diaz Company",
					active: false
				}
			]
		};
	},

	methods: {
		changeActive(selectedId) {
			for (var key in this.testimonials) {
				if (selectedId == this.testimonials[key].id) {
					this.testimonials[key].active = true;
				} else {
					this.testimonials[key].active = false;
				}
			}
		},

		iterateActive() {
			let activesection = this.testimonials.filter(x => x.active);
			let aid = activesection[0].id;
			this.testimonials[aid].active = false;
			if (aid + 1 == this.testimonials.length) {
				this.testimonials[0].active = true;
			} else {
				const x = aid + 1;
				this.testimonials[x].active = true;
			}
		}
	},

	created() {
		this.interval = setInterval(() => this.iterateActive(), 5000);
	}
};
</script>

<style lang="sass" scoped>

.testimonials

    &--container
        animation: fadein 1.5s;
        border-radius: 1px
        margin: var(--space-lg) auto var(--space-sm)
        padding: var(--space-md) 6vw var(--space-sm)
        background-color: var(--color-a)
        max-width: 768px
        display: flex
        justify-content: center

    &--content
        display: flex
        flex-direction: column
        align-items: center
        text-align: center

    &--quote
        margin-bottom: var(--space-md)
        

    &--selector
        display: flex
        flex-direction: row
        justify-content: center
        margin-bottom: var(--space-lg)



        .indicator
            @include transition
            @include space-inline(var(--space-xs))
            height: 5px
            width: 48px
            background-color: var(--color-a)
            border-radius: 1px

        .active
            background-color: var(--color-p)


@keyframes fadein
    from 
        opacity: 0
    to
        opacity: 1


</style>
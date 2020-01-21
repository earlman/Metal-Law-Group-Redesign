<template>
	<div>
		<form class="form">
			<input
				type="text"
				aria-placeholder="name"
				placeholder="Name"
				class="name"
			/>
			<input
				type="tel"
				aria-placeholder="Phone"
				placeholder="Phone"
				class="tel"
			/>
			<input
				type="email"
				aria-placeholder="Email"
				placeholder="Email"
				class="email"
			/>
			<textarea
				type="Message"
				aria-placeholder="Message"
				placeholder="Message"
				class="message"
			></textarea>
			<input
				type="submit"
				value="Submit"
			/>
		</form>
	</div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.form
    display: grid
    grid-template-columns: 1fr
    grid-auto-rows: min-content
    grid-gap: var(--space-sm)

    @include lg
        .form
            display: grid
            grid-template-columns: 1fr
            grid-auto-rows: min-content
            grid-gap: var(--space-sm)
</style>
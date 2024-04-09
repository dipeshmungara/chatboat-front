<script>
import Button from '../reusable/Button.vue';
import FormInput from '../reusable/FormInput.vue';
export default { components: { Button, FormInput } };
</script>

<template>
	<div class="w-full mx-auto md:w-1/2">
		<div
			class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
		>
			<p
				class="font-general-medium text-center text-primary-dark dark:text-primary-light text-2xl mb-8"
			>
				Login
			</p>
			<form action="#" class="font-general-regular space-y-7">
				<FormInput
					label="Email"
					inputIdentifier="email"
					inputType="email"
				/>
				<FormInput
					label="Password"
					inputIdentifier="password"
					inputType="password"
				/>
				<div>
					<Button
						title="Send Message"
						class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
						type="submit"
						aria-label="Send Message"
					/>
				</div>
			</form>
			<div class="border-t-2 mt-7 pt-4 text-center border-primary-light dark:border-secondary-dark">
			Not a Member? <router-link
			to="/signup"
			class="font-general-medium  text-left text-base font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300  mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
			aria-label="Login"
			>Signup</router-link
		>
		</div>
		</div>
		
	</div>
</template>

<style lang="scss" scoped></style>

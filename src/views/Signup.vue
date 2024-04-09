<script>
import feather from 'feather-icons';
import RegisterForm from '@/components/login/RegisterForm.vue';

export default {
	components: {
		RegisterForm,
	},
	data: () => {
		return {
			contacts: [
				{
					id: 1,
					name: 'Your Address, Your City, Your Country',
					icon: 'map-pin',
				},
				{
					id: 2,
					name: 'email@domain.com',
					icon: 'mail',
				},
				{
					id: 3,
					name: '555 8888 888',
					icon: 'phone',
				},
			],
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div
		class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
	>
		<!-- Contact form -->
		<RegisterForm />

		<!-- Contact details -->
	</div>
</template>

<script>
import feather from 'feather-icons';
import LoginForm from '@/components/login/LoginForm.vue';

export default {
	components: {
		LoginForm,
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
		<LoginForm />

		<!-- Contact details -->
	</div>
</template>

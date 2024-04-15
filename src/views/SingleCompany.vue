<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Company header -->
		<div class="text-center">
			<h1 class="text-3xl font-bold uppercase border-b-2 pb-2">{{ singleCompany.name }}</h1>
		</div>

		<!-- Company details -->
		<div class="grid grid-cols-1 sm:grid-cols-1 gap-8 mt-6">
			<!-- Company image -->
			<div class="w-full">
				<img src="@/assets/images/profile-banner-2.jpg" alt="Company Logo" class="w-full rounded-lg shadow-sm h-52">
			</div>

			<!-- Company information -->
			<div>
				<h2 class="text-xl font-semibold">Contact Information</h2>
				<p class="">{{ singleCompany.address }}</p>

				<p><strong>Contact:</strong> {{ singleCompany.contact }}</p>
				<p><strong>Website:</strong> <a :href="singleCompany.website" class="text-blue-500">{{
					singleCompany.website }}</a></p>
				<p v-if="singleCompany.activeDeals"><strong>Active Deals:</strong> {{ singleCompany.activeDeals }}</p>
				<p>Business Timing</p>
				<!-- Start free trial button -->
				<div class="mt-5">
					<button class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Start Free
						Trial</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			singleCompany: {
				logo: '@/assets/images/profile-banner-2.jpg',
				name: 'Company Name',
				address: '123 Street, City, Country',
				contact: '+1234567890',
				website: 'www.company1.com',
				activeDeals: 'Deals offer 3'
			}
		};
	}
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
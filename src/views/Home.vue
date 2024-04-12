<script>
import AppBanner from '@/components/shared/AppBanner';
import FeatureSection from '../components/shared/FeatureSection.vue';
import AppSection from '../components/shared/AppSection.vue';

export default {
	name: 'Home',
	components: {
		AppBanner,
		AppSection,
		FeatureSection,
	},
};
</script>

<template>
	
	<div class="container mx-auto">
		<!-- Banner -->
		<AppBanner class="mb-5 sm:mb-8" />

		<!-- About me -->
		<div class="container mx-auto">
			<FeatureSection />
		</div>
	
		<!-- Projects -->
		<AppSection />

		
	</div>
</template>

<style scoped></style>

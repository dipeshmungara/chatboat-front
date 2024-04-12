<script>
import ProfileBanner from '@/components/profile/ProfileBanner';
import feather from 'feather-icons';

export default {
	name: 'About',
	components: {
		ProfileBanner,
	},
	data: () => {
		return {};
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
	<div>
		<!-- About me -->
		<div class="container mx-auto">
			<ProfileBanner />
		</div>
	</div>
</template>

<style scoped></style>

<script>
import EditProfileInfo from '@/components/profile/EditProfileInfo';
import feather from 'feather-icons';

export default {
	name: 'About',
	components: {
		EditProfileInfo,
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
			<EditProfileInfo />
		</div>
	</div>
</template>

<style scoped></style>

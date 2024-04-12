<script>
import ComplaintsList from '@/components/shared/ComplaintsList';
import feather from 'feather-icons';

export default {
	name: 'complaints',
	components: {
		ComplaintsList,
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
			<ComplaintsList />
		</div>
	</div>
</template>

<style scoped></style>

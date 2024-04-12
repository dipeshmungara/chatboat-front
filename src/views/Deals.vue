<script>

import feather from 'feather-icons';
import DealList from '../components/shared/DealList.vue';

export default {
	name: 'About',
	components: {
		DealList,

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
		<div class="container mx-auto">
			<DealList />
		</div>
	</div>
</template>

<style scoped></style>

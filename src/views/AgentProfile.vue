<script>
import feather from 'feather-icons';
import AgentProfileInfo from '../components/profile/AgentProfileInfo.vue';

export default {
	name: 'About',
	components: {
		AgentProfileInfo,
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
			
			<AgentProfileInfo />
		</div>
	</div>
</template>

<style scoped></style>

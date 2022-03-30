<template>
	<button :class="customClass"><slot /></button>
</template>

<script>
export default {
	name: "SkillBadge",
	props: {
		customClass: {
			type: String,
			required: false,
		},
	},
};
</script>

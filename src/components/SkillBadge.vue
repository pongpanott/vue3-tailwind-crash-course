<template>
	<button
		class="h-[21px] px-4 text-[10px] flex items-center rounded-[10px] hover:cursor-default"
		:class="customClass"
	>
		<slot />
	</button>
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

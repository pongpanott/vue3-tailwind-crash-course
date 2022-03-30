<template>
	<div class="border-[1px] border-gray-200 rounded-lg">
		<img :src="jiramed" />

		<SkillBadge>your skills</SkillBadge>
	</div>
</template>

<script>
import SkillBadge from "@/components/SkillBadge.vue";

export default {
	name: "ProfileCard",
	components: { SkillBadge },
	data() {
		return {
			jiramed: require("@/assets/jiramed.png"),
		};
	},
};
</script>

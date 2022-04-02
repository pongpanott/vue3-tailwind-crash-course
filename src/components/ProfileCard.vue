<template>
	<div
		class="border-[1px] md:max-w-[493px] lg:max-w-full border-neutral-300 rounded-lg py-6 px-[30px] md:px-12 lg:flex"
	>
		<div
			class="md:justify-center lg:justify-start md:flex text-center md:items-center md:text-left w-full"
		>
			<img
				:src="jiramed"
				class="rounded-[50%] h-[120px] w-[120px] mx-auto mb-6 md:m-0 md:mr-[34px]"
			/>
			<div>
				<p class="text-neutral-900 text-xl leading-[17px] mb-[14px]">
					Firstname Lastname
				</p>
				<p class="text-neutral-500 text-sm leading-[17px] text-end">
					Software Engineer
				</p>
			</div>
		</div>

		<hr
			class="w-full mx-auto border-t-[1px] border-neutral-100 my-4 lg:hidden"
		/>
		<div class="lg:border-l-[1px] lg:border-neutral-100 lg:pl-[72px]">
			<div class="flex flex-wrap gap-2 lg:gap-x-2 lg:gap-y-[10px] lg:w-[208px]">
				<SkillBadge class="bg-badge-html text-white">HTML</SkillBadge>
				<SkillBadge class="bg-badge-js">JavaScript</SkillBadge>
				<SkillBadge class="bg-badge-vue text-white">Vue</SkillBadge>
				<SkillBadge class="bg-secondary-300 text-white">Web design</SkillBadge>
				<SkillBadge class="bg-primary-500 text-white">Figma</SkillBadge>
				<SkillBadge class="bg-badge-react text-white">React</SkillBadge>
				<SkillBadge class="bg-badge-tailwind text-white">Tailwind</SkillBadge>
				<SkillBadge class="bg-badge-rxjs text-white">Rxjs</SkillBadge>
				<SkillBadge class="bg-badge-mysql text-white">MySql</SkillBadge>
				<SkillBadge class="bg-badge-mongo text-white">Mongo</SkillBadge>
			</div>
		</div>
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

<template>
	<AppLayout>
		<div class="max-w-[600px] mx-auto w-full flex flex-col gap-y-6">
			<div><PrimaryButton /></div>
			<form
				@submit.prevent="onSubmit"
				class="border-[1px] border-gray-200 rounded w-full p-4 flex flex-col"
			>
				<div class="flex flex-col text-left">
					<!-- NOTE: style yout text field component here -->
					<input type="text" placeholder="enter your name" v-model="text" />
					<div class="min-h-[24px]">
						<span v-if="error" class="text-red-500 text-xs"
							>this field is required.</span
						>
					</div>
				</div>

				<div class="mt-4">
					<button>submit</button>
				</div>
			</form>
			<div class="border-[1px] border-gray-200 rounded-lg">
				<img :src="plusIcon" class="h-10 w-10" />
				<img :src="jiramed" />
			</div>
		</div>
	</AppLayout>
</template>

<script>
import AppLayout from "@/layout/AppLayout";
import PrimaryButton from "@/components/PrimaryButton";

export default {
	name: "HappyHacking",
	components: { AppLayout, PrimaryButton },
	data() {
		return {
			text: "",
			error: false,
			plusIcon: require("@/assets/plus.svg"),
			jiramed: require("@/assets/jiramed.png"),
		};
	},
	methods: {
		onSubmit() {
			if (this.text === "" || !this.text) {
				this.error = true;
			} else {
				const yourName = {
					name: this.text,
				};

				alert(JSON.stringify(yourName, null, 2));
			}
		},
	},
	watch: {
		text: function (val) {
			console.log("val", val);
			this.error = false;
		},
	},
};
</script>

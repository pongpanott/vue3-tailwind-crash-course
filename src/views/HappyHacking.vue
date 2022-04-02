<template>
	<AppLayout>
		<div class="max-w-[600px] mx-auto w-full flex flex-col gap-y-6">
			<div class="flex gap-x-4">
				<PrimaryButton /><PrimaryButton :disabled="true" />
			</div>
			<div class="flex gap-x-4">
				<OutlinedButton /><OutlinedButton :disabled="true" />
			</div>

			<form
				@submit.prevent="onSubmit"
				class="border-[1px] border-gray-200 rounded w-full p-4 flex flex-col"
			>
				<TextField
					placeholder="enter firstname"
					label="firstname"
					v-model="text"
					:error="error"
					:isEmpty="text.trim() === ''"
				/>
				<TextField
					placeholder="this field has been disabled"
					label="disable"
					:disabled="true"
					:isEmpty="true"
				/>

				<div class="mt-4">
					<button>submit</button>
				</div>
			</form>

			<ProfileCard />
		</div>
	</AppLayout>
</template>

<script>
import AppLayout from "@/layout/AppLayout";
import PrimaryButton from "@/components/PrimaryButton";
import OutlinedButton from "@/components/OutlinedButton";
import ProfileCard from "@/components/ProfileCard";
import TextField from "@/components/TextField";

export default {
	name: "HappyHacking",
	components: {
		AppLayout,
		PrimaryButton,
		OutlinedButton,
		ProfileCard,
		TextField,
	},
	data() {
		return {
			text: "",
			error: false,
		};
	},
	methods: {
		onSubmit() {
			if (this.text === "" || !this.text) {
				this.error = true;
			} else {
				const yourName = {
					firstname: this.text,
				};

				alert(JSON.stringify(yourName, null, 2));
			}
		},
	},
	watch: {
		text: function () {
			this.error = false;
		},
	},
};
</script>

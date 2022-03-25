<template>
	<div class="hamburger-wrapper">
		<span></span>
		<span></span>
		<span></span>
	</div>
</template>

<script>
export default {
	name: "HamburgerIcon",
};
</script>

<style scoped>
.hamburger-wrapper {
	user-select: none;
	cursor: pointer;
}

.hamburger-wrapper span {
	display: block;
	width: 32px;
	height: 4px;
	border-radius: 4px;
	margin-bottom: 5px;
	position: relative;
	background: #ffffff;
}
</style>

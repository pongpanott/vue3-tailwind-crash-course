import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage";
import HappyHacking from "@/views/HappyHacking";
import ColorPallete from "@/views/ColorPallete";

const routes = [
	{ path: "/", component: HomePage },
	{ path: "/excercise", component: HappyHacking },
	{ path: "/pallete", component: ColorPallete },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;

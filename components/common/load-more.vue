<template>
	<!-- 上拉加载 -->
	<view class="load-more">{{loadtext}}</view>
</template>

<script>
	export default {
		props:{
			loadtext:String
		}
	}
</script>

<style scoped>
	.load-more {
		text-align: center;
		color: #aaa;
		padding: 15upx;
	}
</style>

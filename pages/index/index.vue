<template>
	<view class="content">
		<view class="icon iconfont icon-home" style="color: red;font-size: 100upx;"></view>
		<navigator url="../demo/demo">
			<view>跳转到测试页</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.view-box{
		width: 200upx;
		height: 200upx;
		background: #CCCCCC;
		color:#007AFF;
		margin: 100upx auto;
	}
	
	.view-box-hover{
		background: red;
	}
</style>

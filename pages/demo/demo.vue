<template>
	<view>
		<view class="view-box animate a-swing" hover-stay-time="500" hover-class="view-box-hover"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
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

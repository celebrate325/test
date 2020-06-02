<template>
	<view class="top-list u-f animated a-fadeinL">
		<image :src="item.titlepic" mode="widthFix" lazy-load></image>
		<view>
			<view>#{{item.title}}#</view>
			<view>{{item.desc}}</view>
			<view>动态 {{item.totalnum}} 今日 {{item.todaynum}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		}
	}
</script>

<style scoped>
	.top-list {
		padding: 20upx 0;
		border-bottom: 1upx solid #EEEEEE;
	}
	.top-list image{
		   width: 150upx;
		   height: 150upx;
		   border-radius: 10upx;
		   margin-right: 20upx;
	}
	.top-list>view>view{
		color: #a4a4a4;
	}
	.top-list>view>view:first-child{
		color: #333333;
		font-size: 32upx;
	}
</style>

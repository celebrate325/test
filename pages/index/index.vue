<template>
	<view>
		<view class="index-list">
			<view class="index-list1 u-f-ac u-f-jsb">
				<view class="u-f-ac">
					<image src="../../static/logo.png" mode="widthFix" lazy-load></image>
					昵称
				</view>
				<view class="u-f-ac">
					<view class="icon iconfont iconzengjia"></view>关注
				</view>
			</view>
			<view class="index-list2">我是标题</view>
			<view class="index-list3">
				<image src="../../static/demo/detapic/11.jpg" mode="widthFix" lazy-load></image>
			</view>
			<view class="index-list4 u-f-ac u-f-jsb">
				<view class="u-f-ac">
					<view class="u-f-ac">
						<view class="icon iconfont iconsmile"></view>10
					</view>
					<view class="u-f-ac">
						<view class="icon iconfont iconkulian"></view>10
					</view>
				</view>
				<view class="u-f-ac">
					<view class="u-f-ac">
						<view class="icon iconfont iconpinglun"></view>10
					</view>
					<view class="u-f-ac">
						<view class="icon iconfont iconforward"></view>10
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
	.index-list {
		padding: 20upx;
		border-bottom: 1upx solid #eee;
	}

	.index-list1>view:first-child {
		align-items: center;
		color: #999;
	}

	.index-list1>view:last-child {
		align-items: center;
		background: #f4f4f4;
		border-radius: 5upx;
		padding: 0 10upx;
	}

	.index-list1>view:first-child image {
		width: 85upx;
		height: 85upx;
		border-radius: 100%;
		margin-right: 10upx;
	}

	.index-list2 {
		padding-top: 15upx;
		font-size: 32upx;
	}

	.index-list3 {
		padding-top: 15upx;
	}

	.index-list3>image {
		width: 100%;
		border-radius: 20upx;
	}

	.index-list4 {
		padding: 15upx 0;
	}

	.index-list4 view {
		color: #999;
	}

	.index-list4>view>view>view,.index-list4>view>view:first-child{
		margin-right: 10upx;
	}

</style>

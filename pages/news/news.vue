<template>
	<view>
		<!-- 自定义导航栏 -->
		<uni-nav-bar :statusBar="true" @clickRight="openAdd">
			<!-- 左边 -->
			<block slot="left">
				<view class="nav-left">
					<view class="icon iconfont iconqiandao">

					</view>
				</view>

			</block>
			<!-- 中间 -->
			<view class="nav-tab-bar u-f-ajc">
				<block v-for="(tab,index) in tabBars" :key="tab.id">
					<view class="active" :class="{'active':tabIndex==index}" @tap="changeTab(index)">
						{{tab.name}}
						<view v-if="(tabIndex==index)" class="nav-tab-bar-line"></view>
					</view>
				</block>
			</view>
			<!-- 右边 -->
			<block slot="right">
				<view class="nav-right">
					<view class="icon iconfont iconbianji u-f-ajc">
					</view>
				</view>
			</block>
		</uni-nav-bar>
		<view class="common-list u-f">
			<view class="common-list-l">
				<image src="/static/logo.png" lazy-load></image>
			</view>
			<view class="common-list-r">
				<view class="u-f-ac u-f-jsb">
					<view class="u-f-ac">昵称
						<view class="tag-sex icon iconfont iconmale">25</view>
					</view>
					<view class="icon iconfont iconzengjia">关注</view>
				</view>
				<view>我是标题</view>
				<view>
					<image src="../../static/demo/userpic/12.jpg" mode="widthFix" lazy-load></image>
				</view>
				<view class="u-f-ac u-f-jsb">
					<view>深圳 龙岗</view>
					<view class="u-f-ac">
						<view class="icon iconfont iconforward">10</view>
						<view class="icon iconfont iconpinglun">20</view>
						<view class="icon iconfont icondianzan_active">30</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
						name: "关注",
						id: "guanzhu"
					},
					{
						name: "话题",
						id: "huati"
					}
				]
			}
		},
		methods: {
			changeTab(index) {
				this.tabIndex = index
			},
			openAdd() {
				//打开发布页面
				uni.navigateTo({
					url: "../add-input/add-input",
				})
			}
		}
	}
</script>

<style>
	.common-list {
		padding: 20upx;
	}

	.common-list-l {
		/* 防止不被压缩 */
		flex-shrink: 0;
	}

	.common-list-l image {
		width: 90upx;
		height: 90upx;
		border-radius: 100%;
	}
.common-list-r{
	flex: 1;
	margin-left: 15upx;
	border-bottom: 1upx solid #eee;
	padding-bottom: 10upx;
}
	.common-list-r>view:nth-child(3)>image {
		width: 100%;
		border-radius: 10upx;
	}
.common-list-r>view:nth-child(1)>view:first-child{color: #999;font-size: 32upx;}
.tag-sex{background-color: #007AFF;color: #fff;font-size: 23upx;padding: 5upx 10upx;margin-left: 10upx;border-radius: 20upx;line-height: 22upx;}
.common-list-r>view:nth-child(1)>view:last-child{background-color: #eee;padding: 0 10upx;font-size: 26upx;}
.common-list-r>view:nth-child(2){font-size: 32upx;padding: 12upx 0;}
.common-list-r>view:nth-child(3){}
.common-list-r>view:nth-child(4)>view{color: #aaa;}
.common-list-r>view:nth-child(4)>view:nth-child(2)>view{margin-left: 10upx;padding-left: 5upx;}
	.nav-left>view,
	.nav-right>view {
		font-size: 40upx;
	}

	.nav-left>view {
		color: #ff9619;
	}

	.nav-left {
		margin-left: 16upx;
	}

	.nav-right {
		width: 100%;
	}

	.nav-tab-bar {
		width: 100%;
		margin-left: -20upx;
	}

	.nav-tab-bar>view {
		/* border: 1upx solid; */
		font-size: 32upx;
		padding: 0 15upx;
		font-weight: bold;
		color: #969696;
	}

	.active {
		color: #333 !important;
	}

	.nav-tab-bar-line {
		border-bottom: 5upx solid red;
		border-top: 5upx solid red;
		width: 70upx;
		border-radius: 20upx;
	}
</style>

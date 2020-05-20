<template>
	<view>
<uni-nav-bar :statusBar="true" :fixed="true" :border="false" @clickRight="openAdd">
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
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
	export default{
		components:{
			uniNavBar
		},
		props:{
			tabBars:Array,
			tabIndex:Number
		},
		methods:{
			openAdd() {
				//打开发布页面
				uni.navigateTo({
					url: "../add-input/add-input",
				})
			},
			changeTab(index) {
				this.$emit('change-tab',index);
			},
		}
	}
</script>

<style scoped>
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

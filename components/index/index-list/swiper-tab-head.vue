<template>
	<view class="uni-tab-bar">
		<scroll-view scroll-x class="uni-swiper-tab" :style="scrollStyle">
			<block v-for="(tab,index) in tabBars" :key="tab.id">
				<view class="swiper-tab-list" :class="{'active':tabIndex==index}" @tap="tabtap(index)" :style="scrollItemStyle">{{tab.name}}
					<view class="swiper-tab-line"></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			tabBars: Array,
			tabIndex: Number,
			scrollStyle:{
				type:String,
				default:""
			},
			scrollItemStyle:{
				type:String,
				default:""
			}
		},
		data() {
			return {

			}
		},
		methods: {
			// tabbar点击事件
			tabtap(index) {
				this.$emit('tabtap', index);
			},
		}
	}
</script>

<style scoped>
	.uni-swiper-tab {
		border: 1upx solid #eee;
	}

	.swiper-tab-list {
		color: #969696;
		font-weight: bold;
	}

	.uni-tab-bar .active {
		color: #343434;
	}

	.active .swiper-tab-line {
		border-bottom: 6upx solid #fede33;
		width: 70upx;
		margin: auto;
		border-top: 6upx solid #fede33;
		border-radius: 20upx;
	}

	.swiper-box {
		height: 500upx;
	}
</style>

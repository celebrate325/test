<template>
	<view class="index-list animated a-fadeinL">
		<view class="index-list1 u-f-ac u-f-jsb">
			<view class="u-f-ac">
				<image :src="item.userpic" mode="widthFix" lazy-load></image>
				{{item.username}}
			</view>
			<view class="u-f-ac" v-show="!isguanzhu" @tap="guanzhu">
				<view class="icon iconfont iconzengjia"></view>关注
			</view>
		</view>
		<view class="index-list2">{{item.title}}</view>
		<view class="index-list3 u-f-ajc">
			<!-- 图片 -->
			<image :src="item.titlepic" mode="widthFix" lazy-load></image>
			<!-- 视频 -->
			<template v-if="item.type=='video'">
				<view class="index-list-play icon iconfont iconbofang"></view>
				<view class="index-list-playinfo">{{item.playnum}}次播放 {{item.long}}</view>
			</template>

		</view>	
		<view class="index-list4 u-f-ac u-f-jsb">
			<view class="u-f-ac">
				<view class="u-f-ac" :class="{'active':(infonum.index==1)}" @tap="caozuo('ding')">
					<view class="icon iconfont iconsmile"></view>{{infonum.dingnum}}
				</view>
				<view class="u-f-ac" :class="{'active':(infonum.index==2)}" @tap="caozuo('cai')">
					<view class="icon iconfont iconkulian"></view>{{infonum.cainum}}
				</view>
			</view>
			<view class="u-f-ac">
				<view class="u-f-ac">
					<view class="icon iconfont iconpinglun"></view>{{item.commentnum}}
				</view>
				<view class="u-f-ac">
					<view class="icon iconfont iconforward"></view>{{item.sharenum}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		data() {
			return {
				isguanzhu: this.item.isguanzhu,
				infonum:this.item.infonum
			}
		},
		methods: {
			//关注
			guanzhu() {
				this.isguanzhu = true;
				uni.showToast({
					title: '关注成功'
				});
			},
			//顶踩
			caozuo(type) {
				// infonum: {
				// 	index: 0, //0:没有操作 1：顶 2：踩
				// 	dingnum: 11,
				// 	cainum: 11,
				// },
				console.log(this.infonum.index)
				console.log(type)
				switch (type) {
					case "ding":
						if (this.infonum.index == 1) {
							return;
						}
						this.infonum.dingnum++;
						if (this.infonum.index == 2) {
							this.infonum.cainum--;
						}
						this.infonum.index == 1
						break;
					case "cai":
						if (this.infonum.index == 2) {
							return;
						}
						this.infonum.cainum++;
						if (this.infonum.index == 1) {
							this.infonum.dingnum--;
						}
						this.infonum.index == 2
						break;
					default:
						break;
				}

			}

		}
	}
</script>

<style scoped>
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
		position: relative;
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

	.index-list4>view>view>view,
	.index-list4>view>view:first-child {
		margin-right: 10upx;
	}

	.index-list-play {
		position: absolute;
		font-size: 140upx;
		color: #fff;
	}

	.index-list-playinfo {
		position: absolute;
		background: rgb(51, 51, 51, 0.72);
		color: #fff;
		bottom: 8upx;
		right: 8upx;
		border-radius: 40upx;
		font-size: 22upx;
		padding: 0 12upx;
	}

	.index-list4 .active,
	.index-list4 .active>view {
		color: #c5f61c;
	}
</style>

<template>
	<view>
		<view class="uni-tab-bar">
			<scroll-view scroll-x class="uni-swiper-tab">
				<block v-for="(tab,index) in tabBars" :key="tab.id">
					<view class="swiper-tab-list" :class="{'active':tabIndex==index}" @tap="tabtap(index)">{{tab.name}}
						<view class="swiper-tab-line"></view>
					</view>
				</block>
			</scroll-view>
		</view>

		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperheight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in newsList" :key="index">
					<scroll-view scroll-y class="list">
						<block v-for="(item,index1) in items.list" :key="index1">
							<index-list :item="item" :index="index1"></index-list>
						</block>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item"></view>
				</swiper-item>
			</swiper>
		</view>


	</view>
</template>

<script>
	import indexList from "../../components/index/index-list/index-list.vue";
	export default {
		components: {
			indexList
		},
		data() {
			return {
				swiperheight: 500,
				tabIndex: 0,
				tabBars: [{
					name: "关注",
					id: "guanzhu"
				}, {
					name: "推荐",
					id: "tuijian"
				}, {
					name: "体育",
					id: "tiyu"
				}, {
					name: "热点",
					id: "redian"
				}, {
					name: "财经",
					id: "caijing"
				}, {
					name: "娱乐",
					id: "yule"
				}],
				newsList: [{
					list: [{
							userpic: "../../static/logo.png",
							username: "昵称",
							isguanzhu: false,
							title: "我是标题",
							type: "img", //img:图文，video:视频
							titlepic: "../../static/demo/detapic/11.jpg",
							infonum: {
								index: 0, //0:没有操作 1：顶 2：踩
								dingnum: 11,
								cainum: 11,
							},
							commentnum: 10,
							sharenum: 10,
						},
						{
							userpic: "../../static/logo.png",
							username: "昵称",
							isguanzhu: true,
							title: "我是标题",
							type: "video", //img:图文，video:视频
							titlepic: "../../static/demo/detapic/11.jpg",
							playnum: "20w",
							long: "2:47",
							infonum: {
								index: 1, //0:没有操作 1：顶 2：踩
								dingnum: 11,
								cainum: 11,
							},
							commentnum: 10,
							sharenum: 10,
						}
					]
				}, {
					list: [{
							userpic: "../../static/logo.png",
							username: "昵称",
							isguanzhu: false,
							title: "我是标题",
							type: "img", //img:图文，video:视频
							titlepic: "../../static/demo/detapic/11.jpg",
							infonum: {
								index: 0, //0:没有操作 1：顶 2：踩
								dingnum: 11,
								cainum: 11,
							},
							commentnum: 10,
							sharenum: 10,
						},
						{
							userpic: "../../static/logo.png",
							username: "昵称",
							isguanzhu: true,
							title: "我是标题",
							type: "video", //img:图文，video:视频
							titlepic: "../../static/demo/detapic/11.jpg",
							playnum: "20w",
							long: "2:47",
							infonum: {
								index: 1, //0:没有操作 1：顶 2：踩
								dingnum: 11,
								cainum: 11,
							},
							commentnum: 10,
							sharenum: 10,
						}
					]
				}, {
					list: [{
							userpic: "../../static/logo.png",
							username: "昵称",
							isguanzhu: false,
							title: "我是标题",
							type: "img", //img:图文，video:视频
							titlepic: "../../static/demo/detapic/11.jpg",
							infonum: {
								index: 0, //0:没有操作 1：顶 2：踩
								dingnum: 11,
								cainum: 11,
							},
							commentnum: 10,
							sharenum: 10,
						},
						{
							userpic: "../../static/logo.png",
							username: "昵称",
							isguanzhu: true,
							title: "我是标题",
							type: "video", //img:图文，video:视频
							titlepic: "../../static/demo/detapic/11.jpg",
							playnum: "20w",
							long: "2:47",
							infonum: {
								index: 1, //0:没有操作 1：顶 2：踩
								dingnum: 11,
								cainum: 11,
							},
							commentnum: 10,
							sharenum: 10,
						}
					]
				}, {
					list: [{
							userpic: "../../static/logo.png",
							username: "昵称",
							isguanzhu: false,
							title: "我是标题",
							type: "img", //img:图文，video:视频
							titlepic: "../../static/demo/detapic/11.jpg",
							infonum: {
								index: 0, //0:没有操作 1：顶 2：踩
								dingnum: 11,
								cainum: 11,
							},
							commentnum: 10,
							sharenum: 10,
						},
						{
							userpic: "../../static/logo.png",
							username: "昵称",
							isguanzhu: true,
							title: "我是标题",
							type: "video", //img:图文，video:视频
							titlepic: "../../static/demo/detapic/11.jpg",
							playnum: "20w",
							long: "2:47",
							infonum: {
								index: 1, //0:没有操作 1：顶 2：踩
								dingnum: 11,
								cainum: 11,
							},
							commentnum: 10,
							sharenum: 10,
						}
					]
				}, {
					list: []
				}, {
					list: []
				}, ],
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(100)
					this.swiperheight = height
				}
			})
		},
		methods: {
			// tabbar点击事件
			tabtap(index) {
				this.tabIndex = index;
			},
			// 滑动事件
			tabChange(e) {
				this.tabIndex = e.detail.current;
			}
		},
	}
</script>

<style>
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

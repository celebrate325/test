<template>
	<view>
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></swiper-tab-head>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperheight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in newsList" :key="index">
					<scroll-view scroll-y class="list" @scrolltolower="loadmore(index)">
						<template v-if="items.list.length>0">
							<!-- 话题列表 -->
							<block v-for="(item,index1) in items.list" :key="index1">
								<top-list :item="item" :key="index1"></top-list>
							</block>
							<!-- 上拉加载更多 -->
							<load-more :loadtext="items.loadtext"></load-more>
						</template>
						<template v-else>
							<!-- 无内容默认 -->
							<no-thing></no-thing>
						</template>

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
	import swiperTabHead from '@/components/index/index-list/swiper-tab-head.vue';
	import noThing from '@/components/common/no-thing.vue';
	import loadMore from "@/components/common/load-more.vue";
	import topList from '@/components/common/news/topic-list.vue'
	export default {
		components: {
			swiperTabHead,
			noThing,
			loadMore,
			topList
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
					loadtext: "上拉加载更多",
					list: [
						{
							titlepic:"../../static/demo/topicpic/2.jpg",
							title:"话题名称",
							desc:"我是话题描述",
							totalnum:50,
							todaynum:10,
						},
						{
							titlepic:"../../static/demo/topicpic/2.jpg",
							title:"话题名称",
							desc:"我是话题描述",
							totalnum:50,
							todaynum:10,
						},
						{
							titlepic:"../../static/demo/topicpic/2.jpg",
							title:"话题名称",
							desc:"我是话题描述",
							totalnum:50,
							todaynum:10,
						},
						{
							titlepic:"../../static/demo/topicpic/2.jpg",
							title:"话题名称",
							desc:"我是话题描述",
							totalnum:50,
							todaynum:10,
						}
					]
				}, {
					loadtext: "上拉加载更多",
					list: [
						{
							titlepic:"../../static/demo/topicpic/2.jpg",
							title:"话题名称",
							desc:"我是话题描述",
							totalnum:50,
							todaynum:10,
						},
						{
							titlepic:"../../static/demo/topicpic/2.jpg",
							title:"话题名称",
							desc:"我是话题描述",
							totalnum:50,
							todaynum:10,
						},
						{
							titlepic:"../../static/demo/topicpic/2.jpg",
							title:"话题名称",
							desc:"我是话题描述",
							totalnum:50,
							todaynum:10,
						},
						{
							titlepic:"../../static/demo/topicpic/2.jpg",
							title:"话题名称",
							desc:"我是话题描述",
							totalnum:50,
							todaynum:10,
						}
					]
				}, {
					loadtext: "上拉加载更多",
					list: [
						{
							titlepic:"../../static/demo/topicpic/2.jpg",
							title:"话题名称",
							desc:"我是话题描述",
							totalnum:50,
							todaynum:10,
						},
						{
							titlepic:"../../static/demo/topicpic/2.jpg",
							title:"话题名称",
							desc:"我是话题描述",
							totalnum:50,
							todaynum:10,
						},
						{
							titlepic:"../../static/demo/topicpic/2.jpg",
							title:"话题名称",
							desc:"我是话题描述",
							totalnum:50,
							todaynum:10,
						},
						{
							titlepic:"../../static/demo/topicpic/2.jpg",
							title:"话题名称",
							desc:"我是话题描述",
							totalnum:50,
							todaynum:10,
						}
					]
				}, {
					loadtext: "上拉加载更多",
					list: []
				}, {
					loadtext: "上拉加载更多",
					list: []
				}, {
					loadtext: "上拉加载更多",
					list: []
				}],
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
					},
					//上拉加载
					loadmore(index) {
						if (this.newsList[index].loadtext != "上拉加载更多") {
							return;
						}
						//修改状态
						this.newsList[index].loadtext = "加载中...";
						//获取数据
						setTimeout(() => {
							//获取完成
							let obj = {
								userpic: "/static/logo.png",
								username: "昵称",
								isguanzhu: false,
								title: "我是标题",
								type: "img", //img:图文，video:视频
								titlepic: "/static/demo/detapic/11.jpg",
								infonum: {
									index: 0, //0:没有操作 1：顶 2：踩
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							};
							this.newsList[index].list.push(obj);
							this.newsList[index].loadtext = "上拉加载更多";
						}, 1000);
						// this.newsList[index].loadtext="没有更多数据了";
					},
				}
		}
</script>

<style>

</style>

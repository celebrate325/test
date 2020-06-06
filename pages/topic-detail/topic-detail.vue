<template>
	<view>
		<!-- 话题介绍 -->
		<topic-info :item="topicInfo"></topic-info>
		<!-- tabbar切换 -->
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap" scrollStyle="border:0;" scrollItemStyle="width:50%;"></swiper-tab-head>
		<!-- 列表- -->
		<view class="topic-detail-list">
			<block v-for="(item,index) in tablist" :key="index">
				<template v-if="tabIndex==index">
					<!-- 列表 -->
					<block v-for="(list,listindex) in item.list" :key="listindex">
						<common-list :item="list" :index="listindex"></common-list>
					</block>
					<!-- 上拉加载 -->
				</template>
			</block>
		</view>
	</view>
</template>

<script>
	import topicInfo from '@/components/topic-info.vue';
	import swiperTabHead from '@/components/index/index-list/swiper-tab-head.vue';
	import commonList from '@/components/common/common-list.vue';
	export default {
		components: {
			topicInfo,
			swiperTabHead,
			commonList
		},
		data() {
			return {
				topicInfo:{
					titlepic:'/static/demo/topicpic/topic-detail-dead.jpg',
					title:'忆往事，敬余生',
					desc:'我是描述',
					totalnum:'1000',
					todaynum:'1000'
				},
				tabIndex:0,
				tabBars: [{
					name: "默认",
					id: "moren"
				}, {
					name: "最新",
					id: "zuixin"
				}],
				tablist:[
					{
						loadtext: "上拉加载更多",
						list:[
							//文字
							{
								userpic: "/static/logo.png",
								username: "哈哈",
								sex: 0, //0 男 1 女
								age: 25,
								isguanzhu: false,
								title: "我是标题",
								titlepic: "",
								video: false,
								share: false,
								path: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								goodnum: 20,
							},
							//图文
							{
								userpic: "/static/logo.png",
								username: "哈哈",
								sex: 0, //0 男 1 女
								age: 25,
								isguanzhu: false,
								title: "我是标题",
								titlepic: "/static/demo/userpic/13.gif",
								video: false,
								share: false,
								path: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								goodnum: 20,
							},
							//视频
							{
								userpic: "/static/logo.png",
								username: "哈哈",
								sex: 0, //0 男 1 女
								age: 25,
								isguanzhu: false,
								title: "我是标题",
								titlepic: "/static/demo/userpic/13.gif",
								video: {
									looknum: "20w",
									long: "2:17",
								},
								share: false,
								path: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								goodnum: 20,
							},
						]
					},
					{
						loadtext: "上拉加载更多",
						list:[
							//文字
							{
								userpic: "/static/logo.png",
								username: "哈哈",
								sex: 0, //0 男 1 女
								age: 25,
								isguanzhu: false,
								title: "我是标题",
								titlepic: "",
								video: false,
								share: false,
								path: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								goodnum: 20,
							},
							//图文
							{
								userpic: "/static/logo.png",
								username: "哈哈",
								sex: 0, //0 男 1 女
								age: 25,
								isguanzhu: false,
								title: "我是标题",
								titlepic: "/static/demo/userpic/13.gif",
								video: false,
								share: false,
								path: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								goodnum: 20,
							},
							//视频
							{
								userpic: "/static/logo.png",
								username: "哈哈",
								sex: 0, //0 男 1 女
								age: 25,
								isguanzhu: false,
								title: "我是标题",
								titlepic: "/static/demo/userpic/13.gif",
								video: {
									looknum: "20w",
									long: "2:17",
								},
								share: false,
								path: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								goodnum: 20,
							},
						]
					},
				]
			}
		},
		methods: {
			// tabbar点击事件
			tabtap(index) {
				this.tabIndex = index;
			},
		}
	}
</script>

<style scoped>

</style>

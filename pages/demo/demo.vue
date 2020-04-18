<template>
	<view class="demo">
		<view class="view-box animate a-swing" hover-stay-time="500" hover-class="view-box-hover"></view>
		<view>官方列表样式</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate uni-navigate-right">
					列表一
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-navigate uni-navigate-right">
					列表二
				</view>
			</view>
		</view>
		<!-- <web-view src="https://www.iconfont.cn/"></web-view> -->
		<view class="box">
			<view class="box-item" v-for="(item,index) in number" :key="index">{{item.num}}</view>
		</view>
		<view class="box1">
			<view class="box-item1">1</view>
			<view class="box-item1">2</view>
			<view class="box-item1">3</view>
			<view class="box-item1">4</view>
			<view class="box-item1">5</view>
			<view class="box-item1">6</view>
			<view class="box-item1">7</view>
		</view>
		<view class="box2">
			<view class="box-item2">1</view>
			<view class="box-item2">1</view>
			<view class="box-item2">1</view>
			<view class="box-item2">1</view>
			<view class="box-item2">1</view>
			<view class="box-item2">1</view>
		</view>
		<view :class="classname">改变样式</view>
		<button type="default" @tap="changeClass">改变样式</button>

		<view class="box3" :class="[class1,class2]">box3</view><!-- 绑定样式 -->
		<view class="box3" :class="[age>10?class1:'',sex=='女'?class2:'']">box3</view><!-- 条件变换样式 -->
		<view class="box3" :class="{'bor':isActive,'fs':isfs}">box3</view><!-- 布尔变换样式 -->
		<view class="box3" :style="{'color':color,'font-size': size+'upx',}">变量样式</view>
		<template v-if="isShow">
			<view class="box4">box</view>
		</template>
		<button type="default" @tap="changeShow">显隐切换</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				number: [{
					num: 1,
				}, {
					num: 2
				}, {
					num: 3
				}, {
					num: 4
				}, {
					num: 5
				}, {
					num: 6
				}],   
				classname: "class1",
				class1:"bor",
				class2:"fs",
				age:1,
				sex:"女",
				isActive:false,
				isfs:true,
				color:"#333333",
				size:50,
				isShow:true,
			}
		},
		methods: {
			//改变样式
			changeClass() {
				this.classname = "class2";
			},
			//显隐切换
			changeShow(){
				this.isShow = !this.isShow
			}
		}
	}
</script>

<style>
	.demo{
		width: 750upx;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.view-box {
		width: 200upx;
		height: 200upx;
		background: #CCCCCC;
		color: #007AFF;
		margin: 100upx auto;
	}

	.view-box-hover {
		background: red;
	}

	.box {
		display: flex; //水平定位,不换行
		flex-wrap: wrap; //nowrap不换行 | wrap-reverse倒叙换行
		height: 500upx;
		width: 96%;
		justify-content: space-between; //space-around | flex-start |flex-end
		border: 1upx solid #ccc;
		padding: 20upx 10upx;
		align-items: stretch; //自动计算子元素的高宽
	}

	.box-item {
		background: #007AFF;
		color: #fff;
		height: 200upx;
		width: 200upx;
		font-size: 30upx;
		font-weight: bold;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	//奇数列表
	.box-item:nth-of-type(odd) {
		background: #007AFF;
	}

	.box-item:nth-of-type(even) {
		background: #09BB07;
	}

	.box-item1 {
		color: #fff;
		height: 200upx;
		width: 200upx;
		font-size: 30upx;
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #007AFF;
	}

	.box1 {
		height: 300upx;
		width: 100%;
		border: 1upx solid #333333;
		display: flex;
	}

	.box-item1:first-of-type {
		flex-shrink: 0; //第一个元素不被压缩
	}

	//偶数元素改变样式
	.box-item1:nth-of-type(even) {
		background: #09BB07;
	}

	.box2 {
		height: 300upx;
		width: 100%;
		border: 1upx solid #333333;
		display: flex;
	}

	.box-item2 {
		color: #fff;
		height: 200upx;
		/* width: 200upx; */
		flex: 1; //平均各占一份
		font-size: 30upx;
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #007AFF;
	}

	.box-item2:nth-of-type(even) {
		background: #09BB07;
	}

	.box-item2:nth-of-type(4) {
		flex: 1;
	}

	.box-item2:nth-of-type(5) {
		flex: 2; //占两份
	}

	.box-item2:nth-of-type(6) {
		flex: 1;
	}

	.class1 {
		width: 200upx;
		height: 200upx;
		background: #007AFF;
	}

	.class2 {
		width: 400upx;
		height: 400upx;
		background: #FF0000;
	}

	.box3 {
		background-color: #09BB07;
		color: #FFFFFF;
		width: 350upx;
		height: 350upx;
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 50upx;
	}
	.bor{
		border: 10upx solid #007AFF;
	}
	.fs{
		font-size: 80upx;
		color: red;
	}
	.box4{
		width: 200upx;
		height: 200upx;
		background-color: #007AFF;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		
	}
</style>

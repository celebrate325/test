<template>
	<view>
		<!-- 自定义导航栏 -->
		<uni-nav-bar :statusBar="true" rightText="发布" left-icon="arrowleft" @clickLeft="back" @clickRight="submit">
			<view class="u-f-ajc head-add" @tap="changelook">
				<view>
					{{yinsi}}
				</view>
				<view class="icon iconfont iconxialazhankai">
				</view>
			</view>
		</uni-nav-bar>
		<!-- 多行输入框 -->
		<view class="uni-textarea">
			<textarea v-model="text" placeholder="说一句话吧~" />
			</view>
		<!-- 上传多图 -->
		<upload-images @upload="upload"></upload-images>
		
		<!-- 弹出公告 -->
		<uni-popup ref="showtip" :type="type" :mask-click="false" @change="change">
			<view class="uni-tip">
			<image class="popImg" src="../../static/jingao.gif" mode="widthFix"></image>
				<text class="uni-tip-content">1、涉及黄色，政治，广告及骚扰信息</text>
				<text class="uni-tip-content">2、设计人身攻击</text>
				<text class="uni-tip-content">3、留联系方式，透露他人隐私</text>
				<text class="uni-tip-content">一经核查将被封禁，情节严重者永久封禁</text>
				<view class="uni-tip-group-button">
					<text class="uni-tip-button" @click="cancel('tip')">确定</text>
				</view>
			</view>
		</uni-popup>
		
		<!-- <uni-popup ref="showpopup" :type="type" @change="change"><text class="popup-content">
		asdfads
		</text></uni-popup> -->
		
	</view>
</template>

<script>
	let changelook = ['所有人可见', '仅自己可见'];
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
	import uploadImages from '../../components/common/upload-images.vue';
	import uniPopup from "../../components/uni-popup/uni-popup.vue";
	export default {
		components: {
			uniNavBar,uploadImages,uniPopup
		},
		data() {
			return {
				yinsi: "所有人可见",
				text:"",
				imglist:[],
				type: 'center',
				isget:false,
			}
		},
		onLoad() {
			// this.change();
		},
		onBackPress(){
			//如果有值
			if(!this.text && this.imglist.length<1){return}
			if(!this.isget){
				this.baocun();
				return true;
			}
		},
		methods: {
			//保存为草稿
			baocun(){
			uni.showModal({
			    content: '是否要保存为草稿？',
			    cancelText: '不保存',
			    confirmText: '保存',
			    success: res => {
					if(res.confirm){
						console.log("保存")
					}else{
						console.log("不保存")
					}
					this.isget=true;
					uni.navigateBack({
					    delta: 1
					});
					},
			});
			},
			change(e) {
				console.log(e);
				// console.log('是否打开:' + e.show)
			},
			//返回
			back() {
				uni.navigateBack({
					delta: 1,
				})
			},
			//发布
			submit() {
				console.log("发布")
			},
			//隐私
			changelook() {
				uni.showActionSheet({
					itemList: changelook,
					success: (res) => {
						this.yinsi = changelook[res.tapIndex]
					},
					fail() {

					}
				})
			},
			cancel(type) {
				console.log(type);
				this.$refs['show' + type].close()
			},
			upload(arr){
				this.imglist = arr
				console.log(this.imglist)
			}
			
		},
 	}
</script>

<style>
	.uni-textarea{
	border: 1upx solid #eee;
	}
	.head-add:nth-child(1){
		display:flex;
		flex: 1;
	}
	/* 提示窗口 */
		.uni-tip {
			/* #ifndef APP-NVUE */
			display: flex;
			flex-direction: column;
			/* #endif */
			padding: 15px;
			width: 300px;
			background-color: #fff;
			border-radius: 10px;
		}
	.popImg{
		width: 100%;
	}
		.uni-tip-title {
			margin-bottom: 10px;
			text-align: center;
			font-weight: bold;
			font-size: 16px;
			color: #333;
		}
	
		.uni-tip-content {
			/* padding: 15px;
	*/
			font-size: 14px;
			color: #666;
		}
	
		.uni-tip-group-button {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			margin-top: 20px;
		}
	
		.uni-tip-button {
			flex: 1;
			text-align: center;
			font-size: 14px;
			color: #3b4144;
			background: #FFB400;
			border-radius: 10upx;
			color: #fff;
		}
</style>

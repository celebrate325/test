<template>
	<view>
		<view :hidden="userFeedbackHidden" class="popup_content">
			<view class="popup_title">写下您的反馈意见</view>
			<view class="popup_textarea_item">
				<textarea class="popup_textarea" placeholder='有什么想告诉我们的...' v-model="feedbackContent">
						</textarea>
				<view @click="submitFeedback()">
					<button class="popup_button">提交反馈</button>
				</view>
			</view>
		</view>
		<view class="popup_overlay" :hidden="userFeedbackHidden" @click="hideDiv()">asdasd</view>
		<button type="primary" size="mini" @tap="show">按钮</button>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				userFeedbackHidden: true, // 默认隐藏
				feedbackContent: '' // 用户反馈内容
			}
		},
		methods: {
			//显示弹出框
			show() {
				this.userFeedbackHidden = false;
			},
			showDiv() { // 显示输入弹出框
				this.userFeedbackHidden = false;
			},
			hideDiv() { // 隐藏输入弹出框
				this.userFeedbackHidden = true;
			},
			submitFeedback() { // 提交反馈
				var _this = this;
				console.log(_this)
				// 提交反馈内容
				console.log(_this.feedbackContent);
			}
		},
	}
</script>
<style>
	.popup_overlay {
		width: 100upx;
		height: 100upx;
		position: fixed;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 100%;
		background-color: black;
		z-index: 1001;
		-moz-opacity: 0.8;
		opacity: .80;
		filter: alpha(opacity=88);
	}

	.popup_content {
		position: fixed;
		top: 50%;
		left: 50%;
		width: 520upx;
		height: 550upx;
		margin-left: -270upx;
		margin-top: -270upx;
		border: 10px solid white;
		background-color: white;
		z-index: 1002;
		overflow: auto;
		border-radius: 20upx;
	}

	.popup_title {
		padding-top: 20upx;
		width: 480upx;
		text-align: center;
		font-size: 32upx;
	}

	.popup_textarea_item {
		padding-top: 5upx;
		height: 240upx;
		width: 440upx;
		background-color: #F1F1F1;
		margin-top: 30upx;
		margin-left: 20upx;
	}

	.popup_textarea {
		width: 410upx;
		font-size: 26upx;
		margin-left: 20upx;
	}

	.popup_button {
		color: white;
		background-color: #4399FC;
		border-radius: 20upx;
	}
</style>

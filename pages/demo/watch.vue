<template>
	<view>
		<view>{{name}}</view>
		<button type="default" @tap="edit">修改字符</button>
		<view>{{num}}</view>
		<view>{{num>10?'优秀':" "}}</view>
		<button type="default" @tap="number">修改数值</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:"我是一个名称！",
				num:0,
			}
		},
		watch:{
			name(val){
				console.log(val)
			},
			num(val){
				console.log(val)
			}
		},
		methods:{
			edit(){
				this.name = '我被修改了';
			},
			number(){
				this.num++
			}
		},
	}
</script>

<style>
</style>

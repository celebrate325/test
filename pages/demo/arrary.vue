<template>
	<view>
		<!-- 一维数组 -->
		<!-- <block v-for="(item,index) in list" :key="index">
			<view>{{index}}-{{item}}</view>
		</block> -->
		<!-- <block v-for="(val,index1) in list2" :key="index1">
			<view>{{val.name}}</view>
		</block> -->
		<!-- <block v-for="(val,index1) in list3" :key="index1">
			<view>{{val.name}}</view>
			<view v-for="(item,index) in val.list" :key="index">
				{{index}} - {{item}}
			</block>
		</view> -->
		<block v-for="(val,index1) in objlist" :key="index1">
			<view>
				{{index1}} - {{val}}
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ["篮球", "足球", "羽毛球"],
				list2: [{
					name: "篮球"
				}, {
					name: "足球"
				}, {
					name: "羽毛球"
				}],
				list3: [{
					name: "云南",
					list: ["昆明", "玉溪", "曲靖"]
				},{
					name: "四川",
					list: ["成都", "汶川", "宜宾"]
				}, ],
				objlist:{
					name1:"篮球",
					name2:"足球",
					name3:"羽毛球"
				}
			}
		},
	}
</script>

<style>
</style>

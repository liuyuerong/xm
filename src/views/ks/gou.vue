<template>
    <div class="box">
<van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" to="/muyi">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
active:0,
        };
    },
    created() {

    },
    mounted() {
this.goodOne()
    },
    methods: {

    }
};
</script>

<style scoped>

</style>

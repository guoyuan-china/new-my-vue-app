<template>
    <div>
        <button @click="getInfo">查询</button>
        <button>增加</button>
        <button>修改</button>
        <button>删除</button>
    </div>
    <div><button @click="back">{{backButtonText}}</button></div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import { useRouter} from "vue-router";
import {userApi} from "@/api/user.ts";

const backButtonText = ref<String>("返回上一页");

console.log(import.meta.env.VITE_API_BASE_URL)
console.log(import.meta.env.VITE_APP_TITLE)
const getInfo = async () => {
    const res = await userApi.getInfo();
    console.log(res);
}
const router = useRouter()
const back = () => {
    router.back()
}
</script>

<style scoped>

</style>

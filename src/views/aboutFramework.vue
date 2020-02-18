<template>
    <div >
        <div class="model_banner">
           <img :src="banner.img_url" width="100%">
        </div>

        <Row :gutter="30" style="padding:15px 0 0px">
            <Col span="24">
            <!-- <Menu mode="horizontal" active-name="0" :active-name="data[0].id"> -->
                <Menu mode="horizontal" active-name="0">
                    <div class="layout-assistant">
                        <!-- 企业简介 -->
                        <div v-for="data in data.slice(0, 1)">
                            <Menu-item :name="data.id">
                                <p @click="changeInfo(6,data.template)">{{data.name}}</p>
                            </Menu-item>
                        </div>
                        <!-- 列表页 -->
                        <div v-for="data in data.slice(1, 6)">
                            <Menu-item :name="data.id">
                                <p @click="changeInfo(data.id,data.template)">{{data.name}}</p>
                            </Menu-item>
                        </div>
                        <!-- 表单 -->
                        <div v-for="data in data.slice(6, 7)">
                            <Menu-item :name="data.id">
                                <p @click="changeInfo(data.id,data.template)">{{data.name}}</p>
                            </Menu-item>
                        </div>
                    </div>
                </Menu>  
            </Col>
        </Row>
        
        <Row :gutter="30" style="padding:0px 0 60px">
            <Col span="17">
            <br> <br>
                <img src="../../public/img/zuzhijigou.png" width="100%">
            </Col>
            <Col span="7">
                <div style="background:#fff;padding:15px;margin-top:10px">
                     <Ad :meeting="meeting" :ad2="ad2"></Ad>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>

import About from '../components/about/form'
import Ad from '../components/list/ad'

export default {
    components:{
        About,
        Ad
    },
    data() {
        return {
            id:{},
            data:'',
            meeting:'',
            ad2:'',
            banner:'没有上传banner',
            info:'',
        }
    },   
    mounted() {
        this.list();
    },
 methods: {
        async list(){
            let param = {
                id:this.$route.query.id
            }
            let res = await this.$api.modelsAFW(param);
            if(res){
                this.data = res.data;
                this.meeting = res.meeting;
                this.ad2 = res.ad2;
                this.banner = res.banner;
                this.info = res.info;
                console.log(res);
            }
            this.loading = false;
        },

        changeInfo(id,template){
            this.$router.push({ path: '/'+ template , query: {id} });
        },

    },
}
</script>

<style lang="less" scoped>

</style>

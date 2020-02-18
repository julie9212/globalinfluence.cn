<template>
    <div >
        <div class="model_banner">
           <img :src="banner.img_url" width="100%">
        </div>

        <Row :gutter="30" style="padding:15px 0 0px">
            <Col span="24">
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
            <Col span="24">
                <About :info="info"></About>
                <br><br>
            </Col>
            <div style="text-align:center">
                <Page :total="total" show-total  show-elevator @on-change="page"></Page>
            </div>
        </Row>

    </div>
</template>

<script>

import About from '../components/about/list'


export default {
    components:{
        About,
    },
    data() {
        return {
            id:{},
            data:'',
            info:'',
            total: 1,
            infoid:'',
            banner:'没有上传banner',
        }
    },   
    mounted() {
        this.list();
    },
    methods: {
        async list(page= 1){
            let param = {
                infoid:this.$route.query.id,
                page:page,
                id:this.$route.query.id
            }
            let res = await this.$api.modelsAL(param);
            if(res){
                this.total = res.total;
                this.data = res.data;
                this.info = res.info;
                this.banner = res.banner;
                console.log(res);
            }
            this.loading = false;
        },
        changeInfo(id,template){
            this.$router.push({ path: '/'+ template , query: {id} });
            this.list(1);
        },
        page(num){
            this.list(num);
        }
    },
}
</script>

<style lang="less" scoped>

</style>

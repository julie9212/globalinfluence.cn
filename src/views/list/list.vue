<template>
    <div >
        <div class="model_banner">
           <!-- <img src="../../public/img/banner1.png" width="100%"> -->
           <img :src="banner.img_url" width="100%">
        </div>
        <Row :gutter="30" style="padding:15px 0 0px">
            <Col span="24">
                <!-- <Menu mode="horizontal" active-name="0" :active-name="data[0].id"> -->
                <Menu mode="horizontal" active-name="0">
                    <div class="layout-assistant">
                        <div v-for="data in data">
                            <Menu-item :name="data.id">
                                <p @click="changeInfoid(data.id)">{{data.name}}</p>
                            </Menu-item>
                        </div>
                    </div>
                </Menu>
            </Col>
        </Row>

        <Row :gutter="30" style="padding:0px 0 60px">
            <Col span="17">
                <List :info="info"></List>
                <br>
                <div style="text-align:center">
                    <Page :total="total" show-total  show-elevator @on-change="page"></Page>
                </div>
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

import List from '../../components/list/list'
import Ad from '../../components/list/ad'


export default {
    components:{
        List,
        Ad
    },
    data() {
        return {
            id:'',
            data:'',
            info:'',
            total: 1,
            infoid:'',
            meeting:'',
            ad2:'',
            banner:'没有上传banner',
        }
    },   
    mounted() {
        this.list();
    },
    methods: {
        async list(page= 1){
            this.loading = true;
            let param = {
                infoid:this.infoid,
                page:page,
                id:this.$route.query.id
            }
            let res = await this.$api.models(param);
            if(res){
                this.total = res.total;
                this.data = res.data;
                this.info = res.info;
                this.meeting = res.meeting;
                this.ad2 = res.ad2;
                this.banner = res.banner;
                // console.log(res);
            }
            this.loading = false;
        },
        changeInfoid(n){
            this.infoid = n;
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

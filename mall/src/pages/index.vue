<template>
    <div class="index">
       <div class="container">
           <div class="swiper-box">
               <swiper v-bind="swiperOption">
                   <swiper-slide :key="item" v-for="item in slideList">
                       <a v-bind:href="'/#/product/'+item.id">
                           <img v-bind:src="item.img" >
                       </a>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                   </swiper-slide>
               </swiper>
           </div>
           <div class="ads-box"></div>
           <div class="banner"></div>
           <div class="product-box"></div>
       </div>
       <service-bar></service-bar> 
    </div>
</template>
<script>
import ServiceBar from './../components/ServiceBar'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
    name:'index',
    components:{
        ServiceBar,
        Swiper,
        SwiperSlide
    },
       
    data(){
        return{
             swiperOption:{
                autoPlay:true,
                loop:true,
                effect:'cube',
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 100,
                    shadowScale: 0.6
                }
            },
            
            slideList:[
                {
                    id:'42',
                    img:'/imgs/slider/slide-1.jpg'
                },
                {
                    id:'45',
                    img:'/imgs/slider/slide-2.jpg'
                },
                {
                    id:'46',
                    img:'/imgs/slider/slide-3.jpg'
                },
                {
                    id:'',
                    img:'/imgs/slider/slide-4.jpg'
                },
                {
                    id:'',
                    img:'/imgs/slider/slide-5.jpg'
                }
            ]
        }
    }

  }
   

</script>
<style lang="scss">
    .index{
        .swiper-box{
            .swiper-container{
                 height: 451px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        }
    }
</style>
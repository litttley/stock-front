<template>

    <div class="home_container">

        <div class="left-sider">
            <div class="logo-con">
                <img src="../assets/images/logo_big.png"
                     style="width: 125px; height: 45px; border-radius: 5px 5px 5px 0px; margin-left: 20px;">
            </div>

            <el-menu
                    background-color="#001529"
                    text-color="#fff"
                    default-active="2"
                    class="el-menu-vertical-demo"
            >
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>股票管理</span>
                    </template>

                    <el-menu-item index="1">选项1</el-menu-item>
                </el-submenu>
            </el-menu>


            <el-menu
                    background-color="#001529"

                    default-active="2"
                    class="el-menu-vertical-demo"
            >
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>易经研究</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
        </div>

        <el-main>
            <!--路由占位符-->
            <router-view></router-view>
        </el-main>
      <!--  <div class="right-layout">
            dddd
        </div>-->
    </div>

</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style lang="less" scoped>
    .home_container {
        background-color: orange;
        height: 100%;

        display: grid;
        grid-template-columns:  15% 85%;

        grid-template-rows: 1fr;
    }

    .left-sider {
        height: 100%;
        background-color:  #001529;
     /*   display: grid;
        grid-template-columns:  1fr;
        grid-template-rows: 45px 1fr;*/

    }

    .right-layout {

        background-color: white;
    }

    .side-menu-wrapper {
        height: 100%;
    }

    .logo-con {
        height: 56px;
        width: 100%;
        background-color: #001529;

        img {
            width: 100%;
        }

    }

    .el-menu{
        width: 100%;
        border-right: solid 0px  #001529;
    }

    .el-main{
        padding: 0px;
    }


</style>
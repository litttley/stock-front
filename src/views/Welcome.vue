<template>
    <div class="welcome_container">
        <div class="welcome_header">
            <div class="header-bar">

                <span class="iconfont icon-cehua"></span>


                <!--面包屑导航区-->
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>首页</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
                    <el-breadcrumb-item>用户列表</el-breadcrumb-item>

                </el-breadcrumb>

                <div class="right_button1">
                    <img src="../assets/logo.png">
                </div>
                <div class="right_button">


                        <Dropdown class="dropdown-main" >
                            <a href="javascript:void(0)">
                                admin
                                <Icon type="ios-arrow-down"></Icon>
                            </a>
                            <Dropdown-menu slot="list">
                                <Dropdown-item>驴打滚</Dropdown-item>
                                <Dropdown-item>炸酱面</Dropdown-item>
                                <Dropdown-item>豆汁儿</Dropdown-item>
                                <Dropdown-item>冰糖葫芦</Dropdown-item>
                                <Dropdown-item>北京烤鸭</Dropdown-item>
                            </Dropdown-menu>
                        </Dropdown>






                </div>

            </div>
        </div>
        <div class="welcome_content">

        </div>
    </div>
</template>

<script>
    export default {
        name: "Welcome"
    }
</script>

<style lang="less" scoped>
    .welcome_container {
        background-color: orange;
        height: 100%;

        display: grid;
        grid-template-columns:  1fr;

        grid-template-rows: 60px;
    }

    .welcome_header {

        padding: 0 20px;
        background-color: white;

    }

    .header-bar {
        height: 100%;
        position: relative;
        width: 100%;
    }

    .sider-trigger-a {
        color: #5c6b77;
        display: inline-block;
        height: 40px;
        margin-top: 12px;
        padding: 6px;
        text-align: center;
        width: 40px;
    }

    .icon-cehua {
        width: 100px;
   /*     margin-top: 14px;*/
        font-size: 26px;
    }



    .header-bar {
        display: flex;
        flex-direction: row;
    }

    .el-breadcrumb {
        width: 100%;
        margin-top: 19px;
        display: inline-block;

    }



    .icon-cehua:before {
        vertical-align: sub;
       color: orange;
    }
.dropdown-main{
    width: 100px;
    font-size: 14px;
    margin-top: 19px;
}

    .right_button1{
        height: 32px;
        width: 32px;
        border: 1px solid #eee;
        padding: 1px;
        box-shadow: 0 0 10px #be6b6b;
        position: absolute;
        left: 89%;
        /* transform: translate(-50%, -50%); */
        border-radius: 50%;
        background-color: orange;
        /* display: inline-block; */
        margin-top: 14px;

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }








</style>
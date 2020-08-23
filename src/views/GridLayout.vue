<template>
    <div class="grid">
        <div class="title">title</div>
        <div class="header">header</div>
        <div class="sidebar" >sidebar</div>
        <div class="content">content</div>
        <div class="footer">footer</div>
    </div>
</template>

<script>
    export default {
        name: "GridLayout"
    }
</script>

<style lang="less" scoped>
    .grid{
        display: grid;
        grid-template-columns: 1fr 500px 1fr 500px;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas:
                ". title title ."
                ". header header . "
                ". sidebar content ."
                ". footer footer .";
    }
    .grid div:nth-child(even){
        background-color: red;
    }

    .grid div:nth-child(odd){
        background-color: green;
    }

    .title{
  /*      grid-column-start: 1;
        grid-column-end: 3;*/
    /*    grid-column:  1 / 3;*/
        grid-area: title;
    }

    .header{
        /*      grid-column-start: 1;
              grid-column-end: 3;*/
        /*    grid-column:  1 / 3;*/
        grid-area: header;
    }

    .sidebar{
        /*      grid-column-start: 1;
              grid-column-end: 3;*/
        /*    grid-column:  1 / 3;*/
        grid-area: sidebar;
        justify-self: start;
    }

    .content{
        /*      grid-column-start: 1;
              grid-column-end: 3;*/
        /*    grid-column:  1 / 3;*/
        grid-area: content;

    }

    .footer{
        /*      grid-column-start: 1;
              grid-column-end: 3;*/
        /*    grid-column:  1 / 3;*/
        grid-area: footer;
    }

</style>
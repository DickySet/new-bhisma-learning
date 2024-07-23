<template>
    <div class="d-flex align-items-center" style="gap: 15px; margin-bottom: 15px">
        <div class="kotak-icon-title shadow"></div>
        <div style="margin-top: 25px">
            <h5 style="margin-bottom: 0px">{{title}}</h5>
            <p>{{subTitle}}</p>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            title: {
                type: String,
                default: 'Masukan title'
            },
            subTitle: {
                type: String,
                default: 'Masukan sub title'
            }
        }
    }

</script>

<style scoped>

    
    .kotak-icon-title {
        width: 20px;
        height: 65px;
        border-radius: 13px;
        background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%);
    }

    @media screen and (min-width: 360px) and (max-width: 527px) {

        .kotak-icon-title {
            width: 16px;
            height: 50px;
            border-radius: 13px;
            background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%);
        }

    } 

</style>
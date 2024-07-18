<template>
    <section id="background">
        <div class="container">
    
            <div class="box shadow" data-aos="fade-up">
                <div class="isi_kotak2">
                    <img src="../../assets/image/login.png" class="gambar">
                    <img src="../../assets/image/login.png" class="gambar1">
                </div>
                <div class="isi_kotak1">
                    <h2 class="h2"><b>Welcome Back</b></h2>
                    <p>Please enter your details</p>
                    <div class="form" >
                        <form @submit.prevent="Login">
                            <div class="form-group">
                                <label>Username</label>
                                <input type="text" name="email" placeholder="Masukan NISN atau Nomer Ponsel" v-model="phone_number" @keyup.enter="login">
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <div class="d-flex" style="gap: 10px">
                                    <input style="width: 87%;" type="password" name="password" placeholder="Masukan Password" v-model="password" @keyup.enter="login">
                                    <div style="width: 13%;" class="eye">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                                                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" @click="login">Login</button>
                        </form>
                    </div>
                </div>
            </div>
    
        </div>
    </section>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {

    computed: {

        isLoggedIn() {

            return this.$store.getters.isAuthenticated

        },

    },

    data() {

        return {

            phone_number: '',
            password: ''

        };

    },

    methods:{

        ...mapActions(["LogIn"]),
        async Login() {

            this.LogIn({
              phone_number: this.phone_number,
              password: this.password
            }).then((response) => {
                
                console.log(this.isLoggedIn)
                if (this.isLoggedIn) {
    
                    this.$router.push({ name: 'dashboard' });
    
                }
            })

        }

    }

    }
</script>

<style scoped>

    .container {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #background {
        background-image: linear-gradient(to bottom, #F5F5FE 0%, #FFFFFF 100%);
        left: 0;
        right: 0;
    }

    .box {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
    }

    .box .isi_kotak1 {
        text-align: center;
        width: 460px;
    }

    .box .isi_kotak2 .gambar {
        width: 460px;
        /* background-image: linear-gradient(to bottom, #F5F5FE 0%, #FFFFFF 100%); */
        padding: 50px 25px 50px 25px;
    }
    .box .isi_kotak2 .gambar1 {
        display: none;
    }

    .box .isi_kotak1 .h2 {
        font-size: 30pt;
        margin-bottom: -5px;
    }

    .box .isi_kotak1 p {
        font-size: 15pt;
    }

    .box .isi_kotak1 .form{
        margin-left: 40px;
        margin-right: 40px;
        margin-top: 10px;
    }

    .box .isi_kotak1 .form .form-group{
        text-align: left;
        /* margin-bottom: 10px; */
    }

    .box .isi_kotak1 .form .form-group label {
        font-weight: bold;
        font-size: 14pt;
        /* margin-bottom: 10px; */
    }

    .box .isi_kotak1 .form .form-group input {
        width: 100%;
        margin-bottom: 10px;
        padding: 12px 0px 5px 15px;
        border-radius: 5px;
        border: none;
        background: #E2E2E2;
        border-bottom: 2px solid black;
    }

    .box .isi_kotak1 .form .form-group .eye {
        width: 100%;
        margin-bottom: 10px;
        display: flex;
        justify-content:center;
        align-items:center;
        background-color: #FCD804;
        outline: none;
        cursor: pointer;
        border-radius: 5px;
    }

    .box .isi_kotak1 button{
        margin-top: 10px;
        width: 100%;
        border-radius: 5px;
        background-image: linear-gradient(to bottom, #067c7e 40%, #2ccf7e 100%);
        border: none;
        padding: 12px 0px 5px 0px;
        font-size: 15pt;
        font-weight: bold;
        color: white;
        
    }

    @media screen and (min-width: 0px) and (max-width: 359px) {
        .box {
            display: block;
            background-color: white;
        }

        .box .isi_kotak1 {
            text-align: center;
            width: 230px;
        }

        .box .isi_kotak2 .gambar {
            display: none;
        }

        .box .isi_kotak2 .gambar1 {
            display: block;
            margin: 0 auto;
            width: 160px;
            padding-top: 30px;
        }

        .box .isi_kotak1 .h2 {
            margin-top: 15px;
            font-size: 15pt;
        }

        .box .isi_kotak1 p {
            font-size: 8pt;
        }

        .box .isi_kotak1 .form{
            margin-left: 25px;
            margin-right: 25px;
            margin-top: -14px;
        }

        .box .isi_kotak1 .form .form-group{
            text-align: left;
        }

        .box .isi_kotak1 .form .form-group label {
            font-weight: bold;
            font-size: 8pt;
            margin-bottom: -10px;
        }

        .box .isi_kotak1 .form .form-group input {
            width: 100%;
            font-size: 8pt;
            margin-bottom: 5px;
            /* margin-bottom: 10px; */
            padding: 7px 10px 3px 10px;
            /* border-radius: 5px; */
            /* border: 0.5px solid black; */
        }

        .box .isi_kotak1 .form .form-group .eye{
            padding: 1px 0px 1px 0px;
        }

        .box .isi_kotak1 .form .form-group .eye svg{
            width: 10px !important;
            height: 10px !important;
        }

        .box .isi_kotak1 button{
            margin-top: -10px;
            width: 100%;
            padding: 4px;
            border-radius: 5px;
            background-image: linear-gradient(to right, #067c7e 0%, #2ccf7e 100%);
            border: none;
            font-size: 8pt; 
            /* padding: 4px; */
            font-weight: bold;
            margin-bottom: 20px;
        }
    }

    @media screen and (min-width: 360px) and (max-width: 576px) {
        .box {
            display: block;
            background-color: white;
        }

        .box .isi_kotak1 {
            text-align: center;
            width: 320px;
        }

        .box .isi_kotak2 .gambar {
            display: none;
        }

        .box .isi_kotak2 .gambar1 {
            display: block;
            margin: 0 auto;
            padding-top: 25px;
            width: 230px;
        }

        .box .isi_kotak1 .h2 {
            margin-top: 30px;
            font-size: 24pt;
        }

        .box .isi_kotak1 p {
            font-size: 13pt;
            margin-bottom: 0px;
        }

        .box .isi_kotak1 .form{
            margin-left: 25px;
            margin-right: 25px
        }

        .box .isi_kotak1 .form .form-group{
            text-align: left;
            margin-bottom: 10px;
        }

        .box .isi_kotak1 .form .form-group label {
            font-weight: bold;
            font-size: 13pt;
            margin-bottom: 0px;
        }

        .box .isi_kotak1 .form .form-group input {
            
            margin-bottom: -1px;
            /* padding: 4px; */
            border-radius: 5px;
            height: 100%;
            /* border: 0.5px solid black; */
        }

        .box .isi_kotak1 .form .form-group .eye {
            padding-top: 5px;
            padding-bottom: 5px;

        }  

        .box .isi_kotak1 button{
            margin-top: 10px;
            width: 100%;
            border-radius: 5px;
            background-image: linear-gradient(to right, #067c7e 0%, #2ccf7e 100%);
            border: none;
            padding: 4px;
            font-weight: bold;
            margin-bottom: 30px;
        }
    }

    @media screen and (min-width: 576px) and (max-width: 769px) {
        .box {
            display: block;
            background-color: white;
        }

        .box .isi_kotak1 {
            text-align: center;
            width: 520px;
        }

        .box .isi_kotak2 .gambar {
            display: none;
        }

        .box .isi_kotak2 .gambar1 {
            display: block;
            width: 520px;
        }

        .box .isi_kotak1 .h2 {
            margin-top: 30px;
            font-size: 25pt;
        }

        .box .isi_kotak1 p {
            font-size: 15pt;
        }

        .box .isi_kotak1 .form{
            margin-left: 40px;
            margin-right: 40px
        }

        .box .isi_kotak1 .form .form-group{
            text-align: left;
            margin-bottom: 10px;
        }

        .box .isi_kotak1 .form .form-group label {
            font-weight: bold;
            margin-bottom: 10px;
            font-size: 15pt;
        }

        .box .isi_kotak1 .form .form-group input {
            width: 100%;
            margin-bottom: 10px;
            padding: 4px;
            font-size: 15pt;
            border-radius: 5px;
            border: 0.5px solid black;
        }

        .box .isi_kotak1 button{
            margin-top: 10px;
            width: 100%;
            border-radius: 5px;
            background-image: linear-gradient(to right, #067c7e 0%, #2ccf7e 100%);
            border: none;
            padding: 4px;
            font-size: 15pt;
            font-weight: bold;
            margin-bottom: 30px;
        }
    }

    @media screen and (min-width: 770px) and (max-width: 1024px) {
        .box {
            display: block;
            background-color: white;

        }

        .box .isi_kotak1 {
            text-align: center;
            width: 520px;
        }

        .box .isi_kotak2 .gambar {
            display: none;
        }

        .box .isi_kotak2 .gambar1 {
            display: block;
            width: 520px;
        }

        .box .isi_kotak1 .h2 {
            margin-top: 30px;
            font-size: 25pt;
        }

        .box .isi_kotak1 p {
            font-size: 15pt;
        }

        .box .isi_kotak1 .form{
            margin-left: 40px;
            margin-right: 40px
        }

        .box .isi_kotak1 .form .form-group{
            text-align: left;
            margin-bottom: 10px;
        }

        .box .isi_kotak1 .form .form-group label {
            font-weight: bold;
            margin-bottom: 10px;
            font-size: 15pt;
        }

        .box .isi_kotak1 .form .form-group input {
            width: 100%;
            margin-bottom: 10px;
            padding: 4px;
            font-size: 15pt;
            border-radius: 5px;
            border: 0.5px solid black;
        }

        .box .isi_kotak1 button{
            margin-top: 10px;
            width: 100%;
            border-radius: 5px;
            background-image: linear-gradient(to right, #067c7e 0%, #2ccf7e 100%);
            border: none;
            padding: 4px;
            font-size: 15pt;
            font-weight: bold;
            margin-bottom: 30px;
        }
    }

</style>

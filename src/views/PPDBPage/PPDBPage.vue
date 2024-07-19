<template>
    
    <img src="../../assets/image/pinggir1.png" class="bg">
    <img src="../../assets/image/pinggir2.png" class="bg1">

    <nav class="navbar sticky-top navbar-expand-lg pt-3 pb-3">
        <div class="container">

            <div class="img-nav">
                <img src="../../assets/image/logo.png">
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#"></a>
                    </li>
                </ul>
                <span class="navbar-text">
                    <ul class="navbar-nav show mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link cek" href="#statistic">Beranda</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link cek" href="#kontak">Cek Pendaftaran</a>
                        </li>
                        <li class="nav-item">
                            <router-link to="/login">
                                <button class="nav">
                                    <a class="nav-link">Daftar</a>
                                </button>
                            </router-link>
                        </li>
                    </ul>
                </span>
            </div>

        </div>
    </nav>

    <section id="beranda" data-aos="fade-up" >
        <div class="container">
            <div class="container-content">
                <div class="content1">
                    <h2>Pendaftaran Peserta Didik Baru</h2>
                    <h1>SMA Negeri Percontohan</h1>
                    <p>{{text}}</p>
                    <div class="d-flex justify-content-center" style="gap: 20px">
                        <button class="rounded-pill">Daftar Sekarang</button>
                        <button class="rounded-pill">Alur Pendaftaran</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <br><br>
        <a name='pendaftar'></a>
        <div class="container" >
            <div class="card text-center border-0 shadow-sm bg-gradient-green">
                <div class="card-body">
                    <br><br>
                    <h3 class="card-title" style="font-weight: 700; color: rgb(255, 255, 255);">CEK STATUS PENDAFTARAN SISWA</h3>
                    <p class="card-text "  style="color: rgb(255, 255, 255);">Lakukan cek sekala berkala agar informasi pendaftaran update</p>

                    <div class="col-sm-12 p-4 justify-content-center text-center">
                        <div class="container">
                            <div class="row height d-flex justify-content-center align-items-center">
                                <div class="col-md-8">
                                    <div class="search">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                        </svg>
                                        <!-- <input type="text" maxlength="10" v-model="data_user.participant_number" class="form-control" id="inputNama" placeholder="NIS/NISN Peserta"> -->
                                        <input type="text" maxlength="10" class="form-control" id="inputNama" placeholder="NIS/NISN Peserta">
                                        <button class="btn btn-primary border-0">Cek</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br><br><br>
                </div>
            </div>
        </div>
    </section>

    <section id="cekPendaftaran">
        <div class="container kotak3">
            
        </div>
    </section>

    <Footer />

</template>

<script>

    import Footer from '../LandingPage/Footer.vue'

    export default {
        components:{
            Footer
        },
        data(){
            return {
                text: 'Sistem Informasi Pendaftaran Peserta Didik Baru (PPDB) SMA Negeri Percontohan',
                dataSekolah: 125,
                dataSiswa: 1678,
                dataUjian: 13564,
            }
        },
        mounted(){
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });

            document.addEventListener('scroll', function() {
                const navbar = document.querySelector('.navbar');
                const navLink = document.querySelectorAll('.cek');
                
                if (window.scrollY > 0) {
                    navbar.classList.add("blur");
                    navLink.forEach(link => {
                        link.classList.add("text-black");
                    });
                } else {
                    navbar.classList.remove("blur");
                    navLink.forEach(link => {
                        link.classList.remove("text-black");
                    });
                }
            });

            const counters = document.querySelectorAll(".counter");

            counters.forEach((counter) => {
                counter.innerText = "0";
                const target = +counter.getAttribute("data-target");
                const duration = 6000; // Durasi dalam milidetik (2 detik)
                const incrementDuration = 10; // Interval update dalam milidetik
                const increment = target / (duration / incrementDuration);

                const updateCounter = () => {
                    const count = +counter.innerText;
                    if (count < target) {
                        counter.innerText = `${Math.ceil(count + increment)}`;
                        setTimeout(updateCounter, incrementDuration);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCounter();
            });

            });
        }
    }
</script>

<style scoped>

    .bg {
        position: absolute;
        left: 0px;
        /* top: 50px; */
        top: 4%;    
        z-index: -10;
        width: 60%;
    }

    .bg1 {
        position: absolute;
        right: 0px;
        /* top: 50px; */
        top: 18.2%;
        z-index: -10;
        width: 50%;
    }

    button.nav {
        background-color: #FCD804;
        width: 100%;
        padding: 3px 20px 0px 19px;
        border: none;
        text-align: center;
        border-radius: 10px;
    }

    button.nav a{
        text-decoration: none;
        color: black !important;
    }

    .navbar {
        position: sticky;
        transition: all 0.5s ease;
    }

    .blur {
        background-color: rgba(255, 255, 255, 0.733);
        backdrop-filter: blur(10px);
        transition: all 0.5s ease;
    }

    .text-black {
        color: black !important;
    }

    .img-nav img {
        width: 70px;
    }

    ul.navbar-nav {
        display: flex;
        align-items: center;
        gap: 20px;
        
    }

    ul.navbar-nav li.nav-item a{
        font-weight: bold;
        font-size: 14pt;
        color: black;
    }

    ul.navbar-nav li.nav-item a:hover {
        font-weight: bold;
        border-bottom: 1px solid white;
    }

    .container-content {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content1{
        padding-top: 110px;
        padding-bottom: 150px;
        width: 100%;
        text-align: center;
    }

    .container-content .content1 h2{
        font-family: 'Calibre';
        font-size: 35pt;
    }

    .container-content .content1 h1{
        font-family: 'Calibre-semiBold';
        margin-top: -10px;
        margin-bottom: 0px;
        font-size: 45pt;
    }

    .container-content .content1 p{
        font-family: 'Calibre';
        font-size: 15pt;
        width: 40%;
        margin: 0 auto;
        margin-bottom: 10px;
    }

    .container-content .content1 button{
        padding: 13px 20px 6px 20px;
        font-size: 13pt;
        outline: none;
        border: none;
        background-color: #FCD804;
    }

    .content-tentangBhisma {
        margin-top: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        overflow-x: hidden;
    }

    .bg-gradient-green{
        background: linear-gradient(87deg, #067c7e 20%, #2ccf7e 100%) !important;
    }

    .search {
        position: relative;
        box-shadow: 0 0 40px rgba(51, 51, 51, .1)
    }

    .search input {
        height: 60px;
        text-indent: 25px;
        border: 2px solid #d6d4d4
    }

    .search input:focus {
        box-shadow: none;
        border: 2px solid green
    }

    .search .fa-search {
        position: absolute;
        top: 20px;
        left: 16px
    }

    .search button {
        position: absolute;
        top: 5px;
        right: 5px;
        height: 50px;
        width: 110px;
        background: linear-gradient(87deg, #067c7e 0, #067c7e 100%) !important;
    }











    .img-tentangBhisma {
        width: 50%;
        flex: 1 1 300px;
        display: flex;
        justify-content: center;
    }

    .img-tentangBhisma img {
        width: 400px;
        margin-right: 40px;
    }

    .desk-tentangBhisma {
        flex: 1 1 200px;
        width: 50%;
    }

    button.desk {
        padding: 14px 30px 8px 30px;
        background-color: white;
        border: none;
        color: #067C7E;
        font-size: 13pt;
        border-radius: 40px;
        font-weight: bold;
    }

    .desk-tentangBhisma .text-ttg h1 {
        margin-top: 20px;
        font-family: 'Calibre-Light';
        font-size: 30pt;
        font-weight: bold;
        margin-bottom: -1px;
    }

    .desk-tentangBhisma .text-ttg h2 {
        font-family: 'Calibre-semiBold';
        font-size: 30pt;
        font-weight: bold;
    }

    .desk-tentangBhisma .desk-ttg p {
        /* margin-top: 10px; */
        font-size: 15pt;
    }

    button.desk1 {
        padding: 14px 30px 8px 30px;
        background-color: #FCD804;
        border: none;
        /* color: white; */
        font-size: 13pt;
        border-radius: 40px;
        font-weight: bold;
    }

    .desk-tentangBhisma .desk-ttg-call {
        display: flex;
        gap: 50px;
    }

    .desk-tentangBhisma .desk-ttg-call .contact-ttg p {
        font-size: 14pt;
        margin-bottom: -5px;
    }

    .desk-tentangBhisma .desk-ttg-call .contact-ttg h5 {
        font-size: 18pt;
        font-family: 'Calibre-Medium';
        font-weight: bold;
    }

    .content-services {
        margin-top: 150px;
        width: 100%;
        margin-bottom: 80px;
    }

    .content-services .ket-services {
        text-align: center;
    }

    .content-services .text-services h1 {
        margin-top: 20px;
        font-family: 'Calibre-Light';
        font-size: 30pt;
        font-weight: bold;
        margin-bottom: -1px;
    }

    .content-services .text-services h2 {
        font-family: 'Calibre-Semibold';
        font-size: 30pt;
        font-weight: bold;
    }

    .content-services .text-services p {
        text-align: center;
        font-size: 15pt;
        margin-top: -5px;
    }

    .content-services .card-services {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 30px;
    }

    .content-services .card-services .card1 {
        flex: 1 0 200px;
        width: 22%;
        text-align: center;
        background-image: linear-gradient(to bottom, #F5F5FE 0%, #FFFFFF 100%);
        border: none;
        padding: 20px 0px;
        transition: all 0.5s ease-out;
    }

    .content-services .card-services .card1 h5 {
        font-family: 'Calibre-semiBold';
        margin-top: 40px;
        font-size: 18pt;
        margin-bottom: -5px;
    }

    .content-services .card-services .card1 p {
        margin-top: 20px;
        font-size: 14pt;
        font-weight: normal;
        margin-bottom: -10px;
    }

    .content-services .card-services .card1:hover {
        /* color: white; */
        /* background-image: linear-gradient(to bottom, #067C7E 0%, #2CCF7E 100%); */
        transform: scale(1.02);
        transition: all 0.5s ease-out;
    }

    .content-statistic {
        padding-top: 70px;
        margin-top: 120px;
        width: 100%;
        margin-bottom: 80px;
    }

    .content-statistic .ket-statistic {
        text-align: center;
    }

    .content-statistic .text-statistic h1 {
        margin-top: 20px;
        font-family: 'Calibre-Light';
        font-size: 30pt;
        font-weight: bold;
        margin-bottom: -1px;
    }

    .content-statistic .text-statistic h2 {
        font-family: 'Calibre-semiBold';
        font-size: 30pt;
        font-weight: bold;
    }

    #statistic {
        width: 100%;
        height: 500px;
        background-image: linear-gradient(to bottom, #F5F5FE 0%, #FFFFFF 100%);
        /* z-index: -1; */
    }

    .cont-statistic {
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }

    .cont-statistic .kotak{
        text-align: center;
        width: 28%;
    }

    .cont-statistic .kotak h1{
        margin-top: 20px;
        font-family: 'calibre-semiBold';
        font-size: 50pt;
        margin-bottom: -17px;
    }

    .cont-statistic .kotak p{
        font-family: 'calibre-Medium';
        font-size: 20pt;
    }

    .cont-statistic .kotak .circle{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        background-image: linear-gradient(to bottom, #067C7E 0%, #2CCF7E 100%);
        margin: 0 auto;
    }

    .cont-statistic .kotak .circle img{
        width: 60px;
    }

    .content-ekosistem {
        margin-top: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        overflow-x: hidden;
    }

    .img-ekosistem {
        width: 50%;
        flex: 1 1 300px;
        display: flex;
        justify-content: center;
    }

    .img-ekosistem img {
        width: 400px;
        margin-right: 40px;
    }

    .desk-ekosistem {
        flex: 1 1 200px;
        width: 50%;
    }

    .desk-ekosistem .text-ttg h1 {
        margin-top: 20px;
        font-family: 'Calibre-Light';
        font-size: 30pt;
        font-weight: bold;
        margin-bottom: -1px;
    }

    .desk-ekosistem .text-ttg h2 {
        font-family: 'Calibre-semiBold';
        font-size: 30pt;
        font-weight: bold;
    }

    .desk-ekosistem .desk-ttg p {
        /* margin-top: 10px; */
        font-size: 15pt;
    }

    .download {
        /* margin-top: -5px; */
        display: flex;
        gap: 10px;
    }

    .download img {
        width: 110px;
    }

    #konsul {
        width: 100%;
        margin-top: 90px;
        background-image: linear-gradient(to bottom, #067C7E 0%, #2CCF7E 100%);
    }

    .content-konsul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 27px;
        padding-bottom: 20px;
    }

    .content-konsul label {
        font-size: 25pt;
        color: white;
        margin-top: 10px;
    }

    .content-konsul button {
        font-size: 15pt;
        padding: 13px 30px 10px 30px;
        background-color: #FCD804;
        font-weight: bold;
        border: none;
        outline: none;
    }

    @media screen and (min-width: 0) and (max-width:359px){
        .bg {
            width: 80%;
        }

        ul.navbar-nav li.nav-item a{
            color: black !important;
        }

        .img-nav img {
            width: 60px;
        }

        .container-content {
            flex-direction: column;
        }


        .container-content .content1{
            order: 2;
            text-align: center;
            width: 100%;
            margin-top: 20px;
        }
        
        .container-content .content1 h2{
            font-family: 'Calibre';
            font-size: 20pt;
        }

        .container-content .content1 h1{
            font-family: 'Calibre-semiBold';
            margin-top: -10px;
            font-size: 25pt;
        }

        .container-content .content1 p{
            font-family: 'Calibre';
            margin-top: -10px;
            font-size: 10pt;
            width: 100%;
        }

        .bg1 {
            position: absolute;
            left: 0px;
            top: 500px;
            z-index: -10;
            width: 120%;
        }

        .content-tentangBhisma {
            margin-top: 120px;
        }

        .img-tentangBhisma{
            width: 100%;
        }

        .img-tentangBhisma img {
            width: 180px;
            margin-right: 0px;
            margin-bottom: 25px;
        }

        .desk-tentangBhisma {
            text-align: center;
        }

        button.desk {
            padding: 9px 25px 4px 25px;
            font-size: 14pt;
        }

        .desk-tentangBhisma .text-ttg h1 {
            margin-top: 20px;
            font-size: 18pt;
            margin-bottom: -1px;
        }

        .desk-tentangBhisma .text-ttg h2 {
            font-size: 18pt;
            font-weight: bold;
        }

        .desk-tentangBhisma .desk-ttg p {
            margin-top: 10px;
            font-size: 10pt;
        }

        button.desk1 {
            padding: 8px 20px 3px 20px;
            font-size: 10pt;
            font-weight: bold;
        }

        .desk-tentangBhisma .desk-ttg-call {
            display: flex;
            justify-content: center;
            text-align: left;
            gap: 20px;
        }

        .desk-tentangBhisma .desk-ttg-call .contact-ttg p {
            font-size: 10pt;
            margin-bottom: -5px;
        }

        .desk-tentangBhisma .desk-ttg-call .contact-ttg h5 {
            font-size: 14pt;
        }

        .desk-tentangBhisma .desk-ttg-call .logo-call img {
            width: 30px;
        }

        .content-services {
            margin-top: 80px;
        }

        .content-services .text-services h1 {
            margin-top: 20px;
            font-size: 18pt;
        }

        .content-services .text-services h2 {
            font-size: 18pt;
            font-weight: bold;
        }

        .content-services .text-services p {
            font-size: 10pt;
            /* font-weight: bold; */
        }

        .content-services .card-services {
            gap: 10px;
            margin-top: 5px;
        }

        .content-services .card-services .card1 h5 {
            font-size: 13pt;
            margin-bottom: -5px;
        }

        .content-services .card-services .card1 p {
            font-size: 10pt;
            font-weight: normal;
        }

        .content-services .card-services .card1 img {
            width: 75px;
            margin-bottom: -10px;
        }

        .card1 {
            padding: 15px 0px 5px 0px;
            margin: 10px 15px 0px 15px;
        }

        #statistic {
            margin-top: -50px;
        }

        .content-statistic .ket-statistic {
            margin-top: -35px;
        }

        .content-statistic .text-statistic h1 {
            margin-top: 20px;
            font-family: 'Calibre-Light';
            font-size: 18pt;
            font-weight: bold;
            margin-bottom: -1px;
        }

        .content-statistic .text-statistic h2 {
            font-family: 'Calibre-semiBold';
            font-size: 18pt;
            font-weight: bold;
        }

        .cont-statistic{
            flex-direction: column;
        }

        .cont-statistic .kotak{
            width: 100%;
        }

        .cont-statistic .kotak h1{
            margin-top: 20px;
            font-size: 30pt;
            margin-bottom: -12px;
        }

        .cont-statistic .kotak p{
            font-size: 13pt;
        }

        .download {
            justify-content: center;
            gap: 10px;
        }

        .content-ekosistem {
            margin-top: 120px;
        }

        #ekosistem {
            margin-top: 400px;
        }

        .img-ekosistem{
            width: 100%;
        }

        .img-ekosistem img {
            width: 220px;
            margin-right: 0px;
            margin-bottom: 25px;
        }

        .desk-ekosistem {
            text-align: center;
        }

        button.desk {
            padding: 12px 25px 6px 25px;
            font-size: 14pt;
        }

        .desk-ekosistem .text-ttg h1 {
            margin-top: 20px;
            font-size: 18pt;
            margin-bottom: -1px;
        }

        .desk-ekosistem .text-ttg h2 {
            font-size: 18pt;
            font-weight: bold;
        }

        .desk-ekosistem .desk-ttg p {
            margin-top: 10px;
            font-size: 10pt;
        }

        .download img {
            margin-bottom: 20px;
            width: 70px;
        }

        #konsul {
            margin-top: 15px;
        }

        .content-konsul {
            flex-direction: column;
            justify-content: center;
        }

        .content-konsul label {
            text-align: center;
            font-size: 13pt;
            margin-bottom: 10px;
        }

        .content-konsul button {
            font-size: 13pt;
            padding: 3px 15px 0px 15px;
        }

        .floating-link {
            bottom: 50px;
            right: 20px;
        }

        .bottom-div img {
            width: 45px;
            height: 45px;
        }
    }

    @media screen and (min-width: 360px) and (max-width: 527px) {

        .bg {
            width: 85%;
        }

        ul.navbar-nav li.nav-item a{
            color: black !important;
        }

        .img-nav img {
            width: 60px;
        }

        .container-content {
            flex-direction: column;
        }

        .container-content .content1{
            order: 2;
            text-align: center;
            width: 100%;
            margin-top: 20px;
        }
        
        .container-content .content1 h2{
            font-family: 'Calibre';
            font-size: 25pt;
        }

        .container-content .content1 h1{
            font-family: 'Calibre-semiBold';
            margin-top: -10px;
            font-size: 30pt;
        }

        .container-content .content1 p{
            font-family: 'Calibre';
            margin-top: -10px;
            font-size: 12pt;
            width: 100%;
        }

        .bg1 {
            position: absolute;
            left: 0px;
            top: 500px;
            z-index: -10;
            width: 120%;
        }

        .content-tentangBhisma {
            margin-top: 120px;
        }

        .img-tentangBhisma{
            width: 100%;
        }

        .img-tentangBhisma img {
            width: 220px;
            margin-right: 0px;
            margin-bottom: 25px;
        }

        .desk-tentangBhisma {
            text-align: center;
        }

        button.desk {
            padding: 12px 25px 6px 25px;
            font-size: 14pt;
        }

        .desk-tentangBhisma .text-ttg h1 {
            margin-top: 20px;
            font-size: 20pt;
            margin-bottom: -1px;
        }

        .desk-tentangBhisma .text-ttg h2 {
            font-size: 20pt;
            font-weight: bold;
        }

        .desk-tentangBhisma .desk-ttg p {
            margin-top: 10px;
            font-size: 13pt;
        }

        button.desk1 {
            padding: 11px 25px 5px 25px;
            font-size: 12pt;
            font-weight: bold;
        }

        .desk-tentangBhisma .desk-ttg-call {
            display: flex;
            justify-content: center;
            text-align: left;
            gap: 20px;
        }

        .desk-tentangBhisma .desk-ttg-call .contact-ttg p {
            font-size: 12pt;
            margin-bottom: -5px;
        }

        .desk-tentangBhisma .desk-ttg-call .contact-ttg h5 {
            font-size: 17pt;
        }

        .desk-tentangBhisma .desk-ttg-call .logo-call img {
            width: 45px;
        }

        .content-services {
            margin-top: 80px;
        }

        .content-services .text-services h1 {
            margin-top: 20px;
            font-size: 20pt;
        }

        .content-services .text-services h2 {
            font-size: 20pt;
            font-weight: bold;
        }

        .content-services .text-services p {
            font-size: 13pt;
            /* font-weight: bold; */
        }

        .content-services .card-services {
            gap: 10px;
            margin-top: 5px;
        }

        .content-services .card-services .card1 h5 {
            font-size: 15pt;
            margin-bottom: -5px;
        }

        .content-services .card-services .card1 p {
            font-size: 13pt;
            font-weight: normal;
        }

        .content-services .card-services .card1 img {
            width: 90px;
            margin-bottom: -10px;
        }

        .card1 {
            padding: 15px 0px 5px 0px;
            margin: 10px 15px 0px 15px;
        }

        #statistic {
            margin-top: -50px;
        }

        .content-statistic .ket-statistic {
            margin-top: -35px;
        }

        .content-statistic .text-statistic h1 {
            margin-top: 20px;
            font-family: 'Calibre-Light';
            font-size: 20pt;
            font-weight: bold;
            margin-bottom: -1px;
        }

        .content-statistic .text-statistic h2 {
            font-family: 'Calibre-semiBold';
            font-size: 20pt;
            font-weight: bold;
        }

        .cont-statistic{
            flex-direction: column;
        }

        .cont-statistic .kotak{
            width: 100%;
        }

        .cont-statistic .kotak h1{
            margin-top: 20px;
            font-size: 35pt;
            margin-bottom: -12px;
        }

        .cont-statistic .kotak p{
            font-size: 15pt;
        }

        .download {
            justify-content: center;
            gap: 10px;
        }

        .content-ekosistem {
            margin-top: 120px;
        }

        #ekosistem {
            margin-top: 400px;
        }

        .img-ekosistem{
            width: 100%;
        }

        .img-ekosistem img {
            width: 220px;
            margin-right: 0px;
            margin-bottom: 25px;
        }

        .desk-ekosistem {
            text-align: center;
        }

        button.desk {
            padding: 12px 25px 6px 25px;
            font-size: 14pt;
        }

        .desk-ekosistem .text-ttg h1 {
            margin-top: 20px;
            font-size: 20pt;
            margin-bottom: -1px;
        }

        .desk-ekosistem .text-ttg h2 {
            font-size: 20pt;
            font-weight: bold;
        }

        .desk-ekosistem .desk-ttg p {
            margin-top: 10px;
            font-size: 13pt;
        }

        .download img {
            margin-bottom: 20px;
            width: 70px;
        }

        #konsul {
            margin-top: 15px;
        }

        .content-konsul {
            flex-direction: column;
            justify-content: center;
        }

        .content-konsul label {
            text-align: center;
            font-size: 17pt;
            margin-bottom: 10px;
        }

        .content-konsul button {
            font-size: 13pt;
            padding: 7px 20px 5px 20px;
        }

        .floating-link {
            bottom: 50px;
            right: 20px;
        }

        .bottom-div img {
            width: 45px;
            height: 45px;
        }
    }

    @media screen and (min-width: 528px) and (max-width: 767px) {

        .bg {
            width: 80%;
        }

        ul.navbar-nav li.nav-item a{
            color: black !important;
        }

        .img-nav img {
        width: 120px;
        }

        .content-beranda {
        margin-top: 110px;
        height: auto;
        text-align: center;
        }

        .content-beranda .deskripsi h2 {
        font-size: 40pt;
        }

        .content-beranda .deskripsi h1 {
        font-size: 40pt;
        margin-top: -10px;
        }

        .content-beranda .deskripsi h6 {
        margin-top: 20px;
        margin-bottom: 20px;
        width: 100%;
        line-height: 1.7em;
        font-size: 16pt;
        }

        .image-beranda {
        margin-top: -650px;
        justify-content: center;
        }

        .image-beranda img {
        margin-top: 110px;
        width: 500px;
        }

        button.btn {
        padding: 9px 20px 3px 20px;
        background-color: orange;
        border: none;
        border-radius: 40px;
        font-weight: bold;
        }

        .content-tentangBhisma {
        margin-top: 120px;
        }

        .img-tentangBhisma img {
        width: 280px;
        }

        .desk-tentangBhisma {
        text-align: center;
        }

        button.desk {
        padding: 12px 25px 6px 25px;
        font-size: 14pt;
        }

        .desk-tentangBhisma .text-ttg h1 {
        margin-top: 20px;
        font-size: 22pt;
        margin-bottom: -1px;
        }

        .desk-tentangBhisma .text-ttg h2 {
        font-size: 22pt;
        font-weight: bold;
        }

        .desk-tentangBhisma .desk-ttg p {
        margin-top: 10px;
        font-size: 13pt;
        }

        button.desk1 {
        padding: 11px 25px 5px 25px;
        font-size: 12pt;
        font-weight: bold;
        }

        .desk-tentangBhisma .desk-ttg-call {
        display: flex;
        justify-content: center;
        text-align: left;
        gap: 20px;
        }

        .desk-tentangBhisma .desk-ttg-call .contact-ttg p {
        font-size: 12pt;
        margin-bottom: -5px;
        }

        .desk-tentangBhisma .desk-ttg-call .contact-ttg h5 {
        font-size: 17pt;
        }

        .desk-tentangBhisma .desk-ttg-call .logo-call img {
        width: 45px;
        }

        .content-services {
        margin-top: 80px;
        }

        .content-services .text-services h1 {
        margin-top: 20px;
        font-size: 20pt;
        }

        .content-services .text-services h2 {
        font-size: 20pt;
        font-weight: bold;
        }

        .content-services .card-services {
        gap: 10px;
        margin-top: 5px;
        }

        .content-services .card-services .card1 h5 {
        font-size: 15pt;
        margin-bottom: -5px;
        }

        .content-services .card-services .card1 p {
        font-size: 12pt;
        font-weight: normal;
        }

        .card1 {
        padding: 15px 0px 5px 0px;
        margin: 10px 15px 0px 15px;
        }

        .content-product {
        margin-top: 80px;
        margin-bottom: 30px !important;
        }

        .content-product .text-product h1 {
        margin-top: 20px;
        font-size: 20pt;
        }

        .content-product .text-product h2 {
        font-size: 20pt;
        }

        .our-product .our-product-layout {
        margin-top: 30px;
        gap: 0px;
        }

        .our-product .our-product-layout .img-product img {
        width: 300px;
        }

        .our-product .our-product-layout .img-product {
        order: 1;
        }

        .our-product .our-product-layout .desk-product {
        order: 2;
        }

        .our-product .our-product-layout .img-products img {
        width: 180px;
        }

        .our-product .our-product-layout .desk-product {
        margin-top: 30px;
        text-align: center;
        }

        .our-product .our-product-layout .desk-products {
        text-align: center;
        }

        .our-product .our-product-layout .desk-product h6 {
        font-size: 13pt;
        margin-bottom: 10px;
        }

        .our-product .our-product-layout .desk-product h2 a {
        font-size: 20pt;
        }

        .our-product-layout .desk-product .desk-web p {
        margin-top: 10px;
        font-size: 12pt;
        margin-top: -5px;
        }

        .our-product-layout .desk-product a {
        margin-top: 10px;
        font-size: 12pt;
        margin-top: -5px;
        }

        .download {
        justify-content: center;
        gap: 10px;
        }

        .download img {
        margin-bottom: 20px;
        width: 70px;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {

        .bg {
            width: 80%;
        }

        ul.navbar-nav li.nav-item a{
            color: black !important;
        }

        .img-nav img {
        width: 70px;
        }

        .image-beranda {
        margin-top: -650px;
        justify-content: center;
        }

        .image-beranda img {
        margin-top: 110px;
        width: 500px;
        }

        button.btn {
        padding: 9px 20px 3px 20px;
        background-color: orange;
        border: none;
        border-radius: 40px;
        font-weight: bold;
        }

        .container-content {
            flex-direction: column;
        }

        .container-content .content1{
            order: 2;
            text-align: center;
            width: 100%;
            margin-top: 20px;
        }
        
        .container-content .content1 h2{
            font-family: 'Calibre';
            font-size: 35pt;
        }

        .container-content .content1 h1{
            font-family: 'Calibre-semiBold';
            margin-top: -10px;
            font-size: 45pt;
        }

        .container-content .content1 p{
            font-family: 'Calibre';
            margin-top: -10px;
            font-size: 18pt;
            width: 100%;
        }

        .content-tentangBhisma {
        margin-top: 120px;
        }

        .img-tentangBhisma img {
        width: 250px;
        }

        button.desk {
        padding: 12px 25px 6px 25px;
        font-size: 14pt;
        }

        .desk-tentangBhisma .text-ttg h1 {
        margin-top: 20px;
        font-size: 22pt;
        margin-bottom: -1px;
        }

        .desk-tentangBhisma .text-ttg h2 {
        font-size: 22pt;
        font-weight: bold;
        }

        .desk-tentangBhisma .desk-ttg p {
        margin-top: 10px;
        font-size: 13pt;
        }

        button.desk1 {
        padding: 11px 25px 5px 25px;
        font-size: 12pt;
        font-weight: bold;
        }

        .desk-tentangBhisma .desk-ttg-call {
        display: flex;
        justify-content: center;
        text-align: left;
        gap: 20px;
        }

        .desk-tentangBhisma .desk-ttg-call .contact-ttg p {
        font-size: 12pt;
        margin-bottom: -5px;
        }

        .desk-tentangBhisma .desk-ttg-call .contact-ttg h5 {
        font-size: 17pt;
        }

        .desk-tentangBhisma .desk-ttg-call .logo-call img {
        width: 45px;
        }

        .content-services {
        margin-top: 80px;
        }

        .content-services .text-services h1 {
        margin-top: 20px;
        font-size: 20pt;
        }

        .content-services .text-services h2 {
        font-size: 20pt;
        font-weight: bold;
        }

        .content-services .card-services {
        gap: 10px;
        margin-top: 5px;
        }

        .content-services .card-services .card1 h5 {
        font-size: 15pt;
        margin-bottom: -5px;
        }

        .content-services .card-services .card1 p {
        font-size: 12pt;
        font-weight: normal;
        }

        .card1 {
        padding: 15px 0px 5px 0px;
        margin: 10px 15px 0px 15px;
        }

        .content-product {
        margin-top: 80px;
        margin-bottom: 30px !important;
        }

        .content-product .text-product h1 {
        margin-top: 20px;
        font-size: 20pt;
        }

        .content-product .text-product h2 {
        font-size: 20pt;
        }

        .our-product .our-product-layout {
        margin-top: 30px;
        gap: 0px;
        }

        .our-product .our-product-layout .img-product img {
        width: 300px;
        }

        .our-product .our-product-layout .img-product {
        order: 1;
        }

        .our-product .our-product-layout .desk-product {
        order: 2;
        }

        .our-product .our-product-layout .img-products img {
        width: 180px;
        }

        .our-product .our-product-layout .desk-product {
        margin-top: 30px;
        text-align: center;
        }

        .our-product .our-product-layout .desk-products {
        text-align: center;
        }

        .our-product .our-product-layout .desk-product h6 {
        font-size: 13pt;
        margin-bottom: 10px;
        }

        .our-product .our-product-layout .desk-product h2 a {
        font-size: 20pt;
        }

        .our-product-layout .desk-product .desk-web p {
        margin-top: 10px;
        font-size: 12pt;
        margin-top: -5px;
        }

        .our-product-layout .desk-product a {
        margin-top: 10px;
        font-size: 12pt;
        margin-top: -5px;
        }

        .download {
        justify-content: center;
        gap: 10px;
        }

        .download img {
        margin-bottom: 20px;
        width: 70px;
        }
    }

</style>
<template>

    <img src="../../assets/image/bg.png" class="bg">

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
                            <a class="nav-link cek" href="#beranda">Beranda</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link cek" href="#tentangBhisma">Fitur</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link cek" href="#services">Layanan</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link cek" href="#statistic">Statistik</a>
                        </li>
                        <li class="nav-item">
                            <router-link to="/PPDB">
                                <a class="nav-link cek">Info PPDB</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/login">
                                <button class="nav">
                                    <a class="nav-link">Login</a>
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
                    <h2>Sistem Manajemen</h2>
                    <h1>Sekolah Terbaik</h1>
                    <p>{{text}}</p>
                    <button class="rounded-pill">Selengkapnya</button>
                </div>
                <div class="content2">
                    <img src="../../assets/image/bg-beranda.png">
                </div>
            </div>
        </div>
    </section>

    <img src="../../assets/image/pinggir1.png" class="bg1">

    <section id="tentangBhisma" data-aos="fade-up">
        <div class="container" >
            <div class="content-tentangBhisma" >
                <div class="img-tentangBhisma">
                    <img src="../../assets/image/Group 9464.png">
                </div>
                <div class="desk-tentangBhisma">
                    <button class="desk shadow">- Tentang Bhisma Interaktif -</button>
                    <div class="text-ttg">
                        <h1>Manajemen Sekolah</h1>
                        <h2>Menjadi Sangat Mudah</h2>
                    </div>
                    <div class="desk-ttg">
                        <p>Berbagai macam fitur sepeti absensi online, rapor, laporan tugas, latihan soal, jadwal mengajar, kepegawaian, keuangan akutansi, dan fitur lainnya. Tentunya memberikan banyak keuntungan bagi sekolah sekolah</p>
                    </div>
                    <hr style="border:1px solid black"/>
                    <div class="desk-ttg-call">
                        <a target="_blank" href="https://wa.me/+6285711060095">
                            <div class="button-desk">
                                <button class="desk1 shadow">Contact Us</button>
                            </div>
                        </a>
                        <div class="d-flex" style="gap: 15px">
                            <div class="logo-call">
                                <img src="../../assets/Group 8458.png">
                            </div>
                            <div class="contact-ttg">
                                <p>Call For Help</p>
                                <h5>021 - 5721016</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="services">
        <div class="container">
            <div class="content-services">
                <div class="ket-services">
                    <button class="desk shadow">- Layanan Bhisma Interaktif -</button>
                    <div class="text-services text-center">
                        <h1>Temukan Layanan Terbaik</h1>
                        <h2>Bhisma Interaktif</h2>
                        <div style="text-align:center; width: 80%; margin: 0 auto; ">
                            <p>Mendukung kegiatan sekolah yang dinamis, terdapat beberapa fitur dalam sistem kami sebagai penunjang dalam mengelola data. Juga, terintegrasi dengan database secara aman dan real-time.</p>
                        </div>
                    </div>
                </div>

                <div class="card-services">
                    <div class="card shadow card1" data-aos="fade-up">
                        <div class="card-body">
                            <img src="../../assets/image/website.png">
                            <h5>PPDB Online</h5>
                            <p>Sistem bisa digunakan untuk Pendaftaran PPDB Online agar memudahkan sekolah dalam mengelola data pendaftar.</p>
                        </div>
                    </div>
                    <div class="card shadow card1" data-aos="fade-up">
                        <div class="card-body">
                            <img src="../../assets/image/exam.png">
                            <h5>Ujian Online</h5>
                            <p>Sekolah tidak perlu repot menyiapkan soal dalam bentuk kertas, karena dari pembuatan, pengerjaan hingga mendapat nilai dilakukan secara online.</p>
                        </div>
                    </div>
                    <div class="card shadow card1" data-aos="fade-up">
                        <div class="card-body">
                            <img src="../../assets/image/verification.png">
                            <h5>Absensi</h5>
                            <p>Kepala sekolah maupun orang tua murid dapat dengan mudah mendapatkan info kehadiran siswa, kehadiran guru dan staff secara cepat.</p>
                        </div>
                    </div>
                    <div class="card shadow card1" data-aos="fade-up">
                        <div class="card-body">
                            <img src="../../assets/image/receipt.png">
                            <h5>Keuangan</h5>
                            <p>Sekolah dapat mengelola keuangan sekolah, membuat tagihan siswa, ataupun membuat laporan keuangan secara cepat dan akurat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="statistic">
        <div class="container">
            <div class="content-statistic">
                <div class="ket-statistic" data-aos="fade-up">
                    <button class="desk shadow">- Statistik Bhisma Interaktif -</button>
                    <div class="text-statistic">
                        <h1>Statistik Penggunaan</h1>
                        <h2>Bhisma Interaktif</h2>
                    </div>
                </div>
                <div class="cont-statistic">
                    <div class="kotak-statistic" data-aos="fade-up">
                        <div class="circle">
                            <img src="../../assets/image/school.png" width="50px">
                        </div>
                        <div class="d-flex justify-content-center">
                            <h1 class="counter" :data-target="dataSekolah"></h1>
                            <h1>+</h1>
                        </div>
                        <p>Sekolah</p>
                    </div>
                    <div class="kotak-statistic" data-aos="fade-up">
                        <div class="circle">
                            <img src="../../assets/image/students.png" width="50px">
                        </div>
                        <div class="d-flex justify-content-center">
                            <h1 class="counter" :data-target="dataSiswa"></h1>
                            <h1>+</h1>
                        </div>
                        <p>Murid</p>
                    </div>
                    <div class="kotak-statistic" data-aos="fade-up">
                        <div class="circle">
                            <img src="../../assets/image/exam.png" width="50px">
                        </div>
                        <div class="d-flex justify-content-center">
                            <h1 class="counter" :data-target="dataUjian"></h1>
                            <h1>+</h1>
                        </div>
                        <p>Ujian Terlaksana</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <img src="../../assets/image/pinggir2.png" class="bg2">

    <section id="ekosistem" data-aos="fade-up">
        <div class="container" >
            <div class="content-ekosistem" >
                <div class="img-ekosistem">
                    <img src="../../assets/image/ekosistem.png">
                </div>
                <div class="desk-ekosistem">
                    <button class="desk shadow">- Ekosistem Bhisma Interaktif -</button>
                    <div class="text-ttg">
                        <h1>Nikmati Kemudahan</h1>
                        <h2>Untuk Pendidikan</h2>
                    </div>
                    <div class="desk-ttg">
                        <p>Nikmati beberapa ekosistem yang saling terhubung dan memudahkan siswa, guru maupun orang tua murid dalam mendapatkan informasi secara real time melalui website, IOS, dan Android</p>
                    </div>
                    <div class="download">
                        <a href="https://apps.apple.com/id/app/bisma-interaktif/id1591538359?l=id" target="_blank">
                            <img src="../../assets/iphone.png">
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.bl.bismainteraktif" target="_blank">
                            <img src="../../assets/android.png">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="bottom-div">
        <a target="_blank" href="https://wa.me/+6285711060095" class="floating-link">
            <img src="../../assets/image/callcenter.png" alt="Call Center">
        </a>
    </div>

    <section id="konsul" data-aos="fade-up">
        <div class="container">
            <div class="content-konsul">
                <div>
                    <label>Masih ragu untuk gunakan <span style="font-weight: bold">Bhisma Interaktif</span>?</label>
                </div>
                <a target="_blank" href="https://wa.me/+6285711060095">
                    <div>
                        <button class="rounded-pill">Konsultasikan Sekarang</button>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <Footer />

</template>

<script>

    import Footer from './Footer.vue'

    export default {
        components:{
            Footer
        },
        data(){
            return {
                text: 'Bhisma mengoptimalkan kondisi belajar dan memaksimalkan kinerja guru serta melibatkan orang tua murid dalam pembelajaran di satu platform',
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

    a{
        text-decoration: none;
    }

    .bottom-div {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: end;
        align-items: end;
        position: fixed;
        z-index: 9999; /* Pastikan div ini berada di bawah konten lain */
        padding: 50px;
    }

    .bottom-div img {
        width: 65px;
        height: 65px;
    }

    .floating-link {
        position: fixed; /* Menetapkan posisi tetap untuk elemen */
        bottom: 50px; /* Menempatkan elemen 50px dari bagian bawah */
        right: 50px; /* Menempatkan elemen 50px dari bagian kanan */
        z-index: 9999; /* Menetapkan elemen ini di atas konten lain */
        cursor: pointer;
    }

    .bg {
        position: absolute;
        right: 0px;
        top: 0px;
        z-index: -10;
        width: 70%;
    }

    .bg1 {
        position: absolute;
        left: 0px;
        top: 500px;
        z-index: -10;
        width: 80%;
    }

    .bg2 {
        position: absolute;
        right: 0px;
        top: 2600px;
        z-index: -10;
        width: 80%;
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
        color: white;
    }

    ul.navbar-nav li.nav-item a:hover {
        font-weight: bold;
        border-bottom: 1px solid white;
    }

    .container-content {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .container-content .content1 h2{
        font-family: 'Calibre';
        font-size: 45pt;
    }

    .container-content .content1 h1{
        font-family: 'Calibre-semiBold';
        margin-top: -10px;
        font-size: 55pt;
    }

    .container-content .content1 p{
        font-family: 'Calibre';
        margin-top: -10px;
        font-size: 15pt;
        width: 80%;
    }

    .container-content .content1 button{
        padding: 13px 20px 6px 20px;
        font-size: 13pt;
        outline: none;
        border: none;
        background-color: #FCD804;
    }

    .content1,
    .content2 {
        width: 50%;
    }

    .container-content .content2 img {
        width: 105%;
    }

    .content-tentangBhisma {
        margin-top: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        overflow-x: hidden;
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

    .cont-statistic .kotak-statistic{
        text-align: center;
        width: 28%;
    }

    .cont-statistic .kotak-statistic h1{
        margin-top: 20px;
        font-family: 'calibre-semiBold';
        font-size: 50pt;
        margin-bottom: -17px;
    }

    .cont-statistic .kotak-statistic p{
        font-family: 'calibre-Medium';
        font-size: 20pt;
    }

    .cont-statistic .kotak-statistic .circle{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        background-image: linear-gradient(to bottom, #067C7E 0%, #2CCF7E 100%);
        margin: 0 auto;
    }

    .cont-statistic .kotak-statistic .circle img{
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

    .copyright {
        display: flex;
        justify-content: center;
        /* font-size: 10pt; */
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

        .container-content .content2 {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .container-content .content2 img {
            width: 80%;
            margin-left: 18px;
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

        .cont-statistic .kotak-statistic{
            width: 100%;
        }

        .cont-statistic .kotak-statistic h1{
            margin-top: 20px;
            font-size: 30pt;
            margin-bottom: -12px;
        }

        .cont-statistic .kotak-statistic p{
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

        .container-content .content2 {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .container-content .content2 img {
            width: 80%;
            margin-left: 18px;
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

        .cont-statistic .kotak-statistic{
            width: 100%;
        }

        .cont-statistic .kotak-statistic h1{
            margin-top: 20px;
            font-size: 35pt;
            margin-bottom: -12px;
        }

        .cont-statistic .kotak-statistic p{
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

        .container-content .content2 {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .container-content .content2 img {
            width: 80%;
            margin-left: 18px;
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
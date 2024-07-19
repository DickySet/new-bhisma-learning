<template>
    <footer id="kontak" data-aos="fade-up">
        <div class="container">
            <div class="footer-atas pt-4 d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center" style="gap: 10px">
                    <div class="gambar-footer">
                        <img src="../../assets/image/bls1.png">
                    </div>
                    <div style="height: 50px; margin-top: 25px">
                        <h3>Bhisma Interaktif</h3>
                    </div>
                </div>
                <div class="footer-sosmed d-flex" style="gap: 10px">
                    <a target="_blank" href="https://www.youtube.com/@bhismalearningsystem">
                        <img src="../../assets/image/youtube.png">
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/company/pt.-sinergi-multi-servindo/mycompany/">
                        <img src="../../assets/image/linkedin.png">
                    </a>
                    <a target="_blank" href="https://www.instagram.com/bismainteraktif?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                        <img src="../../assets/image/social.png">
                    </a>
                </div>
            </div>
            <hr style="border: 1px solid white">
            <div class="footer">
                <div class="content-footer">
                    <div class="footer-1">
                        <img src="../../assets/image/servindo.png">
                        <p>PT. Sinergi Multi Servindo adalah Perusahaan yang bergerak di bidang IT, kami hadir menawarkan sebuah Solusi dalam meningkatkan Produktifitas Proses Bisnis Perusahaan</p>
                    </div>
                    <div class="footer-2">
                        <h5>Saluran Penting</h5>
                        <ul>
                            <li><a href="#">Tentang Kami</a></li>
                            <li><a href="#">Layanan</a></li>
                            <li><a href="#">Kontak Kami</a></li>
                        </ul>
                    </div>
                    <div class="footer-1">
                        <h5>Official Info</h5>
                        <div class="alamat1">
                            <svg xmlns="http://www.w3.org/2000/svg" style="color: #FCD804;" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                            </svg>
                            <p>Jl. Bendungan Hilir Raya No. 76 Bendungan Hilir, Tanah Abang Kota Administrasi Jakarta Pusat - 10210 Indonesia (ID)</p>
                        </div>
                        <div class="alamat2">
                            <svg xmlns="http://www.w3.org/2000/svg" style="color: #FCD804;" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                            </svg>
                            <p>support@smservindo.co.id</p>
                        </div>
                        <div class="alamat3">
                            <svg xmlns="http://www.w3.org/2000/svg" style="color: #FCD804;" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                            </svg>
                            <p>(021) 5721016</p>
                        </div>
                    </div>
                </div>

                <hr style="border: 1px solid white">
                <div class="copyright d-flex justify-content-center pt-3 pb-4"  style="color: white">
                    © 2024 Copyright <span style="margin-left: 5px ;color: #FCD804; font-weight: bold;"> Servindo</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        background-color: #121A27;
        height: auto;
        /* margin-top: 100px; */
    }

    .footer-atas {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 20px;
    }

    .footer-sosmed img {
        width: 45px; 
        height: 45px;
    }

    .footer-atas h3 {
        font-family: "Calibre-semiBold";
        color: white;
        font-size: 25pt;
    }

    .content-footer {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-top: 20px;

    }

    .content-footer .footer-1 {
        width: 35%;
    }

    .content-footer .footer-2 {
        width: 20%;
    }

    .content-footer .footer-1 img {
        width: 130px;
        margin-bottom: 15px;
    }

    .content-footer .footer-1 p {
        color: white;
        font-family: 'Calibre-Light';
        font-size: 13pt;
        color: #A4A4A4;
        font-weight: normal;
    }

    .content-footer .footer-1 h5,
    .content-footer .footer-2 h5 {
        font-size: 18pt;
        color: white;
        font-weight: bold;
    }

    .content-footer .footer-2 ul {
        display: column;
        flex-direction: column;
        text-align: left;
        margin-top: 15px;
        color: #A4A4A4;
        /* list-style: none; */
    }

    .content-footer .footer-2 ul li a {
        text-decoration: none;
        color: #A4A4A4;
        line-height: 2.0;
    }

    .content-footer .footer-1 .alamat1 {
        display: flex;
        gap: 30px;
        align-items: top;
        margin-top: 20px;
    }

    .content-footer .footer-1 .alamat2 {
        display: flex;
        margin-top: -20px;
        /* justify-content: center; */
        align-items: center;
        gap: 30px;
    }

    .content-footer .footer-1 .alamat3 {
        display: flex;
        margin-top: -10px;
        /* justify-content: center; */
        align-items: center;
        gap: 30px;
    }

    .content-footer .footer-1 .alamat2 p,
    .content-footer .footer-1 .alamat3 p{
        margin-top: 10px;
    }

    .content-footer .footer-1 .alamat1 svg {
        width: 55px;
        /* height: 35px; */
    }

    .content-footer .footer-1 .alamat2 svg {
        width: 23px;
        /* height: 35px; */
    }

    .content-footer .footer-1 .alamat3 svg {
        width: 23px;    
        /* height: 35px; */
    }

    .copyright {
        display: flex;
        justify-content: center;
        /* font-size: 10pt; */
    }

    @media screen and (min-width: 0) and (max-width:359px){
        footer {
            background-color: #121A27;
            height: auto;
        }

        .footer-sosmed img {
            width: 30px; 
            height: 30px;
        }

        .footer-atas h3 {
            font-family: "Calibre-semiBold";
            color: white;
            margin-top: 5px;
            font-size: 15pt;
        }

        .gambar-footer img{
            width: 10px;
        }

        .content-footer {
            flex-direction: column;
            text-align: center;
            /* gap: 20px; */
            padding: 10px;
            padding-top: 15px;
        }

        .content-footer .footer-1 {
            width: 100%;
            text-align: center;
            margin-bottom: 15px;
        }

        .content-footer .footer-2 {
        text-align: center !important;
        width: 100%;
        margin-bottom: 15px;
        }

        .content-footer .footer-1 img {
        width: 130px;
        margin-bottom: 15px;
        /* display: none; */
        }

        .content-footer .footer-1 p {
        font-size: 11pt;
        font-weight: normal;
        }

        .content-footer .footer-1 h5,
        .content-footer .footer-2 h5 {
        font-size: 17pt;
        }

        .content-footer .footer-2 ul {

        text-align: center;
        color: white;
        list-style-type: none;
        margin-left: -35px;
        }

        .content-footer .footer-2 ul li a {
        line-height: 1.0;
        }

        .content-footer .footer-1 .alamat1,
        .content-footer .footer-1 .alamat2 {
        justify-content: center !important;
        gap: 10px;
        }

        .content-footer .footer-1 .alamat3 {
        justify-content: center !important;
        gap: 10px;
        margin-bottom: -20px;
        }

        .content-footer .footer-1 .alamat1 img {
        width: 20px;
        height: 25px;
        }

        .content-footer .footer-1 .alamat2 img {
        width: 20px;
        }

        .content-footer .footer-1 .alamat3 img {
        width: 20px;
        }

        .copyright {
        display: flex;
        justify-content: center;
        font-size: 7pt;
        }
    }

    @media screen and (min-width: 360px) and (max-width: 527px) {
        footer {
            background-color: #121A27;
            height: auto;
        }

        .footer-sosmed img {
            width: 30px; 
            height: 30px;
        }

        .footer-atas h3 {
            font-family: "Calibre-semiBold";
            color: white;
            font-size: 20pt;
        }

        .gambar-footer img{
            width: 15px;
        }

        .content-footer {
            flex-direction: column;
            text-align: center;
            /* gap: 20px; */
            padding: 10px;
            padding-top: 15px;
        }

        .content-footer .footer-1 {
            width: 100%;
            text-align: center;
            margin-bottom: 15px;
        }

        .content-footer .footer-2 {
        text-align: center !important;
        width: 100%;
        margin-bottom: 15px;
        }

        .content-footer .footer-1 img {
        width: 130px;
        margin-bottom: 15px;
        /* display: none; */
        }

        .content-footer .footer-1 p {
        font-size: 11pt;
        font-weight: normal;
        }

        .content-footer .footer-1 h5,
        .content-footer .footer-2 h5 {
        font-size: 17pt;
        }

        .content-footer .footer-2 ul {

        text-align: center;
        color: white;
        list-style-type: none;
        margin-left: -35px;
        }

        .content-footer .footer-2 ul li a {
        line-height: 1.0;
        }

        .content-footer .footer-1 .alamat1,
        .content-footer .footer-1 .alamat2 {
        justify-content: center !important;
        gap: 10px;
        }

        .content-footer .footer-1 .alamat3 {
        justify-content: center !important;
        gap: 10px;
        margin-bottom: -20px;
        }

        .content-footer .footer-1 .alamat1 img {
        width: 20px;
        height: 25px;
        }

        .content-footer .footer-1 .alamat2 img {
        width: 20px;
        }

        .content-footer .footer-1 .alamat3 img {
        width: 20px;
        }

        .copyright {
        display: flex;
        justify-content: center;
        font-size: 7pt;
        }
    }

    @media screen and (min-width: 528px) and (max-width: 767px) {
        footer {
        background-color: #121A27;
        height: auto;
        }

        .content-footer {
        flex-direction: column;
        text-align: center;
        /* gap: 20px; */
        padding: 10px;
        padding-top: 50px;

        }

        .content-footer .footer-1 {
        width: 100%;
        text-align: center;
        margin-bottom: 15px;
        }

        .content-footer .footer-2 {
        text-align: center !important;
        width: 100%;
        margin-bottom: 15px;
        }

        .content-footer .footer-1 img {
        width: 130px;
        margin-bottom: 15px;
        /* display: none; */
        }

        .content-footer .footer-1 p {
        font-size: 11pt;
        font-weight: normal;
        }

        .content-footer .footer-1 h5,
        .content-footer .footer-2 h5 {
        font-size: 17pt;
        }

        .content-footer .footer-2 ul {

        text-align: center;
        color: white;
        list-style-type: none;
        margin-left: -35px;
        }

        .content-footer .footer-2 ul li a {
        line-height: 1.0;
        }

        .content-footer .footer-1 .alamat1,
        .content-footer .footer-1 .alamat2 {
        justify-content: center !important;
        gap: 10px;
        }

        .content-footer .footer-1 .alamat3 {
        justify-content: center !important;
        gap: 10px;
        margin-bottom: -20px;
        }

        .content-footer .footer-1 .alamat1 img {
        width: 20px;
        height: 25px;
        }

        .content-footer .footer-1 .alamat2 img {
        width: 20px;
        }

        .content-footer .footer-1 .alamat3 img {
        width: 20px;
        }

        .copyright {
        display: flex;
        justify-content: center;
        font-size: 7pt;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        footer {
        background-color: #121A27;
        height: auto;
        }

        .content-footer {
        flex-direction: column;
        text-align: center;
        /* gap: 20px; */
        padding: 10px;
        padding-top: 50px;

        }

        .content-footer .footer-1 {
        width: 100%;
        text-align: center;
        margin-bottom: 15px;
        }

        .content-footer .footer-2 {
        text-align: center !important;
        width: 100%;
        margin-bottom: 15px;
        }

        .content-footer .footer-1 img {
        width: 130px;
        margin-bottom: 15px;
        /* display: none; */
        }

        .content-footer .footer-1 p {
        font-size: 11pt;
        font-weight: normal;
        }

        .content-footer .footer-1 h5,
        .content-footer .footer-2 h5 {
        font-size: 17pt;
        }

        .content-footer .footer-2 ul {

        text-align: center;
        color: white;
        list-style-type: none;
        margin-left: -35px;
        }

        .content-footer .footer-2 ul li a {
        line-height: 1.0;
        }

        .content-footer .footer-1 .alamat1,
        .content-footer .footer-1 .alamat2 {
        justify-content: center !important;
        gap: 10px;
        }

        .content-footer .footer-1 .alamat3 {
        justify-content: center !important;
        gap: 10px;
        margin-bottom: -20px;
        }

        .content-footer .footer-1 .alamat1 img {
        width: 20px;
        height: 25px;
        }

        .content-footer .footer-1 .alamat2 img {
        width: 20px;
        }

        .content-footer .footer-1 .alamat3 img {
        width: 20px;
        }

        .copyright {
        display: flex;
        justify-content: center;
        font-size: 7pt;
        }
    }

</style>
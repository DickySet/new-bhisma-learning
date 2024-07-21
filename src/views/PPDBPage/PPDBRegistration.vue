<template>
    <img src="../../assets/image/bg1.png" class="bg">

    <div class="container">
        <div class="card border-0 mt-5 shadow">
            <div class="card-body">
                <div class="p-2">
                    <h2 style="padding-top: 10px;"><span style="font-family: 'Calibre-Light';">Pendaftaran</span> PPDB</h2>
                </div>
            </div>
        </div>
        
        <div class="alert bg-warning fade show d-flex justify-content-between mt-3" role="alert" data-aos="fade-up">
            <label class="p-1">Pembayaran bisa langsung hubungi pihak sekolah</label>
            <button style="background: none; border: none;" type="button" data-bs-dismiss="alert" aria-label="Close">
                <label aria-hidden="true">x</label>
            </button>
        </div>

        <div class="information mt-3">
            <div class="card card1 border-0 shadow">
                <div class="card-body">
                    <div class="p-2 d-flex justify-content-center align-items-center">
                        <img src="../../assets/image/opening.png" alt="">
                    </div>
                </div>
            </div>
            <div class="card card2 border-0 shadow">
                <div class="card-body">
                    <div class="p-2">
                        <h5>Informasi <span style="font-family: 'Calibre-Light';">Pendaftaran</span></h5>
                        <hr style="border: 1px solid black;">
                        <p>Selamat Datang! di <b>Pendaftaran PPDB!</b> Bagi Anda calon peserta, <b>kami sarankan</b> untuk membaca dengan seksama <b>Aturan</b> dan <b>Prosedur pendaftaran</b> sebelum memulai proses pendaftaran.</p>
                        <p><b>Terima kasih</b> atas minat Anda untuk mendaftar. Pastikan pendaftaran berjalan lancar dengan <b>melengkapi persyaratan wajib</b>. Selamat mendaftar, <b>kami berharap</b> dapat menyambut Anda di sekolah kami!</p>
                        <div class="d-flex justify-content-between align-items-center" style="gap: 20px">
                            <div style="width:35%">
                                <router-link :to="{name: 'PPDB'}">
                                    <button class="button-edit">Cek Alur Pendaftaran</button>
                                </router-link>
                            </div>
    
                            <div :hidden="token_show" style="width:65%">
                                <div class="d-flex justify-content-between align-items-center">
                                    <p>Token <b>Registrasi :</b></p>
                                    <input type="text" style="width: 67%" placeholder="Masukan Token">
                                    <button class="btn" type="submit" style="background-color: orange; color:black">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="form mt-3">
            <div class="card shadow border-0">
                <div class="card-body">
                    <div class="p-2">
                        <!-- Opsi Header Input -->
                        <div id="header-input" class="m-3 mt-4 d-flex justify-content-center" style="gap: 10px">
                            <div id="Peserta Didik">
                                <div class="d-flex" style="gap: 7px">
                                    <label><b>01</b></label>
                                    <label>Peserta Didik</label>
                                </div>
                                <div v-if="progres1 === 'Done'">
                                    <div class="progress-info">
                                        <img src="../../assets/image/centang.png" alt="">
                                        <hr class="progress-baris">
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="progress-info">
                                        <img src="../../assets/image/nocentang.png" alt="">
                                        <hr class="progress-baris">
                                    </div>
                                </div>
                            </div>
                            <div id="Orang Tua">
                                <div class="d-flex" style="gap: 7px">
                                    <label><b>02</b></label>
                                    <label>Orang Tua</label>
                                </div>
                                <div v-if="progres2 === 'Done'">
                                    <div class="progress-info">
                                        <img src="../../assets/image/centang.png" alt="">
                                        <hr class="progress-baris">
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="progress-info">
                                        <img src="../../assets/image/nocentang.png" alt="">
                                        <hr class="progress-baris">
                                    </div>
                                </div>
                            </div>
                            <div id="Wali">
                                <div class="d-flex" style="gap: 7px">
                                    <label><b>03</b></label>
                                    <label>Wali</label>
                                </div>
                                <div v-if="progres3 === 'Done'">
                                    <div class="progress-info">
                                        <img src="../../assets/image/centang.png" alt="">
                                        <hr class="progress-baris">
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="progress-info">
                                        <img src="../../assets/image/nocentang.png" alt="">
                                        <hr class="progress-baris">
                                    </div>
                                </div>
                            </div>
                            <div id="Beasiswa">
                                <div class="d-flex" style="gap: 7px">
                                    <label><b>04</b></label>
                                    <label>Beasiswa & Kesehatan</label>
                                </div>
                                <div v-if="progres4 === 'Done'">
                                    <div class="progress-info">
                                        <img src="../../assets/image/centang.png" alt="">
                                        <hr class="progress-baris">
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="progress-info">
                                        <img src="../../assets/image/nocentang.png" alt="">
                                        <hr class="progress-baris">
                                    </div>
                                </div>
                            </div>
                            <div id="Cetak">
                                <div class="d-flex" style="gap: 7px">
                                    <label><b>05</b></label>
                                    <label>Cetak Formulir</label>
                                </div>
                                <div v-if="progres5 === 'Done'">
                                    <div class="progress-info">
                                        <img src="../../assets/image/centang.png" alt="">
                                        <hr class="progress-baris">
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="progress-info" style="gap: 10px; margin-top: -10px">
                                        <img src="../../assets/image/nocentang.png" alt="">
                                        <hr class="progress-baris">
                                    </div>
                                </div>
                            </div>

                        </div>
                        <!-- Opsi Header Input -->
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        data(){
            return{
                token_show: false
            }
        }
    }

</script>

<style scoped>

    .bg {
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        z-index: -100;
        position: absolute;
    }

    .information {
        display: flex;
        gap: 15px;
    }

    .information .card1 {
        width: 25%;
    }

    .information .card1 img{
        width: 230px;
        height: 230px;
    }

    .information .card2 {
        width: 75%;
    }

    .card2 h5 {
        font-size: 17pt;
        margin-bottom: -10px;
    }

    .card2 p {
        font-size: 13pt;
        text-align: justify;
        margin-bottom: 6px;
    }

    #header-input label{
        font-size: 14pt;
    }

    .progress-info {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: -10px;
    }

    .progress-info img {
        width: 20px;
        height: 20px;
    }

    .progress-baris {
        border: 2px dashed #FFC727; 
        min-width: 160px;
    }

</style>
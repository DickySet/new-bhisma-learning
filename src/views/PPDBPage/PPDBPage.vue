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
                            <router-link to="/">
                                <a class="nav-link cek">Beranda</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link cek" href="#cekPendaftaran">Cek Pendaftaran</a>
                        </li>
                        <li class="nav-item">
                            <router-link to="/PPDB-Registration">
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
                    <h1>Bhisma Interaktif</h1>
                    <p>{{text}}</p>
                    <div class="d-flex justify-content-center" style="gap: 20px">
                        <button class="rounded-pill">Daftar Sekarang</button>
                        <button class="rounded-pill">Alur Pendaftaran</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="cekPendaftaran" data-aos="fade-up">
        <div class="kotak3" data-aos="fade-up">
            <div class="text-center" style="width: 65%">
                <h1>Cek Status Pendaftaran Siswa</h1>
                <p>Lakukan cek sekala berkala agar informasi pendaftaran update</p>
                <div class="input">
                    <div class="svg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </div>
                    <input type="text" placeholder="Masukan NIS/NISN Peserta">
                    <div class="button" data-bs-toggle="modal" data-bs-target="#detailStudent">
                        <button> Search</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="alur" data-aos="fade-up" >
        <div class="container mb-3">
            <div class="container-content2">
                <div class="content2">
                    <h2>Alur Pendaftaran PPDB</h2>
                    <h1>Bhisma Interaktif</h1>
                </div>
            </div>
        </div>
    </section>

    <div class="alur">
        <template v-if="token">
            <div class="container alur-content" data-aos="fade-up">
                <div class="alur2">
                    <img src="../../assets/image/1.png" alt="">
                </div>
                <div class="alur1">
                    <div class="desk-alur">
                        <h1>Mempersiapkan Berkas</h1>
                        <p>Proses ini melibatkan pengumpulan dokumen-dokumen penting yang diperlukan untuk peserta didik dalam memenuhi persyaratan pendaftaran.</p>
                    </div>
                </div>
            </div>
            <div class=" container alur-content" data-aos="fade-up">
                <div class="alur1">
                    <div class="desk-alur-1">
                        <h1>Melakukan Pembayaran</h1>
                        <p>Setelah mempersiapkan berkas, langkah berikutnya adalah melakukan pembayaran ke sekolah. Pembayaran ini bertujuan untuk mendapatkan Token yang diperlukan untuk melanjutkan proses pendaftaran online.</p>
                    </div>
                </div>
                <div class="alur2">
                    <img src="../../assets/image/2.png" alt="">
                </div>
            </div>
            <div class="container alur-content" data-aos="fade-up">
                <div class="alur2">
                    <img src="../../assets/image/3.png" alt="">
                </div>
                <div class="alur1">
                    <div class="desk-alur">
                        <h1>Mendaftar Secara Online</h1>
                        <p>Peserta didik melakukan pendaftaran secara online, dengan menginputkan token yang sudah didapatkan sebelumnya, dan mengisi data dengan baik dan benar</p>
                    </div>
                </div>
            </div>
            <div class=" container alur-content" data-aos="fade-up">
                <div class="alur1">
                    <div class="desk-alur-1">
                        <h1>Verifikasi Data</h1>
                        <p>Pihak sekolah akan melakukan verifikasi dan validasi data. Langkah ini dilakukan untuk memastikan bahwa semua informasi yang diberikan oleh peserta didik sudah lengkap dan sesuai dengan persyaratan yang telah ditetapkan.</p>
                    </div>
                </div>
                <div class="alur2">
                    <img src="../../assets/image/4.png" alt="">
                </div>
            </div>
            <div class="container alur-content" data-aos="fade-up">
                <div class="alur2">
                    <img src="../../assets/image/5.png" alt="">
                </div>
                <div class="alur1">
                    <div class="desk-alur">
                        <h1>Proses Seleksi</h1>
                        <p>Setelah data peserta didik dinyatakan valid melalui proses verifikasi dan validasi, berkas pendaftaran akan diproses lebih lanjut sebagai peserta seleksi Penerimaan Peserta Didik Baru (PPDB).</p>
                    </div>
                </div>
            </div>
            <div class=" container alur-content" data-aos="fade-up">
                <div class="alur1">
                    <div class="desk-alur-1">
                        <h1>Pengumuman Seleksi</h1>
                        <p>Setelah proses seleksi selesai dan peserta didik dinyatakan lolos, pihak sekolah akan mengumumkan penerimaan peserta didik yang telah terseleksi.</p>
                    </div>
                </div>
                <div class="alur2">
                    <img src="../../assets/image/6.png" alt="">
                </div>
            </div>
            <div class="container alur-content" data-aos="fade-up">
                <div class="alur2">
                    <img src="../../assets/image/7.png" alt="">
                </div>
                <div class="alur1">
                    <div class="desk-alur">
                        <h1>Daftar Ulang</h1>
                        <p>Peserta yang sudah dinyatakan lolos seleksi diwajibkan untuk melakukan pendaftaran ulang ke sekolah. Tahap ini sangat penting untuk mengonfirmasi kehadiran dan komitmen peserta didik dalam memulai tahun ajaran baru.</p>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="container alur-content" data-aos="fade-up">
                <div class="alur2">
                    <img src="../../assets/image/1.png" alt="">
                </div>
                <div class="alur1">
                    <div class="desk-alur">
                        <h1>Mempersiapkan Berkas</h1>
                        <p>Proses ini melibatkan pengumpulan dokumen-dokumen penting yang diperlukan untuk peserta didik dalam memenuhi persyaratan pendaftaran.</p>
                    </div>
                </div>
            </div>
            <div class="container alur-content" data-aos="fade-up">
                <div class="alur1">
                    <div class="desk-alur-1">
                        <h1>Mendaftar Secara Online</h1>
                        <p>Peserta didik melakukan pendaftaran secara online, dengan menginputkan token yang sudah didapatkan sebelumnya, dan mengisi data dengan baik dan benar</p>
                    </div>
                </div>
                <div class="alur2">
                    <img src="../../assets/image/2-1.png" alt="">
                </div>
            </div>
            <div class=" container alur-content" data-aos="fade-up">
                <div class="alur2">
                    <img src="../../assets/image/3-1.png" alt="">
                </div>
                <div class="alur1">
                    <div class="desk-alur">
                        <h1>Verifikasi Data</h1>
                        <p>Pihak sekolah akan melakukan verifikasi dan validasi data. Langkah ini dilakukan untuk memastikan bahwa semua informasi yang diberikan oleh peserta didik sudah lengkap dan sesuai dengan persyaratan yang telah ditetapkan.</p>
                    </div>
                </div>
            </div>
            <div class="container alur-content" data-aos="fade-up">
                <div class="alur1">
                    <div class="desk-alur-1">
                        <h1>Proses Seleksi</h1>
                        <p>Setelah data peserta didik dinyatakan valid melalui proses verifikasi dan validasi, berkas pendaftaran akan diproses lebih lanjut sebagai peserta seleksi Penerimaan Peserta Didik Baru (PPDB).</p>
                    </div>
                </div>
                <div class="alur2">
                    <img src="../../assets/image/4-1.png" alt="">
                </div>
            </div>
            <div class=" container alur-content" data-aos="fade-up">
                <div class="alur2">
                    <img src="../../assets/image/5-1.png" alt="">
                </div>
                <div class="alur1">
                    <div class="desk-alur">
                        <h1>Pengumuman Seleksi</h1>
                        <p>Setelah proses seleksi selesai dan peserta didik dinyatakan lolos, pihak sekolah akan mengumumkan penerimaan peserta didik yang telah terseleksi.</p>
                    </div>
                </div>
            </div>
            <div class="container alur-content" data-aos="fade-up">
                <div class="alur1">
                    <div class="desk-alur-1">
                        <h1>Daftar Ulang</h1>
                        <p>Peserta yang sudah dinyatakan lolos seleksi diwajibkan untuk melakukan pendaftaran ulang ke sekolah. Tahap ini sangat penting untuk mengonfirmasi kehadiran dan komitmen peserta didik dalam memulai tahun ajaran baru.</p>
                    </div>
                </div>
                <div class="alur2">
                    <img src="../../assets/image/6-1.png" alt="">
                </div>
            </div>

        </template>
    </div>

    <section id="daftar" data-aos="fade-up" >
        <div class="container mb-3">
            <div class="container-content2">
                <div class="content2">
                    <h2>Daftar Peserta PPDB</h2>
                    <h1>Bhisma Interaktif</h1>
                </div>
            </div>
        </div>
    </section>

    <section id="dataPendaftar" data-aos="fade-up">
        <div class="container pb-4">
            <div class="d-flex" style="gap: 10px">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" style="color: white; font-weight: bold;" width="17" height="17" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </div>
                <input class="search" type="text" v-model="searchText" placeholder="Masukan Nama Pendaftar">
            </div>

            <div class="table">
                <table style="width: 100%;">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>No Registrasi</th>
                            <th>Sekolah Asal</th>
                            <th>Pendaftar</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- <tr v-for="(recap1, index) in data"> -->
                        <tr v-for="(recap1, index) in paginatedData()">
                            <td>{{index+1 + (currentPage - 1) * pageSize}}</td>
                            <td>{{recap1.no_registration}}</td>
                            <td>{{recap1.school_before}}</td>
                            <td>{{recap1.name}}</td>
                            <td>{{recap1.status}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="pagination">
                <button @click="previousPage" :disabled="currentPage == 1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                </button>
                <span>Page <b>{{ currentPage }}</b> of <b>{{ totalPages }}</b></span>
                <button @click="nextPage" :disabled="currentPage == totalPages">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                </button>
            </div>

        </div>
    </section>

    <div class="modal fade" id="detailStudent">
        <div class="modal-dialog modal-dialog-scrollable modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Data Pendaftar PPDB</h1>
                    <button type="button" class="btn-close btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="layout-modal">
                        <div class="layout-modal-1">
                            <div class="card border-0 shadow">
                                <div class="card-body">
                                    <div class="text-center p-2">
                                        <h3 style="margin-bottom:0px">Dicky Setiawan</h3>
                                        <label style="margin-bottom:10px">SMA Negeri 3 Parahyangan</label>
                                        <label>Jl. Solontongan No.3, Turangga, Kec. Lengkong, Kota Bandung, Jawa Barat 40264</label>
                                    </div>
                                </div>
                            </div>
                            <div class="card border-0 shadow mt-3">
                                <div class="card-body">
                                    <div class="p-2">
                                        <div class="detail">
                                            <label class="label">No Telepon</label>
                                            <label>0895352429600</label>
                                        </div>
                                        <hr style="margin-top:6px; margin-bottom:10px;">
                                        <div class="detail">
                                            <label class="label">Email</label>
                                            <label>dickyemail@gmail.com</label>
                                        </div>
                                        <hr style="margin-top:6px; margin-bottom:10px;">
                                        <div class="detail">
                                            <label class="label">NISN</label>
                                            <label>0000022223</label>
                                        </div>
                                        <hr style="margin-top:6px; margin-bottom:10px;">
                                        <div class="detail-button">
                                            <button>Cetak Kartu Pendaftar</button>
                                            <button>Cetak Detail Pendaftar</button>
                                            <button>Cetak Surat Pernyataan</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card border-0 shadow mt-3">
                                <div class="card-body">
                                    <div class="p-2">
                                        <div class="d-flex align-items-center" style="gap:5px">
                                            <svg xmlns="http://www.w3.org/2000/svg" style="color: red" width="17" height="17" fill="currentColor" class="bi bi-pin-fill" viewBox="0 0 16 16">
                                                <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354"/>
                                            </svg>
                                            <label style="font-weight: bold; font-size: 13pt;">Catatan Pendaftaran :</label>
                                        </div>
                                        <hr style="margin-top:6px; margin-bottom:10px;">
                                        <div class="text-center">
                                            <label>Masih dalam Proses</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="layout-modal-2">
                            <div class="card border-0 shadow">
                                <div class="card-body">
                                    <div class="p-2">
                                        <div class="d-flex justify-content-end">
                                            <label style="font-weight: bold">PROSES</label>
                                        </div>
                                        <div class="alert bg-warning font-weight-bold" role="alert">
                                            <label style="font-weight: bold; font-size: 13pt">Data Peserta Didik</label>
                                        </div>
                                        <div class="form-group">
                                            <label>Pilih Jurusan</label>
                                            <select>
                                                <option value="0">Pilih Jurusan</option>
                                                <option value="1">IPA</option>
                                                <option value="2">IPS</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Nama Lengkap</label>
                                            <input placeholder="Masukan Nama Lengkap" type="text">
                                        </div>
                                        <div class="form-group">
                                            <label>Tempat Lahir</label>
                                            <input placeholder="Masukan Tempat Lahir" type="text">
                                        </div>
                                        <div class="d-flex" style="gap: 10px">
                                            <div class="form-group" style="width: 50%">
                                                <label>No Induk Keluarga</label>
                                                <input placeholder="Masukan No Induk Keluarga" type="text">
                                            </div>
                                            <div class="form-group" style="width: 50%">
                                                <label>No Kartu Keluarga</label>
                                                <input placeholder="Masukan No Kartu Keluarga" type="text">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Nama Lengkap</label>
                                            <textarea placeholder="Masukan Nama Lengkap" rows="3" type="text"></textarea>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="button-simpan">Simpan Data</button>
                    <button class="button-tutup" data-bs-dismiss="modal">Batal Simpan Data</button>
                </div>
            </div>
        </div>
    </div>

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
                text: 'Sistem Informasi Pendaftaran Peserta Didik Baru (PPDB) Bhisma Interaktif',
                dataSekolah: 125,
                dataSiswa: 1678,
                dataUjian: 13564,

                searchText: '',
                currentPage: 1,
                pageSize: 5,
                token: true,

                data: [
                    {
                        no_registration: 'IPA000001',
                        school_before: 'SMAN 1 Parahyangan',
                        name: 'Dicky Setiawan',
                        status: 'Proses',
                    },
                    {
                        no_registration: 'IPA000002',
                        school_before: 'SMAN 2 Gorontalo',
                        name: 'Nur Sidiq Faturahman',
                        status: 'Proses',
                    },
                    {
                        no_registration: 'IPA000003',
                        school_before: 'SMKN 21 Merauke',
                        name: 'Cahyadi',
                        status: 'Proses',
                    },
                    {
                        no_registration: 'IPA000004',
                        school_before: 'SMKN 45 Jakarta',
                        name: 'Oza Rangkuti',
                        status: 'Proses',
                    },
                    {
                        no_registration: 'IPA000005',
                        school_before: 'SMKN 5 Medan',
                        name: 'Rafi Azizi',
                        status: 'Proses',
                    },
                    {
                        no_registration: 'IPA000006',
                        school_before: 'SMKN 15 Aceh',
                        name: 'Hartini',
                        status: 'Proses',
                    },
                    {
                        no_registration: 'IPA000007',
                        school_before: 'SMAN 15 Papua',
                        name: 'Kaka Ternate',
                        status: 'Proses',
                    },
                    {
                        no_registration: 'IPA000008',
                        school_before: 'MA 12 Jakarta',
                        name: 'Faturrahman',
                        status: 'Proses',
                    },
                    {
                        no_registration: 'IPA000009',
                        school_before: 'SMAN 21 Jakarta',
                        name: 'Aji Begawan',
                        status: 'Proses',
                    },
                    {
                        no_registration: 'IPA000010',
                        school_before: 'SMAN 11 Jakarta',
                        name: 'Kevin Sanjaya',
                        status: 'Proses',
                    },
                    {
                        no_registration: 'IPA000011',
                        school_before: 'SMAN 11 Jakarta',
                        name: 'Susi Susanti',
                        status: 'Proses',
                    },
                ]
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
        },
        computed:{
            totalPages(){
                const data = this.data.filter(item => {
                    return item.name.toLowerCase().includes(this.searchText.toLowerCase())
                });

                return Math.ceil(data.length / this.pageSize);
            }
        },
        methods: {
            paginatedData(){
                const data = this.data.filter(item => {
                    return item.name.toLowerCase().includes(this.searchText.toLowerCase())
                });

                const start = (this.currentPage - 1) * this.pageSize;
                const end = start + this.pageSize;
                return data.slice(start, end);
            },
            nextPage(){
                if(this.currentPage < this.totalPages){
                    this.currentPage++
                };
            },
            previousPage(){
                if(this.currentPage > 1){
                    this.currentPage--
                };
            }
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
        margin-bottom: 10px;
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

    .kotak3 {
        display: flex;
        justify-content: center;
        align-items: center;   
        background: linear-gradient(87deg, #067c7e 20%, #2ccf7e 100%) !important;
        height: 400px;
    }

    .kotak3 p, 
    .kotak3 h1 {
        color: white;
    }

    .kotak3 p {
        font-size: 14pt;
        margin-top: -10px;
        margin-bottom: 40px;
    }

    .kotak3 .input {
        margin: 0 auto;
        width: 100%;
        height: 65px;
        background: white;
        border-radius: 10px;
        display: flex;
        align-items: center;
    }

    .input .svg {
        width: 10%;
    }

    .input svg {
        width: 18px;
        height: 18px;
    }

    .input input {
        height: 50px;
        border: none;
        background: white;
        font-size: 14pt;
        margin-top: 8px;
    }

    .input .button {
        width: 25%;
    }
    
    .input .button button {
        background-color: #067c7e;
        padding: 13px 27px 8px 27px;
        outline: none;
        color: white;
        border-radius: 6px;
        border: none;
    }

    .layout-modal {
        display: flex;
        gap: 15px;
    }

    .layout-modal-1 {
        width: 33%;
    }

    .layout-modal-2 {
        width: 67%;
    }

    .detail {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .detail .label {
        font-weight: bold;
        font-size: 13pt;
    }

    .detail-button button {
        width: 100%;
        border-radius: 15px;
        margin-bottom: 5px;
        padding: 7px 0px 2px 0px;
        border: none;
        background: linear-gradient(87deg, #067c7e 20%, #2ccf7e 100%) !important;
        color: white;
    }

    .container-content2 {
        margin-top: 90px;
    }

    .content2 {
        text-align: center;
    }

    .content2 h2{
        font-family: 'Calibre';
        font-size: 25pt;
    }

    .content2 h1{
        font-family: 'Calibre-semiBold';
        margin-top: -10px;
        margin-bottom: 0px;
        font-size: 30pt;
    }

    .alur-content {
        display: flex;
        justify-content: center;
    }

    .alur1, .alur2{
        width: 40%;
        padding: 15px 20px 15px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .desk-alur-1 {
        text-align: right;
    }

    .desk-alur h1,
    .desk-alur-1 h1{
        font-family: 'Calibre-semiBold';
        margin-top: 40px;
        margin-bottom: 0px;
        font-size: 23pt;
    }

    .desk-alur p,
    .desk-alur-1 p{
        width: 100%;
        font-size: 15pt;
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
    }

    @media screen and (min-width: 360px) and (max-width: 527px) {

        .bg {
            width: 85%;
        }

        .bg1 {
            top: 250px;
            width: 85%;
        }

        ul.navbar-nav li.nav-item a{
            color: black !important;
        }

        .img-nav img {
            width: 60px;
        }

        .container-content .content1 h2{
            font-size: 20pt;
        }

        .container-content .content1 h1{
            font-size: 30pt;
        }

        .container-content .content1 p{
            width: 100%;
        }

        .kotak3 {
            height: 250px;
        }

        .kotak3 h1 {
            width: 100%;
            font-size: 15pt;
        }
        .kotak3 p{
            font-size: 11pt;
            margin-top: 10px;
        } 

        .kotak3 .input {
            width: 100%;
            height: 45px;
            background: white;
            border-radius: 10px;
            margin-top: -20px;
            display: flex;
            align-items: center;
        }

        .input .svg {
            width: 10%;
        }

        .input svg {
            width: 10px;
            height: 10px;
        }

        .input input {
            width: 60%;
            height: 20px;
            border: none;
            background: white;
            font-size: 11pt;
            margin-top: 8px;
        }

        .input .button {
            width: 25%;
        }
        
        .input .button button {
            background-color: #067c7e;
            padding: 7px 10px 2px 10px;
            outline: none;
            color: white;
            border-radius: 6px;
            border: none;
        }

        .layout-modal {
            flex-direction: column;
        }

        .layout-modal-1,
        .layout-modal-2 {
            width: 100%;
        }

        .content2 h2{
            font-size: 18pt;
        }

        .content2 h1{
            font-size: 23pt;
        }

        .alur-content {
            flex-direction: column;
        }

        .alur2{
            order: 1;
        }

        .alur2 img {
            width: 130px;
        }

        .alur1{
            order: 2;
        }
        .alur1, .alur2{
            width: 100%;
            padding: 0px 0px 0px 0px; 
        }

        .desk-alur,
        .desk-alur-1 {
            text-align: center;
        }

        .desk-alur h1,
        .desk-alur-1 h1{
            margin-top:30px;
            margin-bottom: 5px;
            font-size: 17pt;
        }

        .desk-alur p,
        .desk-alur-1 p{
            font-size: 12pt;
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

    }

</style>
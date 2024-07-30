<template>
    <!-- <button class="button-simpan" @click="enterFullscreen">Enter Full Screen</button>
    <button class="button-tutup" @click="exitFullscreen">Exit Full Screen</button> -->
    <div class="card border-0">
        <div class="card-body">
            <div class="padding-content">
                <div class="d-flex justify-content-between" style="margin-bottom: -20px">
                    <div>
                        <h4 style="margin-bottom: -2px ">Sedang Berlangsung</h4>
                        <p>Ujian Kimia Akhir Semester 2024 </p>
                    </div>
                    <div class="text-center">
                        <p style="margin-bottom: -2px ">Sisa Waktu</p>
                        <h4>53 : 24</h4>
                    </div>
                </div>
                <hr>

                <div class="d-flex flex-wrap" style="gap: 10px">
                    <div class="exam1 card shadow border-0" style="width: 70%; flex-grow: 1; flex-basis: 69%">
                        <div class="card-body">
                            <!-- <div class="padding-content"> -->
                                <div class="d-flex justify-content-between mt-2" style="margin-bottom: -15px">
                                    <h5>Soal No : 1</h5>
                                    <label style="font-weight: bold">Pilihan Ganda</label>
                                </div>
                                <hr>
                                <div class="d-flex" style="gap: 10px; padding: 0px 0px 0px 0px">
                                    <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                    <h5 style="margin-top: 2px" class="font-weight-bold">Pernyataan</h5>
                                </div>
                                <div class="pernyataan">
                                    <p style="text-align: justify;">Kusno bekerja dengan rajin, tapi celana kepar 1001-nya bertambah lama bertambah pudar, karena sering dicuci. Setiap bulan dia berharap akan dapat membeli sebuah celana baru, tapi uang yang sepuluh ribu rupiah itu untuk makan saja tidak cukup. Seluruh pikiran Kusno tertuju pada celana itu. Apakah yang terjadi pada dirinya apabila celana itu sudah tidak bisa dipakai lagi?. Setiap hari ia berdoa agar Tuhan tidak menurunkan hujan. Jika turun hujan Kusno akan kembang kempis memikirkan celananya itu.</P>
                                </div>
                                <div class="d-flex" style="gap: 10px; padding: 0px 0px 0px 0px">
                                    <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                    <h5 style="margin-top: 2px" class="font-weight-bold">Pernyataan</h5>
                                </div>
                                <div class="Pertanyaan">
                                    <p style="text-align: justify;">Masalah yang diungkapkan dalam kutipan novel di atas adalah...</P>
                                </div>
                                <div class="jawaban" style="margin-left: 10px">
                                    <template v-for="options in option">
                                        <div class="d-flex" style="gap: 10px;">
                                            <input style="width: 4%" type="radio">
                                            <h5 style="width: 4%">{{options.option_name}}.</h5>
                                            <p style="width: 90%">{{options.question}}</p>
                                        </div>
                                    </template>
                                </div>

                                <div class="d-flex justify-content-between mt-3">
                                    <div class="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" style="color: white" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                                        </svg>
                                    </div>
                                    <div class="icon-tambah">
                                        <svg xmlns="http://www.w3.org/2000/svg" style="color: white" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                        </svg>
                                    </div>
                                </div>
                            <!-- </div> -->
                        </div>
                    </div>
                    <div class="exam2 card shadow border-0 " style="width: 30%; height: 400px; overflow: auto; flex-grow: 1; flex-basis: 29%">
                        <div class="card-body">
                            <h5 class="mt-2" style="margin-bottom: -7px">Jawaban</h5>
                            <hr>
                            <div class="number">
                                <template v-for="num in number">
                                    <template v-if="num.value == 'Y'">
                                        <div class="icon-excel text-white" style="width: 16.7%;">
                                            <h5 style="margin-top:15px">{{num.number_soal}}</h5>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <div class="icon text-white" style="width: 16.7%;">
                                            <h5 style="margin-top:15px">{{num.number_soal}}</h5>
                                        </div>
                                    </template>
                                </template>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button class="button-simpan w-100">Selesai</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                option: [
                    {
                        option_name: 'A',
                        question: 'Keadaan Pribadi Kusno'
                    },
                    {
                        option_name: 'B',
                        question: 'Keprihatinan hidup Kusno'
                    },
                    {
                        option_name: 'C',
                        question: 'Pengabdian khusus dari hati nurani'
                    },
                    {
                        option_name: 'D',
                        question: 'Kegiatan rutin kusno'
                    },
                    {
                        option_name: 'E',
                        question: 'Kenang kenangan yang tidak terlupakan'
                    }
                ],
                number: [
                    {
                        number_soal: 1,
                        value: 'Y'
                    },
                    {
                        number_soal: 2,
                        value: 'Y'
                    },
                    {
                        number_soal: 3,
                        value: 'Y'
                    },
                    {
                        number_soal: 4,
                        value: 'N'
                    },
                    {
                        number_soal: 5,
                        value: 'N'
                    },
                    {
                        number_soal: 6,
                        value: 'N'
                    },
                    {
                        number_soal: 7,
                        value: 'Y'
                    },
                    {
                        number_soal: 8,
                        value: 'Y'
                    },
                    {
                        number_soal: 9,
                        value: 'Y'
                    },
                    {
                        number_soal: 10,
                        value: 'N'
                    },
                    {
                        number_soal: 11,
                        value: 'N'
                    },
                    {
                        number_soal: 12,
                        value: 'Y'
                    },
                    {
                        number_soal: 13,
                        value: 'N'
                    },
                    {
                        number_soal: 14,
                        value: 'N'
                    },
                    {
                        number_soal: 15,
                        value: 'N'
                    },
                    {
                        number_soal: 16,
                        value: 'Y'
                    },
                    {
                        number_soal: 17,
                        value: 'Y'
                    },
                    {
                        number_soal: 18,
                        value: 'Y'
                    },
                ]
            }
        },
        methods: {
        }
    }

</script>
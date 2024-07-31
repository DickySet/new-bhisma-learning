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
                        <h3>53 : 24</h3>
                    </div>
                </div>
                <hr>

                <div class="d-flex flex-wrap" style="gap: 10px">
                    <div class="exam1 card shadow border-0" style="width: 70%; flex-grow: 1; flex-basis: 69%">
                        <div class="card-body">
                            
                            <!-- SOAL TIPE PILIHAN GANDA -->
                                <template v-if="soalKe == 1">
                                    <div class="d-flex justify-content-between mt-2" style="margin-bottom: -15px">
                                        <h5>Soal No : {{soalKe}}</h5>
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
                                        <h5 style="margin-top: 2px" class="font-weight-bold">Pertanyaan</h5>
                                    </div>
                                    <div class="Pertanyaan">
                                        <p style="text-align: justify;">Masalah yang diungkapkan dalam kutipan novel di atas adalah...</P>
                                    </div>
                                    <div class="jawaban" style="margin-left: 10px">
                                        <template v-for="options in option">
                                            <div class="d-flex" style="gap: 10px;">
                                                <input style="width: 4%" type="radio">
                                                <label style="width: 4%l; font-weight: bold;">{{options.option_name}}</label>
                                                <p style="width: 89%">{{options.question}}</p>
                                            </div>
                                        </template>
                                    </div>
                                </template>
                            <!-- SOAL TIPE PILIHAN GANDA -->

                            <!-- SOAL TIPE ESSAY -->
                                <template v-if="soalKe == 2">
                                    <div class="d-flex justify-content-between mt-2" style="margin-bottom: -15px">
                                        <h5>Soal No : {{soalKe}}</h5>
                                        <label style="font-weight: bold">Essay</label>
                                    </div>
                                    <hr>
                                    <div class="d-flex" style="gap: 10px; padding: 0px 0px 0px 0px">
                                        <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                        <h5 style="margin-top: 2px" class="font-weight-bold">Pernyataan</h5>
                                    </div>
                                    <div class="pernyataan">
                                        <p style="text-align: justify;">Malin Kundang sudah kaya raya. Ia memiliki istri yang cantik, putri seorang saudagar kaya. Pada saat pesiar dan menyinggahi kampung halamannya, ia tidak mau mengakui ibu kandungnya. Ia merasa malu terhadap istrinya karena ternyata ibunya tidak lebih dari seorang yang tua renta yang berpakaian compang-camping.</P>
                                    </div>
                                    <div class="d-flex" style="gap: 10px; padding: 0px 0px 0px 0px">
                                        <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                        <h5 style="margin-top: 2px" class="font-weight-bold">Pertanyaan</h5>
                                    </div>
                                    <div class="Pertanyaan">
                                        <p style="text-align: justify;">Pendapat saya tentang malin kundang adalah...</P>
                                    </div>
                                    <div style="margin-left: 15px">
                                        <textarea rows="3" placeholder="Masukan jawaban"></textarea>
                                    </div>
                                </template>
                            <!-- SOAL TIPE ESSAY -->

                            <!-- SOAL TIPE PILIHAN GANDA KOMPLEKS-->
                                <template v-if="soalKe == 3">
                                    <div class="d-flex justify-content-between mt-2" style="margin-bottom: -15px">
                                        <h5>Soal No : {{soalKe}}</h5>
                                        <label style="font-weight: bold">Pilihan Ganda kompleks</label>
                                    </div>
                                    <hr>
                                    <div class="d-flex" style="gap: 10px; padding: 0px 0px 0px 0px">
                                        <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                        <h5 style="margin-top: 2px" class="font-weight-bold">Pernyataan</h5>
                                    </div>
                                    <div class="pernyataan">
                                        <p style="text-align: justify;">Peri yang baik itu kemudian menceritakan kalau dia sengaja mengubah dirinya menjadi seekor merpati untuk menolong Sarah. "Karena kau telah menolongku pada saat sebelah sayapku terluka ditembak pemburu, kini tugasku telah selesai. Kau telah menemukan kebahagiaan", ungkap merpati.</P>
                                    </div>
                                    <div class="d-flex" style="gap: 10px; padding: 0px 0px 0px 0px">
                                        <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                        <h5 style="margin-top: 2px" class="font-weight-bold">Pertanyaan</h5>
                                    </div>
                                    <div class="Pertanyaan">
                                        <p style="text-align: justify;">Peri tersebut menolong sarah karena?...</P>
                                    </div>
                                    <div class="jawaban" style="margin-left: 10px">
                                        <template v-for="options in option">
                                            <div class="d-flex" style="gap: 10px;">
                                                <input style="width: 4%" type="checkbox">
                                                <label style="width: 4%l; font-weight: bold;">{{options.option_name}}</label>
                                                <p style="width: 89%">{{options.question}}</p>
                                            </div>
                                        </template>
                                    </div>
                                </template>
                            <!-- SOAL TIPE PILIHAN GANDA KOMPLEKS-->

                            <!-- SOAL TIPE MENJODOHKAN -->
                                <template v-if="soalKe == 4">
                                    <div class="d-flex justify-content-between mt-2" style="margin-bottom: -15px">
                                        <h5>Soal No : {{soalKe}}</h5>
                                        <label style="font-weight: bold">Menjodohkan</label>
                                    </div>
                                    <hr>
                                    <div class="d-flex" style="gap: 10px; padding: 0px 0px 0px 0px">
                                        <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                        <h5 style="margin-top: 2px" class="font-weight-bold">Pernyataan</h5>
                                    </div>
                                    <div class="pernyataan">
                                        <p style="text-align: justify;">Pasangkanlah pertanyaan tersebut dengan jawaban yang benar!</P>
                                    </div>
                                    <div style="margin-left: 15px">
                                        <div class="card mb-2">
                                            <div class="card-body">
                                                <h5>Pertanyaan ke 1</h5>
                                                <p>Jumlah ruas tulang manusia adalah</p>
                                                <select style="margin-top: -10px">
                                                    <option value="0">A. 30 Ruas</option>
                                                    <option value="0">B. 31 Ruas</option>
                                                    <option value="0">C. 32 Ruas</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-body">
                                                <h5>Pertanyaan ke 2</h5>
                                                <p>Teks yang sering ditemukan di dalam surat kabar. Jenis iklan apakah itu?</p>
                                                <select style="margin-top: -10px">
                                                    <option value="0">A. Iklan Baris</option>
                                                    <option value="0">B. Iklan Kolom</option>
                                                    <option value="0">C. Brosur</option>
                                                    <option value="0">D. Billboard</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            <!-- SOAL TIPE MENJODOHKAN -->

                            <!-- SOAL TIPE ISIAN SINGKAT -->
                                <template v-if="soalKe == 5">
                                    <div class="d-flex justify-content-between mt-2" style="margin-bottom: -15px">
                                        <h5>Soal No : {{soalKe}}</h5>
                                        <label style="font-weight: bold">Isian Singkat</label>
                                    </div>
                                    <hr>
                                    <div class="d-flex" style="gap: 10px; padding: 0px 0px 0px 0px">
                                        <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                        <h5 style="margin-top: 2px" class="font-weight-bold">Pernyataan</h5>
                                    </div>
                                    <div class="pernyataan">
                                        <p style="text-align: justify;">Malin Kundang sudah kaya raya. Ia memiliki istri yang cantik, putri seorang saudagar kaya. Pada saat pesiar dan menyinggahi kampung halamannya, ia tidak mau mengakui ibu kandungnya. Ia merasa malu terhadap istrinya karena ternyata ibunya tidak lebih dari seorang yang tua renta yang berpakaian compang-camping.</P>
                                    </div>
                                    <div class="d-flex" style="gap: 10px; padding: 0px 0px 0px 0px">
                                        <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                        <h5 style="margin-top: 2px" class="font-weight-bold">Pertanyaan</h5>
                                    </div>
                                    <div class="Pertanyaan">
                                        <p style="text-align: justify;">Sebuah motor masuk ke dalam area parkir Stasiun Jakarta Kota pada pukul 09.50 dan keluar pada pukul 18:00. Berapa kembalian yang akan diterima bila ia membayar dengan selembar uang Rp50.000,00?..</P>
                                    </div>
                                    <div style="margin-left: 15px">
                                        <textarea rows="3" placeholder="Masukan jawaban"></textarea>
                                    </div>
                                </template>
                            <!-- SOAL TIPE ISIAN SINGKAT -->

                            <!-- SOAL TIPE TRUE FALSE -->
                                <template v-if="soalKe == 6">
                                    <div class="d-flex justify-content-between mt-2" style="margin-bottom: -15px">
                                        <h5>Soal No : {{soalKe}}</h5>
                                        <label style="font-weight: bold">True False</label>
                                    </div>
                                    <hr>
                                    <div class="d-flex" style="gap: 10px; padding: 0px 0px 0px 0px">
                                        <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                        <h5 style="margin-top: 2px" class="font-weight-bold">Pernyataan</h5>
                                    </div>
                                    <div class="pernyataan">
                                        <p style="text-align: justify;">Sebuah kota di Jawa Barat memiliki populasi sebanyak 100.000 di Januari 2015. Peningkatan jumlah penduduk mencapai 5% per tahun. Pemerintah kota berencana akan membangun sebuah sekolah yang baru, jika jumlah penduduk minimal 120.000. Tentukan Benar atau Salah pernyatan berikut!</P>
                                    </div>
                                    <div style="margin-left: 15px">
                                        <div class="card mb-2">
                                            <div class="card-body">
                                                <div class="d-flex" style="gap: 10px; padding: 0px 0px 0px 0px">
                                                    <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                                    <h5 style="margin-top: 2px" class="font-weight-bold">Pertanyaan ke 1</h5>
                                                </div>
                                                <p>Di awal tahun 2019, setelah wabah virus tahun sebelumnya yang berhasil dihentikan (laju pertumbuhan tahun 2018 sebesar 3%), pertumbuhan penduduk kembali normal seperti awal yaitu 5%. Jadi pembangunan Sekolah baru dapat dimulai Januari 2020.</p>
                                                <div class="d-flex pl-3" style="gap: 15px">
                                                    <input type="radio">
                                                    <label>True</label>
                                                </div>
                                                <div class="d-flex" style="gap: 15px">
                                                    <input type="radio">
                                                    <label>False</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="d-flex" style="gap: 10px; padding: 0px 0px 0px 0px">
                                                    <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                                    <h5 style="margin-top: 2px" class="font-weight-bold">Pernyataan Ke 2</h5>
                                                </div>
                                                <p>Di awal tahun 2018, terjadi wabah virus yang menyebabkan laju pertumbuhan penduduk hanya 3% per tahun, maka Sekolah baru akan dibangun di Januari 2021.</p>
                                                <div class="d-flex pl-3" style="gap: 15px">
                                                    <input type="radio">
                                                    <label>True</label>
                                                </div>
                                                <div class="d-flex" style="gap: 15px">
                                                    <input type="radio">
                                                    <label>False</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            <!-- SOAL TIPE TRUE FALSE -->

                            <!-- TIPE LAIN LAIN -->
                                <!-- <template v-else>
                                    <div class="d-flex justify-content-between mt-2" style="margin-bottom: -15px">
                                        <h5>Soal No : {{soalKe}}</h5>
                                        <label style="font-weight: bold">Tipe Soal</label>
                                    </div>
                                    <hr>
                                    <div class="d-flex" style="gap: 10px; padding: 0px 0px 0px 0px">
                                        <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                        <h5 style="margin-top: 2px" class="font-weight-bold">Pernyataan</h5>
                                    </div>
                                    <div class="pernyataan">
                                        <p style="text-align: justify;">Berisi Pernyataan</P>
                                    </div>
                                    <div style="margin-left: 15px">
                                        <div class="card mb-2">
                                            <div class="card-body">
                                                <div class="d-flex" style="gap: 10px; padding: 0px 0px 0px 0px">
                                                    <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                                    <h5 style="margin-top: 2px" class="font-weight-bold">Pertanyaan ke 1</h5>
                                                </div>
                                                <p>Di awal tahun 2019, setelah wabah virus tahun sebelumnya yang berhasil dihentikan (laju pertumbuhan tahun 2018 sebesar 3%), pertumbuhan penduduk kembali normal seperti awal yaitu 5%. Jadi pembangunan Sekolah baru dapat dimulai Januari 2020.</p>
                                                <div class="d-flex pl-3" style="gap: 15px">
                                                    <input type="radio">
                                                    <label>True</label>
                                                </div>
                                                <div class="d-flex" style="gap: 15px">
                                                    <input type="radio">
                                                    <label>False</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="d-flex" style="gap: 10px; padding: 0px 0px 0px 0px">
                                                    <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                                    <h5 style="margin-top: 2px" class="font-weight-bold">Pernyataan Ke 2</h5>
                                                </div>
                                                <p>Di awal tahun 2018, terjadi wabah virus yang menyebabkan laju pertumbuhan penduduk hanya 3% per tahun, maka Sekolah baru akan dibangun di Januari 2021.</p>
                                                <div class="d-flex pl-3" style="gap: 15px">
                                                    <input type="radio">
                                                    <label>True</label>
                                                </div>
                                                <div class="d-flex" style="gap: 15px">
                                                    <input type="radio">
                                                    <label>False</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template> -->
                            <!-- TIPE LAIN LAIN -->

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
                        </div>
                    </div>
                    <div class="exam2 card shadow border-0 " style="width: 30%; height: 400px; overflow: auto; flex-grow: 1; flex-basis: 29%">
                        <div class="card-body">
                            <h5 class="mt-2" style="margin-bottom: -7px">Jawaban</h5>
                            <hr>
                            <div class="number">
                                <template v-for="num in number">
                                    <template v-if="num.value == 'Y'">
                                        <div class="icon-excel text-white" style="width: 16.7%;" @click="Jawaban(num.number_soal)">
                                            <h5 style="margin-top:15px">{{num.number_soal}}</h5>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <div class="icon text-white" style="width: 16.7%;" @click="Jawaban(num.number_soal)">
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
                ],
                soalKe: 1
            }
        },
        methods: {
            Jawaban(index){
                this.soalKe = index;
            }
        }
    }

</script>
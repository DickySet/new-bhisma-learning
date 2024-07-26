<template>
    
    <div class="card border-0">
        <div class="card-body">
            <div class="padding-content">
                <Title :title="title" :subTitle="subTitle" />
            </div>
        </div>
    </div>

    <div class="card border-0 mt-2">
        <div class="card-header">
            <div class="padding-content">
                <nav style="margin-bottom: -10px">
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" style="font-size: 13.5pt" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text-fill" viewBox="0 0 16 16">
                                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"/>
                            </svg>
                            Konfigurasi Data Ujian
                        </button>
                        <button class="nav-link" style="font-size: 13.5pt" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                            </svg>
                            Data Pertanyaan Ujian
                        </button>
                    </div>
                </nav>
            </div>
        </div>
        <div class="card-body">
            <div class="padding-content">
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                        <div class="jarak">
                            <h5>Konfigurasi Data Ujian</h5>
                            <p>Silahkan isi konfigurasi data soal ujian dengan teliti</p>
                        </div>

                        <div class="form-format">
                            <div class="form-kiri">
                                <div class='format'>
                                    <label>Jenjang Sekolah</label>
                                    <select>
                                        <option value="0">Pilih Jenjang</option>
                                    </select>
                                </div>
                                <div class='format'>
                                    <label>Guru</label>
                                    <select>
                                        <option value="0">Pilih Guru</option>
                                    </select>
                                </div>
                                <div class="d-flex" style="gap: 15px; width: 100%;">
                                    <div class='format'>
                                        <label>Jenis Penilaian</label>
                                        <select>
                                        <option value="0">Pilih Jenis Penilaian</option>
                                    </select>
                                    </div>
                                    <div class='format'>
                                        <label>Jenis Ujian</label>
                                        <select>
                                        <option value="0">Pilih Jenis Ujian</option>
                                    </select>
                                    </div>
                                </div>
                                <div class='format'>
                                    <label>Nama Ujian</label>
                                    <input placeholder="Masukan nama ujian">
                                </div>
                                <div class="d-flex" style="gap: 15px; width: 100%;">
                                    <div class='format'>
                                        <label>Acak soal ujian</label>
                                        <select>
                                            <option value="0">Ya</option>
                                        </select>
                                    </div>
                                    <div class='format'>
                                        <label>Jenis Pertanyaan Yang Diacak</label>
                                        <select>
                                            <option value="0">Semua [Acak]</option>
                                        </select>
                                    </div>
                                </div>
                                <div class='format'>
                                    <label>Batas Waktu Keterlambatan</label>
                                    <input type="number" placeholder="Batas waktu keterlambatan">
                                </div>
                            </div>

                            <div class="form-kanan">
                                <div class='format'>
                                    <label>Tingkat Kelas</label>
                                    <select>
                                        <option value="0">Pilih Tingkat kelas</option>
                                    </select>
                                </div>
                                <div class='format'>
                                    <label>Mata Pelajaran</label>
                                    <select>
                                        <option value="0">Pilih Meta Pelajaran</option>
                                    </select>
                                </div>
                                <div class='format'>
                                    <div class="d-flex" style="gap: 5px" >
                                        <label>Data Kompetensi Dasar</label>
                                        <svg v-popover="'Informasi, Jika data Kompetensi Dasar belum ada silahkan masuk menu kelola mata pelajaran lalu pilih Kompetensi Dasar'" xmlns="http://www.w3.org/2000/svg" style="color: #00387F; cursor: pointer; margin-bottom: 3px" width="18" height="18" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                                        </svg>
                                    </div>
                                    <select>
                                        <option value="0">Pilih Kompetensi Dasar</option>
                                    </select>
                                </div>
                                <div class='format'>
                                    <label>Waktu Pengerjaan</label>
                                    <input type="number" placeholder="Masukan waktu pengerjaan">
                                </div>
                                <div class="d-flex" style="gap: 15px; width: 100%;">
                                    <div class='format'>
                                        <div class="d-flex" style="gap: 5px" >
                                            <label>Blok Ujian Siswa</label>
                                            <svg v-popover="'Blok Ujian Siswa, Jika Siswa Keluar Halaman Pada Saat Ujian'" xmlns="http://www.w3.org/2000/svg" style="color: #00387F; cursor: pointer; margin-bottom: 3px" width="18" height="18" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                                            </svg>
                                        </div>
                                        <select>
                                            <option value="0">Ya</option>
                                        </select>
                                    </div>
                                    <div class='format'>
                                        <div class="d-flex" style="gap: 5px" >
                                            <label>Jendela Mengambang</label>
                                            <svg v-popover="'Jendela Mengambang, Blok Ujian Siswa Jika Siswa Membuka Fitur Jendela Mengambang Pada Saat Ujian'" xmlns="http://www.w3.org/2000/svg" style="color: #00387F; cursor: pointer; margin-bottom: 3px" width="18" height="18" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                                            </svg>
                                        </div>
                                        <select>
                                            <option value="0">Tidak</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div class="jarak">
                            <h5>Kelas</h5>
                            <p>Pilih satu atau beberapa kelas untuk ujian tersebut</p>
                        </div>

                        <div class="d-flex justify-content-between" style="margin-top:-10px">
                            <div class="d-flex text-align-center" style="gap: 10px">
                                <input type="radio">
                                <label style="margin-top: 5px">Pilih Per Kelas</label>
                            </div>

                            <div class="d-flex text-align-center" style="gap: 10px">
                                <input type="radio">
                                <label style="margin-top: 5px">Pilih Semua Subkelas Per Tingkat Kelas</label>
                            </div>
                        </div>

                        <div class="icon-tambah mt-3" v-popover="'Tambah Kelas'">
                            <svg xmlns="http://www.w3.org/2000/svg" style="color: white; font-weight: bold;" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                            </svg>
                        </div>
                        <div class="table mt-2">
                            <table style="width: 100%">
                                <thead>
                                    <tr>
                                        <th>Kelas</th>
                                        <th>Tanggal</th>
                                        <th>Jam Awal</th>
                                        <th>Jam Akhir</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <select>
                                                <option value="0">Pilih Kelas</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input type="date"> 
                                        </td>
                                        <td>
                                            <input type="time"> 
                                        </td>
                                        <td>
                                            <input type="time"> 
                                        </td>
                                        <td>
                                            <svg v-popover="'Delete Data'" xmlns="http://www.w3.org/2000/svg" style="color: red" width="18" height="18" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                            </svg>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="jarak">
                                <h5>Data Pertanyaan Ujian</h5>
                                <p>Silahkan membuat soal ujian dengan baik</p>
                            </div>
                            <div class="d-flex" style="gap: 10px">
                                <div class="icon" v-popover="'Hapus File Yang Diimport'">
                                    <svg style="color: white" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                    </svg>
                                </div>
                                <div class="icon-pdf" v-popover="'Download Data Ujian Sementara'">
                                    <svg  xmlns="http://www.w3.org/2000/svg" style="color: white" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16">
                                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0"/>
                                    </svg>
                                </div>
                                <div class="icon-excel" v-popover="'Import dan Referensi Soal Ujian'" data-bs-toggle="modal" data-bs-target="#importSoal">
                                    <svg xmlns="http://www.w3.org/2000/svg" style="color: white" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-arrow-up-fill" viewBox="0 0 16 16">
                                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M6.354 9.854a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 8.707V12.5a.5.5 0 0 1-1 0V8.707z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="d-flex" style="gap: 15px">
                            <div class="card shadow border-0" style="width: 70%; height: auto">
                                <div class="card-header">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h5 style=" margin-top: 5px; margin-bottom: -3px">Daftar Isi Soal</h5>
                                        <svg v-popover="'Hapus Semua Soal'" width="18" height="18" xmlns="http://www.w3.org/2000/svg" style="cursor: pointer;color: red; margin-top: 10px" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                        </svg>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex" style="gap: 10px">
                                        <div style="width: 4%; margin-left: 10px; margin-top: 8px">
                                            <h5>1.</h5>
                                        </div>
                                        <div style="width: 92%">
                                            <div class="d-flex justify-content-between" style="gap: 20px">
                                                <div class='format mb-2'>
                                                    <!-- <label>Jenis Pertanyaan</label> -->
                                                    <select v-model="chooseVersion" @click="chooseJenisPertanyaan()">
                                                        <option value="0">Pilih Jenis Pertanyaan</option>
                                                        <option value="1">Pilihan Ganda</option>
                                                        <option value="2">Essay</option>
                                                        <option value="3">Pilihan Ganda Kompleks</option>
                                                        <option value="4">Menjodohkan</option>
                                                        <option value="5">Isian Singkat</option>
                                                        <option value="6">True / False</option>
                                                    </select>
                                                </div>
                                                <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" style="color: red; margin-top: 10px" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                                </svg>
                                            </div>
                                            
                                            <div class="d-flex" style="gap: 10px; padding: 6px 0px 0px 0px">
                                                <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                                <h5 style="margin-top: 2px" class="font-weight-bold">Pernyataan</h5>
                                            </div>

                                            <textarea rows="4" placeholder="Masukan Pernyataan"></textarea>

                                            <!-- SOAL PILIHAN GANDA -->
                                                <template v-if="chooseVersion == 1">
                                                
                                                    <div class="d-flex" style="gap: 10px; padding: 6px 0px 0px 0px">
                                                        <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                                        <h5 style="margin-top: 2px" class="font-weight-bold">Pertanyaan</h5>
                                                    </div>

                                                    <textarea rows="4" placeholder="Masukan Soal"></textarea>

                                                    <div class="d-flex mb-2">
                                                        <div style="width: 8%;margin-top: 8px">
                                                        </div>
                                                        <div style="width: 92%">
                                                            <div class="d-flex justify-content-between" style="gap: 20px;">
                                                                <div class="d-flex" style="gap: 10px; padding: 6px 0px 0px 0px">
                                                                    <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                                                    <h5 style="margin-top: 2px" class="font-weight-bold">Tambah Jawaban</h5>
                                                                </div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" style="color: #00387F; margin-top: 8px" width="18" height="18" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <template v-for="options in option">
                                                        <div class="d-flex">
                                                            <div style="width: 8%;">
                                                                <h5>{{options.option_name}}.</h5>
                                                            </div>
                                                            <div style="width: 92%">
                                                                <div class="d-flex justify-content-between mb-3" style="gap: 20px;">
                                                                    <!-- <h5 style="">Jawaban</h5> -->
                                                                    <textarea rows="2" placeholder="Masukan Jawaban"></textarea>
                                                                    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" style="color: red;" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </template>
                                                    
                                                    
                                                </template>
                                            <!-- SOAL PILIHAN GANDA -->

                                            <!-- SOAL ESSAY -->
                                                <template v-if="chooseVersion == 2">
                                                
                                                    <div class="d-flex" style="gap: 10px; padding: 6px 0px 0px 0px">
                                                        <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                                        <h5 style="margin-top: 2px" class="font-weight-bold">Pertanyaan</h5>
                                                    </div>

                                                    <textarea rows="4" placeholder="Masukan Soal"></textarea>

                                                </template>
                                            <!-- SOAL ESSAY -->

                                            <!-- SOAL PILIHAN GANDA KOMPLEKS -->
                                                <template v-if="chooseVersion == 3">
                                                
                                                    <div class="d-flex" style="gap: 10px; padding: 6px 0px 0px 0px">
                                                        <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                                        <h5 style="margin-top: 2px" class="font-weight-bold">Pertanyaan</h5>
                                                    </div>

                                                    <textarea rows="4" placeholder="Masukan Soal"></textarea>

                                                    <div class="d-flex mb-2">
                                                        <div style="width: 8%;margin-top: 8px">
                                                        </div>
                                                        <div style="width: 92%">
                                                            <div class="d-flex justify-content-between" style="gap: 20px;">
                                                                <div class="d-flex" style="gap: 10px; padding: 6px 0px 0px 0px">
                                                                    <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                                                    <h5 style="margin-top: 2px" class="font-weight-bold">Tambah Jawaban</h5>
                                                                </div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" style="color: #00387F; margin-top: 8px" width="18" height="18" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <template v-for="options in option">
                                                        <div class="d-flex">
                                                            <div style="width: 8%;margin-top: 8px">
                                                                <h5>{{options.option_name}}.</h5>
                                                            </div>
                                                            <div style="width: 92%">
                                                                <div class="d-flex justify-content-between mb-3" style="gap: 20px;">
                                                                    <textarea rows="2" placeholder="Masukan Jawaban"></textarea>
                                                                    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" style="color: red; margin-top: 8px" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </template>
                                                    
                                                    
                                                </template>
                                            <!-- SOAL PILIHAN GANDA KOMPLEKS-->

                                            <!-- SOAL MENJODOHKAN -->
                                                <template v-if="chooseVersion == 4">
                                                
                                                    <div class="d-flex" style="gap: 30px">
                                                        <div style="width: 50%">
                                                            <div class="d-flex justify-content-between" style="gap: 20px;">
                                                                <div class="d-flex" style="gap: 10px; padding: 6px 0px 0px 0px">
                                                                    <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                                                    <h5 style="margin-top: 2px" class="font-weight-bold">Daftar Pernyataan</h5>
                                                                </div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" style="color: #00387F; margin-top: 8px" width="18" height="18" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                                                </svg>
                                                            </div>
                                                            <div class="card">
                                                                <div class="card-header">
                                                                    <div class="d-flex justify-content-between">
                                                                        <label style=" margin-top: 5px; margin-bottom: -10px">Pertanyaan Ke - 1</label>
                                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" style="color: red; margin-top: 8px" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body">
                                                                    <textarea rows="3" placeholder="Masukan Pertanyaan"></textarea>
                                                                    <div class="d-flex justify-content-between align-items-center">
                                                                        <label>Kunci Jawaban</label>
                                                                        <select style="width: 20%; text-align: center">
                                                                            <option value="0">A</option>
                                                                            <option value="1">B</option>
                                                                            <option value="2">C</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div style="width: 50%;">

                                                            <div class="d-flex justify-content-between" style="gap: 20px;">
                                                                <div class="d-flex" style="gap: 10px; padding: 6px 0px 0px 0px">
                                                                    <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                                                    <h5 style="margin-top: 2px" class="font-weight-bold">Daftar Opsi Jawaban</h5>
                                                                </div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" style="color: #00387F; margin-top: 8px" width="18" height="18" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                                                </svg>
                                                            </div>
                                                            <div class="card mb-2">
                                                                <div class="card-header">
                                                                    <div class="d-flex justify-content-between">
                                                                        <label style=" margin-top: 5px; margin-bottom: -10px">Jawaban Ke - A</label>
                                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" style="color: red; margin-top: 8px" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body">
                                                                    <input rows="2" placeholder="Masukan Jawaban">
                                                                </div>
                                                            </div>
                                                            <div class="card">
                                                                <div class="card-header">
                                                                    <div class="d-flex justify-content-between">
                                                                        <label style=" margin-top: 5px; margin-bottom: -10px">Jawaban Ke - B</label>
                                                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" style="color: red; margin-top: 8px" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body">
                                                                    <input rows="2" placeholder="Masukan Jawaban">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </template>
                                            <!-- SOAL MENJODOHKAN -->

                                            <!-- SOAL ISIAN SINGKAT -->
                                                <template v-if="chooseVersion == 5">
                                                    <div class="d-flex" style="gap: 10px; padding: 6px 0px 0px 0px">
                                                        <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                                        <h5 style="margin-top: 2px" class="font-weight-bold">Pertanyaan</h5>
                                                    </div>

                                                    <textarea rows="4" placeholder="Masukan Soal"></textarea>
                                                    <div class="d-flex justify-content-between" style="gap: 20px;">
                                                        <div class="d-flex" style="gap: 10px; padding: 6px 0px 0px 0px">
                                                            <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                                            <h5 style="margin-top: 2px" class="font-weight-bold">Daftar Peluang Jawaban</h5>
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" style="color: #00387F; margin-top: 8px" width="18" height="18" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                                        </svg>
                                                    </div>
                                                    <div class="card ">
                                                        <div class="card-header">
                                                            <div class="d-flex justify-content-between">
                                                                <label style=" margin-top: 5px; margin-bottom: -10px">Jawaban Ke - 1</label>
                                                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" style="color: red; margin-top: 8px" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="card-body">
                                                            <input placeholder="Masukan Jawaban">
                                                        </div>
                                                    </div>

                                                </template>
                                            <!-- SOAL ISIAN SINGKAT -->

                                            <!-- SOAL TRUE FALSE -->
                                                <template v-if="chooseVersion == 6">
                                                
                                                    <div class="d-flex justify-content-between" style="gap: 20px;">
                                                        <div class="d-flex" style="gap: 10px; padding: 6px 0px 0px 0px">
                                                            <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); width: 20px; height: 20px; border-radius: 50%; "></div>
                                                            <h5 style="margin-top: 2px" class="font-weight-bold">Daftar Pertanyaan</h5>
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" style="color: #00387F; margin-top: 8px" width="18" height="18" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                                        </svg>
                                                    </div>
                                                    <div class="card ">
                                                        <div class="card-header">
                                                            <div class="d-flex justify-content-between">
                                                                <label style=" margin-top: 5px; margin-bottom: -10px">Pertanyaan Ke - 1</label>
                                                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" style="color: red; margin-top: 8px" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="card-body">
                                                            <textarea rows="3" placeholder="Masukan Pertanyaan"></textarea>
                                                            <div class="d-flex" style="gap:120px">
                                                                <label>Pilihan Jawaban</label>
                                                                <div>
                                                                    <div>
                                                                        <input type="radio">
                                                                        <label style="margin-left: 10px">True</label>
                                                                    </div>
                                                                    <div>
                                                                        <input type="radio">
                                                                        <label style="margin-left: 10px">False</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </template>
                                            <!-- SOAL TRUE FALSE -->
                                            
                                        </div>
                                    </div>

                                    <!-- KUNCI JAWABAN PILIHAN GANDA -->
                                        <template v-if="chooseVersion == 1">
                                            <div class="text-center mt-4">
                                                <h5>Kunci Jawaban</h5>
                                                <div class="d-flex justify-content-center" style="gap: 30px">
                                                    <template v-for="options in option">
                                                        <div class="d-flex" style="gap: 15px">
                                                            <input type="radio">
                                                            <label style="margin-top: 8px"><b>{{options.option_name}}.</b></label>
                                                        </div>
                                                    </template>
                                                </div>
                                            </div>
                                        </template>
                                    <!-- KUNCI JAWABAN PILIHAN GANDA -->

                                    <!-- KUNCI JAWABAN PILIHAN GANDA KOMPLEKS -->
                                        <template v-if="chooseVersion == 3">
                                            <div class="text-center mt-4">
                                                <h5>Kunci Jawaban</h5>
                                                <div class="d-flex justify-content-center" style="gap: 30px">
                                                    <template v-for="options in option">
                                                        <div class="d-flex" style="gap: 15px">
                                                            <input type="checkbox">
                                                            <label style="margin-top: 8px"><b>{{options.option_name}}.</b></label>
                                                        </div>
                                                    </template>
                                                </div>
                                            </div>
                                        </template>
                                    <!-- KUNCI JAWABAN PILIHAN GANDA KOMPLEKS -->
                                </div>
                                <div class="card-footer">
                                    <div class="d-flex justify-content-between">
                                        <div class="icon-pdf">
                                            <svg xmlns="http://www.w3.org/2000/svg" style="color: white" width="18" height="18" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                            </svg>
                                        </div>
                                        <div class="d-flex justify-content-center" style="gap: 20px">
                                            <button class="button-tutup">Kembali</button>
                                            <button class="button-tambah">Selanjutnya</button>
                                        </div>
                                        <div class="icon-pdf">
                                            <h1 style="color: white; margin-top:20px">+</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card sticky-top shadow border-0" style="width: 30%; max-height: 330px; overflow: auto; cursor: pointer; z-index:0">
                                <div class="card-header">
                                    <h5 style=" margin-top: 5px; margin-bottom: -3px">Daftar Nomor Soal</h5>
                                </div>
                                <div class="card-body">

                                        <div class="d-flex flex-wrap" style="gap: 10px 10px">
                                            <template v-for="num in number">
                                                <div class="icon text-white" style="width: 16.7%;">
                                                    <h5 style="margin-top:15px">{{num.number_soal}}</h5>
                                                </div>
                                            </template>
                                        </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="d-flex justify-content-end mt-4 mb-2">
                    <button class="button-simpan">Simpan Soal Ujian</button>
                </div>
            </div>
        </div>
        
    </div>

    <div class="modal fade" id="importSoal">
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Import dan Referensi Soal</h5>
                    <button type="button" class="btn-sm btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card shadow border-0">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="title pt-2">
                                    <h5 style="margin-bottom: -2px">Referensi Soal</h5>
                                    <p>Terdapat beberapa referensi soal yang bisa digunakan, baik dari sekolah maupun dari BLS</p>
                                </div>
                                <div class="d-flex" style="gap: 10px" data-bs-toggle="modal" data-bs-target="#modalReferensiSekolah">
                                    <div class="icon-excel" v-popover="'Referensi Soal Sekolah'">
                                        <svg xmlns="http://www.w3.org/2000/svg" style="color: white" width="18" height="18" fill="currentColor" class="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
                                            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708"/>
                                        </svg>
                                    </div>
                                    <div class="icon-pdf" v-popover="'Referensi Soal BLS'">
                                        <svg xmlns="http://www.w3.org/2000/svg" style="color: white" width="18" height="18" fill="currentColor" class="bi bi-cloud-download-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 0 1 1 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0m-.354 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 0 0-.708.708z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow border-0 mt-3">
                        <div class="card-body">
                            <div class="title pt-2">
                                <h5 style="margin-bottom: -2px">Import Soal Ujian</h5>
                                <p>Digunakan untuk mengimport soal dari file Microsoft Word dan Microsoft Excel</p>
                            </div>

                            <div class="d-flex mt-3" style="gap: 20px">
                                <div style="width: 50%">
                                    <div class="d-flex justify-content-between" style="gap: 10px">
                                        <div class="format" style="width: 84%">
                                            <label style="font-weight: bold">Pilih Jenis File Import</label>
                                            <select>
                                                <option value="0">Pilih Jenis File</option>
                                                <option value="1">Microsoft Word Versi 1</option>
                                                <option value="2">Microsoft Word Versi 2</option>
                                                <option value="3">Microsoft Word Versi 3</option>
                                                <option value="4">Microsoft Excel Versi 1</option>
                                                <option value="5">Microsoft Excel Versi 2</option>
                                            </select>
                                        </div>
                                        <div style="margin-top: 28px">
                                            <div class="icon-pdf" v-popover="'Import Soal Dibawah'">
                                                <svg xmlns="http://www.w3.org/2000/svg" style="color: white" width="20" height="20" fill="currentColor" class="bi bi-building-gear" viewBox="0 0 16 16">
                                                    <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1z"/>
                                                    <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.386 1.46c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div for="images" class="drop-container" id="dropcontainer">
                                        <label class="drop-title">Drop files here</label>
                                        or
                                        <input type="file" id="images" accept="image/*" required>
                                    </div>
                                </div>
                                <div style="width: 50%">
                                    <div class="title">
                                        <div class="d-flex mb-0" style="gap: 20px">
                                            <label style="font-weight: bold">Unduh Format Soal ujian</label>
                                            <svg v-popover="'Informasi, Sebelum mengimpor File, pastikan berkas excel atau word Anda sudah sesuai formatnya agar data dapat diproses oleh sistem.'" xmlns="http://www.w3.org/2000/svg" style="color: #00387F; cursor: pointer; margin-bottom: 3px" width="18" height="18" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                                            </svg>
                                        </div>

                                        <!-- WORD -->
                                            <div class="d-flex justify-content-between align-items-center mb-1" data-bs-toggle="collapse" data-bs-target="#word" aria-expanded="false" aria-control="word">
                                                <div class="d-flex align-items-center" style="gap: 10px">
                                                    <div class="icon-tambah">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style="color:white" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-word-fill" viewBox="0 0 16 16">
                                                            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M5.485 6.879l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 9.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 1 1 .97-.242z"/>
                                                        </svg>
                                                    </div>
                                                    <label style="margin-top:5px"><b>Microsoft Word</b></label>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                                </svg>
                                            </div>
                                            <div style="border: 1px solid black"></div>

                                            <div class="collapse mt-1" id="word">
                                                <div class="d-flex justify-content-between align-items-center mb-1" data-bs-toggle="collapse" data-bs-target="#word" aria-expanded="false" aria-control="word">
                                                    <div class="d-flex align-items-center" style="gap: 10px">
                                                        <div class="icon-tambah">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style="color:white" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-word-fill" viewBox="0 0 16 16">
                                                                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M5.485 6.879l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 9.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 1 1 .97-.242z"/>
                                                            </svg>
                                                        </div>
                                                        <label style="margin-top:5px">Microsoft Word Versi 1</label>
                                                    </div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" style="color:#00387F" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                                    </svg>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-center mb-1" data-bs-toggle="collapse" data-bs-target="#word" aria-expanded="false" aria-control="word">
                                                    <div class="d-flex align-items-center" style="gap: 10px">
                                                        <div class="icon-tambah">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style="color:white" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-word-fill" viewBox="0 0 16 16">
                                                                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M5.485 6.879l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 9.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 1 1 .97-.242z"/>
                                                            </svg>
                                                        </div>
                                                        <label style="margin-top:5px">Microsoft Word Versi 2</label>
                                                    </div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" style="color:#00387F" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                                    </svg>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-center mb-1" data-bs-toggle="collapse" data-bs-target="#word" aria-expanded="false" aria-control="word">
                                                    <div class="d-flex align-items-center" style="gap: 10px">
                                                        <div class="icon-tambah">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style="color:white" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-word-fill" viewBox="0 0 16 16">
                                                                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M5.485 6.879l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 9.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 1 1 .97-.242z"/>
                                                            </svg>
                                                        </div>
                                                        <label style="margin-top:5px">Microsoft Word Versi 3</label>
                                                    </div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" style="color:#00387F" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        <!-- WORD -->

                                        <!-- EXCEL -->
                                            <div class="d-flex justify-content-between align-items-center mt-3 mb-1" data-bs-toggle="collapse" data-bs-target="#excel" aria-expanded="false" aria-control="excel">
                                                <div class="d-flex align-items-center" style="gap: 10px">
                                                    <div class="icon-excel">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style="color: white" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-spreadsheet-fill" viewBox="0 0 16 16">
                                                            <path d="M6 12v-2h3v2z"/>
                                                            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M3 9h10v1h-3v2h3v1h-3v2H9v-2H6v2H5v-2H3v-1h2v-2H3z"/>
                                                        </svg>
                                                    </div>
                                                    <label style="margin-top:5px"><b>Microsoft Excel</b></label>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                                </svg>
                                            </div>
                                            <div style="border: 1px solid black"></div>

                                            <div class="collapse mt-1" id="excel">
                                                <div class="d-flex justify-content-between align-items-center mb-1" data-bs-toggle="collapse" data-bs-target="#word" aria-expanded="false" aria-control="word">
                                                    <div class="d-flex align-items-center" style="gap: 10px">
                                                        <div class="icon-excel">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style="color: white" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-spreadsheet-fill" viewBox="0 0 16 16">
                                                                <path d="M6 12v-2h3v2z"/>
                                                                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M3 9h10v1h-3v2h3v1h-3v2H9v-2H6v2H5v-2H3v-1h2v-2H3z"/>
                                                            </svg>
                                                        </div>
                                                        <label style="margin-top:5px">Microsoft Excel Versi 1</label>
                                                    </div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" style="color:#00387F" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                                    </svg>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-center mb-1" data-bs-toggle="collapse" data-bs-target="#word" aria-expanded="false" aria-control="word">
                                                    <div class="d-flex align-items-center" style="gap: 10px">
                                                        <div class="icon-excel">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style="color: white" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-spreadsheet-fill" viewBox="0 0 16 16">
                                                                <path d="M6 12v-2h3v2z"/>
                                                                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M3 9h10v1h-3v2h3v1h-3v2H9v-2H6v2H5v-2H3v-1h2v-2H3z"/>
                                                            </svg>
                                                        </div>
                                                        <label style="margin-top:5px">Microsoft Excel Versi 2</label>
                                                    </div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" style="color:#00387F" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        <!-- EXCEL -->

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalReferensiSekolah">
        <div class="modal-dialog modal-xl modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Referensi Soal Sekolah dan BLS</h5>
                    <button type="button" class="btn-sm btn-close" data-bs-toggle="modal" data-bs-target="#importSoal"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex" style="gap: 20px">
                        <div class="card shadow border-0" style="width: 35%">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center">
                                    
                                    <div class="card" style="width: 100%">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center" style="margin-top: 4px; margin-bottom: -7px" data-bs-toggle="collapse" data-bs-target="#settings">
                                                <h5>Settings</h5>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                                </svg>
                                            </div>

                                            <div class="collapse mt-3" id="settings">
                                                <div class="d-flex" style="gap: 10px">
                                                    <div class="format">
                                                        <label>Tipe Ujian</label>
                                                        <select>
                                                            <option value="0">Pilih Tipe Ujian</option>
                                                        </select>
                                                    </div>
                                                    <div class="format">
                                                        <label>Jenjang Sekolah</label>
                                                        <select>
                                                            <option value="0">Pilih Jenjang</option>
                                                        </select>
                                                    </div>
                                                </div> 
                                                <div class="d-flex" style="gap: 10px">
                                                    <div class="format">
                                                        <label>Tingkat Kelas</label>
                                                        <select>
                                                            <option value="0">Pilih Tingkat Kelas</option>
                                                        </select>
                                                    </div>
                                                    <div class="format">
                                                        <label>Mata Pelajaran</label>
                                                        <select>
                                                            <option value="0">Pilih Mata Pelajaran</option>
                                                        </select>
                                                    </div>
                                                </div> 
                                                <div class="d-flex" style="gap: 10px">
                                                    <div class="format">
                                                        <label>Kurikulum</label>
                                                        <select>
                                                            <option value="0">Pilih Kurikulum</option>
                                                        </select>
                                                    </div>
                                                    <div class="format">
                                                        <label>Tanggal</label>
                                                        <input type="date">
                                                    </div>
                                                </div> 
                                                <button class="button-simpan w-100 mt-2">Cari</button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="d-flex justify-content-between align-items-center mt-2">
                                    
                                    <div class="card" style="width: 100%">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center" style="margin-top: 4px; margin-bottom: -7px" data-bs-toggle="collapse" data-bs-target="#daftarSoal">
                                                <h5>Daftar Soal</h5>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                                </svg>
                                            </div>

                                            <div class="collapse mt-3" id="daftarSoal">
                                                
                                                <div class="d-flex justify-content-between align-items-center mb-1" style="gap: 5px">
                                                    <label style="width: 5%; text-align: center">1.</label>
                                                    <label>Ujian Matematika</label>
                                                    <div class="icon-tambah">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style="color: white;" width="19" height="19" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-center mb-1" style="gap: 5px">
                                                    <label style="width: 5%; text-align: center">2.</label>
                                                    <label>Ujian Bahasa Indonesia</label>
                                                    <div class="icon-tambah">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style="color: white;" width="19" height="19" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-center mb-1" style="gap: 5px">
                                                    <input type="checkbox" style="width: 5%;">
                                                    <label>Ujian IPA</label>
                                                    <div class="icon-tambah">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style="color: white;" width="19" height="19" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-center" style="gap: 5px">
                                                    <input type="checkbox" style="width: 5%;">
                                                    <label>Ujian Olahraga</label>
                                                    <div class="icon-tambah">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style="color: white;" width="19" height="19" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                                        </svg>
                                                    </div>
                                                </div>

                                                <button class="button-simpan w-100 mt-2">Generate Soal Dari Beberapa Ujian</button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="card shadow border-0" style="width: 65%">
                            <div class="card-body">
                                <div class="d-flex justify-content-center" style="gap: 15px">
                                    <button class="button-tambah1">Lihat Soal Yang Dipilih</button>
                                    <button class="button-tambah1">Gunakan Soal Yang Dipilih</button>
                                    <button class="button-tambah1">Gunakan Soal Yang Ditampilkan</button>
                                </div>
                                <hr>
                                <div class="d-flex justify-content-between" style="gap: 20px">
                                    <div class="d-flex justify-content-center" style="gap: 10px; width: 8%">
                                        <input type="checkbox" style="width: 15px; height: 15px; margin-top: 7px">
                                        <label style="font-weight: bold; margin-top: 5px">1.</label>
                                    </div>
                                    <div style="width: 92%">
                                        <label style="font-weight: bold; margin-top: 5px; margin-bottom: 10px">Apa Kepanjangan PPKM?</label>
                                        <div class="d-flex mb-2">
                                            <label>A.</label>
                                            <label>Pemberlakuan Pembatasan Kegiatan Masyarakat Indonesia</label>
                                        </div>
                                        <div class="d-flex mb-2">
                                            <label>B.</label>
                                            <label>Pemberlakuan Pembatasan Kegiatan Masyarakat</label>
                                        </div>
                                        <div class="d-flex mb-2">
                                            <label>C.</label>
                                            <label>Pemberlakuan Pembatasan Kegiatan Indonesia</label>
                                        </div>
                                        <div class="d-flex mb-2">
                                            <label>D.</label>
                                            <label>Pemberlakuan Pembatasan Kegiatan</label>
                                        </div>
                                        <div class="d-flex mb-2">
                                            <label>E.</label>
                                            <label>Pemberlakuan Pembatasan</label>
                                        </div>
                                        <div class="d-flex mb-2" style="gap: 15px">
                                            <label style="font-weight: bold;">Kunci Jawaban :</label>
                                            <label>A</label>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="d-flex justify-content-between" style="gap: 20px">
                                    <div class="d-flex justify-content-center" style="gap: 10px; width: 8%">
                                        <input type="checkbox" style="width: 15px; height: 15px; margin-top: 7px">
                                        <label style="font-weight: bold; margin-top: 5px">2.</label>
                                    </div>
                                    <div style="width: 92%">
                                        <label style="font-weight: bold; margin-top: 5px; margin-bottom: 10px">Dengan berolahraga seperti bersepeda, lari pagi, dan senam bersama teman - teman membuat tubuh kita ........?</label>
                                        <div class="d-flex mb-2">
                                            <label>A.</label>
                                            <label>terkena penyakit</label>
                                        </div>
                                        <div class="d-flex mb-2">
                                            <label>B.</label>
                                            <label>menjadi sehat</label>
                                        </div>
                                        <div class="d-flex mb-2">
                                            <label>C.</label>
                                            <label>tidak ada perbedaan</label>
                                        </div>
                                        <div class="d-flex mb-2">
                                            <label>D.</label>
                                            <label>Menjadi Bugar</label>
                                        </div>
                                        <div class="d-flex mb-2">
                                            <label>E.</label>
                                            <label>Pemberlakuan Pada Tubuh</label>
                                        </div>
                                        <div class="d-flex mb-2" style="gap: 15px">
                                            <label style="font-weight: bold;">Kunci Jawaban :</label>
                                            <label>C</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="button-tutup" data-bs-toggle="modal" data-bs-target="#importSoal">Tutup</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import Title from '../../components/TitlePage.vue';

    export default {
        components: {
            Title
        },
        data() {
            return {
                title: 'Pembuatan Soal Ujian',
                subTitle: 'Perhatikan setiap detail dari pembuatan soal ujian',
                chooseVersion: 0,
                option: [
                    {
                        option_name: 'A',
                    },
                    {
                        option_name: 'B',
                    },
                    {
                        option_name: 'C',
                    },
                    {
                        option_name: 'D',
                    },
                    {
                        option_name: 'E',
                    }
                ],
                number: [
                    {
                        number_soal: 1
                    },
                    {
                        number_soal: 2
                    },
                    {
                        number_soal: 3
                    },
                    {
                        number_soal: 4
                    },
                    {
                        number_soal: 5
                    },
                    {
                        number_soal: 6
                    },
                    {
                        number_soal: 7
                    },
                    {
                        number_soal: 8
                    },
                    {
                        number_soal: 9
                    },
                    {
                        number_soal: 10
                    },
                    {
                        number_soal: 11
                    },
                    {
                        number_soal: 12
                    },
                    {
                        number_soal: 13
                    },
                ]
            };
        },
        mounted() {
            const dropContainer = document.getElementById("dropcontainer")
            const fileInput = document.getElementById("images")

            dropContainer.addEventListener("dragover", (e) => {
                // prevent default to allow drop
                e.preventDefault()
            }, false)

            dropContainer.addEventListener("dragenter", () => {
                dropContainer.classList.add("drag-active")
            })

            dropContainer.addEventListener("dragleave", () => {
                dropContainer.classList.remove("drag-active")
            })

            dropContainer.addEventListener("drop", (e) => {
                e.preventDefault()
                dropContainer.classList.remove("drag-active")
                fileInput.files = e.dataTransfer.files
            })
        },
        methods: {
            chooseJenisPertanyaan() {
                console.log('Jenis Pertanyaan Dipilih:', this.chooseVersion);
            }
        }
    }
</script>

<style>

    .jarak {
        margin: 20px 30px 0px 0px;
    }

    .jarak h5 {
        margin-bottom: 0px;
    }

    .popover {
        z-index: 1000;
    }

    button.button-popover {
        background-color: white;
        border:none;
    }

</style>
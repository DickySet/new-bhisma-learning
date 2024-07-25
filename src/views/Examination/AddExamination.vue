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
                        <div class="jarak">
                            <h5>Data Pertanyaan Ujian</h5>
                            <p>Silahkan membuat soal ujian dengan baik</p>
                        </div>

                        <div class="d-flex" style="gap: 15px">
                            <div class="card shadow border-0" style="width: 70%; height: auto">
                                <div class="card-header">
                                    <h5 style=" margin-top: 5px; margin-bottom: -3px">Daftar Isi Soal</h5>
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
                                                
                                            </div>
                                            
                                            <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); padding: 4px 0px 0px 10px">
                                                <label class="text-white">Pertanyaan</label>
                                            </div>

                                            <textarea rows="4" placeholder="Masukan Soal"></textarea>

                                            <!-- SOAL PILIHAN GANDA -->
                                                <template v-if="chooseVersion == 1">
                                                
                                                    <div class="d-flex mb-2">
                                                        <div style="width: 8%;margin-top: 8px">
                                                        </div>
                                                        <div style="width: 92%">
                                                            <div class="d-flex justify-content-between" style="gap: 20px;">
                                                                <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); padding: 4px 0px 0px 10px; width: 100%">
                                                                    <label class="text-white">Tambah Jawaban</label>
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
                                                                <div class="d-flex justify-content-between" style="gap: 20px;">
                                                                    <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); padding: 4px 0px 0px 10px; width: 100%">
                                                                        <label class="text-white">Jawaban</label>
                                                                    </div>
                                                                    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" style="color: red; margin-top: 8px" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                                                    </svg>
                                                                </div>
                                                                <div class="mt-2">
                                                                    <textarea rows="4" placeholder="Masukan Jawaban"></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </template>
                                                    
                                                    
                                                </template>
                                            <!-- SOAL PILIHAN GANDA -->

                                            <!-- SOAL PILIHAN GANDA KOMPLEKS -->
                                                <template v-if="chooseVersion == 3">
                                                
                                                    <div class="d-flex mb-2">
                                                        <div style="width: 8%;margin-top: 8px">
                                                        </div>
                                                        <div style="width: 92%">
                                                            <div class="d-flex justify-content-between" style="gap: 20px;">
                                                                <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); padding: 4px 0px 0px 10px; width: 100%">
                                                                    <label class="text-white">Tambah Jawaban</label>
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
                                                                <div class="d-flex justify-content-between" style="gap: 20px;">
                                                                    <div style="background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); padding: 4px 0px 0px 10px; width: 100%">
                                                                        <label class="text-white">Jawaban</label>
                                                                    </div>
                                                                    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" style="color: red; margin-top: 8px" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                                                    </svg>
                                                                </div>
                                                                <div class="mt-2">
                                                                    <textarea rows="4" placeholder="Masukan Jawaban"></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </template>
                                                    
                                                    
                                                </template>
                                            <!-- SOAL PILIHAN GANDA KOMPLEKS-->

                                            <!-- SOAL MENJODOHKAN -->
                                                <template v-if="chooseVersion == 4">
                                                
                                                    <div class="d-flex" style="gap: 15px">
                                                        <div class="card border-0" style="width: 50%">
                                                            <div class="card-header">
                                                                <div class="d-flex justify-content-between">
                                                                    <label style="font-weight: bold; margin-top: 6px; margin-bottom: -10px">Daftar Pertanyaan</label>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style="color: #00387F; margin-top: 8px" width="18" height="18" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div class="card-body">
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
                                                        </div>
                                                        <div class="card border-0" style="width: 50%">
                                                            <div class="card-header">
                                                                <div class="d-flex justify-content-between">
                                                                    <label style="font-weight: bold; margin-top: 6px; margin-bottom: -10px">Daftar Jawaban</label>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" style="color: #00387F; margin-top: 8px" width="18" height="18" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div class="card-body">

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
                                                    </div>

                                                </template>
                                            <!-- SOAL MENJODOHKAN -->

                                            <!-- SOAL ISIAN SINGKAT -->
                                                <template v-if="chooseVersion == 5">
                                                
                                                    <div class="card border-0">
                                                        <div class="card-header">
                                                            <div class="d-flex justify-content-between">
                                                                <label style="font-weight: bold; margin-top: 6px; margin-bottom: -10px">Daftar Peluang Jawaban</label>
                                                                <svg xmlns="http://www.w3.org/2000/svg" style="color: #00387F; margin-top: 8px" width="18" height="18" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="card-body">
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
                                                        </div>
                                                    </div>

                                                </template>
                                            <!-- SOAL ISIAN SINGKAT -->

                                            <!-- SOAL TRUE FALSE -->
                                                <template v-if="chooseVersion == 6">
                                                
                                                    <div class="card border-0">
                                                        <div class="card-header">
                                                            <div class="d-flex justify-content-between">
                                                                <label style="font-weight: bold; margin-top: 6px; margin-bottom: -10px">Daftar Pertanyaan</label>
                                                                <svg xmlns="http://www.w3.org/2000/svg" style="color: #00387F; margin-top: 8px" width="18" height="18" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="card-body">
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
                            <div class="card sticky-top shadow border-0" style="width: 30%; max-height: 330px; overflow: auto; cursor: pointer">
                                <div class="card-header">
                                    <h5 style=" margin-top: 5px; margin-bottom: -3px">Daftar Nomor Soal</h5>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex flex-wrap" style="gap: 10px 10px">
                                        <div class="icon text-white" style="width: 16.5%;">
                                            <h5 style="margin-top:15px">1</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">2</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">3</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">4</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">5</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">6</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">7</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">8</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">9</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">10</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">11</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">12</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">13</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">14</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">15</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">16</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">17</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">18</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">19</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">20</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">21</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">22</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">23</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">24</h5>
                                        </div>
                                        <div class="icon text-white" style="width: 16.5%">
                                            <h5 style="margin-top:15px">25</h5>
                                        </div>
                                        
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

</template>

<script>
    import { ref } from 'vue';
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
                ]
            };
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
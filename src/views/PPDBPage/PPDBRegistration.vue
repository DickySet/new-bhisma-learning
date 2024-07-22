<template>
    <img src="../../assets/image/bg1.png" class="bg">

    <div class="container" style="color: black; scroll-behavior: smooth; overflow-x: hidden;">
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

        <div class="information mt-3" id="formInput">
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
                        <div class="sub-token">
                            <div class="sub-token1">
                                <router-link :to="{name: 'PPDB'}">
                                    <button class="button-edit">Cek Alur Pendaftaran</button>
                                </router-link>
                            </div>
    
                            <div :hidden="token_show">
                                <div class="token">
                                    <label>Token <b>Registrasi :</b></label>
                                    <input type="text" style="width: 64%" placeholder="Masukan Token">
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

        <div class="form mt-3 mb-5">
            <div class="card shadow border-0">
                <div class="card-body">

                    <!-- Opsi Header Input -->
                        <div id="header-input" class="p-3 pt-4 pb-1 d-flex justify-content-center" style="gap: 10px">
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

                    <!-- form input data -->
                        <div v-if="konten === 'Peserta Didik'">
                            <div class="jarak">

                                <h4><b>Data Calon Peserta Didik</b></h4>
                                <p style="margin-top: -10px">Silahkan isi formulir berikut dengan data yang benar!</p>

                                <div class="form">
                                    <!-- form bagian kiri -->
                                    <div class="form-a">
                                        <div class="mb-3">
                                            <label>Pilih Periode PPDB<span class="important-sign"> *</span></label>
                                            <!-- <select   v-model="data_user.ppdb_period_name_id" > -->
                                            <select>
                                                <option value="0">Pilih Periode PPDB</option>
                                                <!-- <option v-for="ppdb_period_name in ppdb_period_names" v-bind:value="ppdb_period_name.ppdb_period_name_id" :key="ppdb_period_name.ppdb_period_name_id">
                                                    {{ ppdb_period_name.code}}
                                                </option> -->
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label>Minat Jurusan <span class="important-sign">*</span></label>
                                            <!-- <select   v-model="data_user.ppdb_school_skill_id"> -->
                                            <select  >
                                                <option value="0">-- Pilih Minat Jurusan --</option>
                                                <!-- <option v-for="ppdb_school_skill in ppdb_school_skills" v-bind:value="ppdb_school_skill.ppdb_school_skill_id" :key="ppdb_school_skill.ppdb_school_skill_id">
                                                    {{ ppdb_school_skill.description}}  ({{ ppdb_school_skill.code}})
                                                </option> -->
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label>Nama Lengkap<span class="important-sign"> *</span></label>
                                            <!-- <input type="nama"   id="inputNama" placeholder="Nama Lengkap" v-model="data_user.full_name"> -->
                                            <input type="nama"   id="inputNama" placeholder="Nama Lengkap">
                                        </div>
                                        <div class="mb-3">
                                            <label>NISN<span class="important-sign"> *</span></label>
                                            <!-- <input v-model="data_user.nisn" :class="cekdigitnisn" @keyup="cekDigit($event.target.value, 'nisn')" maxlength="10" type="text"   name="nisn" id="nisn" placeholder="NISN"> -->
                                            <input maxlength="10" type="text"   name="nisn" id="nisn" placeholder="NISN">
                                        </div>
                                        <div class="d-flex justify-content-between" style="gap: 10px">
                                            <div class="mb-3" style="width: 50%">
                                                <label>Tempat Lahir<span class="important-sign"> *</span></label>
                                                <!-- <input v-model="data_user.place_of_birth" type="nama"   id="inputNama" placeholder="Nama kota/Kab"> -->
                                                <input type="nama"   id="inputNama" placeholder="Nama kota/Kab">
                                            </div>
                                            <div class="mb-3" style="width: 50%">
                                                <label>Tanggal Lahir<span class="important-sign"> *</span></label>
                                                <!-- <input v-model="data_user.date_of_birth"  type="date"   name="dob" id="dob" placeholder="DD-MM-YY"> -->
                                                <input type="date"   name="dob" id="dob" placeholder="DD-MM-YY">
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between" style="gap: 10px">
                                            <div class="mb-3" style="width: 50%">
                                                <label>Jenis Kelamin</label>
                                                <!-- <select   v-model="data_user.ppdb_gender_id" > -->
                                                <select  >
                                                    <option value="0">-- Pilih Jenis Kelamin --</option>
                                                    <option value="1">Laki - Laki</option>
                                                    <option value="2">Perempuan</option>
                                                </select>
                                            </div>
                                            <div class="mb-3" style="width: 50%">
                                                <label>Agama<span class="important-sign"> *</span></label>
                                                <!-- <select   v-model="data_user.sd_religion_id" > -->
                                                <select   >
                                                    <option value="0">-- Pilih Agama --</option>
                                                    <!-- <option v-for="religion in religions" v-bind:value="religion.sd_religion_id" :key="religion.sd_religion_id">
                                                        {{ religion.code}}
                                                    </option> -->
                                                </select>
                                            </div>
                                        </div>
                                        <div style="margin-bottom: 10px">
                                            <label>Alamat Lengkap<span class="important-sign"> *</span></label>
                                            <!-- <textarea style="width: 100%; height: 117px" rows="4" class="textarea" placeholder="Alamat Lengkap" v-model="data_user.address"></textarea> -->
                                            <textarea style="width: 100%; height: 117px" rows="4" class="textarea" placeholder="Alamat Lengkap"></textarea>
                                        </div>
                                        <div class="d-flex justify-content-between" style="gap: 10px">
                                            <div class="mb-3" style="width: 50%">
                                                <label>Provinsi<span class="important-sign"> *</span></label>
                                                <!-- <select @change="onChangeProvinces($event)"   v-model="data_user.sd_province_id" > -->
                                                <select   >
                                                    <option value="0">-- Pilih Provinsi --</option>
                                                    <!-- <option v-for="province in provinces" v-bind:value="province.sd_province_id" :key="province.sd_province_id">
                                                        {{ province.code}}
                                                    </option> -->
                                                </select>
                                            </div>
                                            <div class="mb-3" style="width: 50%">
                                                <label>Kabupaten/Kota<span class="important-sign"> *</span></label>
                                                <!-- <select   v-model="data_user.sd_city_id" > -->
                                                <select  >
                                                    <option value="0">-- Pilih Kabupaten/Kota --</option>
                                                    <!-- <option v-for="city in cities" v-bind:value="city.sd_city_id" :key="city.sd_city_id">
                                                        {{ city.code}}
                                                    </option> -->
                                                </select>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between" style="gap: 10px">
                                            <div class="mb-3" style="width: 50%">
                                                <label>Kecamatan<span class="important-sign"> *</span></label>
                                                <!-- <input v-model="data_user.district" type="text"   placeholder="Kecamatan" > -->
                                                <input type="text"   placeholder="Kecamatan" >
                                            </div>
                                            <div class="mb-3" style="width: 50%">
                                                <label>Kelurahan<span class="important-sign"> *</span></label>
                                                <!-- <input v-model="data_user.ward" type="text"   placeholder="Kelurahan" > -->
                                                <input type="text"   placeholder="Kelurahan" >
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between" style="gap: 10px; margin-bottom: 10px">
                                            <div style="width: 50%">
                                                <label>Hobi</label>
                                                <!-- <input v-model="data_user.hobbies" type="text"   placeholder="Hobi" > -->
                                                <input type="text"   placeholder="Hobi" >
                                            </div>
                                            <div style="width: 50%">
                                                <label>Cita - Cita</label>
                                                <!-- <input v-model="data_user.ambition" type="text"   placeholder="Cita-cita" > -->
                                                <input type="text"   placeholder="Cita-cita" >
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label>Password <span class="important-sign">*</span></label>
                                            <div class="d-flex justify-content-between">
                                                <!-- <input style="width: 90%" v-model="data_user.password" :type="passwordFieldType"   name="password" id="password" placeholder="Masukan Password"> -->
                                                <input style="width: 90%"   name="password" id="password" placeholder="Masukan Password">
                                                <!-- <button @click="switchVisibility" style="border:none; border-radius: 3px; color: black; width: 38px; height: 38px; background: orange;" type="button"><i class="fa fa-eye-slash passicon" aria-hidden="true"></i></button> -->
                                                <button style="border:none; border-radius: 3px; color: black; width: 38px; height: 38px; background: orange;" type="button"><i class="fa fa-eye-slash passicon" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                        <form class="mb-3" method="post" action="#" id="" enctype="multipart/form-data" v-for="get_ppdb_requirement in get_ppdb_requirements" :key="get_ppdb_requirement.row_number">
                                            <label>{{get_ppdb_requirement.code}} <span class="important-sign" v-if="get_ppdb_requirement.type_code == 'M'">*</span></label>
                                            <input style="width: 100%;" type="file" multiple @change="onFileChangefile($event, get_ppdb_requirement.ppdb_requirements_id)" accept="image/jpeg,image/jpg,image/png,application/pdf" />
                                        </form>
                                    </div>
                                    <!-- form bagian kiri -->

                                    <!-- form bagian kanan -->
                                    <div class="form-b">
                                        <div class="d-flex justify-content-between" style="gap: 10px">
                                            <div class="mb-3" style="width: 50%">
                                                <label>No Handphone Siswa <b>[Aktif]</b><span class="important-sign"> *</span></label>
                                                <!-- <input v-model="data_user.phone_number_participant" :class="cekdigitnohp" @keyup="cekDigit($event.target.value, 'nohp')" maxlength="13" type="text"   id="phone_number" placeholder="Nomor Handphone" > -->
                                                <input maxlength="13" type="text"   id="phone_number" placeholder="Nomor Handphone" >
                                            </div>
                                            <div class="mb-3" style="width: 50%">
                                                <label>Email <b>[Aktif]</b><span class="important-sign"> *</span></label>
                                                <!-- <input v-model="data_user.email" type="text"   :class="cekdigitemail" @keyup="cekDigit($event.target.value, 'email')" id="email" placeholder="Email" > -->
                                                <input type="text"   id="email" placeholder="Email" >
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between" style="gap: 10px">
                                            <div class="mb-3" style="width: 50%">
                                                <label>Nomor Induk Keluarga<span class="important-sign"> *</span></label>
                                                <!-- <input v-model="data_user.nik_participant" type="text"    :class=" cekdigitnik " placeholder="Nomor Induk Keluarga" @keyup="cekDigit($event.target.value, 'nik')" maxlength="16"> -->
                                                <input type="text"   placeholder="Nomor Induk Keluarga" maxlength="16">
                                            </div>
                                            <div class="mb-3" style="width: 50%">
                                                <label>Nomor Kartu Keluarga<span class="important-sign"> *</span></label>
                                                <!-- <input v-model="data_user.kk_participant" type="text"   :class=" cekdigitkk "  placeholder="Nomor Kartu Keluarga" @keyup="cekDigit($event.target.value, 'kk')" maxlength="16"> -->
                                                <input type="text"   placeholder="Nomor Kartu Keluarga" maxlength="16">
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between" style="gap: 10px">
                                            <div class="mb-3" style="width: 50%">
                                                <label>Anak Ke -<span class="important-sign"> *</span></label>
                                                <!-- <input v-model="data_user.child_position" type="number"   placeholder="Anak Ke-" > -->
                                                <input type="number"   placeholder="Anak Ke-" >
                                            </div>
                                            <div class="mb-3" style="width: 50%">
                                                <label>Jumlah Saudara Kandung<span class="important-sign"> *</span></label>
                                                <!-- <input v-model="data_user.number_of_sibling" type="number"    placeholder="Saudara Kandung" > -->
                                                <input type="number"    placeholder="Saudara Kandung" >
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-between" style="gap: 10px">
                                            <div class="mb-3" style="width: 50%">
                                                <label>Jumlah Saudara Tiri</label>
                                                <!-- <input v-model="data_user.number_of_step" type="number"    placeholder="Saudara Tiri"> -->
                                                <input type="number"    placeholder="Saudara Tiri">
                                            </div>
                                            <div class="mb-3" style="width: 50%">
                                                <label>Jumlah Saudara Angkat</label>
                                                <!-- <input v-model="data_user.number_of_step_sibling" type="number"    placeholder="Saudara Angkat"> -->
                                                <input type="number"    placeholder="Saudara Angkat">
                                            </div>
                                        </div>
                                        <div style="margin-bottom: 10px">
                                            <label>Status Tempat Tinggal <span class="important-sign">*</span></label>
                                            <!-- <select   v-model="data_user.stat_of_residence" > -->
                                            <select  >
                                                <option value="0">-- Pilih Status Tempat Tinggal --</option>
                                                <!-- <option v-for="option_residence in options_residence" v-bind:value="option_residence.value" :key="option_residence.value">
                                                    {{ option_residence.text}}
                                                </option> -->
                                            </select>
                                        </div>
                                        <div class="d-flex justify-content-between" style="gap: 10px">
                                            <div class="mb-3" style="width: 50%">
                                                <label>Jarak Dari Rumah <b>[KM]</b><span class="important-sign"> *</span></label>
                                                <!-- <input v-model="data_user.distance_from_home" type="number"   placeholder="Jarak dari rumah" > -->
                                                <input type="number"   placeholder="Jarak dari rumah" >
                                            </div>
                                            <div class="mb-3" style="width: 50%">
                                                <label>Kode Pos<span class="important-sign"> *</span></label>
                                                <!-- <input v-model="data_user.postal_code" type="number"   placeholder="Kode Pos" > -->
                                                <input type="number"   placeholder="Kode Pos" >
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label>Alat Transportasi <b>[Rumah - Sekolah]</b><span class="important-sign">*</span></label>
                                            <!-- <select   v-model="data_user.transportation" > -->
                                            <select  >
                                                <option value="0">-- Pilih Alat Transportasi --</option>
                                                <!-- <option v-for="option_transportation in options_transportation" v-bind:value="option_transportation.value" :key="option_transportation.value">
                                                    {{ option_transportation.text}}
                                                </option> -->
                                            </select>
                                        </div>
                                        <template v-if="sd_school_id !== 99">
                                            <div class="mb-3">
                                                <label>Waktu Tempuh <b>[Rumah - Sekolah / MENIT]</b><span class="important-sign">*</span></label>
                                                <!-- <input v-model="data_user.time_travel" type="number"   placeholder="Waktu Tempuh Ke Sekolah" > -->
                                                <input type="number"   placeholder="Waktu Tempuh Ke Sekolah" >
                                            </div>
                                        </template>
                                        <div class="mb-3">
                                            <label>Dapat Informasi Sekolah Dari Mana <span class="important-sign">*</span></label>
                                            <!-- <select   v-model="data_user.getting_info" > -->
                                            <select  >
                                                <option value="0">-- Pilih Sumber Informasi --</option>
                                                <!-- <option v-for="option_getting_info in options_getting_info" v-bind:value="option_getting_info.value" :key="option_getting_info.value">
                                                    {{ option_getting_info.text}}
                                                </option> -->
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label>Nama Asal Sekolah<span class="important-sign"> *</span></label>
                                            <!-- <input v-model="data_user.school_name_before" type="text"   placeholder="Nama Asal Sekolah" > -->
                                            <input type="text"   placeholder="Nama Asal Sekolah" >
                                        </div>
                                        <template v-if="sd_school_id !== 99">
                                            <div style="margin-bottom: 11px">
                                                <label>Alamat Asal Sekolah</label>
                                                <!-- <textarea v-model="data_user.school_address_before" style="width: 100%; height: 117px" rows="4" class="textarea" placeholder="Alamat Asal Sekolah"></textarea> -->
                                                <textarea style="width: 100%; height: 117px" rows="4" class="textarea" placeholder="Alamat Asal Sekolah"></textarea>
                                            </div>
                                        </template>
                                        <div class="mb-3">
                                            <label>Rencana Setelah Selesai Sekolah <span class="important-sign">*</span></label>
                                            <!-- <select   v-model="data_user.after_finish" > -->
                                            <select  >
                                                <option value="0">-- Pilih Rencana Setelah Selesai Sekolah --</option>
                                                <!-- <option v-for="option_after_finish in options_after_finish" v-bind:value="option_after_finish.value" :key="option_after_finish.value">
                                                    {{ option_after_finish.text}}
                                                </option> -->
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label>Prestasi Yang Pernah Diraih</label>
                                            <!-- <input v-model="data_user.achievement" type="text"   id="postal_code" placeholder="Prestasi yang pernah diraih"> -->
                                            <input type="text"   id="postal_code" placeholder="Prestasi yang pernah diraih">
                                        </div>
                                        <div style="margin-bottom: 10px">
                                            <label>Pelajaran Paling Disukai</label>
                                            <!-- <input v-model="data_user.preferred_lesson" type="text"   placeholder="Pelajaran Paling Disukai"> -->
                                            <input type="text"   placeholder="Pelajaran Paling Disukai">
                                        </div>
                                    </div>
                                    <!-- form bagian kanan -->
                                </div>

                                <div class="d-flex justify-content-end" style="gap: 10px; margin-top: 30px; margin-bottom: 30px">
                                    <button class="button-simpan" @click.prevent="nextDataForm('Peserta Didik')">Selanjutnya</button>
                                </div>

                            </div>
                        </div>
                        <div v-if="konten === 'Orang Tua'">
                            <div class="jarak">

                                <h4><b>Data Ayah dan Ibu</b></h4>
                                <p style="margin-top: -10px">Silahkan isi formulir berikut dengan data yang benar!</p>

                                <div class="form">
                                    <!-- form bagian kiri -->
                                    <div class="form-a">
                                        <div class="mb-3">
                                            <label>Nama Ayah Kandung<span class="important-sign"> *</span></label>
                                            <!-- <input v-model="data_user.parent_name" type="text"    placeholder="Nama Ayah Kandung"> -->
                                            <input type="text"    placeholder="Nama Ayah Kandung">
                                        </div>
                                        <div class="mb-3">
                                            <label>Status Ayah<span class="important-sign"> *</span></label>
                                            <!-- <select   v-model="data_user.existance_state_father" @change="onChangeStatusAyah"> -->
                                            <select  >
                                                <option value="">-- Pilih Status Ayah --</option>
                                                <!-- <option v-for="option_maried in options_maried" v-bind:value="option_maried.value" :key="option_maried.value">
                                                    {{ option_maried.text}}
                                                </option> -->
                                            </select>
                                        </div>
                                        <template v-if="sd_school_id !== 99">
                                            <div class="mb-3">
                                                <label>Tempat, dan Tanggal Lahir</label>
                                                <!-- <input v-model="data_user.dob_father" type="text"    placeholder="Tempat, dan tanggal lahir" :disabled="data_user.existance_state_father !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_father !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                <input type="text"    placeholder="Tempat, dan tanggal lahir">
                                            </div>
                                        </template>
                                        <div class="d-flex justify-content-between" style="gap: 10px">
                                            <div class="mb-3" style="width: 50%">
                                                <label>Nomor KTP Ayah<span class="important-sign"> *</span></label>
                                                <!-- <input v-model="data_user.nik_father" :class="cekdigitnikayah" @keyup="cekDigit($event.target.value, 'nikayah')" maxlength="16" type="text"    placeholder="Nomor KTP" :disabled="data_user.existance_state_father !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_father !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                <input maxlength="16" type="text"    placeholder="Nomor KTP">
                                            </div>
                                            <div class="mb-3" style="width: 50%">
                                                <label>Pendidikan Terakhir<span class="important-sign"> *</span></label>
                                                <input type="text"    placeholder="Pendidikan Terakhir">
                                            </div>
                                        </div>
                                        <template v-if="sd_school_id !== 99">
                                            <div>
                                                <label>Alamat Lengkap Ayah<span class="important-sign"> *</span></label>
                                                <!-- <textarea v-model="data_user.parent_address" style="width: 100%; height: 117px" rows="4" class="textarea" placeholder="Alamat Lengkap Ayah" :disabled="data_user.existance_state_father !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_father !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"></textarea> -->
                                                <textarea style="width: 100%; height: 117px" rows="4" class="textarea" placeholder="Alamat Lengkap Ayah"></textarea>
                                            </div>
                                            <div class="mb-3 ml-3 d-flex align-items-center" style="gap: 5px">
                                                <!-- <input type="checkbox" id="CheckboxAyah" v-model="CheckboxAyah" @change="onChangeAddress('alamatayah', $event)" :disabled="data_user.existance_state_father !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_father !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                <input style="width: 10%" type="checkbox" id="CheckboxAyah">
                                                <label style="margin-top: 5px">Sama dengan Alamat Calon Peserta Didik</label>
                                            </div>
                                        </template>
                                        <template v-if="sd_school_id !== 99">
                                            <div class="d-flex justify-content-between" style="gap: 10px">
                                                <div class="mb-3" style="width: 50%">
                                                    <label>Profesi Ayah<span class="important-sign"> *</span></label>
                                                    <!-- <input v-model="data_user.parent_job" type="text"    placeholder="Pekerjaan" :disabled="data_user.existance_state_father !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_father !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                    <input type="text"    placeholder="Pekerjaan">
                                                </div>
                                                <div class="mb-3" style="width: 50%">
                                                    <label>Pendapatan Bulanan<span class="important-sign"> *</span></label>
                                                    <div class="d-flex align-items-center" style="gap: 5px">
                                                        <label>Rp.</label>
                                                        <!-- <input v-model="data_user.income_father" type="number"    placeholder="Pendapatan/Bulan" :disabled="data_user.existance_state_father !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_father !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                        <input type="number"    placeholder="Pendapatan/Bulan">
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                        <template v-else>
                                            <div class="mb-3">
                                                <label>Profesi Ayah<span class="important-sign"> *</span></label>
                                                <!-- <input v-model="data_user.parent_job" type="text"    placeholder="Nama Ayah Kandung" :disabled="data_user.existance_state_father !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_father !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                <input type="text"    placeholder="Nama Ayah Kandung">
                                            </div>
                                        </template>
                                        <div class="d-flex justify-content-between" style="gap: 10px">
                                            <div class="mb-3" style="width: 50%">
                                                <label>No Handphone Ayah</label>
                                                <!-- <input v-model="data_user.parent_phone" :class="cekdigitnoayah" @keyup="cekDigit($event.target.value, 'noayah')" maxlength="13" type="text"    placeholder="No Handphone" :disabled="data_user.existance_state_father !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_father !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                <input maxlength="13" type="text"    placeholder="No Handphone">
                                            </div>
                                            <div class="mb-3" style="width: 50%">
                                                <label>Email Ayah</label>
                                                <!-- <input v-model="data_user.email_father" :class="cekdigitemailayah" @keyup="cekDigit($event.target.value, 'emailayah')" type="text"    placeholder="Email" :disabled="data_user.existance_state_father !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_father !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                <input type="text"    placeholder="Email">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- form bagian kiri -->

                                    <!-- form bagian kanan -->
                                    <div class="form-b">
                                        <div class="mb-3">
                                            <label>Nama Ibu Kandung<span class="important-sign"> *</span></label>
                                            <!-- <input v-model="data_user.name_mother" type="text"    placeholder="Nama" > -->
                                            <input type="text"    placeholder="Nama" >
                                        </div>
                                        <div class="mb-3">
                                            <label>Status Ibu<span class="important-sign"> *</span></label>
                                            <!-- <select   v-model="data_user.existance_state_mother" @change="onChangeStatusIbu"> -->
                                            <select  >
                                                <option value="">-- Pilih Status Ibu --</option>
                                                <!-- <option v-for="option_maried in options_maried" v-bind:value="option_maried.value" :key="option_maried.value">
                                                    {{ option_maried.text}}
                                                </option> -->
                                            </select>
                                        </div>
                                        <template v-if="sd_school_id !== 99">
                                            <div class="mb-3">
                                                <label>Tempat, dan Tanggal Lahir</label>
                                                <!-- <input v-model="data_user.dob_mother" type="text"    placeholder="Tempat, dan tanggal lahir" :disabled="data_user.existance_state_mother !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_mother !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                <input type="text"    placeholder="Tempat, dan tanggal lahir">
                                            </div>
                                        </template>
                                        <div class="d-flex justify-content-between" style="gap: 10px">
                                            <div class="mb-3" style="width: 50%">
                                                <label>Nomor KTP Ibu<span class="important-sign"> *</span></label>
                                                <!-- <input v-model="data_user.nik_mother" :class="cekdigitnikibu" @keyup="cekDigit($event.target.value, 'nikibu')" maxlength="16" type="text"    placeholder="Nomor KTP Ibu" :disabled="data_user.existance_state_mother !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_mother !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                <input maxlength="16" type="text"    placeholder="Nomor KTP Ibu">
                                            </div>
                                            <div class="mb-3" style="width: 50%">
                                                <label>Pendidikan Terakhir<span class="important-sign"> *</span></label>
                                                <!-- <input v-model="data_user.last_education_mother" style="width: 100%;" type="text" placeholder="Pendidikan Terakhir" :disabled="data_user.existance_state_mother !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_mother !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                <input style="width: 100%;" type="text" placeholder="Pendidikan Terakhir">
                                            </div>
                                        </div>
                                        <template v-if="sd_school_id !== 99">
                                            <div>
                                                <label>Alamat Lengkap Ibu<span class="important-sign"> *</span></label>
                                                <!-- <textarea v-model="data_user.address_mother" style="width: 100%; height: 117px" rows="4" class="textarea" placeholder="Alamat Lengkap Ibu" :disabled="data_user.existance_state_mother !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_mother !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"></textarea> -->
                                                <textarea style="width: 100%; height: 117px" rows="4" class="textarea" placeholder="Alamat Lengkap Ibu"></textarea>
                                            </div>
                                            <div class="mb-3 ml-3 d-flex align-items-center" style="gap: 5px">
                                                <!-- <input type="checkbox" id="CheckboxIbu" v-model="CheckboxIbu" @change="onChangeAddress('alamatibu', $event)" :disabled="data_user.existance_state_mother !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_mother !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                <input style="width: 10%" type="checkbox" id="CheckboxIbu">
                                                <label style="margin-top: 5px">Sama dengan Alamat Calon Peserta Didik</label>
                                            </div>
                                        </template>
                                        <template v-if="sd_school_id !== 99">
                                            <div class="d-flex justify-content-between" style="gap: 10px">
                                                <div class="mb-3" style="width: 50%">
                                                    <label>Profesi Ibu<span class="important-sign"> *</span></label>
                                                    <!-- <input v-model="data_user.job_mother" type="text"    placeholder="Pekerjaan" :disabled="data_user.existance_state_mother !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_mother !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                    <input type="text"    placeholder="Pekerjaan" >
                                                </div>
                                                <div class="mb-3" style="width: 50%">
                                                    <label>Pendapatan Bulanan<span class="important-sign"> *</span></label>
                                                    <div class="d-flex align-items-center" style="gap: 5px">
                                                        <label>Rp.</label>
                                                        <!-- <input v-model="data_user.income_mother" type="number"    placeholder="Pendapatan/Bulan" :disabled="data_user.existance_state_mother !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_mother !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                        <input type="number"    placeholder="Pendapatan/Bulan">
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                        <template v-else>
                                            <div class="mb-3">
                                                <label>Profesi Ibu<span class="important-sign"> *</span></label>
                                                <!-- <input v-model="data_user.job_mother" type="text"    placeholder="Pekerjaan" :disabled="data_user.existance_state_mother !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_mother !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                <input type="text"    placeholder="Pekerjaan" >
                                            </div>
                                        </template>
                                        <div class="d-flex justify-content-between" style="gap: 10px">
                                            <div class="mb-3" style="width: 50%">
                                                <label>No Handphone Ibu</label>
                                                <!-- <input v-model="data_user.phone_number_mother" :class="cekdigitnoibu" @keyup="cekDigit($event.target.value, 'noibu')" maxlength="13" type="text"    placeholder="Nomor Handphone" :disabled="data_user.existance_state_mother !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_mother !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                <input maxlength="13" type="text"    placeholder="Nomor Handphone">
                                            </div>
                                            <div class="mb-3" style="width: 50%">
                                                <label>Email Ibu</label>
                                                <!-- <input v-model="data_user.email_mother" :class="cekdigitemailibu" @keyup="cekDigit($event.target.value, 'emailibu')" type="text"    placeholder="Email" :disabled="data_user.existance_state_mother !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_mother !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                <input type="text"    placeholder="Email">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- form bagian kanan -->
                                </div>

                                <div class="d-flex justify-content-end" style="gap: 10px; margin-top: 30px; margin-bottom: 30px">
                                    <button class="button-tutup" @click.prevent="backDataForm('Orang Tua')">Kembali</button>
                                    <button class="button-simpan" @click.prevent="nextDataForm('Orang Tua')">Selanjutnya</button>
                                </div>

                            </div>
                        </div>
                        <div v-if="konten === 'Wali'">
                            <div class="jarak">

                                <h4><b>Data Wali</b></h4>
                                <p style="margin-top: -10px">Silahkan isi formulir berikut dengan data yang benar!</p>

                                <div class="form">
                                    <!-- form bagian kiri -->
                                    <div class="form-a">
                                        <div class="mb-3">
                                            <label>Nama Wali</label>
                                            <!-- <input v-model="data_user.name_guardian" type="text"    placeholder="Nama Wali"> -->
                                            <input type="text"    placeholder="Nama Wali">
                                        </div>
                                        <div class="mb-3">
                                            <label>Status Wali</label>
                                            <!-- <select   v-model="data_user.existance_state_guardian" @change="onChangeStatusWali"> -->
                                            <select   >
                                                <option value="">-- Pilih Status Wali --</option>
                                                <!-- <option v-for="option_maried in options_maried" v-bind:value="option_maried.value" :key="option_maried.value">
                                                    {{ option_maried.text}}
                                                </option> -->
                                            </select>
                                        </div>
                                        <template v-if="sd_school_id !== 99">
                                            <div class="mb-3">
                                                <label>Tempat, dan Tanggal Lahir</label>
                                                <!-- <input v-model="data_user.dob_guardian" type="text"    placeholder="Tempat, dan tanggal lahir" :disabled="data_user.existance_state_guardian !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_guardian !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                <input type="text"    placeholder="Tempat, dan tanggal lahir" >
                                            </div>
                                        </template>
                                        <div class="d-flex justify-content-between" style="gap: 10px">
                                            <div class="mb-3" style="width: 50%">
                                                <label>Nomor KTP Wali</label>
                                                <!-- <input v-model="data_user.nik_guardian" :class="cekdigitnikwali" @keyup="cekDigit($event.target.value, 'nikwali')" maxlength="16" type="text"    placeholder="No. KTP" :disabled="data_user.existance_state_guardian !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_guardian !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                <input maxlength="16" type="text"    placeholder="No. KTP">
                                            </div>
                                            <div class="mb-3" style="width: 50%">
                                                <label>Pendidikan Terakhir</label>
                                                <!-- <input v-model="data_user.last_education_guardian" type="text"    placeholder="Pendidikan Terakhir" :disabled="data_user.existance_state_guardian !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_guardian !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                <input type="text"    placeholder="Pendidikan Terakhir">
                                            </div>
                                        </div>
                                        <template v-if="sd_school_id == 99">
                                            <div class="mb-3">
                                                <label>Profesi Wali</label>
                                                <!-- <input v-model="data_user.job_guardian" type="text"    placeholder="Pekerjaan" :disabled="data_user.existance_state_guardian !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_guardian !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                <input type="text"    placeholder="Pekerjaan">
                                            </div>
                                            <div class="d-flex justify-content-between" style="gap: 10px">
                                                <div class="mb-3" style="width: 50%">
                                                    <label>No Handphone Wali</label>
                                                    <!-- <input v-model="data_user.phone_number_guardian" :class="cekdigitnowali" @keyup="cekDigit($event.target.value, 'nowali')" maxlength="13" type="text"    placeholder="No Handphone" :disabled="data_user.existance_state_guardian !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_guardian !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                    <input maxlength="13" type="text"    placeholder="No Handphone" >
                                                </div>
                                                <div class="mb-3" style="width: 50%">
                                                    <label>Email Wali</label>
                                                    <!-- <input v-model="data_user.email_guardian" type="text"   :class="cekdigitemailwali" @keyup="cekDigit($event.target.value, 'emailwali')" placeholder="Email" :disabled="data_user.existance_state_guardian !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_guardian !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                    <input type="text"   placeholder="Email">
                                                </div>
                                            </div>
                                        </template>
                                        <template v-else>
                                            <div>
                                                <label>Alamat Lengkap Wali</label>
                                                <textarea style="width: 100%; height: 123px" rows="4" class="textarea" placeholder="Alamat Lengkap Wali"></textarea>
                                            </div>
                                            <div class="mb-1 ml-3 d-flex align-items-center" style="gap: 5px">
                                                <!-- <input type="checkbox" id="CheckboxWali" v-model="CheckboxWali" @change="onChangeAddress('alamatwali', $event)" :disabled="data_user.existance_state_guardian !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_guardian !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                <input style="width: 10%" type="checkbox" id="CheckboxWali">
                                                <label style="margin-top: 5px">Sama dengan Alamat Calon Peserta Didik</label>
                                            </div>
                                            <div class="d-flex justify-content-between" style="gap: 10px">
                                                <div class="mb-3" style="width: 50%">
                                                    <label>Profesi Wali</label>
                                                    <!-- <input v-model="data_user.job_guardian" type="text"    placeholder="Pekerjaan" :disabled="data_user.existance_state_guardian !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_guardian !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                    <input type="text"    placeholder="Pekerjaan">
                                                </div>
                                                <div class="mb-3" style="width: 50%">
                                                    <label>Pendapatan Bulanan</label>
                                                    <div class="d-flex align-items-center" style="gap: 5px">
                                                        <label>Rp.</label>
                                                        <!-- <input v-model="data_user.income_guardian" type="number"    placeholder="Pendapatan/Bulan" :disabled="data_user.existance_state_guardian !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_guardian !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                        <input type="number"    placeholder="Pendapatan/Bulan">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-between" style="gap: 10px">
                                                <div class="mb-3" style="width: 50%">
                                                    <label>No Handphone Wali</label>
                                                    <!-- <input v-model="data_user.phone_number_guardian" :class="cekdigitnowali" @keyup="cekDigit($event.target.value, 'nowali')" maxlength="13" type="text"    placeholder="No Handphone" :disabled="data_user.existance_state_guardian !== 'Masih Hidup'" :style="{ 'cursor': data_user.existance_state_guardian !== 'Masih Hidup' ? 'not-allowed' : 'auto' }"> -->
                                                    <input maxlength="13" type="text"    placeholder="No Handphone" >
                                                </div>
                                                <div class="mb-3" style="width: 50%">
                                                    <label>Email Wali</label>
                                                    <input type="text"   placeholder="Email">
                                                </div>
                                            </div>
                                        </template>
                                    </div>
                                    <!-- form bagian kiri -->
                                </div>

                                <div class="d-flex justify-content-end" style="gap: 10px; margin-top: 30px; margin-bottom: 30px">
                                    <button class="button-tutup" @click.prevent="backDataForm('Wali')">Kembali</button>
                                    <button class="button-simpan" @click.prevent="nextDataForm('Wali')">Selanjutnya</button>
                                </div>

                            </div>
                        </div>
                        <div v-if="konten === 'Beasiswa'">
                            <div class="jarak">

                                <template v-if="sd_school_id === 99">
                                    <h4><b>Data Bantuan Dana Sosial/Beasiswa</b></h4>
                                </template>
                                <template v-else>
                                    <h5><b>Data Bantuan Dana Sosial/Beasiswa & Kesehatan</b></h5>
                                </template>
                                <p style="margin-top: -10px">Silahkan isi formulir berikut dengan data yang benar!</p>

                                <div class="form">
                                    <!-- form bagian kiri -->
                                    <div class="form-a">
                                        <div class="mb-1">
                                            <label>Dana Bantuan Sosial/Beasiswa</label>
                                            <div class="ml-1 d-flex" style="gap: 30px">
                                                <div class="d-flex align-items-center" style="gap: 10px; margin-top: -5px">
                                                    <!-- <input style="width: 100%;" type="radio" value="ya" v-model="chooseBantuan"> -->
                                                    <input style="width: 100%;" type="radio" value="ya">
                                                    <label style="margin-top: 7px">Ya</label>
                                                </div>
                                                <div class="d-flex align-items-center" style="gap: 10px; margin-top: -5px">
                                                    <!-- <input style="width: 100%;" type="radio" value="tidak" @change="changeBantuan" v-model="chooseBantuan"> -->
                                                    <input style="width: 100%;" type="radio" value="tidak">
                                                    <label style="margin-top: 7px">Tidak</label>
                                                </div>
                                            </div>
                                        </div>
                                        <template v-if="sd_school_id !== 99">
                                            <div class="mb-3">
                                                <label>Nama Bantuan</label>
                                                <!-- <input v-model="data_user.name_assistance" placeholder="Nama Penerima Bantuan" style="width: 100%;" type="text" :disabled="chooseBantuan !== 'ya'" :style="{ 'cursor': chooseBantuan !== 'ya' ? 'not-allowed' : 'auto' }"> -->
                                                <input laceholder="Nama Penerima Bantuan" style="width: 100%;" type="text">
                                            </div>
                                            <div class="mb-3">
                                                <label>Nomor Tertera Dalam Bantuan</label>
                                                <!-- <input v-model="data_user.number_assistance" placeholder="Nomor Tertera Dalam Bantuan" style="width: 100%;" type="text" :disabled="chooseBantuan !== 'ya'" :style="{ 'cursor': chooseBantuan !== 'ya' ? 'not-allowed' : 'auto' }"> -->
                                                <input placeholder="Nomor Tertera Dalam Bantuan" style="width: 100%;" type="text" >
                                            </div>
                                            <div class="mb-3">
                                                <label>Nama Tertera</label>
                                                <!-- <input v-model="data_user.receiver_name_assistance" placeholder="Nama Tertera dalam Bantuan" style="width: 100%;" type="text" :disabled="chooseBantuan !== 'ya'" :style="{ 'cursor': chooseBantuan !== 'ya' ? 'not-allowed' : 'auto' }"> -->
                                                <input placeholder="Nama Tertera dalam Bantuan" style="width: 100%;" type="text">
                                            </div>
                                        </template>
                                        <template v-else>
                                            <div class="mb-3">
                                                <label>Bantuan yang sudah pernah diterima</label>
                                                <div class="ml-1 d-flex align-items-center" style="gap: 10px">
                                                    <!-- <input value="PIP" v-model="CheckboxPIP1" type="checkbox" @change="showOptionBantuan('PIP', $event)" :disabled="chooseBantuan !== 'ya'" :style="{ 'cursor': chooseBantuan !== 'ya' ? 'not-allowed' : 'auto' }"> -->
                                                    <input value="PIP" type="checkbox" >
                                                    <label style="margin-bottom: 7px">Program Indonesia Pintar <b>(PIP)</b></label>
                                                </div>
                                                <div class="ml-1 d-flex align-items-center" style="gap: 10px">
                                                    <input value="KJP" type="checkbox">
                                                    <label style="margin-bottom: 7px">Kartu Jakarta Pintar <b>(KJP)</b></label>
                                                </div>
                                                <div class="ml-1 d-flex align-items-center" style="gap: 10px">
                                                    <!-- <input value="PKH" v-model="CheckboxPKH1" type="checkbox" @change="showOptionBantuan('PKH', $event)" :disabled="chooseBantuan !== 'ya'" :style="{ 'cursor': chooseBantuan !== 'ya' ? 'not-allowed' : 'auto' }"> -->
                                                    <input value="PKH" type="checkbox">
                                                    <label style="margin-bottom: 7px">Program Keluarga Harapan <b>(PKH)</b></label>
                                                </div>
                                                <div class="ml-1 d-flex align-items-center" style="gap: 10px">
                                                    <!-- <input value="bantuan_lain" v-model="CheckboxBeasiswa1" @change="showOptionBantuan('BantuanLain', $event)" type="checkbox" :disabled="chooseBantuan !== 'ya'" :style="{ 'cursor': chooseBantuan !== 'ya' ? 'not-allowed' : 'auto' }"> -->
                                                    <input value="bantuan_lain" type="checkbox">
                                                    <label style="margin-bottom: 7px">Bantuan/Beasiswa Lain..</label>
                                                </div>
                                                <!-- <template v-if="CheckboxBeasiswa1">
                                                    <input class="ml-4" v-model="namaBantuan" placeholder="Nama Bantuan" style="width: 95%;" type="text">
                                                </template> -->
                                            </div>
                                            <div class="mb-3">
                                                <label>Tinggi Badan <b>[CM]</b><span class="important-sign">*</span></label>
                                                <!-- <input v-model="data_user.height" placeholder="Tinggi Badan" style="width: 100%;" type="number"> -->
                                                <input placeholder="Tinggi Badan" style="width: 100%;" type="number">
                                            </div>
                                            <div class="mb-3">
                                                <label>Berat Badan <b>[KG]</b><span class="important-sign">*</span></label>
                                                <!-- <input v-model="data_user.weight" placeholder="Berat Badan" style="width: 100%;" type="number"> -->
                                                <input placeholder="Berat Badan" style="width: 100%;" type="number">
                                            </div>
                                        </template>
                                    </div>
                                    <!-- form bagian kiri -->

                                    <!-- form bagian kanan -->
                                    <template v-if="sd_school_id !== 99">
                                        <div class="form-a">
                                            <div class="mb-1">
                                                <label>Berkebutuhan Khusus<span class="important-sign"> *</span></label>
                                                <div class="d-flex" style="gap: 30px">
                                                    <div class="d-flex align-items-center" style="gap: 10px; margin-top: -5px">
                                                        <!-- <input style="width: 100%;" type="radio" value="ya" v-model="chooseKebutuhan"> -->
                                                        <input style="width: 100%;" type="radio" value="ya">
                                                        <label style="margin-top: 7px">Ya</label>
                                                    </div>
                                                    <div class="d-flex align-items-center" style="gap: 10px; margin-top: -5px">
                                                        <!-- <input style="width: 100%;" type="radio" value="tidak" v-model="chooseKebutuhan" @change="changeBantuanKebutuhan"> -->
                                                        <input style="width: 100%;" type="radio" value="tidak" >
                                                        <label style="margin-top: 7px">Tidak</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label>Kebutuhan</label>
                                                <!-- <input v-model="data_user.special_needs" placeholder="Nama Kebutuhan" style="width: 100%;" type="text" :disabled="chooseKebutuhan !== 'ya'" :style="{ 'cursor': chooseKebutuhan !== 'ya' ? 'not-allowed' : 'auto' }"> -->
                                                <input placeholder="Nama Kebutuhan" style="width: 100%;" type="text" >
                                            </div>
                                            <div class="mb-3">
                                                <label>Tinggi Badan <b>[CM]</b><span class="important-sign">*</span></label>
                                                <!-- <input v-model="data_user.height" placeholder="Tinggi Badan" style="width: 100%;" type="number"> -->
                                                <input placeholder="Tinggi Badan" style="width: 100%;" type="number">
                                            </div>
                                            <div class="mb-3">
                                                <label>Berat Badan <b>[KG]</b><span class="important-sign">*</span></label>
                                                <!-- <input v-model="data_user.weight" placeholder="Berat Badan" style="width: 100%;" type="number"> -->
                                                <input placeholder="Berat Badan" style="width: 100%;" type="number">
                                            </div>
                                        </div>
                                    </template>
                                    <!-- form bagian kanan -->
                                </div>

                                <div class="d-flex justify-content-end" style="gap: 10px; margin-top: 30px; margin-bottom: 30px">
                                    <button class="button-tutup" @click.prevent="backDataForm('Beasiswa')">Kembali</button>
                                    <button class="button-simpan" @click.prevent="UserStore">Selanjutnya</button>
                                </div>

                            </div>
                        </div>
                        <div v-if="konten === 'Cetak'">
                            <div class="ml-3 mr-3" style="text-align: center; margin-top: 40px">

                                <h3 style="margin-bottom: 10px"><b>Pendaftaran Selesai!</b></h3>
                                <p>Terima kasih! Data registrasi Anda telah berhasil diproses. <br>Sekarang, Anda dapat <b>mencetak Kartu Pendaftaran</b> dan <b>Surat Pernyataan</b> sebagai pegangan siswa, serta <b>syarat wajib pendaftaran ulang</b>. <br>Gunakan tombol di bawah ini untuk mencetak dokumen-dokumen tersebut.</p>

                                <div class="cetak">
                                    <!-- <button @click="KartuPendaftaran" class="button btn-1 rounded-pill shadow">Cetak Kartu Pendaftaran</button> -->
                                    <button class="button-edit">Cetak Kartu Pendaftaran</button>
                                    <!-- <button @click="DetailPendaftaran" class="button btn-1 rounded-pill shadow">Cetak Detail Pendaftaran</button> -->
                                    <button class="button-edit">Cetak Detail Pendaftaran</button>
                                    <!-- <button @click="SuratPernyataan" class="button btn-1 rounded-pill shadow">Cetak Surat Pernyataan</button> -->
                                    <button class="button-edit">Cetak Surat Pernyataan</button>
                                </div>

                            </div>
                        </div>
                    <!-- form input data -->

                </div>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        data(){
            return{
                token_show: false,
                sd_school_id: '',
                konten: 'Peserta Didik',
                get_ppdb_requirements: [
                    {
                        row_number: 1,
                        ppdb_requirements_id: "244",
                        ppdb_period_name_id: "170",
                        sd_school_id: "66",
                        code: "SKHUN",
                        value: null,
                        is_attach: "Y",
                        created_date: "03-JAN-24 15:31:20",
                        created_by: "7861",
                        type_code: "M"
                    },
                    {
                        row_number: 2,
                        ppdb_requirements_id: "298",
                        ppdb_period_name_id: "170",
                        sd_school_id: "66",
                        code: "Foto",
                        value: null,
                        is_attach: "Y",
                        created_date: "26-FEB-24 15:24:43",
                        created_by: "34081",
                        type_code: "O"
                    },
                    {
                        row_number: 3,
                        ppdb_requirements_id: "299",
                        ppdb_period_name_id: "170",
                        sd_school_id: "66",
                        code: "Data Nilai",
                        value: null,
                        is_attach: "Y",
                        created_date: "26-FEB-24 15:25:03",
                        created_by: "34081",
                        type_code: "M"
                    }
                ]
            }
        },
        methods: {
            nextDataForm(value){
                
                console.log(this.get_ppdb_requirements);
                if(value === 'Peserta Didik'){

                    // // validasi form sebelah kiri
                    //     if(this.data_user.ppdb_period_name_id === '0'){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Periode PPDB belum dipilih'
                    //         });

                    //         this.progres1 = '';
                    //         return;
                            
                    //     }
                    //     if(this.data_user.ppdb_school_skill_id === '0'){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Minat Jurusan belum dipilih'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                    //     }

                    //     if(this.data_user.full_name === ''){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Nama belum diisi'
                    //         });

                    //         this.progres1 = '';
                    //         return;
                            
                    //     } 
                    //     if(this.data_user.nisn === ''){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'NISN belum diisi'
                    //         });

                    //         this.progres1 = '';
                    //         return;
                            
                    //     }
                    //     if(this.cekdigitnisn === 'is-invalid'){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'NISN kurang dari 10 angka/ NISN yang dimasukan mengandung huruf'
                    //         });

                    //         this.progres1 = '';
                    //         return;
                            
                    //     }

                    //     if(this.data_user.place_of_birth === ''){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Tempat Lahir belum diisi'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                            
                    //     } 
                    //     if(this.data_user.date_of_birth === ''){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Tanggal Lahir belum diisi'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                            
                    //     } 
                    //     if(this.data_user.sd_religion_id === '0'){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Agama belum dipilih'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                            
                    //     } 
                    //     if(this.data_user.address === ''){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Alamat belum diisi'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                            
                    //     }
                    //     if(this.data_user.sd_province_id === '0'){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Provinsi belum dipilih'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                            
                    //     }
                    //     if(this.data_user.sd_city_id === '0'){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Kabupaten/Kota belum dipilih'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                            
                    //     } 
                    //     if(this.data_user.district === ''){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Kecamatan belum diisi'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                            
                    //     }
                    //     if(this.data_user.ward === ''){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Keluarahan belum diisi'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                            
                    //     }
                    //     if(this.data_user.password === ''){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //           file  text: 'Password belum diisi'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                            
                    //     }
                    //     for (let i = 0; i < this.get_ppdb_requirements.length; i++) {
                    //         if(this.get_ppdb_requirements[i].type_code !== "O" ){
                    //             if(this.get_ppdb_requirements[i].value === null || this.get_ppdb_requirements[i].value === '' ){
                    //                 this.$swal({
                    //                     icon: 'warning',
                    //                     title: 'Tidak bisa ketahapan selanjutnya',
                    //                     text: 'File '+this.get_ppdb_requirements[i].code+' Belum Ditambahkan'
                    //                 });
                    //                 return;
                    //             }

                    //         }
                    //     }
                    // // validasi form sebelah kiri

                    // // validasi form sebelah kanan
                    //     if(this.data_user.phone_number_participant === ''){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Nomor Handphone siswa belum diisi'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                    //     }
                    //     if(this.cekdigitnohp === 'is-invalid'){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Nomor Handphone minimal 10 digit dan tidak Mengandung huruf'
                    //         });

                    //         this.progres1 = '';
                    //         return; 
                    //     }

                    //     if(this.data_user.email === ''){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Email belum diisi'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                    //     }
                    //     if(this.cekdigitemail === 'is-invalid'){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Email yang diinputkan kurang tepat'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                    //     }
                        
                    //     if(this.data_user.nik_participant === ''){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Nomor Induk Keluarga belum diisi'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                    //     }
                    //     if(this.cekdigitnik === 'is-invalid'){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Nomor Induk Keluarga kurang dari 16 angka dan tidak Mengandung huruf'
                    //         });

                    //         this.progres1 = '';
                    //         return; 
                    //     }

                    //     if(this.data_user.kk_participant === ''){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Nomor kartu keluarga belum diisi'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                    //     }
                    //     if(this.cekdigitkk === 'is-invalid'){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Nomor kartu keluarga kurang dari 16 angka dan tidak Mengandung huruf'
                    //         });

                    //         this.progres1 = '';
                    //         return; 
                    //     }

                    //     if(this.data_user.child_position === ''){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Posisi anak belum diisi'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                    //     }
                    //     if(this.data_user.number_of_sibling === ''){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Jumlah saudara kandung belum diisi'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                    //     }
                    //     if(this.data_user.stat_of_residence === '0'){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Status tempat tinggal belum dipilih'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                    //     }
                    //     if(this.data_user.stat_of_residence === '0'){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Status tempat tinggal belum dipilih'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                    //     }
                    //     if(this.data_user.distance_from_home === ''){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Jarak dari rumah belum diisi'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                    //     }
                    //     if(this.data_user.postal_code === ''){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Kode Pos belum diisi'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                    //     }
                    //     if(this.data_user.transportation === '0'){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Alat transportasi belum dipilih'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                    //     }

                    //     if(this.sd_school_id !== 99){
                    //         if(this.data_user.time_travel === ''){
                    //             this.$swal({
                    //                 icon: 'warning',
                    //                 title: 'Tidak bisa ketahapan selanjutnya',
                    //                 text: 'Waktu tempuh dari rumah - sekolah belum diisi'
                    //             });
                    //             this.progres1 = '';
                    //             return;
                    //         }
                    //     }

                    //     if(this.data_user.getting_info === '0'){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Sumber informasi sekolah belum dipilih'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                    //     }
                    //     if(this.data_user.school_name_before === ''){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Nama Asal Sekolah belum diisi'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                    //     }
                    //     if(this.data_user.after_finish === '0'){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Rencana setelah sekolah belum dipilih'
                    //         });
                    //         this.progres1 = '';
                    //         return;
                    //     }
                    // // validasi form sebelah kanan

                    this.progres1 = 'Done';
                    this.konten = 'Orang Tua';

                    const cardElement = document.getElementById('formInput');
                    if (cardElement) {
                        cardElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                    }

                }else if(value === 'Orang Tua'){

                    // // validasi form sebelah kiri
                    //     if(this.data_user.parent_name === ''){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Nama Ayah Kandung belum diisi'
                    //         });

                    //         this.progres2 = '';
                    //         return;
                            
                    //     } 
                    //     if(this.data_user.existance_state_father === ''){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Status Ayah belum dipilih'
                    //         });

                    //         this.progres2 = '';
                    //         return;
                            
                    //     }

                    //     if(this.data_user.existance_state_father !== 'Sudah meninggal' ){
                    //         if(this.data_user.nik_father === ''){
                    //             this.$swal({
                    //                 icon: 'warning',
                    //                 title: 'Tidak bisa ketahapan selanjutnya',
                    //                 text: 'Nomor KTP Ayah belum diisi'
                    //             });
    
                    //             this.progres2 = '';
                    //             return;
                                
                    //         }
                    //         if(this.cekdigitnikayah === 'is-invalid'){
                    //             this.$swal({
                    //                 icon: 'warning',
                    //                 title: 'Tidak bisa ketahapan selanjutnya',
                    //                 text: 'Nomor KTP Ayah kurang dari 16 angka dan tidak mengandung huruf'
                    //             });
    
                    //             this.progres2 = '';
                    //             return; 
                    //         }
    
                    //         if(this.data_user.last_education_father === ''){
                    //             this.$swal({
                    //                 icon: 'warning',
                    //                 title: 'Tidak bisa ketahapan selanjutnya',
                    //                 text: 'Pendidikan Terakhir Ayah belum diisi'
                    //             });
    
                    //             this.progres2 = '';
                    //             return;
                                
                    //         }
                    //         if(this.sd_school_id !== 99){
                    //             if(this.data_user.parent_address === ''){
                    //                 this.$swal({
                    //                     icon: 'warning',
                    //                     title: 'Tidak bisa ketahapan selanjutnya',
                    //                     text: 'Alamat Lengkap Ayah belum diisi'
                    //                 });
        
                    //                 this.progres2 = '';
                    //                 return;
                                    
                    //             } 
                    //         }
                    //         if(this.data_user.parent_job === ''){
                    //             this.$swal({
                    //                 icon: 'warning',
                    //                 title: 'Tidak bisa ketahapan selanjutnya',
                    //                 text: 'Profesi Ayah belum diisi'
                    //             });
    
                    //             this.progres2 = '';
                    //             return;
                                
                    //         }
                    //         if(this.sd_school_id !== 99){
                    //             if(this.data_user.income_father === ''){
                    //                 this.$swal({
                    //                     icon: 'warning',
                    //                     title: 'Tidak bisa ketahapan selanjutnya',
                    //                     text: 'Pendapatan Bulanan Ayah belum diisi'
                    //                 });
        
                    //                 this.progres2 = '';
                    //                 return;
                                    
                    //             }
                    //         }
                            
                    //         if(this.cekdigitnoayah === 'is-invalid'){
                    //             this.$swal({
                    //                 icon: 'warning',
                    //                 title: 'Tidak bisa ketahapan selanjutnya',
                    //                 text: 'Nomor Handphone ayah minimal 10 digit dan tidak mengandung huruf'
                    //             });
    
                    //             this.progres2 = '';
                    //             return; 
                    //         }
                    //         if(this.cekdigitemailayah === 'is-invalid'){
                    //             this.$swal({
                    //                 icon: 'warning',
                    //                 title: 'Tidak bisa ketahapan selanjutnya',
                    //                 text: 'Email ayah yang diinputkan kurang tepat'
                    //             });
                    //             this.progres2 = '';
                    //             return;
                    //         }
                    //     }
                    // // validasi form sebelah kiri

                    // // validasi form sebelah kanan
                    
                    //     if(this.data_user.name_mother === ''){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Nama Ibu Kandung belum diisi'
                    //         });

                    //         this.progres2 = '';
                    //         return;
                            
                    //     } 
                    //     if(this.data_user.existance_state_mother === ''){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Status ibu belum dipilih'
                    //         });

                    //         this.progres2 = '';
                    //         return;
                            
                    //     }
                    //     if(this.data_user.existance_state_mother !== 'Sudah meninggal' ){
                    //         if(this.data_user.nik_mother === ''){
                    //             this.$swal({
                    //                 icon: 'warning',
                    //                 title: 'Tidak bisa ketahapan selanjutnya',
                    //                 text: 'Nomor KTP Ibu belum diisi'
                    //             });
    
                    //             this.progres2 = '';
                    //             return;
                                
                    //         }
                    //         if(this.cekdigitnikibu === 'is-invalid'){
                    //             this.$swal({
                    //                 icon: 'warning',
                    //                 title: 'Tidak bisa ketahapan selanjutnya',
                    //                 text: 'Nomor KTP Ibu kurang dari 16 angka dan tidak mengandung huruf'
                    //             });
    
                    //             this.progres2 = '';
                    //             return; 
                    //         }
    
                    //         if(this.data_user.last_education_mother === ''){
                    //             this.$swal({
                    //                 icon: 'warning',
                    //                 title: 'Tidak bisa ketahapan selanjutnya',
                    //                 text: 'Pendidikan Terakhir Ibu belum diisi'
                    //             });
    
                    //             this.progres2 = '';
                    //             return;
                                
                    //         } 
                    //         if(this.sd_school_id !== 99){
                    //             if(this.data_user.address_mother === ''){
                    //                 this.$swal({
                    //                     icon: 'warning',
                    //                     title: 'Tidak bisa ketahapan selanjutnya',
                    //                     text: 'Alamat Lengkap Ibu belum diisi'
                    //                 });
        
                    //                 this.progres2 = '';
                    //                 return;
                                    
                    //             } 
                    //         }
                    //         if(this.data_user.job_mother === ''){
                    //             this.$swal({
                    //                 icon: 'warning',
                    //                 title: 'Tidak bisa ketahapan selanjutnya',
                    //                 text: 'Profesi Ibu belum diisi'
                    //             });
    
                    //             this.progres2 = '';
                    //             return;
                                
                    //         } 
                    //         if(this.sd_school_id !== 99){
                    //             if(this.data_user.income_mother === ''){
                    //                 this.$swal({
                    //                     icon: 'warning',
                    //                     title: 'Tidak bisa ketahapan selanjutnya',
                    //                     text: 'Pendapatan Bulanan Ibu belum diisi'
                    //                 });
        
                    //                 this.progres2 = '';
                    //                 return;
                                    
                    //             } 
                    //         }
    
                    //         if(this.cekdigitnoibu === 'is-invalid'){
                    //             this.$swal({
                    //                 icon: 'warning',
                    //                 title: 'Tidak bisa ketahapan selanjutnya',
                    //                 text: 'Nomor Handphone Ibu minimal 10 digit dan tidak mengandung huruf'
                    //             });
    
                    //             this.progres2 = '';
                    //             return; 
                    //         }
                    //         if(this.cekdigitemailibu === 'is-invalid'){
                    //             this.$swal({
                    //                 icon: 'warning',
                    //                 title: 'Tidak bisa ketahapan selanjutnya',
                    //                 text: 'Email ibu yang diinputkan kurang tepat'
                    //             });
                    //             this.progres2 = '';
                    //             return;
                    //         }
                    //     }
                        
                    // // validasi form sebelah kanan
                    
                    this.progres2 = 'Done';
                    this.konten = 'Wali';

                    const cardElement = document.getElementById('formInput');
                    if (cardElement) {
                        cardElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                    }
                }else if(value === 'Wali'){

                    // if(this.data_user.existance_state_guardian !== 'Sudah meninggal' ){
                    //     if(this.cekdigitnikwali === 'is-invalid'){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Nomor KTP Wali kurang dari 16 angka dan tidak mengandung huruf'
                    //         });
    
                    //         this.progres3 = '';
                    //         return; 
                    //     }
                    //     if(this.cekdigitnowali === 'is-invalid'){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Nomor Handphone Wali minimal 10 digit dan tidak mengandung huruf'
                    //         });
    
                    //         this.progres3 = '';
                    //         return; 
                    //     }
                    //     if(this.cekdigitemailwali === 'is-invalid'){
                    //         this.$swal({
                    //             icon: 'warning',
                    //             title: 'Tidak bisa ketahapan selanjutnya',
                    //             text: 'Email wali yang diinputkan kurang tepat'
                    //         });
                    //         this.progres3 = '';
                    //         return;
                    //     }
                    // }

                    this.progres3 = 'Done';
                    this.konten = 'Beasiswa';

                    const cardElement = document.getElementById('formInput');
                    if (cardElement) {
                        cardElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                    }
                }

            },

            backDataForm(value){
                if(value === 'Orang Tua'){
                    this.konten = 'Peserta Didik';

                    const cardElement = document.getElementById('formInput');
                    if (cardElement) {
                        cardElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                    }
                }else if(value === 'Wali'){
                    this.konten = 'Orang Tua';

                    const cardElement = document.getElementById('formInput');
                    if (cardElement) {
                        cardElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                    }
                }else if(value === 'Beasiswa'){
                    this.konten = 'Wali';

                    const cardElement = document.getElementById('formInput');
                    if (cardElement) {
                        cardElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                    }
                }
            },

            UserStore(){
                this.progres4 = 'Done';
                this.konten = 'Cetak';
            },
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

    .token {
        display: flex;
        justify-content: space-between;
        align-items:center;
    }

    .sub-token {
        display: flex;
        justify-content: space-between;
        align-items:center;
        gap: 20px;
    }

    .sub-token1 {
        width: 35%;
    }

    .token {
        width: 65%;
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

    .form {
        display: flex;
        gap: 15px;
    }

    .form-a,
    .form-b {
        width: 50%;
    }

    .important-sign{
        color: red;
        font-weight: bold;
    }

    .jarak {
        margin: 40px 30px 0px 30px
    }

    .cetak {
        display: flex;
        justify-content: center;
        gap: 20px; 
        margin-top: 30px; 
        margin-bottom: 30px;
    }

    @media screen and (min-width: 360px) and (max-width: 527px) {
        h2 {
            font-size: 20pt;
            padding: 0px 0px -20px 4px;
        }

        .information {
            flex-direction: column;
        }

        .information .card1,
        .information .card2 {
            width: 100%;
        }
        
        .sub-token {
            flex-direction: column;
        }

        .sub-token1, .token {
            width: 100%;
        }

        .sub-token1 button{
            width: 100%;
        }

        .card2 h5 {
            font-size: 13pt;
        }

        .card2 p {
            font-size: 11pt;
            text-align: justify;
            margin-bottom: 6px;
        }
        

        #header-input {
            display: none !important; 
        }

        .jarak {
            margin: 30px 10px 0px 10px;
        }

        .form {
            flex-direction: column;
        }

        .form-a,
        .form-b {
            width: 100%;
        }

        .cetak {
            flex-direction: column !important;
        }
        .cetak button {
            width: 100%;
            margin-bottom: -10px;
        }
    }

</style>
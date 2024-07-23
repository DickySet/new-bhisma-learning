<template>

        <div class="welcome pt-3" data-aos="fade-up">
            <h3><span style="font-family: 'Calibre'">Selamat Datang,</span> Dicky Setiawan</h3>
            <p>Di sistem manajemen pembelajaran <b>Bhisma Learning</b></p>
        </div>

        <div class="petunjuk" data-aos="fade-up">
            <button class="button-simpan">Buku Petunjuk BLS
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" style="margin-left: 5px" fill="currentColor" class="bi bi-journal-album" viewBox="0 0 16 16">
                    <path d="M5.5 4a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm1 7a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"/>
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                </svg>
            </button>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 10px" data-aos="fade-up">
            <div class="kotak1" @click="display('kontak')">
                <div class="d-flex justify-content-between" style="gap: 20px">
                    <div class="isikotak0 shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" style="font-weight:bold; color:white" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
                            <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                            <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
                        </svg>
                    </div>
                    <div class="position">
                        <label>Guru</label>
                        <p>24</p>
                    </div>
                </div>
                <div class="p-3" style="margin-top: -50px; color: black">
                    <hr style="border: 1px solid black;">
                    <p class="desk-1" style="margin-top: -10px; margin-bottom: -5px;">Jumlah Guru</p>
                </div>
            </div>
            <div class="kotak1" @click="display('kontak')">
                <div class="d-flex justify-content-between" style="gap: 20px">
                    <div class="isikotak1 shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" style="font-weight:bold; color:white" fill="currentColor" class="bi bi-person-video3" viewBox="0 0 16 16">
                            <path d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2"/>
                            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783Q16 12.312 16 12V4a2 2 0 0 0-2-2z"/>
                        </svg>
                    </div>
                    <div class="position">
                        <label>Wali Kelas</label>
                        <p>12</p>
                    </div>
                </div>
                <div class="p-3" style="margin-top: -50px; color: black">
                    <hr style="border: 1px solid black;">
                    <p class="desk-1" style="margin-top: -10px; margin-bottom: -5px;">Jumlah Wali Kelas</p>
                </div>
            </div>
            <div class="kotak1" @click="display('terkirim')">
                <div class="d-flex justify-content-between" style="gap: 40px">
                    <div class="isikotak2 shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" style="font-weight:bold; color:white" fill="currentColor" class="bi bi-person-badge" viewBox="0 0 16 16">
                            <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z"/>
                        </svg>
                    </div>
                    <div class="position">
                        <label>Staff</label>
                        <p>7</p>
                    </div>
                </div>
                <div class="p-3" style="margin-top: -50px; color: black">
                    <hr style="border: 1px solid black;">
                    <p class="desk-1" style="margin-top: -10px; margin-bottom: -5px;">Jumlah Staff</p>
                </div>

            </div>
            <div class="kotak1" @click="display('ditolak')">
                <div class="d-flex justify-content-between">
                    <div class="isikotak3 shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" style="font-weight:bold; color:white" class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                        </svg>
                    </div>
                    <div class="position">
                        <label>Siswa</label>
                        <p>254</p>
                    </div>
                </div>
                <div class="p-3" style="margin-top: -50px; color: black">
                    <hr style="border: 1px solid black;">
                    <p class="desk-1" style="margin-top: -10px; margin-bottom: -5px;">Jumlah Siswa Terdaftar</p>
                </div>
            </div>
        </div>

        <div class="card border-0 mt-3">
            <div class="card-body">
                <div class="padding-content">
                    
                    <Title :title="title" :subTitle="subTitle"/>
    
                    <WebAccessChart />
                    
                </div>
            </div>
        </div>
</template>

<script>

    import WebAccessChart from '../../components/Chart/WebAccessChart.vue';
    import Title from '../../components/TitlePage.vue';

    export default {

        components:{
            WebAccessChart,
            Title
        },
        data(){
            return {
                title: 'Web Access',
                subTitle: 'Menampilkan jumlah orang yang mengakses web',
            }
        },
    }

</script>

<style>

    .welcome p {
        margin-top: -11px;
        font-size: 12pt;
    }

    .petunjuk {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 30px;
        margin-top: -5px;
    }

.kotak1 {
  /* cursor: pointer; */
  background-color: white;
  flex: 1 1 200px;
  /* height: 100px; */
  border-radius: 15px;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); */
}

.isikotak0 {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 15px;
  width: 75px;
  height: 75px;
  background-image: linear-gradient(to bottom, #2ccf7e 0%, #067c7e 100%);
  margin: -10px 0px 0px 30px;
}

.isikotak1 {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 15px;
  width: 75px;
  height: 75px;
  background-image: linear-gradient(to bottom, #EE427D 0%, #A8144A 100%);
  margin: -10px 0px 0px 30px;
}

.isikotak2 {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 15px;
  width: 75px;
  height: 75px;
  margin: -10px 0px 0px 30px;
  background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%);
}

.isikotak3 {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 15px;
  width: 75px;
  height: 75px;
  margin: -10px 0px 0px 30px;
  background-image: linear-gradient(to bottom, #3C3C43 0%, #1E1E1F 100%);
}

.position {
  margin-top: 10px;
  margin-right: 30px;
  text-align: right;
}

.position label {
  font-size: 12pt;
  margin-top: -5px;
}

.position p {
  font-size: 29pt;
  margin-top: -11px;
  font-weight: bold;
}
</style>

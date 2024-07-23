<template>

    <div class="d-flex" id="main">

        <aside id="sidebar" class="js-sidebar">

            <router-link to="/dashboard" style="text-decoration: none; color: black;">
                <div class="d-flex justify-content-center align-items-center title-dashboard" style="gap: 18px; cursor: pointer; margin-bottom: -5px">
                    <img src="../../assets/image/logo.png" width="40">
                    <h6 style="cursor:pointer; font-size: 14pt; margin-top: 20px;"><b>Bhisma Interaktif</b></h6>
                </div>
            </router-link>
            <hr>

            <div class="nav-item" style="margin-top: -5px">
                <template v-for="(header, a) in data_header" :key="header.menu_name">
                    <label style="margin-bottom: 5px; margin-top: 10px;"><b>{{ header.menu_name }}</b></label>

                    <template v-for="(sub_header, b) in header.sub_menu" :key="sub_header.sub_menu_name">
                        <div class="d-flex align-items-center menu" data-bs-toggle="collapse" :href="'#collapseExample'+a+b" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <div class="icon shadow" v-html="sub_header.icon"></div>
                            <label style="margin-top: 5px">{{ sub_header.sub_menu_name }}</label>
                        </div>
                        <div class="collapse" :id="'collapseExample'+a+b">
                            <template v-for="(sub_header_children, b) in sub_header.data_sub_children" :key="sub_header_children.menu_name">
                                <router-link to="/profile">
                                    <div class="d-flex align-items-center menu1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                        </svg>
                                        <label style="margin-top: 5px; cursor: pointer">{{ sub_header_children.menu_name }}</label>
                                    </div>
                                </router-link>
                            </template>
                        </div>
                    </template>
                </template>
            </div>

        </aside>

        <main class="content">
            <div class="navbars">
                <div class="kotak_1">
                    <div class="kotak_1_1">
                        <p>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                                </svg>
                            </span> / Pages / {{ $route.name }}
                        </p>
                        <h5 style="margin-top: -15px; text-transform: capitalize"><b>{{ $route.name }}</b></h5>
                    </div>
                    <div style="cursor:pointer; margin-top: 5px" id="sidebar-toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </div>
                </div>
                <div class="kotak_2">
                    <div class="kotak_2_1">
                        <select>
                            <option value="0">Bhisma Interaktif</option>
                        </select>
                        <select>
                            <option value="0">Tahun Ajaran 2024/2025</option>
                        </select>
                        <select>
                            <option value="0">Kurikulum Merdeka</option>
                        </select>
                    </div>
                    <label>|</label>
                    <div class="dropdown">
                        <div @click.prevent="Logout" style="cursor:pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>

            <div class="isi p-3">
                <RouterView />
            </div>

            <footer class="mainPage">
                <p>&copy; 2024 <a style="text-decoration: none; color: blue; font-weight: bold" href="https://smservindo.co.id/#/">Servindo</a>. All rights reserved.</p>
            </footer>

        </main>

    </div>

</template>

<script>

    import { mapActions } from 'vuex'

    export default {
        data() {
            return {
                data_header: [
                    {
                        menu_name: 'Tampilan',
                        sub_menu:
                        [
                            {
                                sub_menu_name: 'Persiapan Sekolah',
                                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                                            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                                        </svg>`,
                                data_sub_children: [
                                    {
                                        menu_name: "Profile",
                                        menu_path: "profile"
                                    },
                                    {
                                        menu_name: "Examination",
                                        menu_path: "examination"
                                    },
                                ]
                            }
                        ]

                    },
                    {
                        menu_name: 'Administrator',
                        sub_menu:
                        [
                            {
                                sub_menu_name: 'Persiapan Sekolah',
                                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                                            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                                        </svg>`,
                                data_sub_children: [
                                    {
                                        menu_name: "Sekolah",
                                        menu_path: "kelolasekolah",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Tahun Akademik",
                                        menu_path: "academicyear",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Kalender Akademik",
                                        menu_path: "academiccalendar",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Kurikulum Kelas",
                                        menu_path: "curriculum/classes",
                                        icon: "fas fa-school"
                                    },
                                ]
                            },
                            {
                                sub_menu_name: 'Komunikasi',
                                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-broadcast" viewBox="0 0 16 16">
                                            <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707m2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708m5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708m2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
                                        </svg>`,
                                data_sub_children: [
                                    {
                                        menu_name: "Broadcast Pesan",
                                        menu_path: "broadcastmessage",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Meeting",
                                        menu_path: "meeting",
                                        icon: "fas fa-school"
                                    },
                                ]
                            },
                            {
                                sub_menu_name: 'Pengaturan Website',
                                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
                                        </svg>`,
                                data_sub_children: [
                                    {
                                        menu_name: "Album",
                                        menu_path: "post_album_index",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Berita",
                                        menu_path: "post_news_index",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Galeri Video",
                                        menu_path: "post_videos_index",
                                        icon: "fas fa-school"
                                    },
                                ]
                            },
                        ]

                    },
                    {
                        menu_name: 'Pembelajaran',
                        sub_menu:
                        [
                            {
                                sub_menu_name: 'Persiapan Sekolah',
                                icon: ` <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-house-gear" viewBox="0 0 16 16">
                                            <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708z"/>
                                            <path d="M11.886 9.46c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.044c-.613-.181-.613-1.049 0-1.23l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
                                        </svg>`,
                                data_sub_children: [
                                    {
                                        menu_name: "Mata Pelajaran",
                                        menu_path: "mapping/grade-level-subjects",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Tipe Mata Pelajaran",
                                        menu_path: "course_type_school",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Kompetensi Dasar",
                                        menu_path: "teacher_teaching_class_admin",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Penyusunan dan Nilai TP",
                                        menu_path: "curriculum_class_admin",
                                        icon: "fas fa-school"
                                    },
                                ]
                            },
                            {
                                sub_menu_name: 'Ujian Latihan',
                                icon: ` <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-vector-pen" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"/>
                                            <path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z"/>
                                        </svg>`,
                                data_sub_children: [
                                    {
                                        menu_name: "Daftar Latihan",
                                        menu_path: "exercises/1",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Hasil Latihan",
                                        menu_path: "resultexercises",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Kompetensi Dasar",
                                        menu_path: "teacher_teaching_class_admin",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Penyusunan dan Nilai TP",
                                        menu_path: "curriculum_class_admin",
                                        icon: "fas fa-school"
                                    },
                                ]
                            },
                            {
                                sub_menu_name: 'Bank Soal Ujian',
                                icon: ` <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-journal-bookmark-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"/>
                                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                                        </svg>`,
                                data_sub_children: [
                                    {
                                        menu_name: "Daftar Latihan",
                                        menu_path: "exercises/1",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Hasil Latihan",
                                        menu_path: "resultexercises",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Kompetensi Dasar",
                                        menu_path: "teacher_teaching_class_admin",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Penyusunan dan Nilai TP",
                                        menu_path: "curriculum_class_admin",
                                        icon: "fas fa-school"
                                    },
                                ]
                            },
                        ]

                    },
                    {
                        menu_name: 'Data Sekolah',
                        sub_menu:
                        [
                            {
                                sub_menu_name: 'Kesiswaan',
                                icon: ` <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                                        </svg>`,
                                data_sub_children: [
                                    {
                                        menu_name: "Kelas",
                                        menu_path: "mapping/grade-level-subjects",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Distribusi Siswa Kelas",
                                        menu_path: "course_type_school",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Daftar Kode kelas",
                                        menu_path: "teacher_teaching_class_admin",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Kelola Data Siswa",
                                        menu_path: "curriculum_class_admin",
                                        icon: "fas fa-school"
                                    },
                                ]
                            },
                            {
                                sub_menu_name: 'Pengajar',
                                icon: ` <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
                                            <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                                            <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
                                        </svg>`,
                                data_sub_children: [
                                    {
                                        menu_name: "Guru",
                                        menu_path: "exercises/1",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Wali Kelas",
                                        menu_path: "resultexercises",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Beranda Walikelas",
                                        menu_path: "teacher_teaching_class_admin",
                                        icon: "fas fa-school"
                                    },
                                ]
                            },
                            {
                                sub_menu_name: 'Ekstrakurikuler',
                                icon: ` <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                                            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
                                        </svg>`,
                                data_sub_children: [
                                    {
                                        menu_name: "Daftar Ekstrakurikuler",
                                        menu_path: "exercises/1",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Jadwal Ekstrakurikuler",
                                        menu_path: "resultexercises",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Laporan Ekstrakulikuler",
                                        menu_path: "teacher_teaching_class_admin",
                                        icon: "fas fa-school"
                                    },
                                ]
                            },
                        ]

                    },
                    {
                        menu_name: 'Akademik',
                        sub_menu:
                        [
                            {
                                sub_menu_name: 'Laporan Tugas',
                                icon: ` <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                                            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
                                        </svg>`,
                                data_sub_children: [
                                    {
                                        menu_name: "Tugas",
                                        menu_path: "mapping/grade-level-subjects",
                                        icon: "fas fa-school"
                                    },
                                ]
                            },
                            {
                                sub_menu_name: 'Aktivitas Kelas',
                                icon: ` <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                                            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
                                        </svg>`,
                                data_sub_children: [
                                    {
                                        menu_name: "Jadwal Pelajaran",
                                        menu_path: "exercises/1",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Tugas",
                                        menu_path: "resultexercises",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Pengaturan Waktu Absen Jadwal",
                                        menu_path: "teacher_teaching_class_admin",
                                        icon: "fas fa-school"
                                    },
                                ]
                            },
                            {
                                sub_menu_name: 'Rekap Pertemuan',
                                icon: ` <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                                            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
                                        </svg>`,
                                data_sub_children: [
                                    {
                                        menu_name: "Laporan Absensi Harian",
                                        menu_path: "exercises/1",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Kehadiran Guru Pertemuan",
                                        menu_path: "resultexercises",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Kehadiran Siswa Pertemuan",
                                        menu_path: "teacher_teaching_class_admin",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Kehadiran Staff (Harian)",
                                        menu_path: "curriculum_class_admin",
                                        icon: "fas fa-school"
                                    },
                                ]
                            },
                        ]

                    },
                    {
                        menu_name: 'PPDB',
                        sub_menu:
                        [
                            {
                                sub_menu_name: 'Pengaturan',
                                icon: ` <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                                            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
                                        </svg>`,
                                data_sub_children: [
                                    {
                                        menu_name: "Pengaturan PPDB",
                                        menu_path: "mapping/grade-level-subjects",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Registrasi PPDB",
                                        menu_path: "course_type_school",
                                        icon: "fas fa-school"
                                    },
                                    {
                                        menu_name: "Cek Status Pendaftar",
                                        menu_path: "teacher_teaching_class_admin",
                                        icon: "fas fa-school"
                                    },
                                    
                                ]
                            }
                        ]

                    },
                ],}
        },
        mounted() {
            const sidebarToggle = document.querySelector("#sidebar-toggle");
            sidebarToggle.addEventListener("click", function() {
                document.querySelector("#sidebar").classList.toggle("collapsed");
            });

        },
        methods: {
            ...mapActions(["LogOut"]),

            async Logout() {

                this.LogOut().then((response) => {

                    this.$router.push('/login')

                })

            },
        }
    }

</script>

<style>

    .isi {
        height: calc(100vh - 125px);
        /* height: auto; */
        overflow-y: auto;
    }

    footer.mainPage {
        position: sticky;
        bottom: 0;
        padding: 15px 0px 0px 0px;
        height: 40px;
        /* background-color: #F0F2F5; */
        background-color: #F8F9FA;
    }

    footer.mainPage p{
        padding: 0px 0px 0px 15px;
    }

    #main {
        /* background-color: #F0F2F5; */
        background-color: #F8F9FA;
    }

    .dropdown-menu {
        position: relative;
        z-index: 100;
    }

    #sidebar {
        background-color: white;
        position: sticky;
        top: 0;
        height: 100vh;
        max-width: 264px;
            min-width: 264px;
        padding: 10px 20px 20px 20px;
        overflow-y: auto;
        /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); */
        transition: all 0.35s ease-in-out;
    }

    .title-dashboard label {
        font-size: 13pt;
    }

    main {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        min-width: 0;
        width: 100%;
        transition: all 0.35s ease-in-out;
    }

    .content {
        flex: 1 0;
        width: 100vw;
        height: 100vh;
        overflow-y: none;
        padding: 0px 15px 5px 15px;
    }

    #sidebar.collapsed {
        margin-left: -264px;
        transition: all 0.35s ease-in-out;
    }

    .nav-item {
        margin-left: 10px;
    }

    .menu {
        cursor: pointer;
        transition: all 0.3s ease;
        gap: 15px;
        margin-bottom: 6px;
    }

    .menu1 {
        cursor: pointer;
        transition: all 0.3s ease;
        gap: 15px;
        margin-left:25px;
        margin-bottom: 3px;
    }

    .menu .icon {
        transition: all 0.3s ease;
        /* background-color: #F8F9FA; */
        /* background-image: linear-gradient(to bottom, #489DEC 0%, #00387F 100%); */
        background-image: linear-gradient(to right, #067c7e 0%, #2ccf7e 100%);
        width: 34px;
        height: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        transition: all 0.3s ease;
    }

    .menu .icon svg {
        cursor: pointer;
        color: white;
        width: 20px;
        height: 20px;
        font-weight: bold;
        transition: all 0.3s ease;
    }

    .menu:hover .icon {
        /* background-image: linear-gradient(to right, #067c7e 0%, #2ccf7e 100%); */
        background: #F8F9FA;
        width: 34px;
        height: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        transition: all 0.3s ease;

    }

    .menu:hover .icon svg {
        cursor: pointer;
        width: 20px;
        height: 20px;
        color: black;
        font-weight: bold;
        transition: all 0.3s ease;
    }

    .menu label {
        /* font-weight: bold; */
        transition: all 0.3s ease;
        cursor: pointer;
        font-size: 12pt;
    }

    .menu:hover label {
        font-weight: bold;
        transition: all 0.3s ease;
        cursor: pointer;
        /* font-size: 12.5pt; */
    }

    .navbars {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
        padding: 0px 0px 0px 15px;
        /* border-radius: 15px; */
        height: 53px;
        /* top: 10px; */
        /* background-color: #F0F2F5; */
        background-color: #F8F9FA;
        position: sticky;
        top: 0;
        z-index: 1000;
    }

    .kotak_1 {
        display: flex;
        align-items: center;
        gap: 50px;
        width: 35%;
    }

    .kotak_2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        margin-right: 10px;
        width: 65%;
    }

    .kotak_2_1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        width: 95%;
        margin-right: 10px;
    }

    .kotak_1_1 {
        margin-top: 15px;
    }

    .kotak_1 p {
        font-size: 11pt;
    }

    .kotak_1 h5 {
        font-size: 14pt;
    }

    @media screen and (min-width: 0px) and (max-width: 359px) {

        .title-dashboard {
            margin-top: 5px;
        }

        .title-dashboard label {
            font-size: 13pt;
        }

        .js-sidebar {
            margin-left: -230px;
        }

        #sidebar.collapsed {
            margin-left: 0;
        }

        .content {
            padding: 5px;
            height: 50px;
        }

        #sidebar {
            background-color: white;
            position: sticky;
            top: 0;
            height: 100vh;
            max-width: 230px;
            min-width: 230px;
            padding: 20px;
            overflow-y: auto;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            transition: all 0.35s ease-in-out;

        }

        .menu label {
            font-size: 10.5pt;
        }

        .navbars {
            margin: 15px 13px 0px 13px;
        }

        .menu .icon {
            width: 30px;
            height: 30px;
        }

        .menu .icon svg {
            width: 17px;
            height: 17px;
        }

        .menu:hover .icon {
            width: 40px;
            height: 40px;
        }

        .kotak_1_1 {
            display: none;
        }

        .kotak_2_1 {
            flex-direction: column;
        }
    }

    @media screen and (min-width: 360px) and (max-width: 576px) {
        

        .isi {
            /* height: auto; */
            /* height: calc(100vh - 103px); */
            /* overflow-y: auto; */
        }

        footer.mainPage {
            position: sticky;
            bottom: 0;
        }

        .title-dashboard {
            margin-top: 5px;
        }

        .title-dashboard label {
            font-size: 11pt;
        }

        .nav-item {
            margin-left: 0px;
        }

        .nav-item label {
            font-size: 10pt;
        }

        .js-sidebar {
            margin-left: -180px;
        }

        #sidebar.collapsed {
            margin-left: 0;
        }

        .content {
            padding: 5px;
        }

        #sidebar {
            max-width: 180px;
            min-width: 180px;

        }

        .menu {
            gap: 10px;
        }

        .menu label {
            font-size: 9.5pt;
        }

        .navbars {
            margin: 15px 13px 0px 13px;
        }

        .menu .icon {
            width: 30px;
            height: 30px;
        }

        .menu .icon svg {
            width: 18px;
            height: 18px;
        }

        .menu:hover .icon {
            width: 40px;
            height: 40px;
        }

        .kotak_1_1 {
            display: none;
        }

        .kotak_2_1 {
            flex-direction: column;
            gap: 0px 0px;
            height: 40px;
            overflow: auto;
        }

    }

    @media screen and (min-width: 576px) and (max-width: 769px) {

        .title-dashboard {
            margin-top: 5px;
        }

        .title-dashboard label {
            font-size: 13pt;
        }

        .js-sidebar {
            margin-left: -230px;
        }

        #sidebar.collapsed {
            margin-left: 0;
        }

        .content {
            padding: 5px;
        }

        #sidebar {
            background-color: white;
            position: sticky;
            top: 0;
            height: 100vh;
            max-width: 230px;
            min-width: 230px;
            padding: 20px;
            overflow-y: auto;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            transition: all 0.35s ease-in-out;

        }

        .menu label {
            font-size: 10.5pt;
        }

        .navbars {
            margin: 15px 13px 0px 13px;
        }

        .menu .icon {
            width: 35px;
            height: 35px;
        }

        .menu .icon svg {
            width: 20px;
            height: 20px;
        }

        .menu:hover .icon {
            width: 40px;
            height: 40px;
        }

        .kotak_1_1 {
            display: none;
        }

        .kotak_2_1 {
            flex-direction: column;
            gap: 0px 0px;
            height: 40px;
            overflow: auto;
        }

    }

</style>

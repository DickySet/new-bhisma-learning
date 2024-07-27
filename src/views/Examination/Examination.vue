<template>

    <div class="card border-0" data-aos="fade-up">
        <div class="card-body">
            <div class="padding-content">

                <Title :title="title" :subTitle="subTitle" />

                <div class="filtering">
                    <div class="form-filtering">
                        <label>Jenjang Sekolah</label>
                        <select>
                            <option value="0">Pilih Jenjang</option>
                        </select>
                    </div>
                    <div class="form-filtering">
                        <label>Tipe Ujian</label>
                        <select>
                            <option value="0">Pilih Jenjang</option>
                        </select>
                    </div>
                    <div class="form-filtering">
                        <label>Tingkat Kelas</label>
                        <select>
                            <option value="0">Pilih Jenjang</option>
                        </select>
                    </div>
                    <div class="form-filtering">
                        <label>Mata Pelajaran</label>
                        <select>
                            <option value="0">Pilih Jenjang</option>
                        </select>
                    </div>
                    <div class="form-filtering">
                        <label>Kurikulum</label>
                        <select>
                            <option value="0">Pilih Jenjang</option>
                        </select>
                    </div>
                    <div class="form-filtering">
                        <label>Dari Tanggal</label>
                        <input type="date">
                    </div>
                    <div class="form-filtering">
                        <label>Sampai Tanggal</label>
                        <input type="date">
                    </div>
                    <div class="icon-filter">
                        <svg xmlns="http://www.w3.org/2000/svg" style="color: white; font-weight: bold;" width="17" height="17" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="card border-0 mt-3" data-aos="fade-up">
        <div class="card-body">
            <div class="padding-content">

                <TableComponent 
                    :headers="tableHeaders"
                    :data="tableData"
                    :display-columns="displayColums"
                    :search-column="'exam_title'"
                    :search-placeholder="'Exam Title'"
                    :actionsTable="tableActions"
                    @actionTable-click="handleActionTableClick"
                    :actions="actions"
                    @action-click="handleActionClick" 
                />

            </div>
        </div>
    </div>

</template>

<script>

    import Title from '../../components/TitlePage.vue'
    import TableComponent from '../../components/Table.vue'

    export default {
        components: {
            Title,
            TableComponent
        },
        data(){
            return {
                title: 'Ujian Kelas',
                subTitle: 'Temukan Bermacam-Macam Ujian Online Disini !',
                tableHeaders: ['Tipe Ujian','Judul Ujian','Mata Pelajaran','Tanggal Dibuat','Pembuat Ujian'],
                displayColums: ['type_exam', 'exam_title', 'course_name', 'tanggal_buat', 'full_name'],
                tableData:[
                    {
                        code: "PAS Semester Genap (Susulan)",
                        course_name: "Dasar Kejuruan (Fase E) - Komunikasi Di Tempat Kerja",
                        description: "KELAS 10 SMK",
                        duration: "90",
                        exam_title: "PAS Semester Genap (Susulan)",
                        full_name: " Rosita, S.Pd",
                        kelas: "KELAS 10 SMK",
                        level_school: "SMK",
                        name_curriculum: "KURIKULUM MERDEKA",
                        path_image_profile: null,
                        sd_class_map_id: "13",
                        sd_course_id: "2137",
                        sd_curriculum_id: "2",
                        sd_exam_type_id: "5",
                        sd_examination_id: "16756",
                        sd_school_stage_id: "4",
                        sd_users_id: "70492",
                        status: "Selesai",
                        tanggal_akhir_ujian: "2024-06-11 13:00:00",
                        tanggal_buat: "2024-06-09 19:10:54",
                        tanggal_mulai_ujian: "2024-06-11 07:00:00",
                        total_question: "45",
                        type_exam: "PAS/SAS"
                    },
                    {
                        code: "PAS Semester Genap (Susulan)",
                        course_name: "Dasar Kejuruan (Fase E) - Komunikasi Di Tempat Kerja",
                        description: "KELAS 10 SMK",
                        duration: "90",
                        exam_title: "PAS Semester Genap (Susulan)",
                        full_name: " Rosita, S.Pd",
                        kelas: "KELAS 10 SMK",
                        level_school: "SMK",
                        name_curriculum: "KURIKULUM MERDEKA",
                        path_image_profile: null,
                        sd_class_map_id: "13",
                        sd_course_id: "2137",
                        sd_curriculum_id: "2",
                        sd_exam_type_id: "5",
                        sd_examination_id: "16756",
                        sd_school_stage_id: "4",
                        sd_users_id: "70492",
                        status: "Selesai",
                        tanggal_akhir_ujian: "2024-06-11 13:00:00",
                        tanggal_buat: "2024-06-09 19:10:54",
                        tanggal_mulai_ujian: "2024-06-11 07:00:00",
                        total_question: "45",
                        type_exam: "PAS/SAS"
                    },
                    {
                        code: "PAS Semester Genap (Susulan)",
                        course_name: "Dasar Kejuruan (Fase E) - Komunikasi Di Tempat Kerja",
                        description: "KELAS 10 SMK",
                        duration: "90",
                        exam_title: "PAS Semester Genap (Susulan)",
                        full_name: " Rosita, S.Pd",
                        kelas: "KELAS 10 SMK",
                        level_school: "SMK",
                        name_curriculum: "KURIKULUM MERDEKA",
                        path_image_profile: null,
                        sd_class_map_id: "13",
                        sd_course_id: "2137",
                        sd_curriculum_id: "2",
                        sd_exam_type_id: "5",
                        sd_examination_id: "16756",
                        sd_school_stage_id: "4",
                        sd_users_id: "70492",
                        status: "Selesai",
                        tanggal_akhir_ujian: "2024-06-11 13:00:00",
                        tanggal_buat: "2024-06-09 19:10:54",
                        tanggal_mulai_ujian: "2024-06-11 07:00:00",
                        total_question: "45",
                        type_exam: "PAS/SAS"
                    },
                    {
                        code: "PAS Semester Genap (Susulan)",
                        course_name: "Dasar Kejuruan (Fase E) - Komunikasi Di Tempat Kerja",
                        description: "KELAS 10 SMK",
                        duration: "90",
                        exam_title: "PAS Semester Genap (Susulan)",
                        full_name: " Rosita, S.Pd",
                        kelas: "KELAS 10 SMK",
                        level_school: "SMK",
                        name_curriculum: "KURIKULUM MERDEKA",
                        path_image_profile: null,
                        sd_class_map_id: "13",
                        sd_course_id: "2137",
                        sd_curriculum_id: "2",
                        sd_exam_type_id: "5",
                        sd_examination_id: "16756",
                        sd_school_stage_id: "4",
                        sd_users_id: "70492",
                        status: "Selesai",
                        tanggal_akhir_ujian: "2024-06-11 13:00:00",
                        tanggal_buat: "2024-06-09 19:10:54",
                        tanggal_mulai_ujian: "2024-06-11 07:00:00",
                        total_question: "45",
                        type_exam: "PAS/SAS"
                    },
                ],
                tableActions:[
                    {label: 'Edit'},
                    {label: 'Delete'},
                    {label: 'Duplikat'},
                    {label: 'Settings'},
                ],
                actions: [
                    { label: 'Tambah' },
                ]
            }
        },
        methods:{
            handleActionTableClick({ rowIndex, actionLabel }) {
                const rowData = this.tableData[rowIndex];
                alert(`Action "${actionLabel}" clicked for row: ${JSON.stringify(rowData)}`);
            },
            handleActionClick({actionLabel}){

                if (actionLabel == 'Tambah'){
                    this.$router.push('/add-examination')
                }
                // alert(`action ${actionLabel}`)
            }
        }
    }

</script>
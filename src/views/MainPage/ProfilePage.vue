<template>

    <div class="card border-0">
        <div class="card-body">
            <div style="padding: 0px 20px 0px 20px;">
                <Title :title="title" :subTitle="subTitle" />

                <div class="d-flex mb-3" style="gap: 10px; flex-wrap: wrap">
                    <div class="form-group" style="flex-grow:1; flex-basis: 100px">
                        <label><b>Tingkat</b></label>
                        <select>
                            <option value="0">Pilih Tingkat</option>
                        </select>
                    </div>
                    <div class="form-group" style="flex-grow:1; flex-basis: 100px">
                        <label><b>Kelas</b></label>
                        <select>
                            <option value="0">Pilih Kelas</option>
                        </select>
                    </div>
                    <div class="form-group" style="flex-grow:1; flex-basis: 100px">
                        <label><b>Sub Kelas</b></label>
                        <select>
                            <option value="0">Pilih Sub Kelas</option>
                        </select>
                    </div>
                    <div class="icon" style="margin-top:27px">
                        <svg xmlns="http://www.w3.org/2000/svg" style="color: white; font-weight: bold;" width="17" height="17" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="card border-0  mt-3">
        <div class="card-body">
            <div style="padding: 20px 20px 0px 20px;">
                <TableComponent 
                    :headers="tableHeaders" 
                    :data="tableData" 
                    :display-columns="displayColums"
                    :actionsTable="tableActions"
                    :actions="actions"
                    :search-column="'school_before'"
                    :search-placeholder="'Masukan Nama Sekolah'"
                    @actionTable-click="handleActionTableClick" 
                    @action-click="handleActionClick" 
                />
            </div>
        </div>
    </div>

</template>

<script>
import Title from '../../components/TitlePage.vue';
import TableComponent from '../../components/Table.vue';

export default {
    components: {
        Title,
        TableComponent
    },
    data() {
        return {
            title: 'Data Table',
            subTitle: 'This is a sample data table',
            tableHeaders: ['No Registrasi', 'Nama Pendaftar', 'Status'],
            displayColums: ['no_registration', 'name', 'status'],
            tableData: [
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
            ],
            tableActions: [
                { label: 'Show' },
                { label: 'Edit' }, 
                { label: 'Delete' },
            ],
            actions: [
                { label: 'Tambah' },
                { label: 'Excel' }, 
                { label: 'PDF' }
            ]
            
        }
    },
    methods: {
        handleActionTableClick({ rowIndex, actionLabel }) {
            const rowData = this.tableData[rowIndex];
            alert(`Action "${actionLabel}" clicked for row: ${JSON.stringify(rowData)}`);
        },
        handleActionClick({ actionLabel }) {
            alert(`Action "${actionLabel}"`);
        }
    }
}
</script>

<style scoped>
/* Tambahkan style di sini jika diperlukan */
</style>

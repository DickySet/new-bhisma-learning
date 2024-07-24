<template>

    <div class="d-flex justify-content-between mt-3">
        <div class="d-flex" style="gap: 10px">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" style="color: white; font-weight: bold;" width="17" height="17" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </div>
            <input class="search" type="text" v-model="searchText" :placeholder="searchPlaceholder">
        </div>
        <div class="d-flex" style="gap: 8px">

            <div v-for="(action, actionIndex) in actions" :key="actionIndex">
                <div 
                    @click="emitAction(action.label)" 
                    class="action-icon" 
                    :title="action.label"
                    v-html="getSvg(action.label)"
                ></div>
            </div>
        </div>
    </div>

    <div class="table">
        <table style="width: 100%;">
            <thead>
                <tr>
                    <th>No</th>
                    <th v-for="header in headers" :key="header">{{ header }}</th>
                    <th v-if="actionsTable.length">Aksi</th> <!-- Kolom untuk tombol aksi jika ada aksi -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in paginatedData()" :key="rowIndex">
                    <td>{{rowIndex + 1}}</td>
                    <td v-for="header in displayColumns" :key="header">{{ row[header] }}</td>
                    <td v-if="actionsTable.length">
                        <div class="d-flex justify-content-center" style="gap: 8px">
                            <div v-for="(action, actionIndex) in actionsTable" :key="actionIndex">
                                <svg 
                                    @click="emitActionTable(rowIndex, action.label)" 
                                    class="actionTable-icon" 
                                    :title="action.label"
                                    v-html="getSvgTable(action.label)"
                                ></svg>
                            </div>
                        </div>
                    </td>
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

</template>

<script>
    export default {
        props: {
            headers: {
                type: Array,
                default: () => []
            },
            data: {
                type: Array,
                default: () => []
            },
            actionsTable: {
                type: Array,
                default: () => []
            },
            actions: {
                type: Array,
                default: () => []
            },
            searchColumn: {
                type: String,
                default: ''
            },
            searchPlaceholder: {
                type: String,
                default: 'Cari data'
            },
            displayColumns: {
                type: Array,
                default: () => []
            },
            
        },
        data() {
            return {
                searchText: '',
                currentPage: 1,
                pageSize: 10,
            }
        },
        computed:{
            totalPages(){
                const data = this.data.filter(item => {
                    if (this.searchColumn in item) {
                        return item[this.searchColumn].toLowerCase().includes(this.searchText.toLowerCase());
                    }
                });

                return Math.ceil(data.length / this.pageSize);
            }
        },
        methods: {
            nextPage(){
                if(this.currentPage < this.totalPages){
                    this.currentPage++
                };
            },

            previousPage(){
                if(this.currentPage > 1){
                    this.currentPage--
                };
            },

            paginatedData(){
                const data = this.data.filter(item => {
                    if (this.searchColumn in item) {
                        return item[this.searchColumn].toLowerCase().includes(this.searchText.toLowerCase());
                    }
                });

                const start = (this.currentPage - 1) * this.pageSize;
                const end = start + this.pageSize;
                return data.slice(start, end);
            },

            emitActionTable(rowIndex, actionLabel) {
                this.$emit('actionTable-click', { rowIndex, actionLabel });
            },

            emitAction(actionLabel) {
                this.$emit('action-click', { actionLabel });
            },

            getSvgTable(label) {
                switch (label) {
                    case 'Edit':
                        return `
                            <svg v-popover="'Edit Data'" xmlns="http://www.w3.org/2000/svg" style="color: green" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                            </svg>`;
                    case 'Delete':
                        return `
                            <svg v-popover="'Delete Data'" xmlns="http://www.w3.org/2000/svg" style="color: red" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                            </svg>`;
                    case 'Show':
                        return `
                            <svg v-popover="'Lihat Data'" xmlns="http://www.w3.org/2000/svg" style="color: #00387F" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                            </svg>`
                    case 'Duplikat':
                        return `
                            <svg v-popover="'Duplikat Data'" xmlns="http://www.w3.org/2000/svg" style="color: black" fill="currentColor" class="bi bi-journals" viewBox="0 0 16 16">
                                <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2"/>
                                <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0"/>
                            </svg>`
                    case 'Settings':
                        return `
                            <svg v-popover="'Setting Data'" xmlns="http://www.w3.org/2000/svg" style="color: #00387F" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                            </svg>`
                    default:
                        return '';
                }
            },

            getSvg(label) {
                switch (label) {
                    case 'Tambah':
                        return `
                            <div class="icon-tambah" v-popover="'Tambah Data'">
                                <svg xmlns="http://www.w3.org/2000/svg" style="color: white; font-weight: bold;" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                                </svg>
                            </div>`;
                    case 'Excel':
                        return `
                            <div class="icon-excel" v-popover="'Export Excel'">
                                <svg xmlns="http://www.w3.org/2000/svg" style="color: white; font-weight: bold;" fill="currentColor" class="bi bi-file-earmark-spreadsheet-fill" viewBox="0 0 16 16">
                                    <path d="M6 12v-2h3v2z"/>
                                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M3 9h10v1h-3v2h3v1h-3v2H9v-2H6v2H5v-2H3v-1h2v-2H3z"/>
                                </svg>
                            </div>`;
                    case 'PDF':
                        return `
                            <div class="icon-pdf" v-popover="'Export PDF'">
                                <svg xmlns="http://www.w3.org/2000/svg" style="color: white; font-weight: bold;" fill="currentColor" class="bi bi-file-earmark-pdf-fill" viewBox="0 0 16 16">
                                    <path d="M5.523 12.424q.21-.124.459-.238a8 8 0 0 1-.45.606c-.28.337-.498.516-.635.572l-.035.012a.3.3 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548m2.455-1.647q-.178.037-.356.078a21 21 0 0 0 .5-1.05 12 12 0 0 0 .51.858q-.326.048-.654.114m2.525.939a4 4 0 0 1-.435-.41q.344.007.612.054c.317.057.466.147.518.209a.1.1 0 0 1 .026.064.44.44 0 0 1-.06.2.3.3 0 0 1-.094.124.1.1 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256M8.278 6.97c-.04.244-.108.524-.2.829a5 5 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.5.5 0 0 1 .145-.04c.013.03.028.092.032.198q.008.183-.038.465z"/>
                                    <path fill-rule="evenodd" d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.7 11.7 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.86.86 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.84.84 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.8 5.8 0 0 0-1.335-.05 11 11 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.24 1.24 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a20 20 0 0 1-1.062 2.227 7.7 7.7 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103"/>
                                </svg>
                            </div>`;
                    default:
                        return '';
                }
            }
        }
    }
</script>

<style scoped>

    svg {
        width: 18px; 
        height: 18px;
        cursor: pointer;
    }



    @media screen and (min-width: 360px) and (max-width: 527px) {

        label,
        p {
            font-size: 10pt;
        }

        input,
        textarea,
        select {
            font-size: 10pt;
        }

        table thead tr th {
            font-size: 10pt;
            padding: 10px;
            width: 100%;
        }

        table tbody tr td {
            font-size: 10pt;
            padding: 10px;
            width: 100%;
        }

        .table {
            width: 100%;
            overflow: auto;
        }

        .icon {
            width: 35px;
            height: 35px;
            border-radius: 5px;
        }

        input.search {
            width: 150px;
            font-size: 10pt;
        }

        .pagination button {
            width: 35px;
            height: 35px;
        }

        .padding-content {
            padding: 0px 0px 0px 0px;
        }
    }

</style>

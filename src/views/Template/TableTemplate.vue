<template>
    
    <div class="card border-0">
        <div class="card-body">
            <div class="padding-content">
                <Title :title="title" :subTitle="subTitle" />
            </div>
        </div>
    </div>

    <div class="card border-0 mt-3">
        <div class="card-body">
            <div class="padding-content">
                <h5 class="mt-2">Basic Table With Pagination</h5>
                <div id="search-layout">
        
                    <div class="layout-kiri">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" style="color: white; font-weight: bold;" width="17" height="17" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </div>
                        <input class="search" type="text" placeholder='Cari data'>
                    </div>
                </div>

                <div class="table">
                    <table class="table-basic">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Country</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, i) in data">
                                <td>{{i+1}}</td>
                                <td>{{user.name}}</td>
                                <td>{{user.gender}}</td>
                                <td>{{user.country}}</td>
                                <td>{{user.city}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="pagination mt-2">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                        </svg>
                    </button>
                    <span>Page <b>1</b> of <b>2</b></span>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    </div>

    <div class="card border-0 mt-3">
        <div class="card-body">
            <div class="padding-content">
                <h5 class="mt-2">Table Input With Action Button</h5>
                <div id="search-layout">
        
                    <div class="layout-kiri">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" style="color: white; font-weight: bold;" width="17" height="17" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </div>
                        <input class="search" type="text" placeholder='Cari data'>
                    </div>
                </div>

                <div class="table">
                    <table class="table-basic">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Country</th>
                                <th>City</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, i) in data">
                                <td>{{i+1}}</td>
                                <td>{{user.name}}</td>
                                <td>{{user.gender}}</td>
                                <td>
                                    <input v-model="user.country">
                                </td>
                                <td>
                                    <input v-model="user.city">
                                </td>
                                <td>
                                    <div class="d-flex" style="gap: 8px">
                                        <svg v-popover="'Lihat Data'" xmlns="http://www.w3.org/2000/svg" style="color: #00387F" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                        </svg>
                                        <svg v-popover="'Edit Data'" xmlns="http://www.w3.org/2000/svg" style="color: green" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                        </svg>
                                        <svg v-popover="'Delete Data'" xmlns="http://www.w3.org/2000/svg" style="color: red" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="pagination mt-2">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                        </svg>
                    </button>
                    <span>Page <b>1</b> of <b>2</b></span>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    </div>

    <div class="card border-0 mt-3">
        <div class="card-body">
            <div class="padding-content">
                <h5 class="mt-2">Table with Export Button</h5>
                <div id="search-layout">
        
                    <div class="layout-kiri">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" style="color: white; font-weight: bold;" width="17" height="17" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </div>
                        <input class="search" type="text" placeholder='Cari data'>
                    </div>

                    <div class="layout-kanan">
                        <div class="icon-tambah" v-popover="'Tambah Data'">
                            <svg xmlns="http://www.w3.org/2000/svg" style="color: white; font-weight: bold;" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                            </svg>
                        </div>
                        <div class="icon-excel" v-popover="'Export Excel'">
                            <svg xmlns="http://www.w3.org/2000/svg" style="color: white; font-weight: bold;" fill="currentColor" class="bi bi-file-earmark-spreadsheet-fill" viewBox="0 0 16 16">
                                <path d="M6 12v-2h3v2z"/>
                                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M3 9h10v1h-3v2h3v1h-3v2H9v-2H6v2H5v-2H3v-1h2v-2H3z"/>
                            </svg>
                        </div>
                        <div class="icon-pdf" v-popover="'Export PDF'">
                            <svg xmlns="http://www.w3.org/2000/svg" style="color: white; font-weight: bold;" fill="currentColor" class="bi bi-file-earmark-pdf-fill" viewBox="0 0 16 16">
                                <path d="M5.523 12.424q.21-.124.459-.238a8 8 0 0 1-.45.606c-.28.337-.498.516-.635.572l-.035.012a.3.3 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548m2.455-1.647q-.178.037-.356.078a21 21 0 0 0 .5-1.05 12 12 0 0 0 .51.858q-.326.048-.654.114m2.525.939a4 4 0 0 1-.435-.41q.344.007.612.054c.317.057.466.147.518.209a.1.1 0 0 1 .026.064.44.44 0 0 1-.06.2.3.3 0 0 1-.094.124.1.1 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256M8.278 6.97c-.04.244-.108.524-.2.829a5 5 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.5.5 0 0 1 .145-.04c.013.03.028.092.032.198q.008.183-.038.465z"/>
                                <path fill-rule="evenodd" d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.7 11.7 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.86.86 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.84.84 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.8 5.8 0 0 0-1.335-.05 11 11 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.24 1.24 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a20 20 0 0 1-1.062 2.227 7.7 7.7 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="table">
                    <table class="table-basic">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Country</th>
                                <th>City</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, i) in data">
                                <td>{{i+1}}</td>
                                <td>{{user.name}}</td>
                                <td>{{user.gender}}</td>
                                <td>{{user.country}}</td>
                                <td>{{user.city}}</td>
                                <td>
                                    <div class="d-flex" style="gap: 8px">
                                        <svg v-popover="'Lihat Data'" xmlns="http://www.w3.org/2000/svg" style="color: #00387F" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                        </svg>
                                        <svg v-popover="'Edit Data'" xmlns="http://www.w3.org/2000/svg" style="color: green" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                        </svg>
                                        <svg v-popover="'Delete Data'" xmlns="http://www.w3.org/2000/svg" style="color: red" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="pagination mt-2">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                        </svg>
                    </button>
                    <span>Page <b>1</b> of <b>2</b></span>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    </div>

</template>

<script>

    import Title from "../../components/TitlePage.vue";

    export default {
        components: {
            Title
        },
        data(){
            return{
                title: 'Tables',
                subTitle: 'Menampilkan beberapa design dari table',
                data:[
                    {
                        name: "Dakota Rice",
                        gender: 'Male',
                        country: 'Nigeria',
                        city: 'Oud-Turnhout'
                    },
                    {
                        name: "Minerva Hooper",
                        gender: 'Female',
                        country: 'Curaçao',
                        city: 'Sinaai-Waas'
                    },
                    {
                        name: "Sage Rodriguez",
                        gender: 'Male',
                        country: 'Netherlands',
                        city: 'Baileux'
                    },
                    {
                        name: "Philip Chaney",
                        gender: 'Male',
                        country: 'Korea, South',
                        city: 'Overland Park'
                    },
                    {
                        name: "Doris Greene",
                        gender: 'Female',
                        country: 'Malawi',
                        city: 'Feldkirchen in Kärnten'
                    },
                ]
            }
        }
    }

</script>
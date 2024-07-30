<template>
    <div class="card border-0">
        <div class="card-body">
            <div class="padding-content">
                <Title :title="title" :subTitle="subTitle" />
            </div>
        </div>
    </div>

    <div class="d-flex flex-wrap" style="gap: 20px">
        <div class="card border-0 mt-3" style="width: 50%; flex-grow: 1; flex-basis: 49%">
            <div class="card-body">
                <div class="padding-content">
                    <div class="mb-2 mt-2">
                        <h5 style="margin-bottom: 0px">Collapse</h5>
                        <label>Bootstrap Default</label>
                    </div>

                    <!-- Collapse With Icon -->
                        <div class="d-flex justify-content-between align-items-center mb-1" data-bs-toggle="collapse" data-bs-target="#word" aria-expanded="false" aria-control="word">
                            <div class="d-flex align-items-center" style="gap: 10px">
                                <div class="icon-tambah">
                                    <svg xmlns="http://www.w3.org/2000/svg" style="color:white" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-word-fill" viewBox="0 0 16 16">
                                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M5.485 6.879l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 9.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 1 1 .97-.242z"/>
                                    </svg>
                                </div>
                                <label style="margin-top:5px"><b>Default Collapse Item 1</b></label>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div>
                        <div style="border: 1px solid black"></div>

                        <div class="collapse mt-1" id="word">
                            <div class="mt-2">
                                <label><b>Lorem Ipsum</b></label>
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid .</p>
                            </div>
                        </div>
                    <!-- Collapse With Icon -->

                    <!-- Collapse only Text -->
                        <div class="d-flex justify-content-between align-items-center mt-3 mb-1" data-bs-toggle="collapse" data-bs-target="#excel" aria-expanded="false" aria-control="excel">
                            <label style="margin-top:5px"><b>Default Collapse Item 2</b></label>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div>
                        <div class="mb-2" style="border: 1px solid black"></div>

                        <div class="collapse mt-1" id="excel">
                            <div class="mt-2">
                                <label><b>Lorem Ipsum</b></label>
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid .</p>
                            </div>
                        </div>
                    <!-- Collapse only Text -->

                    <!-- Collapse another design -->
                        <div class="p-2 mt-3" style="border: 1px solid black; border-radius: 10px">
                        
                            <div class="d-flex justify-content-between align-items-center" data-bs-toggle="collapse" data-bs-target="#item">
                                <label style="margin-top:5px"><b>Default Collapse Item 3</b></label>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>
                            </div>

                            <div class="collapse" id="item">
                                <div class="mt-2">
                                <label><b>Lorem Ipsum</b></label>
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid .</p>
                            </div>
                            </div>

                        </div>
                    <!-- Collapse another design -->
                </div>
            </div>
        </div>
        <div style="width: 50%; flex-grow: 1; margin-top: 32px; flex-basis: 49%">
            <div class="padding-content">
                <div class="mb-2 mt-2">
                    <h5 style="margin-bottom: 0px">Collapse</h5>
                    <label>Tanpa Card</label>
                </div>

                <!-- Collapse With Icon -->
                    <div class="d-flex justify-content-between align-items-center mb-1" data-bs-toggle="collapse" data-bs-target="#word1" aria-expanded="false" aria-control="word">
                        <div class="d-flex align-items-center" style="gap: 10px">
                            <div class="icon-tambah">
                                <svg xmlns="http://www.w3.org/2000/svg" style="color:white" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-word-fill" viewBox="0 0 16 16">
                                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M5.485 6.879l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 9.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 1 1 .97-.242z"/>
                                </svg>
                            </div>
                            <label style="margin-top:5px"><b>Default Collapse Item 1</b></label>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>
                    <div style="border: 1px solid black"></div>

                    <div class="collapse mt-1" id="word1">
                        <div class="mt-2">
                            <label><b>Lorem Ipsum</b></label>
                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid .</p>
                        </div>
                    </div>
                <!-- Collapse With Icon -->

                <!-- Collapse only Text -->
                    <div class="d-flex justify-content-between align-items-center mt-3 mb-1" data-bs-toggle="collapse" data-bs-target="#excel1" aria-expanded="false" aria-control="excel">
                        <label style="margin-top:5px"><b>Default Collapse Item 2</b></label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>
                    <div class="mb-2" style="border: 1px solid black"></div>

                    <div class="collapse mt-1" id="excel1">
                        <div class="mt-2">
                            <label><b>Lorem Ipsum</b></label>
                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid .</p>
                        </div>
                    </div>
                <!-- Collapse only Text -->

                <!-- Collapse another design -->
                    <div class="p-2 mt-3" style="border: 1px solid black; border-radius: 10px">
                    
                        <div class="d-flex justify-content-between align-items-center" data-bs-toggle="collapse" data-bs-target="#item1">
                            <label style="margin-top:5px"><b>Default Collapse Item 3</b></label>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </div>

                        <div class="collapse" id="item1">
                            <div class="mt-2">
                            <label><b>Lorem Ipsum</b></label>
                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid .</p>
                        </div>
                        </div>

                    </div>
                <!-- Collapse another design -->
            </div>
        </div>
    </div>

</template>

<script>

    import Title from '../../components/TitlePage.vue'

    export default {
        components: {
            Title
        },
        data(){
            return {
                title: 'Panels',
                subTitle: 'Berisi beberapa panels yang sering digunakan'
            }
        }
    }

</script>
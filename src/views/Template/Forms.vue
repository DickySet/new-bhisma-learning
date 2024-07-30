<template>

    <div class="card border-0">
        <div class="card-body">
            <div class="padding-content">
                <Title :title="title" :subTitle="subTitle" />
            </div>
        </div>
    </div>

    <div class="d-flex flex-wrap" style="gap: 20px">
        <div class="card border-0 mt-3" style="width: 49%; flex-grow: 1; flex-basis: 48%">
            <div class="card-body">
                <div class="mt-2 padding-content">
                    <h5 style="font-weight: bold">Stacked Form</h5>
                    <div class='format'>
                        <label>Email</label>
                        <input placeholder="Masukan Email">
                    </div>
                    <div class='format'>
                        <label>Password</label>
                        <input type="password" placeholder="Masukan Password">
                    </div>
                    <button class="mt-2 button-simpan">Login</button>
                </div>
            </div>
        </div>
        <div class="card border-0 mt-3" style="width: 49%; flex-grow: 1; flex-basis: 48%">
            <div class="card-body">
                <div class="padding-content">
                    <h5 class="mt-2" style="font-weight: bold">Horizontal Form</h5>
                    <div class='h-format'>
                        <label>Email</label>
                        <input placeholder="Masukan Email">
                    </div>
                    <div class='h-format'>
                        <label>Password</label>
                        <input type="password" placeholder="Masukan Password">
                    </div>
                    <div class='h-format'>
                        <label></label>
                        <div class="button">
                            <button class="button-simpan">Login</button>
                        </div>
                        <!-- <input type="password" placeholder="Masukan Password"> -->
                    </div>
                </div>
            </div>
        </div>

    </div>
    
    <div class="card border-0 mt-3">
        <div class="card-body">
            <div class="padding-content">
                <h5 class="mt-2" style="font-weight: bold">Form Elements</h5>
                <div class='h-format'>
                    <label for="input">Input Text</label>
                    <input id="input" placeholder="Input Text">
                </div>
                <div class='h-format'>
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Password">
                </div>
                <div class='h-format'>
                    <label for="option">Select Option</label>
                    <select id="option">
                        <option value="0">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </div>
                <div class='h-format'>
                    <label>Disabled Form</label>
                    <input type="password" placeholder="Disabled Form" disabled>
                </div>
                <div class='h-format'>
                    <label>Input Checkbox</label>
                    <input type="checkbox"> <span style="margin-top: 8px">Checkbox</span>
                </div>
                <div class='h-format'>
                    <label>Input Radio</label>
                    <input type="radio"> <span style="margin-top: 8px">Radio</span>
                </div>
                <div class='h-format'>
                    <label>Textarea</label>
                    <textarea rows="3" placeholder="Textarea"></textarea>
                </div>
                <div class='h-format'>
                        <label></label>
                        <div class="button">
                            <button class="button-simpan">Simpan</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>

    <div class="card border-0 mt-3">
        <div class="card-body">
            <div class="padding-content">
                <h5 class="mt-2" style="font-weight: bold">Form Flex</h5>
                <div class="form-format">
                    <div class="form-kiri">
                        <div class='format'>
                            <label>Input</label>
                            <input placeholder='Input'>
                        </div>
                        <div class="d-flex" style="gap: 15px; width: 100%;">
                            <div class='format'>
                                <label>Select</label>
                                <select>
                                <option value="0">Select</option>
                            </select>
                            </div>
                            <div class='format'>
                                <label>Date</label>
                                <input type="date">
                            </div>
                        </div>
                        <div class='format'>
                            <label>Number</label>
                            <input type="number" placeholder="Number">
                        </div>
                    </div>

                    <div class="form-kanan">
                        <div class='format'>
                            <div class="d-flex" style="gap: 5px" >
                                <label>Label with Information</label>
                                <svg v-popover="'Berisi informasi pendukung dari form tsb'" xmlns="http://www.w3.org/2000/svg" style="color: #00387F; cursor: pointer; margin-bottom: 3px" width="18" height="18" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                                </svg>
                            </div>
                            <select>
                                <option value="0">Information</option>
                            </select>
                        </div>
                        <div class='format'>
                            <label>textarea</label>
                            <textarea rows="4" placeholder="textarea"></textarea>
                        </div>
                    </div>
                    
                </div>
                <div class="d-flex justify-content-end mt-1 mb-2">
                    <button class="button-simpan">Simpan Soal Ujian</button>
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
                title: 'Forms',
                subTitle: 'Menampilkan beberapa form dan layout'
            }
        }
    }

</script>
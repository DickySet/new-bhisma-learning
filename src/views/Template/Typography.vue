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
                <div class="d-flex mt-2 mb-2" style="gap: 20px">
                    <div style="width: 15%">
                        <label>Header 1</label>
                    </div>
                    <div style="width: 85%">
                        <h1>Typography Header 1</h1>
                    </div>
                </div>
                <div class="d-flex mb-2" style="gap: 20px">
                    <div style="width: 15%">
                        <label>Header 2</label>
                    </div>
                    <div style="width: 85%">
                        <h2>Typography Header 2</h2>
                    </div>
                </div>
                <div class="d-flex mb-2" style="gap: 20px">
                    <div style="width: 15%">
                        <label>Header 3</label>
                    </div>
                    <div style="width: 85%">
                        <h3>Typography Header 3</h3>
                    </div>
                </div>
                <div class="d-flex mb-2" style="gap: 20px">
                    <div style="width: 15%">
                        <label>Header 4</label>
                    </div>
                    <div style="width: 85%">
                        <h4>Typography Header 4</h4>
                    </div>
                </div>
                <div class="d-flex mb-2" style="gap: 20px">
                    <div style="width: 15%">
                        <label>Header 5</label>
                    </div>
                    <div style="width: 85%">
                        <h5>Typography Header 5</h5>
                    </div>
                </div>
                <div class="d-flex mb-2" style="gap: 20px">
                    <div style="width: 15%">
                        <label>Header 6</label>
                    </div>
                    <div style="width: 85%">
                        <h6>Typography Header 6</h6>
                    </div>
                </div>
                <div class="d-flex" style="gap: 20px">
                    <div style="width: 15%">
                        <label>Paragraph</label>
                    </div>
                    <div style="width: 85%">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
                    </div>
                </div>
                <div class="d-flex" style="gap: 20px">
                    <div style="width: 15%">
                        <label>Label</label>
                    </div>
                    <div style="width: 85%">
                        <label>Lorem ipsum dolor sit amet</label>
                    </div>
                </div>
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
                title: 'Typography',
                subTitle: 'Menampilkan beberapa jenis dan ukuran typography'
            }
        }
    }

</script>
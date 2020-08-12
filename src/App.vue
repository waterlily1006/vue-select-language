<template>
    <div id="app">
        <VueSelectLanguage
            v-model="selectLang"
            :langs="langs"
            :is-selected-name-show="true"
            :is-icon-show="false"
            :is-arrow-show="false"
            :is-squared="true"
        >
        </VueSelectLanguage>
    </div>
</template>

<script>
import VueSelectLanguage from './VueSelectLanguage.vue'

export default {
    name: "App",
    components: {
        VueSelectLanguage
    },
    data() {
        return {
            selectLang: "zh",
            langs: [
                {
                    name: "English",
                    code: "en",
                    iso_code: "us"
                },
                {
                    name: "简体中文",
                    code: "zh",
                    iso_code: "cn"
                },
                {
                    name: "japanese",
                    code: "ja",
                    iso_code: "jp"
                }
            ]
        };
    },
    watch: {
        // selectLang: (newval, oldval) => {
        //     console.log(newval, oldval);
        // }
    }
};
</script>

<style scoped></style>

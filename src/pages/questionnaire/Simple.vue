<template>
    <div id="pdfDom" ref="pdfDom">
        <div>
            <h3>勞工一般體格及健康檢查紀錄</h3>
        </div>
        <!-- <div>
            <h5>一、基本資料</h5>
            <ol>
                <li>姓名：{{answer.name}}</li>
                <li>性別：{{answer.SEX}}</li>
                <li>身分證字號：{{answer.id}}</li>
                <li>出生日期：{{answer.BIRTH}}</li>
                <li>受雇日期：{{answer.HIRED_DATE}}</li>
                <li>檢查日期：{{answer.EDATE}}</li>
                <li>聯絡電話：{{answer.TELMO}}</li>
            </ol>
        </div> -->
        <div class="row">
            <div class="col-sm-5" v-for="object in ques" :key="object">
                <h5>{{ object[0].name_tw }}</h5>
                <ol>
                    <div class="move" v-for="(item, index) in object" :key="index">
                        <li v-if="index != 0">
                            {{ item.name_tw + ': '+ item.answer }}
                        </li>
                    </div>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
import answerSimple from '../../data/answerSimple.json'
import quesSimple from '../../data/quesSimple.1.json'
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

export default {
    data () {
        return {
            htmlTitle: 'PDF測試',
            answer: {},
            ques: {}
        }
    },
    created () {
        this.answer = answerSimple[this.$route.query.q_id][this.$route.query.a_id]
        console.log('Loading', this.answer)
        this.ques = quesSimple
        /* console.log('Loaded', this.ques)
        this.matchQA() */
    },
    mounted() {
        if(this.$route.query.closed == "0"){
            this.downloadPdf()
        }
    },
    methods: {
        downloadPdf() {
            this.$getPdf(this.answer)
        },
        matchQA() {
            this.ques.page1.forEach(q => {
                for(var ans in this.answer){
                    console.log('TEST', ans)
                    if(ans.key == q.id){
                        this.$set(q, 'answer', 'X')
                    }
                }
            });
            console.log('TEST_Q', quesSimple.page1)
        }
    }
}
</script>

<style>
#pdfDom {
    margin-left: 20px;
    margin-bottom: 20px;
}

.move {
    width: 200px;
}
</style>


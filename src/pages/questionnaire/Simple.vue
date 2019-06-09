<template>
    <div id="pdfDom" ref="pdfDom">
        <div>
            <h3>勞工一般體格及健康檢查紀錄</h3>
        </div>
        <div>
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
        </div>
    </div>
</template>

<script>
import answerSimple from '../../data/answerSimple.json'
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

export default {
    data () {
        return {
            htmlTitle: 'PDF測試',
            answer: answerSimple[this.$route.query.q_id][this.$route.query.a_id]
        }
    },
    created () {
        console.log('Loading', document.body)
        
    },
    mounted() {
        console.log('Loaded', document.body)
        if(this.$route.query.closed == "0"){
            this.downloadPdf()
        }
    },
    methods: {
        downloadPdf() {
            this.$getPdf(this.answer)
        }
    }
}
</script>

<style>

</style>


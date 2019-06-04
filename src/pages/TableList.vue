<template>
  <div class="row">
    <div class="col-xl-4 col-lg-5 col-md-6">
      <ques-table type="hover"
                  :data="table.data"
                  :columns="table.columns">
      </ques-table>
    </div>
    <div class="col-xl-8 col-lg-7 col-md-6">
      <div class="row" style="position: relative; left: 15px">
        <input type="text" class="form-control col-4" v-model="keyword">
        <input type="button" class="btn btn-default col-2" style="position: relative; left: 5px" value="Search" @click="searchQues">
      </div>
      <card class="card" style="position: relative; top: 15px">
        <div class="table-full-width table-responsive">
          <paper-table type="hover" :title="table2.title" :sub-title="table2.subTitle" :data="table2.data"
                       :columns="table2.columns">
          </paper-table>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import { PaperTable } from "@/components";
import QuesTable from "@/components/QuesTable.vue";
import answerSimple from '../data/answerSimple.json'

const quesColumns = ["ID", "Name"];
const quesData = [
  {
    id: 1,
    name: "勞工問卷",
    file: "AAA"
  },
  {
    id: 2,
    name: "健檢問卷",
    file: "BBB"
  },
  {
    id: 3,
    name: "心理健康問卷",
    file: "CCC"
  },
];
const tableColumns = ["Num", "Name", "ID", " ", " "];
const tableData = answerSimple;

export default {
  components: {
    PaperTable,
    QuesTable
  },
  data() {
    return {
      table: {
        columns: [...quesColumns],
        data: [...quesData]
      },
      table2: {
        columns: [...tableColumns],
        data: [...tableData]
      },
      keyword: '',
    };
  },
  computed: {
    ques() {
      let kw = this.keyword.toUpperCase()
      return this.answerSimple.filter(item => item.name.toUpperCase().includes(kw))
    }
  },
  methods: {
    searchQues() {
    },
  }
};
</script>
<style>
</style>

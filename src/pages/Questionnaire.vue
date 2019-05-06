<template>
    <div class="row">
      <div class="col-xl-4 col-lg-5 col-md-6">
        <ques-table type="hover"
                    :data="table.data"
                    :columns="table.columns">
        </ques-table>
      </div>
      <div class="col-xl-8 col-lg-7 col-md-6">
        <edit-ques-form>

        </edit-ques-form>
      </div>
    </div>
</template>
<script>
import EditQuesForm from "./QuesProfile/EditQuesForm.vue";
import QuesTable from "@/components/QuesTable.vue";

const tableColumns = ["ID", "Name"];
const tableData = [
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

export default {
  components: {
    QuesTable,
    EditQuesForm
  },
  data() {
    return {
      table: {
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  }
};
</script>
<style>
</style>

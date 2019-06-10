<template>
<div>
  <p style="position: relative; left: 15px;">{{ques.name}}</p>
  <table class="table" :class="tableClass">
    <thead>
    <slot name="columns">
      <th v-for="column in columns" :key="column">{{column}}</th>
    </slot>
    </thead>
    <tbody>
    <tr v-for="(item, index) in data[id]" :key="index">
      <slot :row="item">
        <td v-for="(column, index) in columns"
            :key="index"
            v-if="hasValue(item, column)">
          {{itemValue(item, column)}}
        </td>
        <td>
          <button type="button" class="btn btn-secondary" @click="getPage(index)">Read</button>
          <button type="button" class="btn btn-secondary" style="position: relative; left: 5px;" @click="callGetPdf(index)">PDF</button>
        </td>
      </slot>
    </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import jsPDF from 'jspdf';
import html2Canvas from 'html2canvas';

export default {
  name: 'paper-table',
  props: {
    columns: Array,
    data: Array,
    type: {
      type: String, // striped | hover
      default: "striped"
    },
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      answer: this.data,
      ques: {
        id: 1,
        name: "勞工問卷",
        file: "AAA"
      },
      id: 0
    }
  },
  created() {
    this.changeTable();
  },
  computed: {
    tableClass() {
      return `table-${this.type}`;
    }
  },
  mounted() {
    EventBus.$on('test', (get) => {
      this.ques = get
      this.changeTable();
      this.$forceUpdate();
    })
  },
  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== "undefined";
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    },
    changeTable() {
      this.id = this.ques.id - 1;
    },
    getPage(i) {
      console.log("MEOW", this.answer[i])
      const { href } = this.$router.resolve({
        name: 'table-list-answer',
        query: {
          num: this.answer[this.ques.id-1][i].num,
          q_id: this.ques.id-1,
          a_id: i
        }
      })
      window.open(href, '_blank', 'toolbar=yes, width=800, height=700')
    },
    callGetPdf(i) {
      console.log(this.answer[this.ques.id-1][i].num)
      const { href } = this.$router.resolve({
        name: 'table-list-answer',
        query: {
          num: this.answer[this.ques.id-1][i].num,
          q_id: this.ques.id-1,
          a_id: i,
          closed: 0
        }
      })
      window.open(href, '_blank', 'toolbar=yes, width=800, height=700')
    }
  }
};
</script>
<style>
</style>

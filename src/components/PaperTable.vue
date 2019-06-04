<template>
  <table class="table" :class="tableClass">
    <thead>
    <slot name="columns">
      <th v-for="column in columns" :key="column">{{column}}</th>
    </slot>
    </thead>
    <tbody>
    <tr v-for="(item, index) in data" :key="index">
      <slot :row="item">
        <td v-for="(column, index) in columns"
            :key="index"
            v-if="hasValue(item, column)">
          {{itemValue(item, column)}}
        </td>
        <td>
          <button type="button" class="btn btn-secondary" @click="getPage(index)">Read</button>
          <button type="button" class="btn btn-secondary" style="position: relative; left: 5px;" @click="getPDF(index)">PDF</button>
        </td>
      </slot>
    </tr>
    </tbody>
  </table>
</template>
<script>

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
      answer: this.data
    }
  },
  computed: {
    tableClass() {
      return `table-${this.type}`;
    }
  },
  mounted() {
    EventBus.$on('test', (reset) => {
      console.log(reset)
    })
  },
  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== "undefined";
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    },
    getPage(i) {
      const { href } = this.$router.resolve({
        name: 'table-list-answer',
        query: {
          num: this.answer[i].num
        }
      })
      window.open(href, '_blank', 'toolbar=yes, width=500, height=300')
    },
    getPDF(i) {
      console.log(this.answer[i].id)
      // alert(answerSimple.id)
    }
  }
};
</script>
<style>
</style>

<template>
  <card class="card" title="Edit Profile">
    <div>
      <vue-editor v-model="content"></vue-editor>
    </div>
    <button class="btn" @click="saveEdit()">Save</button>
  </card>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor
  },
  data() {
    return {
      content: "Some initial content"
    }
  },
  created() {
    this.loadCfg()
  },
  methods: {
    saveEdit() {
      console.log(this.content)
    },
    loadCfg() {
      var fso, ts, s
      var ForReading = 1

      fso = new ActiveXObject('Scripting.FileSystemObject') 
      ts = fso.OpenTextFile('./testfile.txt', ForReading) 
      s = ts.ReadLine()
      this.content = s
    }
  }
}
</script>

<style>

</style>


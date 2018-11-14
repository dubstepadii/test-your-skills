<template>
<div>
   <div v-if="results.length > 0">
      <div v-for="item in results" :key="item.userid">
        <div v-if="item == ''">
        <div class="owner">
          <div>Name: {{item.owner.name}}</div>
          <div>Surname: {{item.owner.surname}}</div>
        </div>
      </div>
      </div>
    </div>
    <div v-else>
      <div>Nothing here...</div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'vehicle-list',
  data() {
    return {
      results: [],
    };
  },
  mounted() {
    const self = this;
    axios.get('http://mobi.connectedcar360.net/api/?op=list')
      .then((response) => {
        self.results = response.data.data;
      });
  },
};
</script>

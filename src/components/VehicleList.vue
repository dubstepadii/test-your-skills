<template>
<div>
    <div v-if="results.length > 0">
      <div v-for="item in results" :key="item.userid">
        <div class="owner"> 
          Name: {{item.owner.name}}
        </div>
      </div>
    </div>
    <div v-else>
      <div>SHIIIIITTTT!!!</div>
    </div>
</div>
</template>

<script>
export default {
  name: 'vehicle-list',
};
</script>

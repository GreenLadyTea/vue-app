<template>
  <div class="container">
    <UserCard v-for="user in users" :user="user" :key="user" />
  </div>
  <button class="btn-load-more" @click="getUsers">Ещё 10</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserCard from "@/components/UserCard.vue";

export default defineComponent({
  name: "UserSheet",
  components: {
    UserCard
  },
  data() {
    return {
      users: []
    };
  },
  async mounted() {
    await this.getUsers();
  },
  methods: {
    async getUsers() {
      const res = await fetch("https://randomuser.me/api/?results=25");
      const json = await res.json();
      this.users = await json.results;
    }
  }
});
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
  gap: 50px 10px;
  grid-template-areas:
    ". . . . ."
    ". . . . ."
    ". . . . ."
    ". . . . ."
    ". . . . .";
}
.btn-load-more {
  margin: 50px;
}
</style>

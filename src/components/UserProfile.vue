<template>
  <div>
    <img alt="Avatar" :src="user.picture.large" />
    <div>{{ user.login.username }}</div>
    <div>{{ user.name.first }} {{ user.name.last}}</div>
    <div>{{ user.location.country }}, {{ user.location.state }}, <br />
      {{ user.location.city }}, {{ user.location.street.name }},
      {{ user.location.street.number }}, <br /> {{ user.location.postcode }}
    </div>
    <div>{{ user.email }}</div>
    <div>{{ user.phone }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserProfile",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
});
</script>

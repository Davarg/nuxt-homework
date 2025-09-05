<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

const route = useRoute()
const id = ref(route.params.id)
</script>

<template>
    <div>
        Edit {{ id }}
    </div>
</template>
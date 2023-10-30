<template>
  <div class="row justify-between q-pt-sm">
    <input type="file" ref="fileInput" @change="handleFileChange" />
    <button @click="uploadFile">Upload</button>
  </div>
</template>

<script>
import { ref } from "vue";
// import { useDataSourceStore } from "src/stores/datasource-store";
// import { useAuthStore } from "src/stores/auth-store";

export default {
  setup() {
    const file = ref(null);
    // const dataStore = useDataSourceStore();
    // const authStore = useAuthStore();

    const handleFileChange = (event) => {
      // Handle file changes here if needed
      file.value = event.target.files[0];
      console.log("filechanged");
    };

    async function uploadFile() {
      console.log("uplaoded");
      // const formData = new FormData();
      // formData.append("attachment", file.value);
      // formData.append("org_id", authStore.organizationId);
      // try {
      //   await dataStore.addUploadFile(formData);
      //   fileInput.value = null;
      // } catch (error) {
      //   console.error("Error uploading file:", error.message);
      // }
    }

    return {
      handleFileChange,
      uploadFile,
    };
  },
};
</script>

import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from "src/boot/axios";

export const useCrudStore = defineStore("CrudStore", () => {
  const users = ref(undefined);
  const editUserId = ref(undefined);

  async function addUser(payload) {
    try {
      const id = editUserId.value;
      const response = await (id
        ? api.put(`users/${id}`, payload)
        : api.post("users", payload));
      console.log("success", response);
      await fetchUsers();
    } catch (err) {
      console.log("error", err);
    }
  }

  async function deleteUser(payload) {
    try {
      const id = payload.id;
      const response = await api.delete(`users/${id}`);
      console.log("success", response);
      await fetchUsers();
    } catch (err) {
      console.log("error", err);
    }
  }
  async function fetchUsers() {
    try {
      const response = await api.get("users");
      users.value = response.data;
    } catch (err) {
      console.log(err);
    }
  }
  // async function addFile(payload) {
  //   try {
  //     let response = {};
  //     const { dt } = await api.post("/upload-files/", payload, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     response = dt;
  //     fetchFiles();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  return {
    addUser,
    fetchUsers,
    users,
    editUserId,
    deleteUser,
  };
});

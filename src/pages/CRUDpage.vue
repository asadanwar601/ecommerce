<template>
  <div class="column justify-center q-ma-xl q-gutter-y-md">
    <div class="text-h5">User Form :</div>
    <q-input v-model="name" placeholder="Name" outlined />
    <q-input v-model="email" placeholder="Email" type="email" outlined />
    <q-input
      v-if="!crudStore.editUserId"
      v-model="password"
      placeholder="password"
      type="password"
      outlined
    />
    <q-input
      v-if="!crudStore.editUserId"
      v-model="file"
      placeholder="File"
      outlined
    />
    <!-- <q-input
      @update:model-value="
        (val) => {
          file = val[0];
        }
      "
      filled
      type="file"
      hint="Native file"
    /> -->

    <q-btn
      :label="crudStore.editUserId ? 'Update User' : 'Add User'"
      @click="addUser"
      color="primary"
    />
    <q-btn v-if="crudStore.editUserId" label="cancel" @click="cancelEdit" />

    <!-- <FileUpload /> -->
  </div>

  <!-- <pre> {{ crudStore.users }}</pre> -->
  <q-separator />
  <div class="text-h5 text-center q-my-xl">User List :</div>
  <div class="row justify-center q-gutter-md">
    <q-card
      class="col-md-3 col-lg-2 col-xl-2 col-sm-4 col-xs-6 text-center q-pa-md"
      v-for="user in crudStore.users"
      :key="user.id"
    >
      <q-img :src="user.avatar" style="width: 150px; height: 150px" />
      <q-card-section>
        <div class="text-h6">{{ user.name }}</div>
        <div class="text-subtitle2">{{ user.email }}</div>
        <div class="text-subtitle2">{{ user.role }}</div>
      </q-card-section>

      <q-btn
        label="Edit"
        color="secondary"
        @click="editUser(user)"
        class="q-mb-sm full-width"
      />
      <q-btn
        label="Delete"
        color="red"
        class="full-width"
        @click="deleteUser(user)"
      />
    </q-card>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
// import FileUpload from "./component/FileUpload.vue";
import { useCrudStore } from "src/stores/crud-store";

export default {
  // components: { FileUpload },
  setup() {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const file = ref("");
    const crudStore = useCrudStore();
    const id = ref(undefined);

    async function addUser() {
      if (!crudStore.editUserId) {
        const payload = {
          name: name.value,
          email: email.value,
          password: password.value,
          avatar: file.value,
        };
        await crudStore.addUser(payload);
      } else {
        const payload = {
          name: name.value,
          email: email.value,
        };
        await crudStore.addUser(payload);
      }
      await cancelEdit();
    }

    function cancelEdit() {
      name.value = "";
      email.value = "";
      password.value = "";
      file.value = "";
      crudStore.editUserId = undefined;
    }

    function editUser(data) {
      name.value = data.name;
      email.value = data.email;
      crudStore.editUserId = data.id;
    }

    async function deleteUser(data) {
      const payload = {
        id: data.id,
      };
      await crudStore.deleteUser(payload);
    }
    onMounted(() => {
      crudStore.fetchUsers();
    });

    return {
      name,
      email,
      password,
      addUser,
      crudStore,
      file,
      editUser,
      cancelEdit,
      deleteUser,
    };
  },
};
</script>

<style lang="scss" scoped></style>

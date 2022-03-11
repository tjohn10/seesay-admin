<template>
  <div>
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
          <v-card>
            <v-toolbar card color="white">
              <v-text-field
                flat
                solo
                prepend-icon="search"
                placeholder="Type something"
                v-model="search"
                hide-details
                class="hidden-sm-and-down"
              ></v-text-field>
              <v-btn icon>
                <v-icon>filter_list</v-icon>
              </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-data-table
                :headers="headers"
                :search="search"
                :items="users"
                :rows-per-page-items="[10,25,50,{text:'All','value':-1}]"
                class="elevation-1"
                item-key="name"
                select-all
                v-model="selected"
              >
                <template slot="items" slot-scope="props">
                  <td>
                    <v-checkbox
                      primary
                      hide-details
                      v-model="props.selected"
                    ></v-checkbox>
                  </td>
                  <td>{{ props.item.firstName }}</td>
                  <td>{{ props.item.lastName }}</td>
                  <td>{{ props.item.email }}</td>
                  <td>{{ props.item.phone }}</td>
                  <td>{{ props.item.role }}</td>
                  <td>
                    <v-btn depressed outline icon fab dark color="primary" small>
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn depressed outline icon fab dark color="pink" small>
                      <v-icon>delete</v-icon>
                    </v-btn>
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "user",
  layout: 'dashboard',
  data() {
    return {
      users: [],
      selected: [],
      headers: [
        {
          sortable: true,
          text: 'Name',
          value: 'firstName'
        },
        {
          sortable: true,
          text: 'Name',
          value: 'lastName'
        },
        {
          sortable: true,
          text: 'Email',
          value: 'email'
        },
        {
          sortable: false,
          text: 'Mobile Number',
          value: 'phone'
        },
        {
          sortable: false,
          text: 'User Type',
          value: 'role'
        },
        {
          sortable: false,
          text: 'Actions',
          value: 'actions'
        }
      ],
      search: ''
    }
  },
  // async mounted() {
  //   try{
  //     const res = await axios.get('https://seesay-backend.herokuapp.com/api/users').then(
  //       res => {
  //         this.users = res.data
  //       })
  //
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  async asyncData() {
    let {data} = await axios.get('https://seesay-backend.herokuapp.com/api/users')
    return {users: data.users} //or however your 'data' comes back. Try console.log(data) to see.
  }
}
</script>

<style scoped>

</style>

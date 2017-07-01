<template>
  <div>
    <div class="page-header">
      <h1 v-translate>MVC Demonstration (Vue.js & Firebase)</h1>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 v-translate>Add book</h3>
      </div>
      <div class="panel-body">
        <form id="form" class="form-inline" v-on:submit.prevent="addBook">
          <div class="form-group">
            <label for="bookTitle" v-translate>Title:</label>
            <input type="text" id="bookTitle" class="form-control" v-model="newBook.title">
          </div>
          <div class="form-group">
            <label for="bookAuthor" v-translate>Author:</label>
            <input type="text" id="bookAuthor" class="form-control" v-model="newBook.author">
          </div>
          <div class="form-group">
            <label for="bookCategory" v-translate>Category:</label>
            <input type="text" id="bookCategory" class="form-control" v-model="newBook.category">
          </div>
          <input type="submit" class="btn btn-primary" value="+">
        </form>
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 v-translate>Books list</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
          <tr>
            <th v-translate>Title</th>
            <th v-translate>Author</th>
            <th v-translate>Category</th>
            <th v-translate>Delete</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="book in books">
            <td>
              {{ book.title }}
            </td>
            <td>
              {{ book.author }}
            </td>
            <td>
              {{ book.category }}
            </td>
            <td>
              <span class="glyphicon glyphicon-trash" v-on:click="removeBook(book)"></span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase'

  let config = {
    apiKey: "AIzaSyDgxrqc66LMCFZAWrAOuXsKPlJ17dqzomQ",
    authDomain: "pwi-projekt-eaeab.firebaseapp.com",
    databaseURL: "https://pwi-projekt-eaeab.firebaseio.com",
    projectId: "pwi-projekt-eaeab",
    storageBucket: "pwi-projekt-eaeab.appspot.com",
    messagingSenderId: "669474965835"
  }

  let app = Firebase.initializeApp(config)
  let db = app.database()

  let booksRef = db.ref('books')

  export default {
    name: 'books',
    firebase: {
      books: booksRef
    },
    data() {
      return {
        newBook: {
          title: '',
          author: '',
          category: ''
        }
      }
    },
    methods: {
      addBook: function () {
        booksRef.push(this.newBook)
        this.newBook.title = ''
        this.newBook.author = ''
        this.newBook.category = ''
      },
      removeBook: function(book) {
        booksRef.child(book['.key']).remove()
      }
    }
  }
</script>

<style>

</style>

<template>
    <div>
        <h1 class="text-center text-muted">Buscador con Vuex</h1>
        <search-form></search-form>
        <hr>
        <Movie-list></Movie-list>
    </div>
</template>
<script>
    import SearchForm from './SearchForm';
    import MovieList from './MovieList';
    export default {
        components: {
            SearchForm,
            MovieList
        }
    }
</script>
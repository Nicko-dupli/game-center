<template>
    <ul class="games-list">
        <li v-for="item in list"
            :key="item.id"
            class="games-list__item">
            <game-card :link="item.link"
                       :name="item.name"
                       :genre="item.genre"
                       :description="item.description"
            />
        </li>
    </ul>
</template>

<script>
    import GameCard from './GameCard';

    export default {
        name: 'GamesList',
        components: {GameCard},
        props: {
            list: {
                type: Array,
                default: () => [],
            }
        }
    };
</script>

<style lang="scss">
    .games-list {
        display: flex;
        flex-wrap: wrap;
        margin: -10px -20px;
        list-style: none;
        padding: 0;

        &__item {
            margin: 10px 20px;
        }
    }
</style>

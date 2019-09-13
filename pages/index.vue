<template>
    <div>
        <div class="index">
            <section class="index_games-section">
                <div v-if="gamesList && gamesList.length" class="container">
                    <h1 class="index__title title">Игры</h1>

                    <div class="index__games-list">
                        <games-list :list="gamesList"/>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import GamesList from '../components/games/GamesList';

    export default {
        components: {GamesList},

        data() {
            return {
                gamesList: [
                    {
                        id: 1,
                        name: 'Мтс игра 1',
                        genre: 'Moba',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa debitis dicta dolor ducimus ',
                        link: '#',
                        img: ''
                    },
                    {
                        id: 2,
                        name: 'Мтс игра 2',
                        genre: 'НеMoba',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa debitis dicta dolor ducimus ',
                        link: '#',
                        img: ''
                    },
                    {
                        id: 3,
                        name: 'Мтс игра 3',
                        genre: 'НеMoba',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa debitis dicta dolor ducimus ',
                        link: '#',
                        img: ''
                    },
                    {
                        id: 4,
                        name: 'Мтс игра 4',
                        genre: 'НеMoba',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa debitis dicta dolor ducimus ',
                        link: '#',
                        img: ''
                    },
                    {
                        id: 5,
                        name: 'Мтс игра 5',
                        genre: 'НеMoba',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa debitis dicta dolor ducimus ',
                        link: '#',
                        img: ''
                    },
                    {
                        id: 6,
                        name: 'Мтс игра 6',
                        genre: 'НеMoba',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa debitis dicta dolor ducimus ',
                        link: '#',
                        img: ''
                    },
                ]
            };
        }
    };
</script>

<style lang="scss">
    .index {
        padding-top: 40px;
    }
</style>

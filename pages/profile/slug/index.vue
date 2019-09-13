<template>
    <div class="profile container">
        <section class="profile__header">
            <div class="profile__ava"></div>

            <div class="profile__header-info">
                <div class="profile__main-info">
                    <div class="profile__name">Тестовый боец</div>
                    <div class="profile__level">Уровень 1: Салага</div>
                </div>

                <div class="profile__achievements">
                    <h1 class="profile__title title">Последние достижения</h1>

                    <div class="profile__achievements-list">
                        <achievements-list :list="gamesList"/>
                    </div>
                </div>
            </div>
        </section>

        <section class="profile__favorites">
            <h1 class="profile__title title">Любимые игры</h1>

            <div class="profile__games-list">
                <games-list :list="gamesList"/>
            </div>
        </section>
    </div>
</template>

<script>
    import GamesList from '../../../components/games/GamesList';
    import AchievementsList from '../../../components/achievements/AchievementsList';

    export default {
        components: {AchievementsList, GamesList},
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
                ]
            };
        }
    };
</script>

<style lang="scss">
    .profile {
        padding-top: 40px;

        &__header {
            display: flex;
        }

        &__ava {
            width: 400px;
            height: 400px;
            margin-right: 80px;
            border-radius: 10px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: 50%;
            background-image: url(~assets/images/boy.svg);
        }

        &__name {
            font-size: 32px;
            margin-bottom: .45em;
        }

        &__favorites {
            margin-top: 40px;
        }

        &__achievements {
            margin-top: 40px;
        }
    }
</style>

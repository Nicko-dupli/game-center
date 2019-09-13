<template>
    <div class="game-card">
        <n-link :to="link"
                class="game-card__link"
                target="_blank">
            <div v-lazy:background-image="'https://games.mail.ru/pre_240x145_crop/pic/play/game2/picture/2019/03/DarkStar1_630.jpg'"
                 class="game-card__image">
            </div>

            <div class="game-card__info">
                <div v-if="name || genre"
                     class="game-card__main">
                    <div v-if="name" class="game-card__name">{{ name }}</div>

                    <div v-if="genre" class="game-card__genre">{{ genre }}</div>
                </div>

                <div v-if="description"
                     class="game-card__desc">
                    {{ description }}
                </div>

                <div class="game-card__action button">
                    Играть
                </div>
            </div>
        </n-link>
    </div>
</template>

<script>
    export default {
        name: 'GameCard',

        props: {
            link: {
                type: [String, Object]
            },
            name: {
                type: String
            },
            genre: {
                type: String
            },
            description: {
                type: String
            }
        }
    };
</script>

<style lang="scss">
    .game-card {
        $block: &;
        position: relative;
        display: block;
        width: 240px;
        height: 240px;
        color: #333;
        background-color: #fff;
        border-radius: 4px;
        -webkit-box-shadow: 0 1px 5px rgba(#000, .11);
        box-shadow: 0 1px 5px rgba(#000, .11);
        overflow: hidden;

        &:hover {

            #{$block}__link {
                transform: translateY(-145px);
            }
        }

        &__link {
            display: block;
            height: 100%;
            transition: transform .3s ease;
        }

        &__image {
            width: 100%;
            padding-top: 60.42%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50%;
        }

        &__info {
            position: relative;
            padding: 12px 14px 14px;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        &__main {
            height: 82px;
            flex: 1 0 82px;
            display: flex;
            flex-direction: column;
        }

        &__name {
            vertical-align: top;
            margin-bottom: 5px;
            max-width: 100%;
            max-height: 42px;
            overflow: hidden;
            font-size: 16px;
            line-height: 20px;
            text-overflow: ellipsis;
        }

        &__genre {
            margin-bottom: 14px;
            width: 100%;
            font-size: 13px;
            line-height: 1.62;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #979797;
        }

        &__desc {
            margin-bottom: 20px;
            height: 100%;
            font-size: 12px;
            line-height: 16px;
            overflow: hidden;
        }
    }
</style>

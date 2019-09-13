<template>
    <div class="header-content">
        <div class="header-content__container container">
            <n-link to="/"
                    class="header-content__logo">
                Игры МТС
            </n-link>

            <ul class="header-content__sections">
                <li v-for="link in filteredLinks"
                    :key="link.id"
                    class="header-content__section">
                    <n-link :to="link.url"
                            class="header-content__section-link">
                        {{ link.name }}
                    </n-link>
                </li>
            </ul>

            <div class="header-content__profile">
                <component :is="isUserAuth ? 'nuxt-link' : 'div'"
                           :to="{name: 'profile-slug', params: {slug: 'test'}}"
                           class="header-content__profile-text"
                           @click="openAuthModal">
                    {{ !isUserAuth ? 'Войти' : 'Профиль' }}
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'HeaderContent',

        data() {
            return {
                isAuth: false,
                links: [
                    {
                        id: 1,
                        name: 'Раздел 1',
                        url: '/#',
                    },
                    {
                        name: 'Раздел 2',
                        id: 2,
                        url: '/#',
                    },
                    {
                        name: 'Раздел 3',
                        id: 3,
                        url: '/#',
                    },
                ]
            };
        },

        computed: {
            ...mapState({
                isUserAuth: state => state.isUserAuth,
            }),

            filteredLinks() {
                if (!this.links?.length) return [];
                return this.links.filter(link => !!link?.url && !!link?.name);
            },
        },

        methods: {
            openAuthModal() {
                if (this.isUserAuth) return;

                this.$modal.open('AuthModal');
            }
        }
    };
</script>

<style lang="scss">
    .header-content {
        $block: &;
        background: red;

        &__container {
            display: flex;
            align-items: center;
            height: $header-height;
        }

        &__logo {
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            height: 100%;
        }

        &__sections {
            display: flex;
            list-style: none;
            height: 100%;
            margin: 0 0 0 10px;
            padding: 0;
        }

        &__section-link {
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            height: 100%;
            padding: 0 20px;
            transition: background-color .3s ease;

            &:hover,
            &:focus {
                background-color: rgba(darken($c-main, 10), .4);
            }

            &--active {
                background-color: darken($c-main, 10);
            }
        }

        &__profile {
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            height: 100%;
            padding: 0 20px;
            margin-left: auto;
            cursor: pointer;
            transition: background-color .3s ease;

            &:hover,
            &:focus {
                background-color: rgba(darken($c-main, 10), .4);
            }
        }

        &__profile-text {
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            height: 100%;
        }
    }
</style>

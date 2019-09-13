<template>
    <div class="auth-modal">
        <form class="auth-modal__form"
              @submit.prevent="onFormSubmit">
            <div class="auth-modal__form-title">
                Войдите, чтобы начать играть
            </div>

            <div class="auth-modal__form-content">
                <div class="auth-modal__form-field">
                    <form-cell label="Имя" name="name" type="text" required/>
                </div>

                <div class="auth-modal__form-field">
                    <form-cell label="Пароль" name="password" type="password" required/>
                </div>

                <button class="auth-modal__submit button"
                        type="submit">
                    Войти
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';

    import FormCell from '../../ui/form/FormCell';

    export default {
        name: 'AuthModal',
        components: {FormCell},

        methods: {
            ...mapMutations({
                changeAuthState: 'CHANGE_USER_AUTH'
            }),

            onFormSubmit(e) {
                e.preventDefault();

                this.onSuccess();
            },

            onSuccess() {
                this.changeAuthState(true);
                this.$modal.close();
            }
        }
    };
</script>

<style lang="scss">
    .auth-modal {
        max-width: 320px;
        padding: 36px 32px;
        border-radius: 4px;
        background-color: #fff;

        &__form-title {
            font-size: 20px;
            text-align: center;
            line-height: 1.4;
            opacity: .5;
        }

        &__form-content,
        &__form-field {

            &:not(:first-child) {
                margin-top: 16px;
            }
        }

        &__submit {
            display: block;
            width: 100%;
            margin: 32px auto 0;
        }
    }
</style>

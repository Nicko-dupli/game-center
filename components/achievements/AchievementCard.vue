<template>
    <div class="achievement-card">
        <div class="achievement-card__name">Название достижение</div>

        <div class="achievement-card__desc">
            Очень длинное название достижения. Тут описано какой ценой игрок заполучил данный трофей
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AchievementCard'
    };
</script>

<style lang="scss">
    .achievement-card {
        $block: &;
        position: relative;
        display: block;
        width: 240px;
        height: 180px;
        padding: 15px 24px;
        border-radius: 4px;
        background-color: $c-main;
        box-shadow: 0 1px 5px rgba(#000, .11);
        color: #fff;

        &__name {
            font-size: 18px;
            line-height: 1.4;
        }

        &__desc {
            font-size: 14px;
            line-height: 1.6;

            &:not(:first-child) {
                margin-top: 1em;
            }
        }
    }
</style>

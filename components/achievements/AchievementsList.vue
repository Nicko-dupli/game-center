<template>
    <ul class="achievements-list">
        <li class="achievements-list__item">
            <achievement-card/>
        </li>

        <li class="achievements-list__item">
            <achievement-card/>
        </li>

        <li class="achievements-list__item">
            <achievement-card/>
        </li>

        <li class="achievements-list__item">
            <achievement-card/>
        </li>
    </ul>
</template>

<script>
    import AchievementCard from './AchievementCard';

    export default {
        name: 'AchievementsList',
        components: {AchievementCard}
    };
</script>

<style lang="scss">
    .achievements-list {
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

<template>
    <div class="register">
        <h2>账号注册</h2>
        <!-- <a href="http://180.101.78.174:81/">
            点击注册
        </a> -->
        <iframe src="http://180.101.78.174:81/zc/index.php" frameborder="0"></iframe>
    </div>
</template>

<script>
export default {
    name: 'Register'
}
</script>

<style lang="scss" scoped>
.register {
    h2 {
        line-height: 60px;
    }
    iframe {
        width: 100%;
        height: 380px;
    }
}
</style>

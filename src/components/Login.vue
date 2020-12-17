<template>
    <div class="login">
        <h2>Log in to Trello</h2>
        <form @submit.prevent="onSubmit">
            <div>
                <label for="email">Email</label>
                <input class="form-control" type="text" name="email" v-model="email" autofocus />
            </div>
            <div>
                <label for="password">Passwrod</label>
                <input class="form-control" type="password" v-model="password" />
            </div>
            <button
                class="btn"
                :class="{ 'btn-success': !invalidForm }"
                type="submit"
                :disabled="invalidForm"
            >
                Log In
            </button>
        </form>
        <p class="error" v-if="error">{{ error }}</p>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            email: 'test@test.com',
            password: '123123',
            error: '',
            rPath: '',
        }
    },
    computed: {
        invalidForm() {
            return !this.email || !this.password
        },
    },
    methods: {
        ...mapActions(['FETCH_AUTH']),
        onSubmit() {
            this.FETCH_AUTH({ email: this.email, password: this.password })
                .then(() => {
                    this.$router.push(this.rPath)
                })
                .catch(e => {
                    this.error = e.data.error
                })
        },
    },
    created() {
        this.rPath = this.$route.query.rPath || '/'
    },
}
</script>

<style>
.login {
    width: 400px;
    margin: 0 auto;
}
.error {
    color: #f00;
}
</style>

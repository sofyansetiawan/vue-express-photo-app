import { createStore } from 'vuex'

import httpClient from '@/libs/httpClient'
import Session from '@/libs/Session'
import router from '@/router'

export const store = createStore({ 
    state(){
        return { 
            photos: [], 
            login: false,
            error: [],
            loading: true
        }
    },
    mutations: {
        setPhotos(state, payload){
            state.photos = payload
        },
        setLogin(state, payload){
            state.login = payload
        },
        setError(state, payload){
            state.error = payload
        },
        setLoading(state, payload){
            state.loading = payload
        }
    },
    actions: { 
        login (context, {email, password}) {
            httpClient.post('/users/login', { email, password })
            .then((data) => {
                Session.save(data.data.token, email)
                context.commit('setLogin', true)
                router.push({ name: 'Home' })
            })
            .catch((e) => {
                if (e.response.status === 400 || e.response.status === 500) {
                    context.commit('setError', e.response.data.errors)
                }
            })
        },
        register (context, { email, password }) {
            httpClient.post('/users/register', { email, password })
            .then(() => {
                router.push({ name: 'Home' })
            })
            .catch((e) => {
                if (e.response.status === 400 || e.response.status === 500) {
                    context.commit('setError', e.response.data.errors)
                }
            })
        },
        setAsLogin(context){
            context.commit('setLogin', true)
        },
        setAsLogout(context){
            context.commit('setLogin', false)
        },
        resetError(context){
            context.commit('setError', [])
        },
        fetchPhotos(context){ 
            context.commit('setLoading', true)
            httpClient.get('/photos', {
                headers: {
                    token: Session.getSession()
                }
            })
            .then((res) => {
                context.commit('setPhotos', res.data.Photos)
            })
            .catch((e) => {
                if (e.response.status === 400 || e.response.status === 500) {
                    context.commit('setError', e.response.data.errors)
                }
            })
            .finally(() => context.commit('setLoading', false))
        },
        logout(context){
            Session.destroy()
            context.commit('setLogin', false)
            router.replace({ name: 'Login' })
        }
        // createPhoto(context, id){
            
        // },
        // fetchPhotoById(context, id){
            
        // },
        // editPhoto(context, payload){
            
        // },
        // deletePhoto(context, payload){
            
        // }
    },
    getters: {
        
    }
})
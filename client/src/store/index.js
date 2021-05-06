import { createStore } from 'vuex'

import httpClient from '@/libs/httpClient'
import Session from '@/libs/Session'
import router from '@/router'

export const store = createStore({ 
    state(){
        return { 
            photos: [], 
            login: true,
            error: ""
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
                console.log("ERROR LOGIN")
                if (e.response.status === 400) {
                    context.commit('setError', e.response.data.errors[0])
                }
            })
        },
        register (context, { email, password }) {
            httpClient.post('/users/register', { email, password })
            .then((data) => {
                console.log(data)
                router.push({ name: 'Home' })
            })
            .catch((e) => {
                console.log("ERROR REGISTER")
                if (e.response.status === 400) {
                    context.commit('setError', e.response.data.errors[0])
                }
            })
        },
        setAsLogin(context){
            context.commit('setLogin', true)
        },
        setAsLogout(context){
            context.commit('setLogin', false)
        },
        fetchPhotos(context){ 
            httpClient.get('/photos', {
                headers: {
                    token: Session.getSession()
                }
            })
            .then((res) => {
                context.commit('setPhotos', res.data.Photos)
            })
            .catch((e) => console.log(e))
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
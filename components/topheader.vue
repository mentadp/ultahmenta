<template>
    <div >
           <!-- Header -->
            <nav class="w-full p-3 pt-4 flex justify-between flex-wrap fixed bg-theme_primary" >
                
                    <nuxt-link to="/home" class="mr-auto lg:mx-auto flex ">
                        <div class="w-6 h-6" >
                            <img src="/icon.jpeg" class="rounded-full" alt="avatar" >
                        </div>

                    </nuxt-link>

                    <nuxt-link to="/home" class="mx-auto  flex text-primary text-md items-start" >
                        <span class=" font-bold text-xl"> 
                            Menta
                        </span> 
                    </nuxt-link>

                    <div @click="$store.commit('toggleSetting')" class="text-primary cursor-pointer ml-auto lg:mx-auto relative flex">
                       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-menu-button-wide-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M14 7H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM2 6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H2z"/>
                        <path fill-rule="evenodd" d="M15 11H1v-1h14v1zM2 12.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0h-13zm1 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm9.927.427l.396.396a.25.25 0 0 0 .354 0l.396-.396A.25.25 0 0 0 13.396 2h-.792a.25.25 0 0 0-.177.427z"/>
                        </svg>
                    </div>
            </nav>
    </div>
</template>
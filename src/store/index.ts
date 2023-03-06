import {reactive} from "vue";

interface Store {
    user_id: string,
    spoiler_hide: boolean,
}

const store: Store = reactive({
    user_id: "",
    spoiler_hide: true,
})

export default store
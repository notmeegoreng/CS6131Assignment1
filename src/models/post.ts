import Profile from "@/models/profile";

export default class Post {
    poster: Profile
    content: string;
    constructor(poster: Profile, content: string) {
        this.poster = poster
        this.content = content
    }
}
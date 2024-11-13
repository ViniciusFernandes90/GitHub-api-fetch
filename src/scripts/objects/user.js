const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [], 
    followers: '',
    following: '',
    forks: '',
    stars: '',
    watchers: '',
    language: '',

    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.login;
        this.followers = gitHubUser.followers;
        this.following = gitHubUser.following;
    },

    setRepositories(repositories) { 
        this.repositories = repositories;
        this.forks = repositories.forks_count;
        this.stars = repositories.stars;
        this.watchers = repositories.watchers_count;
        this.language = repositories.language;
    }
};

export { user };
